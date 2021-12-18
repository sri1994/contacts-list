import { Component, OnInit } from '@angular/core';

import { ContactsService } from './../../../data-access-contacts-list/contacts.service';
import { Contact } from 'src/modules/models/contact.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contactsDataList: Contact[] = [];
  destroy$: Subject<any> = new Subject<any>();

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getContactsList();
  }

  getContactsList() {
    this.contactsService.getContactsList().pipe(takeUntil(this.destroy$)).subscribe((contactsList: Contact[]) => {
      this.contactsDataList = contactsList;
    });
  }

  addContact(contact: Contact) {
    if (!!contact) {
      this.contactsDataList.push(contact);
    }
  }

  deleteContact(id: number) {
    if(!!id) {
      this.contactsDataList.splice(this.contactsDataList.indexOf(this.contactsDataList.filter(data => id = data.id )[0]), 1);
    }
  }
  
  updateContact(contactUpdated: Contact) {
    if (!!contactUpdated && !!contactUpdated.id) {
      const modifiedContactIndex = this.contactsDataList.indexOf(this.contactsDataList.filter(data => contactUpdated.id = data.id )[0])
      this.contactsDataList[modifiedContactIndex] = contactUpdated;
    }
  }

}
