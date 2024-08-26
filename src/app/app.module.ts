import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './home/contact/contact.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
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
import { ServiceIndexComponent } from './adminPanel/service/service-index/service-index.component';
import { ServiceCreateComponent } from './adminPanel/service/service-create/service-create.component';
import { ServiceUpdateComponent } from './adminPanel/service/service-update/service-update.component';
import { MessageIndexComponent } from './adminPanel/message/message-index/message-index.component';
import { ServiceComponent } from './home/service/service/service.component';
import { ProductScreenComponent } from './home/product-screen/product-screen.component';
import { TestimonialScreenComponent } from './home/testimonial-screen/testimonial-screen.component';
import { ServiceScreenComponent } from './home/service-screen/service-screen.component';
import { ChooseScreenComponent } from './home/choose-screen/choose-screen.component';
import { HelpScreenComponent } from './home/help-screen/help-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
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
    ServiceIndexComponent,
    ServiceCreateComponent,
    ServiceUpdateComponent,
    MessageIndexComponent,
    ServiceComponent,
    ProductScreenComponent,
    TestimonialScreenComponent,
    ServiceScreenComponent,
    ChooseScreenComponent,
    HelpScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
