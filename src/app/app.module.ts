import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentificadorComponent } from './identificador/identificador.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DadosDemograficosComponent } from './dados-demograficos/dados-demograficos.component';

const appRoutes: Routes = [
  { path: 'dados-demograficos', component: DadosDemograficosComponent },
  { path: 'identificador', component: IdentificadorComponent },
  { path: '', redirectTo: '/identificador', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    IdentificadorComponent,
    DadosDemograficosComponent
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
