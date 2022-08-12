const prompt = require("prompt-sync")();
const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');
const parser = new xml2js.Parser();

function Sum(){

    var a,b;
    a= parseInt(prompt("Enter 1st Value:"));
    b= parseInt(prompt("Enter 2nd Value:"));

    console.log(a+b);

    console.log("----------------------------------------------------------");
    console.log("");
    
}


function Prime(){
    var number= prompt("Enter a Number:");

    if(number == 1){
       console.log(`${number} is not a prime number`);
    }

     else if(number < 1){
       console.log(`${number} is not a prime number`);
    }

    else{

        for(var i= 2; i<number; i++){

           if(number%i ==0){
               var res = `${number} is not a prime number`;
               break;
           }

           else{
               var res = `${number} is a prime number`;
           }
        }
        console.log(res)
        console.log("----------------------------------------------------------");
        console.log("");

    }


}


function odd_Even(){

    var number= prompt("Enter a Number:");

    if(number == 1){
       console.log(`${number} is a Odd number`);
    }
    
    else{
       
           if(number%2 ==0){
               console.log( `${number} is an Even number`);
               
           }
           else{
            console.log( `${number} is an Odd number`);
           }

           console.log("----------------------------------------------------------");
           console.log("");

 
}

}

function xml2Json(){
    fs.readFile('example.xml',(err,data)=>{

        parser.parseString(data,(err,result)=>{
            console.log(util.inspect(result, false,null, true));
        });
       });

       console.log("----------------------------------------------------------");
       console.log("");
}

function wordCount(){
    var text= prompt("Enter your text:   ");

    const textArr = text.split(" ");

    const res1=[];

    for(let word of textArr){
          if( !res1[word]){
             res1[word]= 1;
          }
          else{
             res1[word]++;
          }
    };
    console.log(res1);

    console.log("----------------------------------------------------------");
    console.log("");
}

console.log("----------------------------------------------------------");
console.log("");
console.log("Select which operation to perform");

console.log("Sum: +");
console.log("Odd/Even: o");
console.log("Prime Number: p");
console.log("XML to Json: J");
console.log("Repeated Words: w");

console.log("");
console.log("----------------------------------------------------------");
console.log("");

sw= prompt("Enter Your Choice: ");

console.log("----------------------------------------------------------");
console.log("");

switch (sw) {

                case "+":
                Sum();
                break;

                case "p":
                Prime();
                break;

                case "o":
                odd_Even();
                break;


               case "j": 
                xml2Json();
               break;

               case "w":
               wordCount();
               break;
               
               
}
