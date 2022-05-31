import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundeComponent } from './funde.component';

describe('FundeComponent', () => {
  let component: FundeComponent;
  let fixture: ComponentFixture<FundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
