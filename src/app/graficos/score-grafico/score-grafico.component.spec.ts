import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreGraficoComponent } from './score-grafico.component';

describe('ScoreGraficoComponent', () => {
  let component: ScoreGraficoComponent;
  let fixture: ComponentFixture<ScoreGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScoreGraficoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
