import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { AppRoutingModule,ArrayOfComponents } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OfferComponent } from './pages/offer/offer.component';
import { AddOfferComponent } from './pages/add-offer/add-offer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateOfferComponent } from './pages/update-offer/update-offer.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    OfferComponent,
    ArrayOfComponents,
    UpdateOfferComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
