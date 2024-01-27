// 1

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

  // 2

  function pow(x,n){
    let result = 1;
    for(let i = 0; i<n; i++){
        result *= x; 
    }
    return result;
  }

  console.log(pow(3,2));
  console.log(pow(3,3));
  console.log(pow(10,2));

  // 3 

//   const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
//   };
  
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );

  // 4 

//   let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10


// 5 

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = [];

// for(let i = 0; i<users.length; i++){
//     names.push(users[i].name)
// }

// alert( names ); // Вася, Петя, Маша

// 6 


let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

// 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr){
    let averagAge = 0;
    let counter = 0;
    for(let i = 0; i<arr.length; i++){
        averagAge += arr[i].age;
        counter++;
    }
    return averagAge/counter;
} 

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28