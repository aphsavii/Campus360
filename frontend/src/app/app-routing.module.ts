import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VrComponent } from './iframe/vr/vr.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBoxComponent } from './landing-page/search-box/search-box.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent,children:[
    {path:'',component:SearchBoxComponent},
    { path: 'college/:clg', component: HomeComponent },
  ] },
  { path: 'vr/:imgurl', component: VrComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
