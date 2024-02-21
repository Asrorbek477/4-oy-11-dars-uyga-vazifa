const movies =[
    {
     names :"Spider-Man:Across The Spider-Verse",
     year:2023,
     rate:8.8,
     genre:["Adventure","Action","Comedy"],
     country:["United States"],
     isAdult:false,
    },
  
    {
     names :"The Godfather",
     year:1972,
     rate:9.2,
     genre:["MAfia","Crime","Film","Daram"],
     country:["United States","Italy"],
     isAdult:true,
    },
  
    {
     names :"T-34",
     year:2018,
     rate:5.9,
     genre:["Adventure","Drama","War","Action"],
     country:["Russia"],
     isAdult:true,
    },
  
    {
     names :"Parasite",
     year:2019,
     rate:7.5,
     genre:["Adventure","Drama","War","Action"],
     country:["South Korea"],
     isAdult:true,
    },
  
    {
     names :"Titanic",
     year:1997,
     rate:7.5,
     genre:["Adventure","Drama","Thriller","Comedy"],
     country:["United states", "England"],
     isAdult:true,
    },
  
    {
     names :"Paddington",
     year:2024,
     rate:4.5,
     genre:["Adventure","Fantasy","Animation","Comedy"],
     country:["France","England"],
     isAdult:false,
    },
  
];

// 1-masala

const filteredMovies =movies.filter((movie) =>{
  return movie.country.includes("United States");
});

console.log(filteredMovies);

// 2-masala

// reduce

const numberds=[1,2,3,4,5];

const allNumbers=numberds.reduce((accumulator,currentValue) => {
 accumulator +=currentValue;
 return accumulator;
},0);

console.log(allNumbers);


// 3-masala

const countryMovies =movies.reduce((acc,curVal) =>{
  curVal.country.forEach((count)=>{
    if(acc[count]){
      acc[count]=[...acc[count],curVal];
    }else{
      acc[count]=[curVal];
    }
  });
  return acc;
},{});  

console.log(countryMovies);

// 4-masala


// for()----->some();
const numbers =[1,2,3,3,4,5,6];

for(i=0; i<numbers.length; i++){
  console.log(1);
  if(4<=numbers[i]){
    console.log(true);
    break;
  }
}

// some();

const numbers1 =[1,2,3,4,5,6];

const result =numbers1.some((number)=>{
  console.log(1);
  return number >=4;
});


// 5-masala

// find();
const findMovie =movies.find((movie) =>{
  return movie.country.includes("United states");
});

console.log(findMovie);


// 6-masala

const myBaskert =[
  {
    id:2,
    names:"Shirt",
  },
  {
    id:3,
    names:"Krasofka",
  },
];

myBaskert.find((goods)=>{
  return goods.id==payload;
});

console.log(myBaskert);

// 7-masala

const countryMoviess ={};

for(let i=0; i<movies.length; i++){
  let countries =movies[i].country;

  for(let m=0; m<countries.length; m++){
    if(countryMoviess[[countries[m]]]){
      countryMoviess[[countries[m]]]=[...countryMoviess[countries[m]],
      countries[m],
    ];
    }else{
      countryMoviess[countries[m]]=[countries];
    }
 }

}

console.log(countryMoviess);

/*---------- Uyga Vazifa  ---------- */

// 1-masala

[3,2,5,4,1].sort((a,b) =>b-a);

// 2-masala

const peopls =[
  {names:"Bunyod",age:21},
  {names:"Ahror",age:27},
  {names:"Samandar",age:65},
  {names:"Abdulloh",age:67},
  {names:"Ulug'bek",age:45},
];

 const sorted =peopls.sort((a,b)=>{
  return a.age-b.age;
 });

console.log(sorted.at(-1).age-sorted.at().age);


// 3-masala

const products =[
  {
    names:"Dell",
    price:35000,
    rating:4.9,
    discount:30,
  },
  {
    names:"Samarthpone",
    price:25000,
    rating:5.9,
    discount:40,
  },
  {
    names:"Acer",
    price:15000,
    rating:6.9,
    discount:20,
  },
];

const productsName=products.map((products)=>{
  return products.names;
});

console.log(productsName);

// 4-masala

"Men Samandar Programmerman".split(' ');
// ['Men','Samandar','Programmerman'];

['Men','Samandar','Programmerman'].map((word)=>word.length);

// 5-masala

function  getTruthyfalsy(arr){
  const truty=arr.filter((item) =>Boolean(item));
  const falsy=arr.filter((item) =>!Boolean(item));
  return{truty,falsy};
}


getTruthyfalsy([false,1,10,"",null,"samandar",1.13,0]);

// 6-masala

let son =2341;
let sonStr =son.toString().length;
let counter =0;
function recFuction(){
  if(sonStr>0){
    counter+=+son.toString()[sonStr-1];
    sonStr--;
    recFuction();
  }
}

recFuction();

console.log(counter);

// let arr =[1,2,3,4,5,6,7,8,9] // index
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);
// console.log(arr[arr.length-4]);
// for(let i=0; i< arr.length; i++){
// arr[i] =arr[i]*i
// }
// console.log(arr);

// 7-masala
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum+=i*2;
// }
// console.log(`sum:`+sum);

// 8-masala
// arr[0] = 3;
// console.log(arr);

// 9-masala
// let nums =["nol","ikki","uch","tort"];
// const number=+prompt("son");
// console.log(nums[number]);

// 10-masala 
// let str =prompt ("gap");
// let arr =str .split("");
// console.log(arr.length);
// console.log(arr);

// 11-masala
// let arr = ["salom","xush","kelingiz"];
// console.log(arr.join(""));
// arr.push("."); 

// arr.unshift(".")--boshiga qo'shadi.
// arr.pop(".")--oxiriga bitta tushiradi.
// arr.shift(".")--boshidan bitta tushiradi.

// console.log(arr);

// 12-masala
// const number =+prompt("soni kiriting");
// let arr =[];

// for(let i=0; i<=number; i++){
//     arr.push(i);
// }
// console.log(arr);

// 13-masala
let arr =[1,2,3,4];
console.log(arr.reverse());
   
// 14-masala
// let arr=[1,2,3,4];
// let arr3 =arr.concat([5,6]);

// console.log(arr3);

// let str ="Salom sardor"; //index
// console.log(str[0]);
// console.log(str.charAt(0)); // index character olish

// 14-masala

// let result = str.endsWith("Salom");
// console.log(result);

// 15-masala

// let result = str.indexOf("l");
// console.log(result);

// 16-masala

// let result =str.repeat(3);
// console.log(result);

// 17-masala

// let result = str.slice(0,5);
// console.log(result);

// 18-masala

// let result = str.startsWith("sa");
// console.log(result);

// 19-masala

// let repeat =str.toLowerCase();
// console.log(result);

// 20-masala

let result1 = str.toUpperCase();
console.log(result1);

// 21 -masala

//  let str =prompt("gapni kiriting")
//  console.log( str[0]);
// //  let result =str.toString();
//  console.log(result);
//  let result = str.indexOf("l");


//22-masala

//  let gap =prompt("gap");
//  let b =gap[0];

//  if(b.toUpperCase() != gap[0]){
//     b=b.toUpperCase();
//     gap =b +gap.slice(1);
//  }

// if(gap[gap.length-1] !="."){
//     gap =gap+".";
// }

// console.log(gap);



