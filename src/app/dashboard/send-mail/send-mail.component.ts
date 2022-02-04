import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css'],
})


export class SendMailComponent implements OnInit {
  constructor() {}
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  mail(): void {
    location.href = '/send-mail';
  }

  ngOnInit(): void {}
}
