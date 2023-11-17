import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDePrivacidadScreenComponent } from './politica-de-privacidad-screen.component';

describe('PoliticaDePrivacidadScreenComponent', () => {
  let component: PoliticaDePrivacidadScreenComponent;
  let fixture: ComponentFixture<PoliticaDePrivacidadScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaDePrivacidadScreenComponent]
    });
    fixture = TestBed.createComponent(PoliticaDePrivacidadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
