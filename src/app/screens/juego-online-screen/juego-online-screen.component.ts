import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-online-screen',
  templateUrl: './juego-online-screen.component.html',
  styleUrls: ['./juego-online-screen.component.scss']
})
export class JuegoOnlineScreenComponent {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  public goJuegoTerminado(){
    this.router.navigate(["juego-terminado"]);
  }
}
