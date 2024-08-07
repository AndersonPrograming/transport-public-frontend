import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { iif } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  // inyectamos el servicio y el Router
  private http : LoginService = inject(LoginService);
  private router : Router = inject(Router);

  // Creamos un FormGroup para manejar los datos del formulario
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required], )
  });

  // banderas para mostrar mensajes de error y spinner de carga
  isLoading: boolean = false;
  message: boolean = false;

  // función para hacer login
  login(){
    this.isLoading = true;

    this.http.login(this.formGroup.value).subscribe({
      next: (res) => {
        const Rol = this.http.getRole();
        console.log("este es el rol: ",Rol);
        if(Rol === 'Admin'){

          this.router.navigate(['/Admin']);
        }
        else if(Rol === 'Viewer'){

          this.router.navigate(['/Viewer']);
        }
        if(Rol === 'Editor'){
          this.router.navigate(['/Editor']);
        }

        this.isLoading = false;
        this.message = false;
        this.formGroup.reset();

      },
      error: (error) => {
        console.log(error.error.message);
        this.isLoading = false;
        this.message = true;
        this.formGroup.reset();
      }
    });

  }

}
