import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro-pergunta-form',
  templateUrl: './cadastro-pergunta-form.component.html',
  styleUrls: ['./cadastro-pergunta-form.component.css']
})
export class CadastroPerguntaFormComponent implements OnInit {

  constructor( private angularFire: AngularFireDatabase ) { }

  ngOnInit() {
  }

  form_submit(f: NgForm) {
    this.angularFire.list("perguntas").push(
      {
        pergunta: f.controls.pergunta.value,
        resposta: f.controls.resposta.value
      }
    ).then((t: any) => console.log('dados gravados: ' + t.key)),
      (e: any) => console.log(e.message);

      f.controls.pergunta.setValue('');
      f.controls.resposta.setValue('');
  }

}
