const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

 
let Generatebtn=document.getElementById("btn");
let password1=document.getElementById("passField1")
let password2=document.getElementById("passField2")

let passlength=14;

function getRandomPass(){
    password1.value="";
    password2.value="";
    for(let i=0;i<passlength;i++){
    let random1=Math.floor(Math.random()*characters.length);
    let random2=Math.floor(Math.random()*characters.length);
    password1.value+=characters[random1];
    password2.value+=characters[random2];

      }  
    
}

