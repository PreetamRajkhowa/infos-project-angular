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
    path:'about-us',
    loadChildren: ()=>
    import('./modules/about-us/about-us.module').then((m)=>m.AboutUsModule),
  },
  {
    path:'contact-us',
    loadChildren: ()=>
    import('./modules/contact-us/contact-us.module').then((m)=>m.ContactUsModule),
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
