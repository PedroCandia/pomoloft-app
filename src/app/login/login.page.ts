import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  clientID = environment.auth.client_id;
  uri = environment.auth.uri;
  scope = environment.auth.scope;
  
  constructor() { }

  ngOnInit() {
  }

}
