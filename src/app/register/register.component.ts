import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data = "enter account number"

  username=''
  acno=''
  psw=''

  constructor(private ds:DataService,private router : Router){ }

  register() {
     
    var username = this.username
    var acno = this.acno
    var psw = this.psw

    const result = this.ds.register(acno,username,psw)

    if (result) {
      alert('Registration Success')
      this.router.navigateByUrl('')
    } else {
      alert('User already exixt')
      this.router.navigateByUrl('')
    }
  }
}
