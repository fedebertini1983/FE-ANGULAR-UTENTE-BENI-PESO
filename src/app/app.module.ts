import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonaComponent } from './component/lista-persona/lista-persona.component';
import { from } from 'rxjs';
import { CreaPersonaComponent } from './component/crea-persona/crea-persona.component';
import { HomeComponent } from './component/home/home/home.component';
import { ListaBeniComponent } from './component/lista-beni/lista-beni/lista-beni.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaPersonaComponent,
    CreaPersonaComponent,
    HomeComponent,
    ListaBeniComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
