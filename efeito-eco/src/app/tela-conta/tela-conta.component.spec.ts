import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaContaComponent } from './tela-conta.component';

describe('TelaContaComponent', () => {
  let component: TelaContaComponent;
  let fixture: ComponentFixture<TelaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
