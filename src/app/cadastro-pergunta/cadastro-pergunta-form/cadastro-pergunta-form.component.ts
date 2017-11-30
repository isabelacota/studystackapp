import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { PerguntaService } from '../../pergunta.service';

@Component({
  selector: 'app-cadastro-pergunta-form',
  templateUrl: './cadastro-pergunta-form.component.html',
  styleUrls: ['./cadastro-pergunta-form.component.css']
})

export class CadastroPerguntaFormComponent implements OnInit {

  constructor( 
    private angularFire: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private router: Router,
    private perguntaService: PerguntaService
  ) { }

  ngOnInit() {
  }

  form_submit(f: NgForm) {

    this.perguntaService.setPergunta(f.controls.pergunta.value, f.controls.resposta.value);

    f.controls.pergunta.setValue('');
    f.controls.resposta.setValue('');
  }

  form_logout() {
    this.afAuth.auth.signOut();
    this.router.navigate([""]);
  }

}
