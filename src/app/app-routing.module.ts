import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "district", component: DistrictComponent },
  {path: "single", component:SinglePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
