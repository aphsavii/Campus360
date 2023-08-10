import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.css']
})
export class VrComponent {
  imgurl = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
   this.imgurl='../../assets/'+this.route.snapshot.params['imgurl'];
  }
}
