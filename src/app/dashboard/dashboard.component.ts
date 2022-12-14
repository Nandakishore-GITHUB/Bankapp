import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data = "enter account number"
  
  dacno =''
  dpsw =''
  damt=''

  wacno =''
  wpsw =''
  wamt=''

  user = ''

  constructor(private ds:DataService) {

    // access username
    this.user = this.ds.currentuser
  }

  Deposit() { 
    var acno = this.dacno
    var psw = this.dpsw
    var amnt = this.damt

    const result = this.ds.deposit(acno,psw,amnt)

    if (result) {
      alert(`${amnt} credited to your account and the balance is ${result}`)
    } else {
      alert('inccorect account number or password')
    }

  }

  Withdraw() {
    var acno = this.wacno
    var psw = this.wpsw
    var amnt = this.wamt

    const result = this.ds.withdraw(acno,psw,amnt)

    if (result) {
      alert(`${amnt} debited from your account and the balance is ${result}`)
    }
  }
}
