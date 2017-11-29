import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPerguntaFormComponent } from './cadastro-pergunta-form.component';

describe('CadastroPerguntaFormComponent', () => {
  let component: CadastroPerguntaFormComponent;
  let fixture: ComponentFixture<CadastroPerguntaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPerguntaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPerguntaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
