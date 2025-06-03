import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarEventosComponent } from './radar-eventos.component';

describe('RadarEventosComponent', () => {
  let component: RadarEventosComponent;
  let fixture: ComponentFixture<RadarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadarEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
