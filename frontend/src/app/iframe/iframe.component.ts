import { Component } from '@angular/core';
import { ChangeImageService } from 'src/app/shared/change-image.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent {
  imgurl = '';
  private subscription: Subscription | undefined;

  constructor(public sanitizer: DomSanitizer,private changeImageService: ChangeImageService) { }


  ngOnInit() {
    this.subscription = this.changeImageService.getData().subscribe(data => {
      this.imgurl = data;
      console.log(data);
    });
  }
}
