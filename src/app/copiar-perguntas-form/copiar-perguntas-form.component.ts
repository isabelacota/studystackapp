import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { PerguntaService } from '../pergunta.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable'

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-copiar-perguntas-form',
  templateUrl: './copiar-perguntas-form.component.html',
  styleUrls: ['./copiar-perguntas-form.component.css']
})
export class CopiarPerguntasFormComponent implements OnInit {

  origem: string;
  destino: string;

  disciplinas: Observable<any[]>

  constructor(
    private angularFire: AngularFireDatabase,
    private perguntaService: PerguntaService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.origem = 'perguntas';
    this.disciplinas = this.perguntaService.getTodasDisciplinas()
  }

  onSelectDestino(d): void {
    this.destino= d.id;
    console.log('Selecionado destino', this.destino);
  } 

  form_submit(f: NgForm) {

      const perguntasRef = this.afs.collection('perguntas')
      .snapshotChanges() 
      .map(lists => {
          return lists
          .map(list => {
              const data = list.payload.doc.data();
              const id = list.payload.doc.id;
              console.log('Selecionado data', data);
              var ref = this.afs.collection('direito_processual_penal').add(data);                
              return { id, ...data };                
          })
      });
 
      this.destino = '';
  }

}
