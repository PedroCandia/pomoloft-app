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

  // nopara, descanso
  commands = [
    { command: '!abrazote', src: '../../assets/commands/abrazote.png' },
    { command: '!café', src: '../../assets/commands/cafe.png' },
    { command: '!chiste', src: '../../assets/commands/chiste.png' },
    { command: '!comandos', src: '../../assets/commands/comandos.png' },
    { command: '!crono', src: '../../assets/commands/crono.png' },
    { command: '!discord', src: '../../assets/commands/discord.png' },
    { command: '!estudio', src: '../../assets/commands/estudio.png' },
    { command: '!excel', src: '../../assets/commands/excel.png' },
    { command: '!horario', src: '../../assets/commands/default.png' },
    { command: '!lunes', src: '../../assets/commands/default.png' },
    { command: '!martes', src: '../../assets/commands/default.png' },
    { command: '!miércoles', src: '../../assets/commands/default.png' },
    { command: '!jueves', src: '../../assets/commands/default.png' },
    { command: '!viernes', src: '../../assets/commands/default.png' },
    { command: '!sábado', src: '../../assets/commands/default.png' },
    { command: '!kheylan', src: '../../assets/commands/default.png' },
    { command: '!layani', src: '../../assets/commands/default.png' },
    { command: '!leo', src: '../../assets/commands/default.png' },
    { command: '!reyna', src: '../../assets/commands/default.png' },
    { command: '!merienda', src: '../../assets/commands/default.png' },
    { command: '!mery', src: '../../assets/commands/default.png' },
    { command: '!recomendación', src: '../../assets/commands/default.png' },
    { command: '!redes', src: '../../assets/commands/default.png' },
    { command: '!sandra', src: '../../assets/commands/default.png' },
    { command: '!sueño', src: '../../assets/commands/default.png' },
    { command: '!sunnie', src: '../../assets/commands/default.png' },
    { command: '!tip', src: '../../assets/commands/default.png' },
    { command: '!trol', src: '../../assets/commands/default.png' },
    { command: '!troll', src: '../../assets/commands/default.png' },
    { command: '!williamartista', src: '../../assets/commands/default.png' },
    { command: '!wordle', src: '../../assets/commands/default.png' },
    { command: '!yanina', src: '../../assets/commands/default.png' },
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
