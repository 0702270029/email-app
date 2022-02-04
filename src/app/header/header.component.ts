import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {}

  profile(): void {
    location.href = '/profile';
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
