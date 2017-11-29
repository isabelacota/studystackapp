import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPerguntaListaComponent } from './cadastro-pergunta-lista.component';

describe('CadastroPerguntaListaComponent', () => {
  let component: CadastroPerguntaListaComponent;
  let fixture: ComponentFixture<CadastroPerguntaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPerguntaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPerguntaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
