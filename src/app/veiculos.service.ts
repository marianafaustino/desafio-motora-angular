import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private apiUrl = 'http://localhost:3000/vehicles'; 
  
    constructor(private http: HttpClient) { }
  
    getVeiculo(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }

    getVeiculoPorPlaca(placa: string): Observable<any> {
      return this.http.get<any[]>(this.apiUrl).pipe(
        map((veiculos) => veiculos.find(veiculo => veiculo.plate === placa))
      );
    }

    addVeiculo(veiculo: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, veiculo);
    }
}
