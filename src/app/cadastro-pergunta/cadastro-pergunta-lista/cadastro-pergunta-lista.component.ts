import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PerguntaService } from '../../pergunta.service';

@Component({
  selector: 'app-cadastro-pergunta-lista',
  templateUrl: './cadastro-pergunta-lista.component.html',
  styleUrls: ['./cadastro-pergunta-lista.component.css']
})
export class CadastroPerguntaListaComponent implements OnInit {

  perguntas: Observable<any[]>;

  constructor(private perguntaService: PerguntaService) {
    this.perguntas = this.perguntaService.getTodasPerguntas()
  }

  ngOnInit() { 
  }

}
