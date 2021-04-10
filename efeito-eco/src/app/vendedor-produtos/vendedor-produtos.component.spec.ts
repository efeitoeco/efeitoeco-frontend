import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorProdutosComponent } from './vendedor-produtos.component';

describe('VendedorProdutosComponent', () => {
  let component: VendedorProdutosComponent;
  let fixture: ComponentFixture<VendedorProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
