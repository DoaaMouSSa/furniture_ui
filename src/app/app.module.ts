import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideMenuComponent } from './adminPanel/side-menu/side-menu.component';
import { ClientsComponent } from './home/clients/clients.component';
import { FeaturesComponent } from './home/features/features.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { BrandsComponent } from './home/brands/brands.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NewestComponent } from './home/newest/newest.component';
import { ServicesComponent } from './home/services/services.component';
import { NavbarAdminComponent } from './adminPanel/navbar-admin/navbar-admin.component';
import { StatisticsComponent } from './home/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SideMenuComponent,
    ClientsComponent,
    FeaturesComponent,
    ContactComponent,
    AboutComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NewestComponent,
    ServicesComponent,
    NavbarAdminComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
