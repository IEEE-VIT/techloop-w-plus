
var score=0;
  var user = [];

  function disp(){
    
    document.getElementById("s").innerHTML="YOUR SCORE IS : "+score;
    document.getElementById("s").style.color="black";
    document.getElementById("s").style.fontFamily="Impact";
  }

  function updateScore()
  {
    user[0] = document.getElementById("1").checked;
    user[1] = document.getElementById("2").checked;
    user[2] = document.getElementById("3").checked;
    user[3] = document.getElementById("4").checked;
    user[4] = document.getElementById("5").checked;
    user[5] = document.getElementById("6").checked;
    user[6] = document.getElementById("7").checked;
    user[7] = document.getElementById("8").checked;
    user[8] = document.getElementById("9").checked;
    user[9] = document.getElementById("10").checked;

    for(var i=0;i<10;i++)
    {
      //console.log("HI");
      if(user[i]==true)
        score++;

    }
    disp();


  }
