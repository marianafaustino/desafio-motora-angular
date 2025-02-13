import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';  
@Component({
  selector: 'app-mapa',
  standalone: false,
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements AfterViewInit {
  private map!: L.Map;

  private apiUrl = 'http://localhost:3000/vehicles'; 
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [-20.3155, -40.3128],
      zoom: 12
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3
    });

    tiles.addTo(this.map);
    this.loadVeiculos();
  }

  constructor(private http: HttpClient) {}

  private loadVeiculos(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(veiculos => {
      veiculos.forEach(veiculo => {
        this.addVeiculoMarker(veiculo);
      });
    });
  }

  private addVeiculoMarker(veiculo: any): void {
    const carIcon = L.divIcon({
      className: 'custom-car-icon', 
      html: `<span class="material-icons" style="color: #F24625; font-size: 24px;">directions_car</span>`,
      iconSize: [24, 24], 
      iconAnchor: [12, 12] 
    });

    L.marker([veiculo.lat, veiculo.lng], { icon: carIcon })
      .addTo(this.map)
      .bindPopup(`<b>Veículo:</b> ${veiculo.plate}<br><b>Status:</b> ${veiculo.status}`);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }        
}