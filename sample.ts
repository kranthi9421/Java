/*  Optinal parameters example

function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
   console.log(arg1,arg2,arg3);
};
fun_one();
fun_one("Hello_1");
fun_one(undefined,"Hello_2");
fun_one(null,null,null);


function fun_one(arg1:string,arg2?:string,arg3:string="Hello_3",...arg4:string[]){
  console.log(arg1,arg2,arg3,arg4);
};
fun_one();
fun_one("Hello_1");
fun_one("Hello_1","Hello_2",undefined,"Hello_4");
fun_one(undefined,undefined,undefined,undefined);
fun_one(null,null,null,null);*/