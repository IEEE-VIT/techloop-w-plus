var count=0
function add(){
  var Q1 = document.getElementById('C1').checked;
  var Q2 = document.getElementById('C2').checked;
  var Q3 = document.getElementById('C3').checked;
  var Q4 = document.getElementById('C4').checked;
  var Q5 = document.getElementById('C5').checked;

  if(Q1)
  count+=1;
  if(Q2)
  count+=1;
  if(Q3)
  count+=1;
  if(Q4)
  count+=1;
  if(Q5)
  count+=1;
}
function display(){
  add();
  alert("You scored "+count+" out of 5.")
}
