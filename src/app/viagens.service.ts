import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViagensService {

  private apiUrl = 'http://localhost:3000/travels'; 
    
      constructor(private http: HttpClient) { }
    
      getViagens(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
      }

      addViagem(viagem: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, viagem);
      }
}
