import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { InstruccionesJuegoScreenComponent } from './screens/instrucciones-juego-screen/instrucciones-juego-screen.component';
import { AvisosPrivacidadScreenComponent } from './screens/avisos-privacidad-screen/avisos-privacidad-screen.component';
import { JuegoScreenComponent } from './screens/juego-screen/juego-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { JuegoOnlineScreenComponent } from './screens/juego-online-screen/juego-online-screen.component';
import { PerfilScreenComponent } from './screens/perfil-screen/perfil-screen.component';




const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'juego-terminado', component: JuegoTerminadoScreenComponent, pathMatch: 'full' },
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: 'instrucciones-juego', component: InstruccionesJuegoScreenComponent, pathMatch: 'full' },
  { path: 'juego', component: JuegoScreenComponent, pathMatch: 'full' },
  { path: 'avisos-privacidad', component: AvisosPrivacidadScreenComponent, pathMatch: 'full' },
  { path: 'terminos-condiciones', component: TerminosCondicionesScreenComponent, pathMatch: 'full' },
  { path: 'juego-online', component: JuegoOnlineScreenComponent, pathMatch: 'full' },
  { path: 'perfil', component: PerfilScreenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
