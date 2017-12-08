import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PerguntaService } from '../pergunta.service';

enum Dificuldade {
  facil = 1 ,
  medio = 2,
  dificil = 3
}

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {

  disciplinas: Observable<any[]>
  assuntos: Observable<any[]>

  disciplina: Observable<any[]>
  disciplina_nome: string;
  disciplina_id: string;

  dificuldade: number;
  options : Array<Number>;
  Dificuldade : typeof Dificuldade = Dificuldade;
  
  perguntas: Observable<any[]>;

  constructor(private perguntaService: PerguntaService) {
    this.perguntas = this.perguntaService.getTodasPerguntas();
   }

  ngOnInit() {
    this.disciplinas = this.perguntaService.getTodasDisciplinas()
    this.options = [1,2,3];
    this.dificuldade = 1;
  }

  onSelectDisciplina(d): void {
    this.disciplina_nome= d.nome;
    this.disciplina_id = d.id;
    this.disciplina = d;
    console.log('Selecionada disciplina', this.disciplina_id);

    this.perguntas = this.perguntaService.getPerguntasFiltro(this.disciplina, this.dificuldade)
  }

  onSelectDificuldade(d): void {
    this.dificuldade= d;
    console.log('Selecionada dificuldade', this.dificuldade);

    this.perguntas = this.perguntaService.getPerguntasFiltro(this.disciplina, this.dificuldade)
  }

}
