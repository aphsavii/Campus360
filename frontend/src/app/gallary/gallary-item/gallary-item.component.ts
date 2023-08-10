import { Component } from '@angular/core';
import { ChangeImageService } from 'src/app/shared/change-image.service';
@Component({
  selector: 'app-gallary-item',
  templateUrl: './gallary-item.component.html',
  styleUrls: ['./gallary-item.component.css']
})
export class GallaryItemComponent {
  constructor(private changeImageService: ChangeImageService) { }
  changeImage() {
    this.changeImageService.refreshData('IMG20230809191845.jpg');
    console.log('changeImage');
  }
}
