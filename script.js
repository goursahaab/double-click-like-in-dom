
const body=document.querySelector("body")
// const container=document.querySelector(".container")
const heart=document.querySelector(".heart")
const card = document.querySelector(".card")


const image=document.querySelector("img")

image.addEventListener("dblclick",function(){
   // heart.style.color=blue;
   // console.log("1")
   // heart.style.color=blue;
   heart.style.opacity=1;
   heart.style.scale=2;
   setTimeout(()=>{
      heart.style.opacity=0;
      heart.style.scale=0;


   },1000)
   
      // heart.style.scale = 1;
      // heart.style.opacity = 1;
  


})