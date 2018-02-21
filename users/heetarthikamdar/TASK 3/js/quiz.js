function result(){
    var question_selector = "";
    var counter =  0;
    var question_number = "";
    for (var i=0; i<10; i++){
        question_selector = "ul li:eq(" + i + ")";
        question_number = "q" + (i+1);
        var inp = $("input[name =" + question_number + " ]:checked", $(question_selector)).val();
        if (inp == "ans"){
            counter++;
        }
    }
    document.getElementById('answer').innerHTML = "You scored a total of " + counter + "/10";
}