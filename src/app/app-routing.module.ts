import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationComponent } from './location/location.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {
    component :HomeComponent,
    path:'home'
  },
  {
    component :BasketComponent,
    path:'basket'
  },
  {
    component :ProfileComponent,
    path:'profile'
  },
  {
    component: LocationComponent,
    path :'location'
  },
  {
    component: PaymentComponent,
    path:'payment'
  },
  {
    component: SearchFoodComponent,
    path:'searchFood'
  },
  {
    component: NewUserComponent,
    path: 'new-user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
