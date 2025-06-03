import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosGraficoComponent } from './lista-eventos-grafico.component';

describe('ListaEventosGraficoComponent', () => {
  let component: ListaEventosGraficoComponent;
  let fixture: ComponentFixture<ListaEventosGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaEventosGraficoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEventosGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
