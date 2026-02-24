import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Init } from './init/init';
import { Dashboard } from './dashboard/dashboard';
import { BaseComponent } from './COMPOSANTS/base/base.component';
import { User } from './user/user';
import { Logement } from './logement/logement';
import { Reservation } from './reservation/reservation';

export const routes: Routes = [
  { path: '', component: Init },

  { path: 'login', component: Login },
  { path: 'logements', component: Logement, },

  { path: 'signup', component: Signup },
  {
    path: '',
    component: BaseComponent,

    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: User },
      { path: 'logement', component: Logement},
      { path: 'dashboard', component: Dashboard },
      { path: 'reservation', component: Reservation }
      
    ],
  },
];
