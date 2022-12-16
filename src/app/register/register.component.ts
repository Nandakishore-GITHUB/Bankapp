import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data = "enter account number"

  // username=''
  // acno=''
  // psw=''

  constructor(private ds:DataService,private router : Router , private fb:FormBuilder){ }

  registerForm = this.fb.group({username:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
                                acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
                                psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  register() {
     
    var username = this.registerForm.value.username
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw

    if(this.registerForm.valid){

          const result = this.ds.register(acno,username,psw)

    if (result) {
      alert('Registration Success')
      this.router.navigateByUrl('')
    } else {
      alert('User already exixt')
      this.router.navigateByUrl('')
    }

    }
    else{
      alert('invalid Form')
    }


  }
}
