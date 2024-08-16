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
import { NavbarAdminComponent } from './adminPanel/navbar-admin/navbar-admin.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderDashboardComponent } from './adminPanel/header-dashboard/header-dashboard.component';
import { HeroComponent } from './home/hero/hero.component';
import { ProductComponent } from './home/product/product.component';
import { ChooseUsComponent } from './home/choose-us/choose-us.component';
import { HelpComponent } from './home/help/help.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { MainComponent } from './home/main/main.component';
import { HomeComponent } from './home/home/home.component';
import { ProductIndexComponent } from './adminPanel/product/product-index/product-index.component';
import { ProductCreateComponent } from './adminPanel/product/product-create/product-create.component';
import { ProductUpdateComponent } from './adminPanel/product/product-update/product-update.component';

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
    NavbarAdminComponent,
    StatisticsComponent,
    HeaderDashboardComponent,
    HeroComponent,
    ProductComponent,
    ChooseUsComponent,
    HelpComponent,
    TestimonialsComponent,
    MainComponent,
    HomeComponent,
    ProductIndexComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
