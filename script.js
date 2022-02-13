//variables:
const block=document.getElementById("block");
const hole=document.getElementById("hole");
const bird=document.getElementById("bird");
var jumping=0;
var counter=0;

//make ramdom hole in the block
hole.addEventListener('animationiteration',() => { //arrow function
    var random=Math.random()*3; 
    var top=(random*100)+150;//make minimum height 150 and maximum height 450
    hole.style.top= -(top) +"px"; 
    counter++; //add 1 more to counter(score)
});

setInterval(function(){
        var birdTop=
        parseInt(window.getComputedStyle(bird).getPropertyValue("top")); 
        // console.log(birdTop);
        if(jumping==0){                            //here if we want to  make gravity runnging down automaticly while u dont press onclick
            bird.style.top=(birdTop+3)+"px";  //3 here is the power of the gravity
        }
        var blockLeft= 
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));   
        
        var holeTop=
        parseInt(window.getComputedStyle(hole).getPropertyValue("top")); 
        // console.log(holeTop);
        var cTop=-(500-birdTop); 
        // console.log(cTop);
        if((birdTop>540)||((blockLeft<60)&& (blockLeft>-50) &&((cTop<holeTop)||(cTop>holeTop+210)))){ //if the ball touch the buttom do this
            alert("Game Over  Your Score: "+counter);
            bird.style.top=100 +"px";
            counter=0;
        }
    },20);

function jump(){
        var jumping=1;
        var jumpCount=0;
        
    var jumpInterval= setInterval(function(){
        var birdTop=
        parseInt(window.getComputedStyle(bird).getPropertyValue("top")); 
        if((birdTop>0)&&(jumpCount<15)){
            bird.style.top=(birdTop-5)+"px"; 
        }
        // console.log(jumpCount);
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
        // console.log("jumpCount");
    },10);
}

