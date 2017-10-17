import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PdfViewerComponent} from 'ng2-pdf-viewer';
import { EmbedobjComponent } from './embed-obj.component';

@NgModule({
  declarations: [
    EmbedobjComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports : [EmbedobjComponent]
})
export class EmbedobjModule { }
