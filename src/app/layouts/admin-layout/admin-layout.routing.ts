import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AppointmentComponent } from '../../appointment/appointment.component';
import { AddAppointmentComponent } from '../../add-appointment/add-appointment.component';
import { BestworstexpertComponent } from 'app/bestworstexpert/bestworstexpert.component';
import { ExpertComponent } from 'app/expert/expert.component';
import { AddReviewComponent } from 'app/add-review/add-review.component';
import { ReviewComponent } from 'app/review/review.component';
import { ReportComponent } from 'app/report/report.component';
import { AddReportComponent } from 'app/add-report/add-report.component';
import { AssociationComponent } from 'app/association/association.component';
import { ExpertdetailsComponent } from 'app/expertdetails/expertdetails.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'appointment',        component: AppointmentComponent },
    { path: 'add-appointment',        component: AddAppointmentComponent },
    { path: 'bestandworstexpert',        component: BestworstexpertComponent },
    { path: 'experts',        component: ExpertComponent },
    { path: 'reviews',        component: ReviewComponent },
    { path: 'reports',        component: ReportComponent },
    { path: 'add-report',        component: AddReportComponent },
    { path: 'add-review',        component: AddReviewComponent },
    { path: 'add-review/:id',        component: AddReviewComponent },
    { path: 'add-appointment/:id',        component: AddAppointmentComponent },
    { path: 'associations',        component:AssociationComponent },
    { path: 'expert-details/:id',        component:ExpertdetailsComponent },



];
