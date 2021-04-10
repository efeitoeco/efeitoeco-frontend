import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorDadosComponent } from './vendedor-dados.component';

describe('VendedorDadosComponent', () => {
  let component: VendedorDadosComponent;
  let fixture: ComponentFixture<VendedorDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
