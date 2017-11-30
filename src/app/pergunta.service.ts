import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

export interface Pergunta {
  pergunta: string;
  resposta: string;
}

@Injectable()
export class PerguntaService {

  constructor(private afs: AngularFirestore) { }

  getTodasPerguntas() {
    const perguntasRef = this.afs.collection('perguntas');
    return perguntasRef.valueChanges();
  }

  setPergunta(pergunta, resposta) {
    const p: Pergunta = { pergunta, resposta};

    var addDoc = this.afs.collection('perguntas').add(p).then(ref => {
      console.log('Added pergunta with ID: ', ref.id);
    });

  }

}
