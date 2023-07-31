import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerManagerComponent,
    CustomerComponent,
    OrderComponent,
    AboutComponent,
    LoginComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
