import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StyleComponent } from './directive/style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
