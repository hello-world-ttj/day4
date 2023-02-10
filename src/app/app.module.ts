import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DistrictComponent } from './pages/district/district.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HomeCardComponent } from './utils/home-card/home-card.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    DistrictComponent,
    NavbarComponent,
    SinglePageComponent,
    FooterComponent,
    HomeCardComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
