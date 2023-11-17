import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesDeLaPromocionScreenComponent } from './bases-de-la-promocion-screen.component';

describe('BasesDeLaPromocionScreenComponent', () => {
  let component: BasesDeLaPromocionScreenComponent;
  let fixture: ComponentFixture<BasesDeLaPromocionScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasesDeLaPromocionScreenComponent]
    });
    fixture = TestBed.createComponent(BasesDeLaPromocionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
