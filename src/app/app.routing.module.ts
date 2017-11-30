import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { CadastroPerguntaComponent } from './cadastro-pergunta/cadastro-pergunta.component';

import { AuthGuard } from './auth.service';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent},
    { path: 'cadastro', component: CadastroPerguntaComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }