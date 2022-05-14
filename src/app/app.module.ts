import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferComponent } from './pages/offer/offer.component';
import { AddOfferComponent } from './pages/add-offer/add-offer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateOfferComponent } from './pages/update-offer/update-offer.component';
import { NotifierModule,NotifierOptions } from 'angular-notifier';
import { OfferFrontComponent } from './pages/front/offer-front/offer-front.component';
import { ApplicationFrontComponent } from './pages/front/application-front/application-front.component';
import {NgbdModalContent} from './pages/front/offer-front/modal.component';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';
import { FrontComponent } from './pages/front/front/front.component';
import { RecomandationComponent } from './pages/front/recomandation/recomandation.component';
import { AllApplicationComponent } from './pages/all-application/all-application.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, ArrayOfComponents } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentService } from './shared/appointment.service';
import { BestworstexpertComponent } from './bestworstexpert/bestworstexpert.component';
import { ExpertComponent } from './expert/expert.component';
import { ReportComponent } from './report/report.component';
import { AppointmentReportComponent } from './appointment-report/appointment-report.component';
import { AppointmentRateComponent } from './appointment-rate/appointment-rate.component';
import { ReviewComponent } from './review/review.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddReportComponent } from './add-report/add-report.component';
import { AssociationComponent } from './association/association.component';
import { ExpertdetailsComponent } from './expertdetails/expertdetails.component';
import { BannedExpertsComponent } from './banned-experts/banned-experts.component';
import { MyappointmentsComponent } from './myappointments/myappointments.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';
import { MyappratesComponent } from './myapprates/myapprates.component';
import { MyappreportsComponent } from './myappreports/myappreports.component';



import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { PlansComponent } from './plans/plans.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ProductsComponent } from './products/products.component';
import { CommandsComponent } from './commands/commands.component';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StatComponent } from './stat/stat.component';






import { CoursesComponent } from './coursesAdmin/course/courses/courses.component';
import { CertificateComponent } from './coursesAdmin/certificatee/certificate/certificate.component';
import { TopicComponent } from './topic/topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseDetailsComponent } from './coursesAdmin/course/course-details/course-details.component';
import { CourseUpdateComponent } from './coursesAdmin/course/course-update/course-update.component';
import { AddCoursesComponent } from './coursesAdmin/course/course-add/course-add.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { AllphasesComponent } from './coursesAdmin/phase/allphases/allphases.component';
import { PhaseUpdateComponent } from './coursesAdmin/phase/phase-update/phase-update.component';
import { PhaseDetailsComponent } from './coursesAdmin/phase/phase-details/phase-details.component';
import { PhaseAddComponent } from './coursesAdmin/phase/phase-add/phase-add.component';
import {MatRadioModule} from '@angular/material/radio';
import { AllquestionsComponent } from './coursesAdmin/question/allquestions/allquestions.component';
import { QuestionAddComponent } from './coursesAdmin/question/question-add/question-add.component';
import { QuestionUpdateComponent } from './coursesAdmin/question/question-update/question-update.component';
import { QuestionDetailsComponent } from './coursesAdmin/question/question-details/question-details.component';
import { AllresourcesComponent } from './coursesAdmin/resource/allresources/allresources.component';
import { ResourceAddComponent } from './coursesAdmin/resource/resource-add/resource-add.component';
import { ResourceUpdateComponent } from './coursesAdmin/resource/resource-update/resource-update.component';
import { ResourceDetailsComponent } from './coursesAdmin/resource/resource-details/resource-details.component';
import { AllanswersComponent } from './coursesAdmin/answer/allanswers/allanswers.component';
import { AnswerAddComponent } from './coursesAdmin/answer/answer-add/answer-add.component';
import { AnswerUpdateComponent } from './coursesAdmin/answer/answer-update/answer-update.component';
import { AnswerDetailsComponent } from './coursesAdmin/answer/answer-details/answer-details.component';
import { CoursesuComponent } from './coursesUser/course/coursesu/coursesu.component';
import { CourseuDetailsComponent } from './coursesUser/course/courseu-details/courseu-details.component';
import { AllphasesuComponent } from './coursesUser/phase/allphasesu/allphasesu.component';
import { PhaseuDetailsComponent } from './coursesUser/phase/phaseu-details/phaseu-details.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ForumNewsFeedComponent } from './forum-news-feed/forum-news-feed.component';
import { AdsAdditionComponent } from './ads-addition/ads-addition.component';
import { NgApexchartsModule } from 'ng-apexcharts';

/**
 * Custom angular notifier options
 */
 const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  imports: [
    FormsModule,
    ComponentsModule,

    HttpClientModule, 
    BrowserAnimationsModule, // service : HttpClient
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
  
    NgbModule,
    NotifierModule.withConfig(customNotifierOptions),
    SnotifyModule,
    BrowserModule,
    
    NgApexchartsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatGridListModule,
    MatRadioModule,
    MatDialogModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AppointmentComponent,
    AddAppointmentComponent,
    BestworstexpertComponent,
    ExpertComponent,
    ReportComponent,
    AppointmentReportComponent,
    AppointmentRateComponent,
    ReviewComponent,
    AddReviewComponent,
    AddReportComponent,
    AssociationComponent,
    ExpertdetailsComponent,
    BannedExpertsComponent,
    MyappointmentsComponent,
    MyreviewsComponent,
    MyappratesComponent,
    MyappreportsComponent,
    

  
    OfferComponent,
    ArrayOfComponents,
    UpdateOfferComponent,
    OfferFrontComponent,
    ApplicationFrontComponent,
    NgbdModalContent,
    FrontComponent,
    RecomandationComponent,
    AllApplicationComponent,
    UserComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    PlansComponent,
    SubscriptionsComponent,
    ProductsComponent,
    CommandsComponent,
    HomeComponent,
    SubscribeComponent,
    ShoppingComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    StatComponent,
    CoursesComponent,
    CertificateComponent,
    CourseDetailsComponent,
    AddCoursesComponent,
    CourseUpdateComponent,
    AllphasesComponent,
    PhaseUpdateComponent,
    PhaseDetailsComponent,
    PhaseAddComponent,
    AllquestionsComponent,
    QuestionAddComponent,
    QuestionUpdateComponent,
    QuestionDetailsComponent,
    AllresourcesComponent,
    ResourceAddComponent,
    ResourceUpdateComponent,
    ResourceDetailsComponent,
    AllanswersComponent,
    AnswerAddComponent,
    AnswerUpdateComponent,
    AnswerDetailsComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CoursesuComponent,
    CourseuDetailsComponent,
    AllphasesuComponent,
    PhaseuDetailsComponent,
    TopicComponent,
    TopicDetailsComponent,
    AddTopicComponent,
    ForumNewsFeedComponent,
    AdsAdditionComponent,
  ],
  providers: [
    SnotifyService,{ provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    {provide : HTTP_INTERCEPTORS , useClass : AuthInterceptorService, multi : true}
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
