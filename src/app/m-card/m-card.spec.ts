import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MCard } from './m-card';

describe('MCard', () => {
  let component: MCard;
  let fixture: ComponentFixture<MCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
