import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }
creaPersona(persona: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}/${'persone'}`, persona);

}
getPersona(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}
deletePersona(id: number): Observable<any> {
  //il path era sbagliato mancava /persone/
  return this.http.delete(`${this.baseUrl}/persone/${id}`, { responseType: 'text' });
}
getListaPersone(): Observable<any> {
  return this.http.get(`${this.baseUrl}/${'persona'}`);
}

updatePersona(persona : Object) : Observable<any>{
  return this.http.put(`${this.baseUrl}/${'persone'}`, persona);
}
}
