import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viagem-detalhe',
  standalone: false,
  templateUrl: './viagem-detalhe.component.html',
  styleUrl: './viagem-detalhe.component.css'
})
export class ViagemDetalheComponent implements OnInit {
  viagemId!: number;
  viagemDetalhes: any = null;
  vehicleId?: number;
  driverId?: number;
  vehiclePlate?: string;
  driverName?: string;
  startingLocation?: [number, number]; // Local de início da viagem
  finalLocation?: [number, number]; // Local de fim da viagem

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.viagemId = Number(params.get('id'));
      console.log('ID da viagem capturado:', this.viagemId);

      this.getDetalhesViagem();
    });
  }

  private getDetalhesViagem(): void {
    const apiUrl = `http://localhost:3000/travels/${this.viagemId}`;

    this.http.get<any>(apiUrl).subscribe(
      dados => {
        console.log('Detalhes da viagem recebidos:', dados);
        this.viagemDetalhes = dados;
        this.vehicleId = dados.vehicleId;
        this.driverId = dados.driverId;
        this.startingLocation = dados.startingLocation;
        this.finalLocation = dados.finalLocation;

        if (this.vehicleId) {
          this.getVeiculoDetalhes(this.vehicleId);
        }
        if (this.driverId) {
          this.getMotoristaDetalhes(this.driverId);
        }
      },
      error => {
        console.error('Erro ao buscar detalhes da viagem:', error);
      }
    );
  }

  private getVeiculoDetalhes(vehicleId: number): void {
    const vehicleApiUrl = `http://localhost:3000/vehicles/${vehicleId}`;

    this.http.get<any>(vehicleApiUrl).subscribe(
      vehicle => {
        this.vehiclePlate = vehicle.plate; 
      },
      error => {
        console.error('Erro ao buscar detalhes do veículo:', error);
      }
    );
  }

  private getMotoristaDetalhes(driverId: number): void {
    const driverApiUrl = `http://localhost:3000/drivers/${driverId}`;

    this.http.get<any>(driverApiUrl).subscribe(
      driver => {
        this.driverName = driver.name; 
      },
      error => {
        console.error('Erro ao buscar detalhes do motorista:', error);
      }
    );
  }
}