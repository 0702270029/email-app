import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dash(): void {
    location.href = '/dash';
  }
  contacts(): void {
    location.href = '/contacts';
  }
  mail(): void {
    location.href = '/send-mail';
  }
  mails(): void {
    location.href = '/multi-emails';
  }
}
