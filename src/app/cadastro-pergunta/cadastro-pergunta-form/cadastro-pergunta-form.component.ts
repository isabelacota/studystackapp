import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { PerguntaService } from '../../pergunta.service';

import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-cadastro-pergunta-form',
  templateUrl: './cadastro-pergunta-form.component.html',
  styleUrls: ['./cadastro-pergunta-form.component.css']
})

export class CadastroPerguntaFormComponent implements OnInit {

  disciplinas: Observable<any[]>

  disciplina_nome: string;
  disciplina_id: string;

  dificuldade: number;
  comentario: string;

  constructor( 
    private angularFire: AngularFireDatabase,
    private perguntaService: PerguntaService
  ) { }

  ngOnInit() {  
    this.disciplinas = this.perguntaService.getTodasDisciplinas() 
  }

  onSelectDisciplina(d): void {
    this.disciplina_nome= d.nome;
    this.disciplina_id = d.id;
    console.log('Selecionada disciplina', this.disciplina_id);
  } 

  form_submit(f: NgForm) {

    this.perguntaService.setPergunta(f.controls.pergunta.value, f.controls.resposta.value, f.controls.dificuldade.value, 
              f.controls.comentario.value, this.disciplina_id);

    f.controls.pergunta.setValue('');
    f.controls.resposta.setValue('');
    //f.controls.dificuldade.setValue('');
    f.controls.comentario.setValue('');

  }
}
