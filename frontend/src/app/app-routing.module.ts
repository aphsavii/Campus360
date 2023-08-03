import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VrComponent } from './iframe/vr/vr.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'college', component: HomeComponent },
  { path: 'vr/:imgurl', component: VrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
