import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusProdutosComponent } from './meus-produtos.component';

describe('MeusProdutosComponent', () => {
  let component: MeusProdutosComponent;
  let fixture: ComponentFixture<MeusProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
