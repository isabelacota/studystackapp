import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

export interface Pergunta {
  pergunta: string;
  resposta: string;
  dificuldade: number;
  comentario: string;
  concursos: Array<string>;
}

export interface Disciplina {
  nome: string;
}

@Injectable()
export class PerguntaService {

  constructor(private afs: AngularFirestore) { }

  getTodasDisciplinas() {

    const disciplinasRef = this.afs.collection('disciplinas')  
    .snapshotChanges() 
    .map(lists => {
        return lists
        .map(list => {
            const data = list.payload.doc.data();
            const id = list.payload.doc.id;                
            return { id, ...data };                
        })
    });     
    return disciplinasRef;
  }

  getTodasPerguntas() {
    const perguntasRef = this.afs.collection('perguntas')
    .snapshotChanges() 
    .map(lists => {
        return lists
        .map(list => {
            const data = list.payload.doc.data();
            const id = list.payload.doc.id;                
            return { id, ...data };                
        })
    });     
    return perguntasRef;
  }

  getPerguntasFiltro(disciplina, dificuldade) {
    const perguntasRef = this.afs.collection(disciplina.id, ref => ref.where('dificuldade', '==', dificuldade))  
    .snapshotChanges() 
    .map(lists => {
        return lists
        .map(list => {
            const data = list.payload.doc.data();
            const id = list.payload.doc.id;                
            return { id, ...data };                
        })
    
    })    
    return perguntasRef;
  }

  setPergunta(pergunta, resposta, dificuldade, comentario, disciplina) {
    var concursos = ['itep_rn'];
    const p: Pergunta = { pergunta, resposta, dificuldade, comentario, concursos};

    var addDoc = this.afs.collection(disciplina).add(p).then(ref => {
      console.log('Added pergunta with ID: ', ref.id);
    });

  }

}
