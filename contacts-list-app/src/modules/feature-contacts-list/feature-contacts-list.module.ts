import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './../../modules/custom-material/custom-material.module';
import { FeatureContactsListRoutingModule } from './feature-contacts-list-routing.module';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';

import { DataAccessContactsListModule } from './../data-access-contacts-list/data-access-contacts-list.module';

@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CustomMaterialModule,
    FeatureContactsListRoutingModule,
    DataAccessContactsListModule
  ]
})
export class FeatureContactsListModule { }
