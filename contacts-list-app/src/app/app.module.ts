import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './../modules/custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { FeatureContactsListModule } from './../modules/feature-contacts-list/feature-contacts-list.module';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    FeatureContactsListModule,
    // ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
