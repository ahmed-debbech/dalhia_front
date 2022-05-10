import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CoursesComponent } from './coursesAdmin/course/courses/courses.component';
import { CertificateComponent } from './coursesAdmin/certificatee/certificate/certificate.component';
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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatGridListModule,
    MatRadioModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
