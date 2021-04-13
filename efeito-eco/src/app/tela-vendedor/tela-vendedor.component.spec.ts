import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaVendedorComponent } from './tela-vendedor.component';

describe('TelaVendedorComponent', () => {
  let component: TelaVendedorComponent;
  let fixture: ComponentFixture<TelaVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
