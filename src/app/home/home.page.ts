import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  commands = ['!abrazote', '!café', '!chiste', '!comandos', '!contest', '!crono', '!discord', 
  '!emotes ffz', '!emotes bttv', '!emotes update', '!enter', '!estudio', '!excel', '!followage', '!giveaway', '!horario', '!items', '!jueves', '!kheylan', '!layani', '!leaderboard', 
  '!leo', '!lunes', '!martes', '!merienda', '!mery', '!miércoles', '!next', '!points', '!recomendación', '!redeem', '!redes', '!rename', '!reyna', '!sandra', '!song', '!sueño', 
  '!sunnie', '!sábado', '!tip', '!trol', '!troll', '!uptime', '!viernes', '!watchtime', '!when', '!williamartista', '!wordle', '!wrongsong', '!yanina'];

  newCommands = [
    { command: '!abrazote', src: '../../assets/commands/abrazote.png' },
    { command: '!café', src: '../../assets/commands/cafe.png' },
    { command: '!chiste', src: '../../assets/commands/chiste.png' },
    { command: '!comandos', src: '../../assets/commands/comandos.png' },
  ];

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
