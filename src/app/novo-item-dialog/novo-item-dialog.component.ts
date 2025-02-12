import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MotoristaFormComponent } from '../forms/motorista-form/motorista-form.component';
import { ViagemFormComponent } from '../forms/viagem-form/viagem-form.component';
import { VeiculoFormComponent } from '../forms/veiculo-form/veiculo-form.component';

@Component({
  selector: 'app-novo-item-dialog',
  standalone: false,
  templateUrl: './novo-item-dialog.component.html',
  styleUrl: './novo-item-dialog.component.css'
})

export class NovoItemDialogComponent implements AfterViewInit {
  @ViewChild('formContainer', { read: ViewContainerRef }) formContainer!: ViewContainerRef;
  selectedFormComponent: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<NovoItemDialogComponent>
  ) {}

  ngAfterViewInit(): void {
    this.loadForm();
  }

  
  loadForm() {
    if (!this.formContainer) return;
    this.formContainer.clear();
    
    let component: any;
    if (this.data.entity === 'motorista') {
      component = MotoristaFormComponent;
    } else if (this.data.entity === 'viagem') {
      component = ViagemFormComponent;
    } else if (this.data.entity === 'veículo') {
      component = VeiculoFormComponent;
    }

    if (component) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef: ComponentRef<any> = this.formContainer.createComponent(factory);

      if ('motoristaAdicionado' in componentRef.instance) {
        (componentRef.instance as MotoristaFormComponent).motoristaAdicionado.subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }}

    
}


