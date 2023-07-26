import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
  users = ["john","smith","niks"]
    num1 = 10
    num2 = 5

    get firstUser(){
        return this.users[0].toUpperCase() 
    }

    get multiply(){
        return this.num1*this.num2
    }
}
