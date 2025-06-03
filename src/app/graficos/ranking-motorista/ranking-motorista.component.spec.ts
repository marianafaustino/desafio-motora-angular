import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingMotoristaComponent } from './ranking-motorista.component';

describe('RankingMotoristaComponent', () => {
  let component: RankingMotoristaComponent;
  let fixture: ComponentFixture<RankingMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
