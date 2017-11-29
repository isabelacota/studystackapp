import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPerguntaComponent } from './cadastro-pergunta.component';
import { CadastroPerguntaFormComponent } from './cadastro-pergunta-form/cadastro-pergunta-form.component';
import { CadastroPerguntaListaComponent } from './cadastro-pergunta-lista/cadastro-pergunta-lista.component';

import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers: [AngularFireDatabase],
  exports: [CadastroPerguntaFormComponent, CadastroPerguntaListaComponent, CadastroPerguntaComponent],
  declarations: [CadastroPerguntaFormComponent, CadastroPerguntaListaComponent, CadastroPerguntaComponent]
})
export class CadastroPerguntaModule { }
