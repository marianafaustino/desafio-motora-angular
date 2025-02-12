import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculosService } from '../../veiculos.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-veiculo-form',
  standalone: false,
  templateUrl: './veiculo-form.component.html',
  styleUrl: './veiculo-form.component.css'
})
export class VeiculoFormComponent {
  veiculoForm: FormGroup;
  @Output() veiculoAdicionado = new EventEmitter<void>();

  
  tipoVeiculoOptions = [
    { label: 'Ônibus', value: 'bus' },
    { label: 'Caminhão', value: 'truck' },
    { label: 'Carro', value: 'car' }
  ];

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculosService,
    public dialogRef: MatDialogRef<VeiculoFormComponent>
  ) {
    this.veiculoForm = this.fb.group({
      type: ['', Validators.required], 
      plate: ['', Validators.required]
    });
  }

  submit() {
    if (this.veiculoForm.valid) {
      this.veiculoService.addVeiculo(this.veiculoForm.value).subscribe(
        () => {
          console.log('Veículo cadastrado com sucesso!');
          this.veiculoAdicionado.emit();
          this.dialogRef.close(true); 
        },
        (error) => {
          console.error('Erro ao cadastrar veículo', error);
        }
      );
    }
  }
}

