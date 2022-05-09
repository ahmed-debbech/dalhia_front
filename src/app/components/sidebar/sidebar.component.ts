import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/appointment', title: 'Appointments',  icon:'plus', class: '' },
    { path: '/add-appointment', title: 'Add Appointment',  icon:'plus', class: '' },
    { path: '/experts', title: 'Experts',  icon:'plus', class: '' },
    { path: '/bestandworstexpert', title: 'Ratings on experts',  icon:'plus', class: '' },
    { path: '/add-review', title: 'Add Review',  icon:'plus', class: '' },
    { path: '/reviews', title: 'Reviews',  icon:'plus', class: '' },
    { path: '/add-report', title: 'Add Report',  icon:'plus', class: '' },
    { path: '/reports', title: 'Reports',  icon:'plus', class: '' },
    { path: '/associations', title: 'Associations',  icon:'plus', class: '' },
    
    
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
