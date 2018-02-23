var count=0
function add(){
  var Q1 = document.getElementsByName('Q1').value;
  var Q2 = document.getElementsByName('Q2').value;
  var Q3 = document.getElementsByName('Q3').value;
  var Q4 = document.getElementsByName('Q4').value;
  var Q5 = document.getElementsByName('Q5').value;
  console.log(Q1);
  console.log(Q2);
  if(Q1=='Correct')
  count+=1;
  if(Q2=='Correct')
  count+=1;
  if(Q3=='Correct')
  count+=1;
  if(Q4=='Correct')
  count+=1;
  if(Q5=='Correct')
  count+=1;
}
function display(){
  add();
  alert("You scored "+count+" out of 5.")
}
