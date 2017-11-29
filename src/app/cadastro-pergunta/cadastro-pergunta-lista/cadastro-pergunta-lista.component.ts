import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cadastro-pergunta-lista',
  templateUrl: './cadastro-pergunta-lista.component.html',
  styleUrls: ['./cadastro-pergunta-lista.component.css']
})
export class CadastroPerguntaListaComponent implements OnInit {

  perguntas: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.perguntas = db.list('perguntas').valueChanges();
  }

  ngOnInit() {
  }

}
