import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'shop',
    loadChildren: ()=>
    import('./modules/shop/shop.module').then((m)=>m.ShopModule),
  },
  {
    path:'cart',
    loadChildren:()=>
    import('./modules/cart/cart.module').then((m)=>m.CartModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
