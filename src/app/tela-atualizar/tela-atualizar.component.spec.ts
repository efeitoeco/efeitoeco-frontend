import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAtualizarComponent } from './tela-atualizar.component';

describe('TelaAtualizarComponent', () => {
  let component: TelaAtualizarComponent;
  let fixture: ComponentFixture<TelaAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
