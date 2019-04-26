import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDetalleComponent } from './carro-detalle.component';

describe('CarroDetalleComponent', () => {
  let component: CarroDetalleComponent;
  let fixture: ComponentFixture<CarroDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
