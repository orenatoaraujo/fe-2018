import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IdentificadorComponent } from './identificador/identificador.component';
import { DadosDemograficosComponent } from './dados-demograficos/dados-demograficos.component';
import { ComunicacaoComponent } from './comunicacao/comunicacao.component';
import { ComunicacaoListaComponent } from './comunicacao-lista/comunicacao-lista.component';
import { NomesComponent } from './nomes/nomes.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { NomeListaComponent } from './nome-lista/nome-lista.component';
import { IndividuosListaComponent } from './individuos-lista/individuos-lista.component';
import { IndividuoComponent } from './individuo/individuo.component';
import { HeaderComponent } from './partials/header/header.component';
import { IdentificadorListaComponent } from './identificador-lista/identificador-lista.component';
import { EnderecoListaComponent } from './endereco-lista/endereco-lista.component';

const appRoutes: Routes = [
  { path: 'individuos', component: IndividuosListaComponent },
  { path: 'individuo', component: IndividuoComponent },
  { path: '', redirectTo: '/individuos', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    IdentificadorComponent,
    DadosDemograficosComponent,
    ComunicacaoComponent,
    ComunicacaoListaComponent,
    NomesComponent,
    EnderecoComponent,
    NomeListaComponent,
    IndividuosListaComponent,
    IndividuoComponent,
    HeaderComponent,
    IdentificadorListaComponent,
    EnderecoListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
