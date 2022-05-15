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
import { AppointmentRateComponent } from 'app/appointment-rate/appointment-rate.component';
import { AppointmentReportComponent } from 'app/appointment-report/appointment-report.component';
import { MyappointmentsComponent } from 'app/myappointments/myappointments.component';
import { MyreviewsComponent } from 'app/myreviews/myreviews.component';
import { MyappratesComponent } from 'app/myapprates/myapprates.component';
import { MyappreportsComponent } from 'app/myappreports/myappreports.component';
import { OfferComponent } from 'app/pages/offer/offer.component';
import { AddOfferComponent } from 'app/pages/add-offer/add-offer.component';
import { UpdateOfferComponent } from 'app/pages/update-offer/update-offer.component';
import { ApplicationFrontComponent } from 'app/pages/front/application-front/application-front.component';
import { AllApplicationComponent } from 'app/pages/all-application/all-application.component';
import { UserComponent } from 'app/user/user.component';
import { AuthComponent } from 'app/auth/auth.component';

import { AuthAdminGuard } from 'app/auth/auth-admin.guard';
import { PlansComponent } from 'app/plans/plans.component';
import { ProductsComponent } from 'app/products/products.component';
import { CommandsComponent } from 'app/commands/commands.component';
import { SubscriptionsComponent } from 'app/subscriptions/subscriptions.component';
import { HomeComponent } from 'app/home/home.component';
import { SubscribeComponent } from 'app/subscribe/subscribe.component';
import { AuthGuard } from 'app/auth/auth.guard';
import { ShoppingComponent } from 'app/shopping/shopping.component';
import { ForgetPasswordComponent } from 'app/forget-password/forget-password.component';
import { ChangePasswordComponent } from 'app/change-password/change-password.component';
import { StatComponent } from 'app/stat/stat.component';
import { DisconnectGuard } from 'app/auth/disconnect.guard';

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

import { ClientForumRoutes, AdminForumRoutes } from '../../forum.routing';
import { CertComponent } from 'app/certificate/certificate.component';

export const AdminLayoutRoutes: Routes = [
  
    { path: 'index',      component: DashboardComponent },
    {path : 'auth' , component: AuthComponent,canActivate : [DisconnectGuard]},
    {path : 'home' , component: HomeComponent},
    {path : 'statistique' , component: StatComponent,canActivate : [AuthAdminGuard]},
    {path : 'forget-password' , component: ForgetPasswordComponent,canActivate : [DisconnectGuard]},
    {path : 'change-password' , component: ChangePasswordComponent,canActivate : [DisconnectGuard]},
    {path : 'shopping' , component: ShoppingComponent , canActivate : [AuthGuard]},
    {path : 'subscribe' , component: SubscribeComponent , canActivate : [AuthGuard]},
    { path: 'user',      component: UserComponent  ,canActivate : [AuthAdminGuard]  },
    { path: 'plans',      component: PlansComponent  ,canActivate : [AuthAdminGuard]  },
    { path: 'subscriptions',      component: SubscriptionsComponent  ,canActivate : [AuthAdminGuard]  },
    { path: 'products',      component: ProductsComponent  ,canActivate : [AuthAdminGuard]  },
    { path: 'commands',      component: CommandsComponent  ,canActivate : [AuthAdminGuard]  },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'ALLapplication',     component: AllApplicationComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'admin/appointment',        component: AppointmentComponent },
    { path: 'add-appointment',        component: AddAppointmentComponent },
    { path: 'bestandworstexpert',        component: BestworstexpertComponent },
    { path: 'experts',        component: ExpertComponent },
    { path: 'admin/reviews',        component: ReviewComponent },
    { path: 'reports',        component: ReportComponent },
    { path: 'add-report',        component: AddReportComponent },
    { path: 'add-review',        component: AddReviewComponent },
    { path: 'add-review/:id',        component: AddReviewComponent },
    { path: 'add-appointment/:id',        component: AddAppointmentComponent },
    { path: 'rate-appointment/:id',        component: MyappratesComponent },
    { path: 'report-appointment/:id',        component: MyappreportsComponent },
    { path: 'associations',        component:AssociationComponent },
    { path: 'expert-details/:id',        component:ExpertdetailsComponent },
    { path: 'appointment-rate-details/:id',        component:AppointmentRateComponent },
    { path: 'appointment-report-details/:id',        component:AppointmentReportComponent },
    { path: 'my-appointments',        component:MyappointmentsComponent },
    { path: 'my-reviews',        component:MyreviewsComponent },


    { path: 'offer',   component: OfferComponent },
    { path: 'offer/offerAdd', component: AddOfferComponent },
    { path: 'offer/offerUpdate', component: UpdateOfferComponent },
    {
        path : 'admin/forum',
        //component: 
        children : AdminForumRoutes
    },
    {
        path : 'forum',
        //component: 
        children : ClientForumRoutes
    },
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
        { path: 'cert' , component: CertComponent},

    
];
