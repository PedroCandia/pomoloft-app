import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  public subscriber: Subscription;
  code: any;
  
  clientID = 'cvundls7pspmk73j6c64brqduhpz6i';
  uri = 'http://localhost:8100/home';
  // scope = 'user%3Aedit%20user%3Aread%3Aemail';
  scope = 'user%3Aread%3Aemail%20user%3Aread%3Abroadcast%20channel%3Amanage%3Abroadcast%20channel%3Aread%3Aredemptions%20chat%3Aread%20channel%3Amoderate%20bits%3Aread%20channel_subscriptions%20channel%3Aread%3Asubscriptions%20channel%3Amanage%3Apredictions%20channel%3Amanage%3Apolls%20channel%3Aedit%3Acommercial%20channel%3Aread%3Acharity%20channel%3Aread%3Apaid_pinned_chat%20channel%3Aread%3Acheers%20moderator%3Aread%3Achatters&redirect_uri=https%3A%2F%2Fapi.streamelements.com%2Fauth%2Ftwitch%2Fcallback';

  commands = ['!discord', '!emotes ffz', '!emotes bttv', '!emotes update', '!enter', '!estudio', '!excel', '!followage', '!giveaway', '!horario', '!items', '!jueves', '!kheylan', '!layani', '!leaderboard', 
  '!leo', '!lunes', '!martes', '!merienda', '!mery', '!miércoles', '!next', '!points', '!recomendación', '!redeem', '!redes', '!rename', '!reyna', '!sandra', '!song', '!sueño', 
  '!sunnie', '!sábado', '!tip', '!trol', '!troll', '!uptime', '!viernes', '!watchtime', '!when', '!williamartista', '!wordle', '!wrongsong', '!yanina'];

  // nopara, descanso
  newCommands = [
    { command: '!abrazote', src: '../../assets/commands/abrazote.png' },
    { command: '!café', src: '../../assets/commands/cafe.png' },
    { command: '!chiste', src: '../../assets/commands/chiste.png' },
    { command: '!comandos', src: '../../assets/commands/comandos.png' },
    { command: '!crono', src: '../../assets/commands/crono.png' },
  ];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscriber = this.route.queryParams
      .subscribe((params: any) => {
        console.log(params);
        this.code = params?.code;
        console.log(this.code);
      }
    );
 }

  ngOnDestroy () {
    this.subscriber?.unsubscribe();
 }

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
