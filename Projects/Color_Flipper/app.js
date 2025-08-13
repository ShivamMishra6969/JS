const colors = ["green", "red","orange","violet", "rgba(133,122,200)", "#25b0f1ff"];


const btn=document.querySelector("#btn");
const color=document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNum=getRandomNum();
    document.body.style.backgroundColor=colors[randomNum];
    color.textContent=colors[randomNum]
    
})

const getRandomNum=()=>{
    return Math.floor(Math.random() * colors.length);
}