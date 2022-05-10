import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CoursesComponent } from 'app/course/courses/courses.component';
import { CertificateComponent } from 'app/certificatee/certificate/certificate.component';
import { CourseUpdateComponent } from 'app/course/course-update/course-update.component';
import { AddCoursesComponent } from 'app/course/course-add/course-add.component';
import { CourseDetailsComponent } from 'app/course/course-details/course-details.component';
import { AllphasesComponent } from 'app/phase/allphases/allphases.component';
import { PhaseAddComponent } from 'app/phase/phase-add/phase-add.component';
import { PhaseDetailsComponent } from 'app/phase/phase-details/phase-details.component';
import { PhaseUpdateComponent } from 'app/phase/phase-update/phase-update.component';
import { AllquestionsComponent } from 'app/question/allquestions/allquestions.component';
import { QuestionAddComponent } from 'app/question/question-add/question-add.component';
import { QuestionUpdateComponent } from 'app/question/question-update/question-update.component';
import { QuestionDetailsComponent } from 'app/question/question-details/question-details.component';
import { AllresourcesComponent } from 'app/resource/allresources/allresources.component';
import { ResourceAddComponent } from 'app/resource/resource-add/resource-add.component';
import { ResourceUpdateComponent } from 'app/resource/resource-update/resource-update.component';
import { ResourceDetailsComponent } from 'app/resource/resource-details/resource-details.component';

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

    { path: 'courses',        component : CoursesComponent},
    { path: 'courses/:id/certificates',        component : CertificateComponent},
    { path: 'courses/addcourses',        component : AddCoursesComponent},
    { path: 'courses/:id/updatecourse' , component: CourseUpdateComponent},
    { path: 'courses/:id/detailscourse/:idd/upc' , component: CourseUpdateComponent},
    { path: 'courses/:id/detailscourse', component: CourseDetailsComponent},

    { path: 'courses/:id/detailscourse/:idd/allphases', component: AllphasesComponent},
    { path: 'courses/addcourses/addphases', component: PhaseAddComponent},
    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/updatephase', component: PhaseUpdateComponent},
    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/detailsphase', component: PhaseDetailsComponent},

    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/allquestions', component: AllquestionsComponent},
    { path: 'courses/addcourses/addphases/addquestion', component: QuestionAddComponent},
    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/updatephase', component: QuestionUpdateComponent},
    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/detailsphase/:idddd  /upc' , component: CourseUpdateComponent},
    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/detailsphase', component: QuestionDetailsComponent},

    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/allresources', component: AllresourcesComponent},
    { path: 'courses/addcourses/addphases/addresource', component: ResourceAddComponent},
    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/updatephase', component: ResourceUpdateComponent},
    { path: 'courses/:id/detailscourse/:idd/allphases/:iddd/detailsphase', component: ResourceDetailsComponent}

];
