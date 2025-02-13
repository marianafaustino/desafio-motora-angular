import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  private apiUrl = 'http://localhost:3000/drivers'; 

  constructor(private http: HttpClient) { }

  getMotorista(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMotoristaPorNome(nome: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((motoristas) => motoristas.find(motorista => motorista.name.toLowerCase() === nome.toLowerCase()))
    );
  }

  addMotorista(motorista: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, motorista);
  }
}
