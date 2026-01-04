let canvasElement=document.querySelector("canvas")

let ctx=canvasElement.getContext("2d")

console.log();


 ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(10, 10, 50, 50);

   ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30, 30, 50, 50);

  function moveContext(e)
  {
//    console.log("x",e.clientX);
//    console.log("y",e.clientY);
//    ctx.fillStyle = "rgb(200 0 0 / 50%)";
//    ctx.fillRect(e.clientX,e.clientY,20,20)
  
   
   ctx.fillStyle="rgb(0 0 200/50%)"

   const xCordinate=1000
   //assuming x cordinate here is now 2001,9665,

   //my screen size is almost 1980 pixels or less that
   // it suppose i am sayign 3000 in x
   if(xCordinate===0)
   {   
    //when i am saying coordinate woudl be 3000 i know i don,t have any 
    //options to change the browser coordinates might be there
    //so who know that i am serving at 3000 when i say 3000 just run at 1980 in x
    //here we gone simulate it with various values now!  
    ctx.fillStyle="rgb(0 0 200/50%)"
    ctx.fillRect(1966,1040,20,20)
    ctx.clearRect(10,10,200,200)
   }
   else if(xCordinate===2001)
  {   
       ctx.fillStyle="rgb(0 0 200/50%)"
       ctx.fillRect(400,120,20,20)
       ctx.clearRect(10,10,200,200)
  }
  else if(xCordinate===9665)
  {    
    
       ctx.fillStyle="rgb(0 0 200/50%)"
       ctx.fillRect(506,200,20,20)
       ctx.clearRect(10,10,200,200)
  }
  else{
          console.log("it render the basic drawing only originals");
          ctx.fillStyle="rgb(0 0 200)"
          ctx.fillText("evertyhign is fake in it world",600,600)
  }
}

canvasElement.addEventListener('click',moveContext)



