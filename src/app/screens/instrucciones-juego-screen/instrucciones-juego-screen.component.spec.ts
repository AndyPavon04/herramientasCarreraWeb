import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesJuegoScreenComponent } from './instrucciones-juego-screen.component';

describe('InstruccionesJuegoScreenComponent', () => {
  let component: InstruccionesJuegoScreenComponent;
  let fixture: ComponentFixture<InstruccionesJuegoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstruccionesJuegoScreenComponent]
    });
    fixture = TestBed.createComponent(InstruccionesJuegoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
