import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { LocationComponent } from './location/location.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { NewUserComponent } from './new-user/new-user.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    LocationComponent,
    PaymentComponent,
    SearchFoodComponent,
    NewUserComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
