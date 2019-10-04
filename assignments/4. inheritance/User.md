# Inheritance

User
  -properties
    -name
    -score
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1

PaidUser
  -properties
    -name
    -score
    -balance
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1
    -increaseBalance: returna balance decreased by 1

Using Inheritance convert the above into following patterns.

1. Prototypal Pattern
2. Pseudoclassical Pattern
3. Classes


```js
// <!-- prototypal pattern-->

const UserMethods = {
  increaseScore: function () {
    console.log(`score increased by ${++(this.score)}`);
},
  decreaseScore: function () {
    console.log(`score decrease by ${--(this.score)}`);
  }
}

function User(name, score){
  var properties = Object.create(UserMethods);
   properties.name = name;
   properties.score = score;
  return properties;
}



 const PaidUserMethods ={
   increaseBalance: function () {
    return `balance is increased by ${++(this.balance)}`;
  },
  decreaseBalance : function () {
    return `balance is decreased by ${--(this.balance)}`;
  }
 }

Object.setPrototypeOf(PaidUserMethods, UserMethods);

function PaidUser(name,score,balance){
  let paidUserObj = User(name, score);
  paidUserObj.balance = balance;
  Object.setPrototypeOf(paidUserObj, PaidUserMethods);
  return paidUserObj;
}

var sunny = PaidUser('sunny', 0, 1000);
sunny.increaseBalance()


// Pseudoclassical Pattern

function User(name,score){
   this.name = name;
   this.score = score;
   User.prototype.increaseScore = function () {
    return (`score increased by ${this.score++}`);
   }
    User.prototype.decreaseScore = function () {
      return (`score decrease by ${this.score--}`);
    }
}

 function PaidUser (name,score,balance) {
   User.call (this,name,score);
   this.balance = balance;
    PaidUser.prototype.increaseBalance = function () {
      return `balance is increased by ${++(this.balance)}`;
    }
    PaidUser.prototype.decreaseBalance = function () {
         return `balance is decreased by ${--(this.balance)}`;
    }
   Object.setPrototypeOf(PaidUser.prototype,User.prototype);
   }

var sunny = new PaidUser('sunny',1,100);
sunny.increaseBalance()

// class

class User {
  constructor (name,score){
    this.name = name;
    this.score = score;
  }
  increase () {
    console.log(`score increased by ${this.score++}`)
  };
  decrease () {
    console.log(`score decreased by ${this.score--}`)
  };
}

class PaidUser extends User {
  constructor(name,score,balance){
    super(name,score);
    this.balance = balance;
    
}
  increaseBalance() {
    console.log (`balance is increased by ${this.balance++}`);
  }
}
var sunny = new PaidUser('sunny',0,100);
sunny.increase()
