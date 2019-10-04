import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Encargado } from 'src/app/models/Encargado.model';
import { EncargadoService } from '../../../../services/encargado/encargado.service';


@Component({
  selector: 'app-crear-encargado',
  templateUrl: './crear-encargado.component.html',
  styleUrls: ['./crear-encargado.component.scss']
})
export class CrearEncargadoComponent implements OnInit {

  formEncargado: FormGroup;

  idlisto:any;

  constructor(public encargadoservice:EncargadoService) { }

  ngOnInit() {
   
    var id = localStorage.getItem('empresa');

    this.idlisto = JSON.parse(id);
    
   

    this.formEncargado = new FormGroup({
      empresa_id:new FormControl(`${this.idlisto.id}` , Validators.required),
      nombre:new FormControl(null , Validators.required),
      apellido:new FormControl(null , Validators.required),
      usuario:new FormControl(null , Validators.required),
      password:new FormControl(null , Validators.required),
      password2:new FormControl(null , Validators.required)
      });

      
  }


  crearEncargado(){
  
    


    if(this.formEncargado.value.password != this.formEncargado.value.password2){
      swal("error", "Las contraseñas deben ser iguales",'error');
      return;
    } 

    if(this.formEncargado.invalid){
    return; 
  }

  
  
  
  let encargado = new Encargado(this.formEncargado.value.empresa_id,
                                this.formEncargado.value.nombre,
                                this.formEncargado.value.apellido,
                                this.formEncargado.value.usuario,
                                this.formEncargado.value.password
                                  )
                                  
  this.encargadoservice.crearEncargado(encargado).subscribe(res=>{
    
  })



  }
}
