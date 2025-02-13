import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemDetalheComponent } from './viagem-detalhe.component';

describe('ViagemDetalheComponent', () => {
  let component: ViagemDetalheComponent;
  let fixture: ComponentFixture<ViagemDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViagemDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViagemDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
