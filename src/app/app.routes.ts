import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { ReservationForm } from './reservation/reservation-form/reservation-form';
import { ReservationList } from './reservation/reservation-list/reservation-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'new', component: ReservationForm },
  { path: 'list', component: ReservationList }
];
