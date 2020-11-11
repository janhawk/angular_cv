import { ColorComponent } from './color/color.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { FilsComponent } from './fils/fils.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    ColorComponent,
    FilsComponent,
    EmbaucheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
