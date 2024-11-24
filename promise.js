// const p1 = Promise.resolve("hi sahfi");
// const p2 = Promise.resolve(p1);

// p2.then((value) => {
//     console.log(`value: ${value}`); 
// });

// console.log(`p1 === p2 ? ${p1 === p2}`);

// console.log('hi sahfi');

// setTimeout(() => console.log('your visa progress....') , 2500 );

// console.log('visa progress finished get your visa gate number four');

// const numbers = [1,-1,2,-2,3,0,4];

// const newNumbers = numbers
//  .filter(num => num >= 0)  // 0,1,2,3,4
//  .map(num => num * num)  // 0,1,4,9,16
//   .slice(1);  // 1,4,9,16

//  console.log(newNumbers);

// async and promise

// const mypromise = new Promise((resolve , reject) =>{
//     const error = true;

//     if(!error){
//         resolve("enta promise success")
//     }else{
//         reject("enta promise eanta seiyala")
//     }
// })

// mypromise.then(value => {
//     return value + " welcome"
// }).then(newValue => {
//     console.log(newValue)})
    
// .catch(err => {
//         console.log(err)
//     })


//fetch 

const products = fetch("https://developers.google.com/gdata/docs/json#json").then(response => {
    return response
}).then(products => {
    console.log(products)
})

console.log(products);

