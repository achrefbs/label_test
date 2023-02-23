import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LabelListComponent } from './label-list/label-list.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';
import { ApiServiceService } from './api-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LabelListComponent,
    DocumentUploadComponent,
    DocumentViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
