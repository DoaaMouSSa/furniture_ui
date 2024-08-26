import { ProductCreateComponent } from './adminPanel/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ChooseUsComponent } from './home/choose-us/choose-us.component';
import { ContactComponent } from './home/contact/contact.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { LoginComponent } from './authentication/login/login.component';
import { MainLayoutComponent } from './home/main-layout/main-layout.component';
import { DashboardComponent } from './adminPanel/dashboard/dashboard.component';
import { ProductIndexComponent } from './adminPanel/product/product-index/product-index.component';
import { ProductUpdateComponent } from './adminPanel/product/product-update/product-update.component';
import { TestimonialIndexComponent } from './adminPanel/testimonial/testimonial-index/testimonial-index.component';
import { TestimonialCreateComponent } from './adminPanel/testimonial/testimonial-create/testimonial-create.component';
import { TestimonialUpdateComponent } from './adminPanel/testimonial/testimonial-update/testimonial-update.component';
import { RegisterComponent } from './authentication/register/register.component';
import {authenticationGuard} from './guard/authentication.guard';
import { ServiceIndexComponent } from './adminPanel/service/service-index/service-index.component';
import { ServiceUpdateComponent } from './adminPanel/service/service-update/service-update.component';
import { ServiceCreateComponent } from './adminPanel/service/service-create/service-create.component';
import { MessageIndexComponent } from './adminPanel/message/message-index/message-index.component';
import { ProductScreenComponent } from './home/product-screen/product-screen.component';
import { TestimonialScreenComponent } from './home/testimonial-screen/testimonial-screen.component';
import { ServiceScreenComponent } from './home/service-screen/service-screen.component';
import { ChooseScreenComponent } from './home/choose-screen/choose-screen.component';
import { HelpScreenComponent } from './home/help-screen/help-screen.component';
const routes: Routes = [
  { path: '', component:MainLayoutComponent,children:[
    { path: '', redirectTo: '/home',pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductScreenComponent },
    { path: 'testimonial', component: TestimonialScreenComponent },
    { path: 'service', component: ServiceScreenComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'choose', component: ChooseScreenComponent },
    { path: 'help', component: HelpScreenComponent },
  ] },
  { path: '', component:DashboardComponent,children:[
    { path: 'dashboard/product/index', component: ProductIndexComponent , canActivate: [authenticationGuard] },
    { path: 'dashboard/product/create', component: ProductCreateComponent, canActivate: [authenticationGuard] },
    { path: 'dashboard/product/update/:id', component: ProductUpdateComponent, canActivate: [authenticationGuard] },
    { path: 'dashboard/testimonial/index', component: TestimonialIndexComponent, canActivate: [authenticationGuard] },
    { path: 'dashboard/testimonial/create', component:  TestimonialCreateComponent, canActivate: [authenticationGuard]},
    { path: 'dashboard/testimonial/update/:id', component: TestimonialUpdateComponent , canActivate: [authenticationGuard]},
    { path: 'dashboard/service/index', component: ServiceIndexComponent, canActivate: [authenticationGuard] },
    { path: 'dashboard/service/create', component:  ServiceCreateComponent, canActivate: [authenticationGuard]},
    { path: 'dashboard/service/update/:id', component: ServiceUpdateComponent , canActivate: [authenticationGuard]},
    { path: 'dashboard/message/index', component: MessageIndexComponent, canActivate: [authenticationGuard] },
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
