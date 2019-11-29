var currentslide= 0;
var image= document.getElementsByTagName("img")[0];
var imgsrc=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
var nextbutton= document.getElementById("next");
var prebutton= document.getElementById("pre");
var nextchar= document.getElementsByClassName("nextchar")[0];
var prechar= document.getElementsByClassName("prechar")[0];
var playButton= document.getElementById("play");
var stopButton= document.getElementById("stop");



function fillSlides(num)
{ 
    for(let i=0;i<imgsrc.length;i++)
    {image.setAttribute("src",imgsrc[num])};
}

var counter = -1;
function nextImage()
{
  counter = counter + 1;
    if(counter>5) 
    {counter = 0}
    fillSlides(counter);
}

function previousImage()
{
    counter = counter - 1;
    if(counter<0)
      {counter=5};
    fillSlides(counter);

}

var playf;
function play()
{
  playf=setInterval(nextImage,2000);
}


function pause()
{
    clearInterval(playf);
}

nextbutton.addEventListener("click",nextImage);
prebutton.addEventListener("click",previousImage);
prechar.addEventListener("click",previousImage);
nextchar.addEventListener("click",nextImage);
playButton.addEventListener("click",play);
stopButton.addEventListener("click",pause);