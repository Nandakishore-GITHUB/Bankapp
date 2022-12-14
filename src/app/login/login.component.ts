import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim="Your perfect banking partner"
  data = "enter account number"
  acno=''
  psw=''


  constructor(private router:Router,private ds:DataService) { }

  login(){
    var acno = this.acno
    var psw = this.psw

    const result = this.ds.login(acno,psw)

    if (result) {
      alert('Login Success')
      this.router.navigateByUrl('dashboard')
    } else {
      alert('Inccorect password or username')
    }
  }

  // login(){
  //   var acno = this.acno
  //   var psw = this.psw
  //   var userDetails = this.userDetails
  //   if (acno in userDetails) {
  //     if (psw == userDetails[acno]["password"]) {
  //       alert('Login Success')
  //       this.router.navigateByUrl('dashboard')
  //     }
  //     else{
  //       alert('Inccorect Password')
  //     }
  //   } else {
  //     alert('Inccorect Account Number')
  //   }
  //   // alert('login clicked')
  // }

  // login(a:any,b:any){

  //   this.acno = a.value
  //   this.psw = b.value
    
    
  //   var acno = this.acno
  //   var psw = this.psw
  //   var userDetails = this.userDetails
  //   if (acno in userDetails) {
  //     if (psw == userDetails[acno]["password"]) {
  //       alert('Login Success')
  //     }
  //     else{
  //       alert('Inccorect Password')
  //     }
  //   } else {
  //     alert('Inccorect Account Number')
  //   }
  // }

//   accnoChange(event:any){
      
//       this.acno = event.target.value
//       // console.log(this.acno);
      
//   }

//   pswChange(event:any){
      
//     this.psw = event.target.value
//     // console.log(this.psw);   
// }

}