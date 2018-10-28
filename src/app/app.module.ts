import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IdentificadorComponent } from './identificador/identificador.component';
import { DadosDemograficosComponent } from './dados-demograficos/dados-demograficos.component';
import { IndividuosComponent } from './individuos/individuos.component';

const appRoutes: Routes = [
  { path: 'identificador', component: IdentificadorComponent },
  { path: 'dados-demograficos', component: DadosDemograficosComponent },
  { path: 'individuos', component: IndividuosComponent },
  { path: '', redirectTo: '/individuos', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    IdentificadorComponent,
    DadosDemograficosComponent,
    IndividuosComponent
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
