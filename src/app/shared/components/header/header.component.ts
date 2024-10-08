import { Component, inject} from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ExpedienteService } from '@core/services/expediente.service';
import { LoginService } from '@core/services/login.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  form = new FormGroup({
    expediente: new FormControl('',Validators.required),
  });

  router = inject(Router);
  authService = inject(LoginService);
  expedienteService = inject(ExpedienteService)

  Rol = this.authService.getRole();

  ruta = this.router.url;



  buscarExpediente(){

    if(this.form.value.expediente){
      this.expedienteService.changeData(this.form.value.expediente);

      const ruta = this.Rol+'/Expedientes/Tabla';
      this.router.navigate([ruta]);
    }

  }



}
