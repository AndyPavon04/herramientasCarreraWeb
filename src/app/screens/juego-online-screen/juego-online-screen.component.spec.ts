import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoOnlineScreenComponent } from './juego-online-screen.component';

describe('JuegoOnlineScreenComponent', () => {
  let component: JuegoOnlineScreenComponent;
  let fixture: ComponentFixture<JuegoOnlineScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoOnlineScreenComponent]
    });
    fixture = TestBed.createComponent(JuegoOnlineScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
