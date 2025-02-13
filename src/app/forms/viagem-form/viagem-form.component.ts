import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculosService } from '../../veiculos.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MotoristasService } from '../../motoristas.service';
import { ViagensService } from '../../viagens.service';
import { ViagensComponent } from '../../viagens/viagens.component';

@Component({
  selector: 'app-viagem-form',
  templateUrl: './viagem-form.component.html',
  styleUrl: './viagem-form.component.css',
  standalone: false,
})
export class ViagemFormComponent {
  viagemForm: FormGroup;
  @Output() viagemAdicionado = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculosService,
    private motoristaService: MotoristasService,
    private viagemService: ViagensService,
    public dialogRef: MatDialogRef<ViagensComponent>
  ) {
    this.viagemForm = this.fb.group({
      motoristaNome: ['', Validators.required],
      veiculoPlaca: ['', Validators.required],
    });
  }

  submit() {
    if (this.viagemForm.valid) {
      const motoristaNome = this.viagemForm.value.motoristaNome;
      const veiculoPlaca = this.viagemForm.value.veiculoPlaca;

      this.motoristaService.getMotoristaPorNome(motoristaNome).subscribe(
        (motorista) => {
          if (motorista && motorista.id) {
            const driverId = motorista.id;

            this.veiculoService.getVeiculoPorPlaca(veiculoPlaca).subscribe(
              (veiculo) => {
                if (veiculo && veiculo.id) {
                  const vehicleId = veiculo.id;

                  const novaViagem = { driverId, vehicleId };

                  this.viagemService.addViagem(novaViagem).subscribe(
                    () => {
                      console.log('Viagem cadastrada com sucesso!');
                      this.viagemAdicionado.emit();
                      this.dialogRef.close(true);
                    },
                    (error) => {
                      console.error('Erro ao cadastrar viagem', error);
                    }
                  );
                } else {
                  console.error('Veículo não encontrado.');
                }
              },
              (error) => {
                console.error('Erro ao buscar veículo', error);
              }
            );
          } else {
            console.error('Motorista não encontrado.');
          }
        },
        (error) => {
          console.error('Erro ao buscar motorista', error);
        }
      );
    }
  }
}
