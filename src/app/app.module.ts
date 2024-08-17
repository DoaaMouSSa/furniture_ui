import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ClientsComponent } from './home/clients/clients.component';
import { FeaturesComponent } from './home/features/features.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { BrandsComponent } from './home/brands/brands.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NewestComponent } from './home/newest/newest.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './home/hero/hero.component';
import { ProductComponent } from './home/product/product.component';
import { ChooseUsComponent } from './home/choose-us/choose-us.component';
import { HelpComponent } from './home/help/help.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { HomeComponent } from './home/home/home.component';
import { ProductIndexComponent } from './adminPanel/product/product-index/product-index.component';
import { ProductCreateComponent } from './adminPanel/product/product-create/product-create.component';
import { ProductUpdateComponent } from './adminPanel/product/product-update/product-update.component';
import { SidebarComponent } from './adminPanel/shared/sidebar/sidebar.component';
import { FooterAdminComponent } from './adminPanel/shared/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './adminPanel/shared/header-admin/header-admin.component';
import { DashboardComponent } from './adminPanel/dashboard/dashboard.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { MainLayoutComponent } from './home/main-layout/main-layout.component';
import { TestimonialIndexComponent } from './adminPanel/testimonial/testimonial-index/testimonial-index.component';
import { TestimonialCreateComponent } from './adminPanel/testimonial/testimonial-create/testimonial-create.component';
import { TestimonialUpdateComponent } from './adminPanel/testimonial/testimonial-update/testimonial-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ClientsComponent,
    FeaturesComponent,
    ContactComponent,
    AboutComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NewestComponent,
    StatisticsComponent,
    HeroComponent,
    ProductComponent,
    ChooseUsComponent,
    HelpComponent,
    TestimonialsComponent,
    HomeComponent,
    ProductIndexComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    SidebarComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    DashboardComponent,
    NotFoundComponent,
    MainLayoutComponent,
    TestimonialIndexComponent,
    TestimonialCreateComponent,
    TestimonialUpdateComponent,
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
