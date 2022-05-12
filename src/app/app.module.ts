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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    NotifierModule.withConfig(customNotifierOptions),
    SnotifyModule,
    BrowserModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    OfferComponent,
    ArrayOfComponents,
    UpdateOfferComponent,
    OfferFrontComponent,
    ApplicationFrontComponent,
    NgbdModalContent,
    FrontComponent,
    RecomandationComponent,
    AllApplicationComponent,

  ],
  providers: [SnotifyService,{ provide: 'SnotifyToastConfig', useValue: ToastDefaults},],
  bootstrap: [AppComponent]
})
export class AppModule { }
