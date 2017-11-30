import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2/index';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFirestoreModule  } from 'angularfire2/firestore';

import { AppRoutingModule } from './app.routing.module';

import { CadastroPerguntaModule } from './cadastro-pergunta/cadastro-pergunta.module';
import { LoginModule } from './login/login.module';

import { AuthGuard } from './auth.service';
import { PerguntaService } from './pergunta.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CadastroPerguntaModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AppRoutingModule,
    LoginModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [AuthGuard, PerguntaService, AngularFirestoreModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
