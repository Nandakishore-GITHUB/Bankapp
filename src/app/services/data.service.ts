import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser = ''
  currentAcno = ''

  constructor() { }

  userDetails:any = {
    1000:{acno:1000,username:'anu',password:123,balance:0,transaction:[]},
    1001:{acno:1001,username:'amal',password:123,balance:0,transaction:[]},
    1002:{acno:1002,username:'arun',password:123,balance:0,transaction:[]},
    1003:{acno:1003,username:'megha',password:123,balance:0,transaction:[]},
    1004:{acno:1004,username:'anoop',password:123,balance:0,transaction:[]}
  }

  register(acno:any,username:any,psw:any){

    var userDetails = this.userDetails

    if (acno in userDetails) {
      return false
    } else {
      userDetails[acno]={acno,username,password:psw,balance:0,transaction:[]}
      console.log(userDetails);
      
      return true
    }
  }


  login(acno:any,psw:any){

    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        // current account number
        this.currentAcno = acno
        // store username
        this.currentuser = userDetails[acno]['username']
        return true
      }
      else{
        return false
      }
    } else {
      return false
    }
    
  }

  deposit(acno:any,password:any,amount:any){

    var userDetails = this.userDetails
    var amnt = parseInt(amount)

    if (acno in userDetails) {

      if (password==userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amnt
        userDetails[acno]['transaction'].push({type:'CREDIT',amount:amnt})
        return userDetails[acno]['balance']
      } else {
        return false
      }
      
    } else {
      return false
    }
  }


  withdraw(acno:any,password:any,amount:any){

    var userDetails = this.userDetails
    var amnt = parseInt(amount)

    if (acno in userDetails) {

      if (password==userDetails[acno]['password']) {
          if (userDetails[acno]['balance'] >= amnt) {
            userDetails[acno]['balance'] -= amnt
            userDetails[acno]['transaction'].push({type:'DEBIT',amount:amnt})
            return userDetails[acno]['balance']
          } else {
            alert('Inssuficient Balance')
            return false
            
          }
      } else {
        alert('inccorect password')
        return false
      }
      
    } else {
      alert('incorrect account number')
      return false
    }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
  
}
