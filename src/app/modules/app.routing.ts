import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from '../core/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from '../core/layout/user-layout/user-layout.component';
import { PublicLayoutComponent } from '../core/layout/public-layout/public-layout.component';
import { DetailPageComponent } from './detail/detailpage/detailpage.component';
import { AppComponent } from './app.component';


const moduleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: './public/public.module#PublicModule'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    redirectTo: 'challenge',
    pathMatch: 'full'
  },
  {
    path: 'detail/:ID',
    component: DetailPageComponent
  },
  {
    path: 'detail',
    component: DetailPageComponent
  },
  {
    path: 'trans',
    component: AppComponent
  },
  {
    path: 'trans/:ID',
    component: AppComponent
  },

  {
    path: 'detail',
    component: DetailPageComponent
  },

  {
    path: '',
    component: UserLayoutComponent,
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'detailpage/:ID',
    component: DetailPageComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(moduleRoutes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
