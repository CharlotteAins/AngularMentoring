import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

  constructor ( public authService: AuthService, private router: Router ) { }

  public fullUserName: string;

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe( user => this.fullUserName = `${ user.name.first } ${ user.name.last }` );
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate( [ '/login' ] );
  }
}
