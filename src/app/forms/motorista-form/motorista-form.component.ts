import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MotoristasService } from '../../motoristas.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-motorista-form',
  standalone: false,
  templateUrl: './motorista-form.component.html',
  styleUrl: './motorista-form.component.css'
})
export class MotoristaFormComponent {
  motoristaForm: FormGroup;
  @Output() motoristaAdicionado = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private motoristasService: MotoristasService,
    public dialogRef: MatDialogRef<MotoristaFormComponent>
  ) {
    this.motoristaForm = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      cnh: ['', Validators.required],
      status: ['']
    });
  }

  submit() {
    if (this.motoristaForm.valid) {
      this.motoristasService.addMotorista(this.motoristaForm.value).subscribe(
        () => {
          console.log('Motorista cadastrado com sucesso!');
          this.motoristaAdicionado.emit(); 
          this.dialogRef.close(true); 
        },
        (error) => {
          console.error('Erro ao cadastrar motorista', error);
        }
      );
    }
  }
}
