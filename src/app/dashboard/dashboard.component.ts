import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data = "enter account number"
  
  // dacno =''
  // dpsw =''
  // damt=''

  // wacno =''
  // wpsw =''
  // wamt=''

  user = ''

  constructor(private ds:DataService , private fb:FormBuilder) {

    // access username
    this.user = this.ds.currentuser
  }

  depositForm = this.fb.group({dacno:['',[Validators.required,Validators.pattern('[0-9]+')]],
                              dpsw:['',[Validators.required,Validators.pattern('[0-9]+')]],
                              damt:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  withdrawForm = this.fb.group({wacno:['',[Validators.required,Validators.pattern('[0-9]+')]],
                                wpsw:['',[Validators.required,Validators.pattern('[0-9]+')]],
                                wamt:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  Deposit() { 
    var acno = this.depositForm.value.dacno
    var psw = this.depositForm.value.dpsw
    var amnt = this.depositForm.value.damt

    if (this.depositForm.valid) {
      
      const result = this.ds.deposit(acno,psw,amnt)

      if (result) {
        alert(`${amnt} credited to your account and the balance is ${result}`)
      } else {
        alert('inccorect account number or password')
      }
    } 
    
    else {
      alert('invalid credentials')      
    }

  }

  Withdraw() {
    var acno = this.withdrawForm.value.wacno
    var psw = this.withdrawForm.value.wpsw
    var amnt = this.withdrawForm.value.wamt

    if (this.withdrawForm.valid) {
      
      const result = this.ds.withdraw(acno,psw,amnt)

      if (result) {
        alert(`${amnt} debited from your account and the balance is ${result}`)
      }
    } 
    
    else {
      alert('invalid credentials')
    }
    
  }
}
