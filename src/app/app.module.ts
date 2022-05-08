import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CoursesComponent } from './courses/courses.component';
import { CertificateComponent } from './certificate/certificate.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { AddCoursesComponent } from './course-add/course-add.component';
import {MatGridListModule} from '@angular/material/grid-list';

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
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CoursesComponent,
    CertificateComponent,
    CourseDetailsComponent,
    AddCoursesComponent,
    CourseUpdateComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
