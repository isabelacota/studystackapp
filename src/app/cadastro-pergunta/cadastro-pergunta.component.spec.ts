import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPerguntaComponent } from './cadastro-pergunta.component';

describe('CadastroPerguntaComponent', () => {
  let component: CadastroPerguntaComponent;
  let fixture: ComponentFixture<CadastroPerguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPerguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
