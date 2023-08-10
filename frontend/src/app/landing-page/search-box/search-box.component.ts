import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchTerm: string = '';
  searchResults: any[] = [];
  loading: boolean = false;
  error: string = '';
  link:string='/college/';
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

    this.http.get<any[]>(`http://localhost:3000/search?term=${this.searchTerm}`).subscribe(
      (data) => {
        this.searchResults = data;
        this.loading = false;
        // console.log(this.searchResults);
  }
    );
  }
}
