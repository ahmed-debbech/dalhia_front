import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddOfferComponent } from './pages/add-offer/add-offer.component';
import { FrontComponent } from './pages/front/front/front.component';
import { CoursesComponent } from './coursesAdmin/course/courses/courses.component';


 const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
    path: 'front',
    component: FrontComponent,
    
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [ RouterModule
  ],
})
export class AppRoutingModule { }
export const ArrayOfComponents = [AddOfferComponent]

