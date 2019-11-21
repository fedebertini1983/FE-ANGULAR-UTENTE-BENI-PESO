import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPersonaComponent } from './component/lista-persona/lista-persona.component';
import { CreaPersonaComponent } from './component/crea-persona/crea-persona.component';
import { HomeComponent } from './component/home/home/home.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  {path: 'persona', component: ListaPersonaComponent},
  {path: 'persone', component: CreaPersonaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
