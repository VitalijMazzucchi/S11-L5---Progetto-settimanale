import { Component, OnInit, DoCheck } from '@angular/core';
import { ServerService } from 'src/app/autenticazione/server.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {
  logged = localStorage.getItem('isAuthenticated');
  constructor(private serverservice: ServerService) {}
  ngDoCheck(): void {
    this.logged = localStorage.getItem('isAuthenticated');
  }

  ngOnInit(): void {}

  logout() {
    this.serverservice.logout();
  }
}
