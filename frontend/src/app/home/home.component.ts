import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeImageService } from 'src/app/shared/change-image.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  college:string='';
  constructor(private route: ActivatedRoute,private changeImageService:ChangeImageService ) { }
  ngOnInit(): void { 
    this.college=''+this.route.snapshot.paramMap.get('clg');
    this.changeImageService.refreshData('IMG20230711113625.jpg');
  }
 
}
