import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.css']
})
export class VrComponent {
  imgurl = '../../assets/';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
   this.imgurl+=this.route.snapshot.params['imgurl'];
  }
}
