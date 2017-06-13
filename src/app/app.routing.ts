import { Routes, RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from 'app/home/home.component';
import { ErrorComponent } from 'app/error/error.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);