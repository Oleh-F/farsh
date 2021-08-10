import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersDetailsComponent } from './burgers-details.component';

describe('BurgersDetailsComponent', () => {
  let component: BurgersDetailsComponent;
  let fixture: ComponentFixture<BurgersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
