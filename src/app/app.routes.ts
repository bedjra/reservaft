import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Init } from './init/init';
import { Dashboard } from './dashboard/dashboard';
import { BaseComponent } from './COMPOSANTS/base/base.component';

export const routes: Routes = [
  { path: '', component: Init },

  { path: 'login', component: Login },

  { path: 'signup', component: Signup },
  {
    path: '', component: BaseComponent,

    children: [{ path: 'dashboard', component: Dashboard}],
  },
];
