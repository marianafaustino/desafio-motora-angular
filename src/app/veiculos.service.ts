import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private apiUrl = 'http://localhost:3000/vehicles'; 
  
    constructor(private http: HttpClient) { }
  
    getVeiculo(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
}
