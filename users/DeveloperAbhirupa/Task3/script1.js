
var score=0;
  var user = [];

  function disp(){
    
    document.getElementById("s").innerHTML="YOUR SCORE IS : "+score;
    document.getElementById("s").style.color="black";
    document.getElementById("s").style.fontFamily="Impact";
    score=0;
  }

  function updateScore()
  {
    user=['1','4','11','14','18', '21','24','29','32','39'];
    for(var i=0;i<10;i++)
    {
        if($('#'+user[i]).is(":checked"))
          score++;
    }

    disp();


  }
