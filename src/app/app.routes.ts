import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Init } from './init/init';

export const routes: Routes = [

      { path: '', component: Init },

      { path: 'login', component: Login },

      { path: 'signup', component: Signup },
    

];
