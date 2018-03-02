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
    var nam = $("#first_name").val();

    if (counter>=8){
        document.getElementById('answer').innerHTML = "Wow, " + nam + ". You scored a total of " + counter + "/10";
    }
    if (counter>=4 && counter<8){
            document.getElementById('answer').innerHTML = "Good job, " + nam + ". You scored a total of " + counter + "/10";
    }
    if (counter<4){
            document.getElementById('answer').innerHTML = "I think you can do better, " + nam + ". You scored a total of " + counter + "/10";
    }
}