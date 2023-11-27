import { Component } from '@angular/core';

@Component({
  selector: 'app-avisos-privacidad-screen',
  templateUrl: './avisos-privacidad-screen.component.html',
  styleUrls: ['./avisos-privacidad-screen.component.scss']
})
export class AvisosPrivacidadScreenComponent {
  constructor() { }

  ngOnInit(): void {
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}
