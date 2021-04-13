import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCategoriaComponent } from './cadastrar-categoria.component';

describe('CadastrarCategoriaComponent', () => {
  let component: CadastrarCategoriaComponent;
  let fixture: ComponentFixture<CadastrarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
