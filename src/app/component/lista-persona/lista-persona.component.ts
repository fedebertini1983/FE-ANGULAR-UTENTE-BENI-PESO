import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona-service/persona.service';
import { Persona } from 'src/app/model/Persona';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BeniPosseduti } from 'src/app/model/BeniPosseduti';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {
  id: number;
  persona: Persona;
  beniPosseduti: BeniPosseduti[];
  persone: Observable<Persona[]>;

  constructor(private personaService: PersonaService, private router: Router) { }
  submitted=false;
  ngOnInit() {
    this.beniPosseduti= new Array<BeniPosseduti>();
    this.persona = new Persona();
    this.persona.beni= this.beniPosseduti;
    this.reloadData();
   
  
}
  
  
  cancellaPersona(id: number) {
    this.personaService.deletePersona(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  reloadData() {
    this.persone = this.personaService.getListaPersone();
  }
  saveUpdate(persona: Persona){

  this.personaService.updatePersona(persona)
    .subscribe(data => {
      console.log(data);
      persona = data;
      error => console.log(error)});
    this.goBack();

  }

  goBack(){
    this.router.navigate(['/persona']);
  }
  onUpdate(persona:Persona){
    let error:boolean=false;


 if((persona.nome)==null || (persona.nome)==undefined || (persona.nome)==""){
   alert("Compilare FirstName");
   error=true;
 }

  if((persona.cognome)==null || (persona.cognome)==undefined || (persona.cognome)==""){
   alert("Compilare LastName")
   error=true;
 }

 if((persona.email)==null || (persona.email)==undefined || (persona.email)==""){
   alert("Compilare Email")
   error=true;
 }

 if(!persona.email.includes("@") || !persona.email.includes(".") ){
   error=true;
   alert("Tipo Di Email Non Valido!")
 }

 if(!error){
 this.submitted=true;
this.saveUpdate(persona)
 }
}
visualizzaBeni(){
  this.router.navigate(['beni']);
}
}

