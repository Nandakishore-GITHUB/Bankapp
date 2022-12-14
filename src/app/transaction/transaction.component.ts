import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  acno:any
  transaction:any
  constructor(public ds:DataService) { 

    this.acno = this.ds.currentAcno
    this.transaction = this.ds.getTransaction(this.acno)

    // for(i of transaction) -- go to html 
    

  }
}
