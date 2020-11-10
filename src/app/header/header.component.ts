import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

  public userLogin: string;
  public isAuth: boolean;

  constructor ( private authService: AuthService ) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
    this.userLogin = this.authService.getUserInfo();
  }

  logout(): void {
    this.authService.logout();
  }

}
