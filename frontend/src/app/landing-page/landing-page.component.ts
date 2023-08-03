import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  searchTerm: string = '';
  searchResults: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  onInputChange(): void {
    this.loading = true;
    this.error = '';

    if (this.searchTerm.trim() === '') {
      this.searchResults = [];
      this.loading = false;
      return;
    }

    this.http.get<any[]>(`http://localhost:3000/api/search?term=${this.searchTerm}`).subscribe(
      (data) => {
        this.searchResults = data;
        this.loading = false;
        console.log(this.searchResults);

      },
      (error) => {
        console.error('Error fetching data:', error);
        this.error = 'An error occurred while fetching data.';
        this.loading = false;
      }
    );
  }
}
