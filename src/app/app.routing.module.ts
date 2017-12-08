import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { CadastroPerguntaComponent } from './cadastro-pergunta/cadastro-pergunta.component';
import { MenuComponent } from './menu/menu.component';
import { EstudoComponent } from './estudo/estudo.component';
import { CopiarPerguntasFormComponent } from './copiar-perguntas-form/copiar-perguntas-form.component';

import { AuthGuard } from './auth.service';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent},
    { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
    { path: 'estudo', component: EstudoComponent, canActivate: [AuthGuard] },
    { path: 'cadastro', component: CadastroPerguntaComponent, canActivate: [AuthGuard] },
    { path: 'copiar', component: CopiarPerguntasFormComponent, canActivate: [AuthGuard] }
    
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }