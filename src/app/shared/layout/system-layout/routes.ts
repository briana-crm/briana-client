import {AuthLayoutComponent} from '../auth-layout/auth-layout.component';
import {SystemLayoutComponent} from './system-layout.component';
import {AuthGuard} from '../../guard/auth.guard';
import {Route, Routes} from '@angular/router';
import {SYSTEM_ROUTES} from './system.routes';
import {AUTH_ROUTES} from '../auth-layout/auth.routes';
import {BasePageComponent} from "../../../base-page/base-page.component";

export declare type AppRoutes = AppRoute[];

interface AppRoute extends Route {
  id?: string;
  icon?: string;
  name?: string | {};
  children?: AppRoutes | Routes;
}

export const ROUTES: AppRoutes = [
  {
    path: '',
    component: BasePageComponent
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: AUTH_ROUTES
  },
  {
    path: '',
    component: SystemLayoutComponent,
    canActivate: [AuthGuard],
    children: SYSTEM_ROUTES
  }
];


