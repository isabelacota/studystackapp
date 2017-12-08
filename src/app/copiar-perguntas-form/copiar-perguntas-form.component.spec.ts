import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiarPerguntasFormComponent } from './copiar-perguntas-form.component';

describe('CopiarPerguntasFormComponent', () => {
  let component: CopiarPerguntasFormComponent;
  let fixture: ComponentFixture<CopiarPerguntasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiarPerguntasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiarPerguntasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
