import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssociationComponent } from './association/association.component';
import { ExpertdetailsComponent } from './expertdetails/expertdetails.component';
import { BannedExpertsComponent } from './banned-experts/banned-experts.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,

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
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    NgbModule,
  
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
    

  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
