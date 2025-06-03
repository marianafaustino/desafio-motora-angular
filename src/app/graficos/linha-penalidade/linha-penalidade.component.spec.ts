import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaPenalidadeComponent } from './linha-penalidade.component';

describe('LinhaPenalidadeComponent', () => {
  let component: LinhaPenalidadeComponent;
  let fixture: ComponentFixture<LinhaPenalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinhaPenalidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhaPenalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
