import { Routes } from '@angular/router';
import { LogIn } from './log-in/log-in';
import { Header } from './header/header';
import { FoodList } from './food-list/food-list';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {path:'login', component: LogIn},
     {path:'header', component: Header},
      {path:'',component: FoodList},
       {path:'cart',component: Cart},
];