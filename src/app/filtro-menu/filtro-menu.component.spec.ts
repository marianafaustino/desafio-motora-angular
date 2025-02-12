import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMenuComponent } from './filtro-menu.component';

describe('FiltroMenuComponent', () => {
  let component: FiltroMenuComponent;
  let fixture: ComponentFixture<FiltroMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltroMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
