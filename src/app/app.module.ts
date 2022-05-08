import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CoursesComponent } from './course/courses/courses.component';
import { CertificateComponent } from './certificatee/certificate/certificate.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { AddCoursesComponent } from './course/course-add/course-add.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { AllphasesComponent } from './phase/allphases/allphases.component';
import { PhaseUpdateComponent } from './phase/phase-update/phase-update.component';
import { PhaseDetailsComponent } from './phase/phase-details/phase-details.component';
import { PhaseAddComponent } from './phase/phase-add/phase-add.component';
import {MatRadioModule} from '@angular/material/radio';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
