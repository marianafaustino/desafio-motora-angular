import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemFormComponent } from './viagem-form.component';

describe('ViagemFormComponent', () => {
  let component: ViagemFormComponent;
  let fixture: ComponentFixture<ViagemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViagemFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViagemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
