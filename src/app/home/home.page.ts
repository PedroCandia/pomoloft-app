import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  async sendMessage(msg: string) {
    let res;
    try {
      res = await this.http.post('http://localhost:3000/api', { command: msg }, {}).toPromise(); 
    } catch (error) {
      console.log(error); 
    }
    console.log(res);
  }
}
