
var countDownTime = new Date("Feb 14,2018,00:00:00");
var ID=setInterval(function(){
  var currentTime= new Date();
  var diffTime = countDownTime-currentTime;
  var d=Math.floor(diffTime/(1000*60*60*24));
  var h=Math.floor((diffTime%(1000*60*60*24))/(1000*60*60));
  var m=Math.floor((diffTime%(1000*60*60))/(1000*60));
  var s=Math.floor((diffTime%(1000*60))/(1000));

  document.getElementById("date").innerHTML=d+"d  "+h+"h   "+m+"m  "+s+"s  ";
  if(diffTime<=0)
  {
    clearInterval(ID);
    document.getElementById("date").innerHTML="GAME OVER";
    document.getElementById("date").style.backgroundColor="red";
  }
  },1000);
