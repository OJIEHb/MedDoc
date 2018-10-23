import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { UterusComponent } from './components/templates/uterus/uterus.component';
import { TemplateService } from './services/template.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UterusTemplateComponent } from './components/templates/uterus/uterus-template/uterus-template.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UterusCompleteTemplateComponent } from './components/templates/uterus/uterus-complete-template/uterus-complete-template.component';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent,
    UterusComponent,
    UterusTemplateComponent,
    UterusCompleteTemplateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxElectronModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
