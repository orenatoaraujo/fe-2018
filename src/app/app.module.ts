import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IdentificadorComponent } from './identificador/identificador.component';
import { DadosDemograficosComponent } from './dados-demograficos/dados-demograficos.component';
import { IndividuosComponent } from './individuos/individuos.component';
import { ComunicacaoComponent } from './comunicacao/comunicacao.component';
import { ComunicacaoListaComponent } from './comunicacao/comunicacao-lista.component';
import { NomesComponent } from './nomes/nomes.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { NomeListaComponent } from './nome-lista/nome-lista.component';
import { IndividuosListaComponent } from './individuos-lista/individuos-lista.component';
import { IndividuoComponent } from './individuo/individuo.component';

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
    IndividuosComponent,
    ComunicacaoComponent,
    ComunicacaoListaComponent,
    NomesComponent,
    EnderecoComponent,
    NomeListaComponent,
    IndividuosListaComponent,
    IndividuoComponent
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
