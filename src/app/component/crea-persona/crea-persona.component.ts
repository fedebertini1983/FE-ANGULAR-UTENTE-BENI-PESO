import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona-service/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crea-persona',
  templateUrl: './crea-persona.component.html',
  styleUrls: ['./crea-persona.component.css']
})
export class CreaPersonaComponent implements OnInit {

  persona: Persona = new Persona();
  submitted = false;
  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit() { }
  newPersona(): void {
    this.submitted = false;
    this.persona = new Persona();
  }
  save() {
    
    this.personaService.creaPersona(this.persona).subscribe(data => console.log(data), error => console.log(error));
    
    this.persona = new Persona();
   // this.gotoList();
  }
  onSubmit() {
    let error:boolean=false;


   if((this.persona.nome)==null || (this.persona.nome)==undefined || (this.persona.nome)==""){
     alert("Compilare Nome");
     error=true;
   }

    if((this.persona.cognome)==null || (this.persona.cognome)==undefined || (this.persona.cognome)==""){
     alert("Compilare Cognome")
     error=true;
   }

   if((this.persona.email)==null || (this.persona.email)==undefined || (this.persona.email)==""){
     alert("Compilare Email")
     error=true;
   }

   if(!this.persona.email.includes("@") || !this.persona.email.includes(".") ){
     error=true;
     alert("Tipo Di Email Non Valido!")
   }

   if(!error){
   this.submitted = true;
   this.save();
   }

 }

 gotoList() {
   this.router.navigate(['/persone']);
 }
}



