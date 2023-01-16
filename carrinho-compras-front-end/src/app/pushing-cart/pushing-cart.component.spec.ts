import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushingCartComponent } from './pushing-cart.component';

describe('PushingCartComponent', () => {
  let component: PushingCartComponent;
  let fixture: ComponentFixture<PushingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
