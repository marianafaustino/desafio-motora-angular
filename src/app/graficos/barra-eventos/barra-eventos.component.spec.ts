import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraEventosComponent } from './barra-eventos.component';

describe('BarraEventosComponent', () => {
  let component: BarraEventosComponent;
  let fixture: ComponentFixture<BarraEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
