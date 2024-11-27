import { Component, inject, signal } from '@angular/core';
import { FormService } from './form.service';
import { createUser } from '../shared/interfaces/createUser.interface';
import {ReactiveFormsModule ,FormGroup, FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styles: ``
})
export default class FormComponent {
 toaster = inject(ToastrService) 
 private createUser = inject(FormService)
form:FormGroup
name:FormControl
phone:FormControl
address:FormControl
email:FormControl
 
constructor(){
  this.name = new FormControl("")
  this.phone  = new FormControl("")
  this.address = new FormControl("")
  this.email = new FormControl("")
  this.form = new FormGroup({
    name:this.name,
    phone:this.phone,
    address:this.address,
    email:this.email,
  })
}
handleSumit():void {
  this.createUser.addUser(this.form.value).subscribe(data=>{
    console.log(data)
    this.toaster.success("usuario enviado")
  })
  console.log(this.form.value)
}

}

