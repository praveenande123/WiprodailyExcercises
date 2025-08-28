import { RouterModule, Routes } from '@angular/router';
import { Login } from '../login/login';
import { Movie } from '../movie/movie';
import { Payment } from '../payment/payment';
import { Paymentsubmission } from '../paymentsubmission/paymentsubmission';

export const routes: Routes = [

  { path: '', component: Login },
  { path: 'payment/:orderId/:totalPrice', component: Payment },
  { path: 'movielist', component: Movie },
  { path: 'paymentsub', component: Paymentsubmission },

];
 RouterModule.forRoot(routes, { enableTracing: true })