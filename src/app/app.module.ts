import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { UterusComponent } from './components/templates/uterus/uterus.component';
import { TemplateService } from './services/template.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UterusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
