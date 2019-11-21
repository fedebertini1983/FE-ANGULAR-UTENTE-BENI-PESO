import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/app/model/Persona';

@Injectable({
  providedIn: 'root'
})
export class BeniService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }
  findBeniPossedutiByPersona(persona:Persona){
return this.http.get(`${this.baseUrl}/${'beni'}`);
  }
}
