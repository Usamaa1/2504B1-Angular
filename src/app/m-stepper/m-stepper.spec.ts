import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MStepper } from './m-stepper';

describe('MStepper', () => {
  let component: MStepper;
  let fixture: ComponentFixture<MStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MStepper],
    }).compileComponents();

    fixture = TestBed.createComponent(MStepper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
