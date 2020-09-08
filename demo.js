/*var wish = `FullStack`;
var message = `Welcome to ${wish}`;
console.log(message);
*****************************
//numbers 
//decimal double hexadecimal octal binary

var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123ABC
var octal = 0o123;
var binary = 0b1010;
console.log(decimal,double,hexadecimal,octal,binary);
*******************************
var flag = true;
console.log(flag);
*******************************
for (let i=0;i<10;i++){
    console.log(i);
};
*******************************
let data = 100;
let data = 200;
console.log(data)
*******************************
let data = 100;
{
    let data = 200;
    console.log(data);
}
*******************************
let data = 100;
console.log(data);
*******************************
for (let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },5000)
};
*******************************
function my_Fun(){
    var data = 100;
    let data1 = 200;
    console.log(data,data1);
};
my_Fun();
*******************************
const data = {
    value : 100
};
console.log(data)
data.value = 500;
console.log(data);
data = {};
console.log(data)
*******************************
function fun_one(){
    return "hello";
};
console.log(fun_one);
console.log(fun_one());
*******************************
function fun_one(arg1,arg2,arg3){
    console.log(arg1,arg2,arg3);
}
fun_one("Angular","NodeJs","MongoDB");
fun_one("ReactJS","NodeJS","SqlServer");
fun_one("VueJs","Aws","MySql");
*******************************
function fun_one(){
    return fun_two;
};
function fun_two(){
    return "hello";
};
console.log(fun_one()());
*******************************
let arr = [10,20,30,40,50];
console.log(
 arr.map((element,index)=>{
    return element*2
})
);

let arr = [1,2,3,4,5];
console.log(
    arr.map((elelment,index)=>{
         return "$"+ elelment;
    })
);
***********************************
let arr1 = [1,2,3];
let arr2 = ["one","two","three"];
console.log(
    arr1.map((element,index)=>{
      return [element,arr2[index]];
    })
);
**************************************
let arr = [10,20,30,40,50];
console.log(
    arr.filter((element,index)=>{
      return element>=30;
    })
);
*******************************
let arr = [10,20,30,40,50];
console.log(
    arr.map((element,index)=>{
        return element*10;
    }).filter((element,index)=>{
      return element>=300  
    })
);
*******************************
let arr1 = [1,2,3,4,5];
console.log(
    arr1.reduce((fv,sv)=>{
        return fv+sv;
    })
);
*******************************
console.log(
   ["FullStack","to","Welcome"].reduceRight((fv,sv)=>{
      return fv+" "+sv;
   })
);
*******************************
let arr1 = [`Anguler`,`NodeJS`,`ReactJS`,`MongoDB`,`VueJS`];
    arr1.forEach((element,index)=>{
         console.log(element,index);
    })
********************************
data structures
1)Map 2)WeakMap 3)Set 4)WeakSet

=>collection of key value pairs is called Map.

for..of is used to iterate the data structure
*******************************
let map = new Map;
map.set("sub_one","Angular");
map.set("sub_two","NodeJS");
map.set("sub_three","MongoDB");
for (let [k,v] of map){
    console.log(k,v);
};
*******************************
for..in function is used to iterate the JSON Objects;
*******************************
let obj = {
    "sub_one":"Angular",
    "sub_two":"NodeJS",
    "sub_three":"MongoDB"
};
for (let key in obj){
  console.log(obj[key]);
};
*******************************
let arr1 = [20,30,40];
arr1.push(50);
console.log(arr1);
arr1.unshift(10);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
*******************************
let arr1 = [10,0,30,40,50];
console.log(
arr1.some((element,index)=>{
  return element>10;
 })
);
*******************************
console.log(
    [100,200,300,400,500].every((element,index)=>{
        return element>=100;
    })
);
*******************************
let arr = [10,20,30,40,50];
console.log(
arr.find((element,index)=>{
    return element === 30
 })
);
*******************************
let arr = [10,20,30,40,50];
console.log(
    arr.includes(30)
);
*******************************
let arr1 = [10,20,30,40,50,60,70,80,90,100];
arr1.splice(5,2);
console.log(arr1);
arr1.splice(5,1);
console.log(arr1);
arr1.splice(6,1);
console.log(arr1);
arr1.splice(2,2);
console.log(arr1);
arr1.splice(3,0,60,70,80);
console.log(arr1);
arr1.splice(2,1,30,40,50);
console.log(arr1);
arr1.splice(9,0,100);
console.log(arr1);
*******************************
let arr1 = [10,100,20,200,30,300,40,400,50,500];
let index =  arr1.findIndex((element,index)=>{
      return element === 30;
  });
  console.log(index);
arr1.splice(index,1);
console.log(arr1);
arr1.splice(arr1.findIndex((element,index)=>{
    return element === 40;
}),1);
console.log(arr1);
arr1.splice(arr1.findIndex((element,index)=>{
    return element === 500;
}),1)
console.log(arr1);
*******************************
let arr1 = [{"p_id":111},
{"p_id":1111},
{"p_id":222},
{"p_id":333},
{"p_id":444}];

arr1.splice(arr1.findIndex((element,index)=>{
    return element.p_id === 1111;
}),1);
console.log(arr1);
******************************* 
let arr1 = [10,20,30,40,50,60,70,80,90,100];
console.log(arr1.slice(5,7));
console.log(arr1.slice(3,6));
console.log(arr1.slice(9));
console.log(arr1.slice(5,-1));
console.log(arr1.slice(5,-5));
*******************************
let arr1 = [10,20,30,40,50,60,70,80,90,100];
console.log(arr1.copyWithin(1));

let arr2 = [10,20,30,40,50];
console.log(arr2.copyWithin(3));

let arr3 = [10,100,20,200,30,300,40,400,50,500];
console.log(arr3.copyWithin(5));

let arr4 = [10,20,30,40,50,60,70,80,90,100];
console.log(arr4.copyWithin(2,5));

let arr5 = [10,20,30,40,50,60,70,80,90,100];
console.log(arr5.copyWithin(2,8));

let arr6 = [10,20,30,40,50,60,70,80,90,100];
console.log(arr6.copyWithin(2,4,9));
*******************************
let arr = [10,20,30,10,40,20,30];
arr.forEach((element,index)=>{
  console.log(arr.indexOf(element),index);
});

let arr = [10,20,30,10,20,40];
console.log(
    arr.filter((element,index)=>{
      return arr.indexOf(element) === index;
    })
);
********************************
let arr = [10,20,30,10,20,40];

console.log([...new Set(arr)]);
*******************************
let arr = [10,50,20,40,30];
console.log(
   arr.sort((num1,num2)=>{
     return num1-num2;
   })[1]
);
console.log(
   arr.sort((num1,num2)=>{
       return num2-num1;
   })[1]
);
*******************************
let arr = [10,20,30,40,50];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[5]);
arr.length = 3;
console.log(arr[3]);
*******************************
let arr = [10,20,30,40,50,];
delete arr[2];
console.log(arr.length);
console.log(arr);
*******************************
==>from() used to convert string to array//
==>join() used to convert array to string//

let str = "hello";
console.log(
  Array.from(str)
);
console.log(
    Array.from(str).reverse()
);
console.log(
    Array.from(str).reverse().join("")
);
*******************************
let arr = [10,20,30,40,50,];
console.log(
    arr.fill(100)
);
console.log(
    arr.fill(200,2)
);
console.log(
    arr.fill(300,2,4)
);
*******************************
let arr = [1,[2],[3]];
console.log(arr.flat(1).reduce((fv,sv)=>{
    return fv+sv;
}));

let arr1 = [1,[[[2]]],[[[[3]]]]];
console.log(arr1.flat(Infinity));
*******************************
let arr1 = [1,2,3];
let arr2 = ["one","two","three"];
console.log(
arr1.map((element,index)=>{
   return [element,arr2[index]];
})
);
console.log(
    arr1.flatMap((element,index)=>{
        return [element,arr2[index]];
    })
);
*******************************
let obj = {"p_id":111,
            "p_name": "p_one",
            "p_cost": 10000  };
let arr = Object.entries(obj)
console.log(arr);
let obj1 = Object.fromEntries(arr);
console.log(obj1);
*******************************
let arr = "Welcome to fullstack development";
console.log(
  arr.split(" ")
);
*******************************
let arr = ["h","e","l","l","o"];
let str = arr.toString();
console.log(str);
let str1 = str.replace(",","");
console.log(str1);
*******************************
let arr = [10,20,10,20,30,10];
console.log(arr.lastIndexOf(10));
console.log(arr.lastIndexOf(20));
*******************************
let arr1 = [10];
let arr2 = [20];
let arr3 = [30];
let arr4 = arr1.concat(arr2,arr3);
console.log(arr4);

let arr = [...arr1,...arr2,...arr3];
console.log(arr);
*******************************
let str = "Welcome to fullstack";
console.log(str.substring(0,7));
console.log(str.substr(8,2));
console.log(str.substr(11));
*******************************
let str = " welcome ";
console.log(str.length);

let str1 = str.trim();
console.log(str1.length);

let str2 = str.trimStart();
console.log(str2.length);

let str3 = str.trimEnd();
console.log(str3.length);
*******************************


   
    Generators & Iterators
   ==> In Order to produce values dynamically then we have to use Generators&Iterators.
   ==> Generators utilizes the memory efficiently.
   ==> we will represent generators by using "*" 


function *fun_one(){
    yield 10;
    yield 20;
    yield 30;
    yield 40;
    yield 50;
};
let cursor = fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());

*******************************

function *fun_one(){
    yield 10;
    yield *fun_two();
    yield 30;
};
function *fun_two(){
   yield 20;
};
let cursor = fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
*******************************

function *fun_one(){
    yield 10;
    yield 20;
    return "hello";
    yield 30;
};
let cursor = fun_one();
console.log(cursor.next()); 
console.log(cursor.next()); 
console.log(cursor.next()); 
console.log(cursor.next());
*******************************/ 
/*
    Iterators:
  
    ==> for()
    ==> forEach()
    ==> for..of
    ==> for..in




let arr = [10,20,30,40,50];
for (i=0;i<arr.length;i++){
   console.log(arr[i]);
};

arr.forEach((element,index)=>{
    console.log(element,index);
});

for(let value of arr){
    console.log(value)
};

let obj = {
        "p_id":111,
        "p_name":"p_one",
        "p_cost":10000
};
for(let key in obj){
   console.log(key);
   console.log(obj[key]);
};
******************************* 

let obj = {
        num : 10
};
console.log(obj);


function myFun(arg1){
   return this.num+arg1
};

console.log(myFun.call(obj,10));
******************************* 

let obj = {
    num : 10
};

function myFun(){
   console.log(this.num);
};
myFun.call(obj);
*******************************

let obj = {
    num1 : 10
};
function myFun(arg1,arg2,arg3){
   return this.num1+arg1+arg2+arg3;
};
console.log(myFun.call(obj,20,30,40));

let arr = [10,20,30];
console.log(myFun.apply(obj,arr));
*******************************

let obj = {
   num1 : 10
};
function myFun(arg1,arg2,arg3){
   console.log(this.num1+arg1+arg2+arg3);
};
let newFun = myFun.bind(obj);
newFun(20,30,40);
*******************************/


















































