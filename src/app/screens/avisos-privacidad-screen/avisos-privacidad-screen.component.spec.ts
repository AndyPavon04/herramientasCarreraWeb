import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosPrivacidadScreenComponent } from './avisos-privacidad-screen.component';

describe('AvisosPrivacidadScreenComponent', () => {
  let component: AvisosPrivacidadScreenComponent;
  let fixture: ComponentFixture<AvisosPrivacidadScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisosPrivacidadScreenComponent]
    });
    fixture = TestBed.createComponent(AvisosPrivacidadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
