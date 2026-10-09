import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReuseExample } from './reuse-example';

describe('ReuseExample', () => {
  let component: ReuseExample;
  let fixture: ComponentFixture<ReuseExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseExample],
    }).compileComponents();

    fixture = TestBed.createComponent(ReuseExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
