import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/models/contacts';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  details: Contacts[] = [];

  //table
  title = 'datatables';
  //dtOptions: DataTables.Settings = {};

  form: any = {
    name: null,
    email: null,
    phoneno: null,
  };

  isSuccessful = false;
  isUploadFailed = false;
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.all();
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true,
    // };
  }

  contacts(): void {
    location.href = '/contacts';
  }

  onSubmit(): void {
    const { name, email, phoneno } = this.form;

    this.contactService.add(name, email, phoneno).subscribe(
      (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isUploadFailed = false;

        if ((this.isSuccessful = true)) {
          location.href = '/contacts';
        }
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isUploadFailed = true;
      }
    );
  }

  all() {
    this.contactService.all().subscribe(
      (response: Contacts[]) => {
        this.details = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
