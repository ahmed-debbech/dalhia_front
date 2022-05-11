import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CoursesComponent } from 'app/coursesAdmin/course/courses/courses.component';
import { CertificateComponent } from 'app/coursesAdmin/certificatee/certificate/certificate.component';
import { CourseUpdateComponent } from 'app/coursesAdmin/course/course-update/course-update.component';
import { AddCoursesComponent } from 'app/coursesAdmin/course/course-add/course-add.component';
import { CourseDetailsComponent } from 'app/coursesAdmin/course/course-details/course-details.component';
import { AllphasesComponent } from 'app/coursesAdmin/phase/allphases/allphases.component';
import { PhaseAddComponent } from 'app/coursesAdmin/phase/phase-add/phase-add.component';
import { PhaseDetailsComponent } from 'app/coursesAdmin/phase/phase-details/phase-details.component';
import { PhaseUpdateComponent } from 'app/coursesAdmin/phase/phase-update/phase-update.component';
import { AllquestionsComponent } from 'app/coursesAdmin/question/allquestions/allquestions.component';
import { QuestionAddComponent } from 'app/coursesAdmin/question/question-add/question-add.component';
import { QuestionUpdateComponent } from 'app/coursesAdmin/question/question-update/question-update.component';
import { QuestionDetailsComponent } from 'app/coursesAdmin/question/question-details/question-details.component';
import { AllresourcesComponent } from 'app/coursesAdmin/resource/allresources/allresources.component';
import { ResourceAddComponent } from 'app/coursesAdmin/resource/resource-add/resource-add.component';
import { ResourceUpdateComponent } from 'app/coursesAdmin/resource/resource-update/resource-update.component';
import { ResourceDetailsComponent } from 'app/coursesAdmin/resource/resource-details/resource-details.component';
import { AnswerDetailsComponent } from 'app/coursesAdmin/answer/answer-details/answer-details.component';
import { AnswerUpdateComponent } from 'app/coursesAdmin/answer/answer-update/answer-update.component';
import { AnswerAddComponent } from 'app/coursesAdmin/answer/answer-add/answer-add.component';
import { AllanswersComponent } from 'app/coursesAdmin/answer/allanswers/allanswers.component';

import { CourseuDetailsComponent } from 'app/coursesUser/course/courseu-details/courseu-details.component';
import { CoursesuComponent } from 'app/coursesUser/course/coursesu/coursesu.component';
import { AllphasesuComponent } from 'app/coursesUser/phase/allphasesu/allphasesu.component';
import { PhaseuDetailsComponent } from 'app/coursesUser/phase/phaseu-details/phaseu-details.component';


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

    { path: 'admin/courses',        component : CoursesComponent},
    { path: 'admin/courses/:id/certificates',        component : CertificateComponent},
    { path: 'admin/courses/addcourses',        component : AddCoursesComponent},
    { path: 'admin/courses/:id/updatecourse' , component: CourseUpdateComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/upc' , component: CourseUpdateComponent},
    { path: 'admin/courses/:id/detailscourse', component: CourseDetailsComponent},

    { path: 'admin/courses/:id/detailscourse/:idd/allphases', component: AllphasesComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/add', component: PhaseAddComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/updatephase', component: PhaseUpdateComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/detailsphase', component: PhaseDetailsComponent},

    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/allquestions', component: AllquestionsComponent},
    { path: 'admin/courses/addcourses/addphases/addquestion', component: QuestionAddComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/updatephase', component: QuestionUpdateComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/detailsphase/:idddd/upc' , component: CourseUpdateComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/detailsphase', component: QuestionDetailsComponent},

    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/allresources', component: AllresourcesComponent},
    { path: 'admin/courses/addcourses/addphases/addresource', component: ResourceAddComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/updatephase', component: ResourceUpdateComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/detailsphase', component: ResourceDetailsComponent},

    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/allquestions/:idddd/allanswers', component: AllanswersComponent},
    { path: 'admin/courses/addcourses/addphases/addanswer', component: AnswerAddComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/allquestions/:idddd/allanswers/:iddddd/updateanswer', component: AnswerUpdateComponent},
    { path: 'admin/courses/:id/detailscourse/:idd/allphases/:iddd/allquestions/:idddd/allanswers/:iddddd/detailsanswer', component: AnswerDetailsComponent},

    //User
    { path: 'user/coursesu',        component : CoursesuComponent},
    { path: 'user/coursesu/:id/detailscourseu', component: CourseuDetailsComponent},

    { path: 'user/coursesu/:id/detailscourseu/:idd/allphasesu',        component : AllphasesuComponent},
    { path: 'user/coursesu/:id/detailscourseu/:idd/allphasesu/:iddd/detailsphaseu', component: PhaseuDetailsComponent},


    

];
