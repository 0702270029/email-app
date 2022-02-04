import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-mails',
  templateUrl: './multi-mails.component.html',
  styleUrls: ['./multi-mails.component.css'],
})
export class MultiMailsComponent implements OnInit {
  constructor() {}

  mails(): void {
    location.href = '/multi-emails';
  }

  ngOnInit(): void {}
}
