import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    console.log('Protegida');
    /* Se puede obtener la información del perfil a traves del observable "userProfile$" 
    * su nombre tiene un '$' que sirve para indicarnos que es un observable, por eso utilizamos
    * el subscribe. Pero esta vez no vamos a obtener la información del Perfil de esta manera,
    * sino directamente en el HTML, por eso no almacenamos la información en ninguna variable 
    * y tampoco la enviamos al HTML.
    * */
    this.auth.userProfile$.subscribe(profile => console.log(profile));
  }

}
