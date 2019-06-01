import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningPredictionComponent } from './winning-prediction.component';

describe('WinningPredictionComponent', () => {
  let component: WinningPredictionComponent;
  let fixture: ComponentFixture<WinningPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinningPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
