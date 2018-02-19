var correct = 0;
function calcScore() {
    correct = 0;
    var str = "inlineRadioOptions";
    for(var j = 1; j <= 7; j++) {
        var select = str + j.toString();
        console.log(select);
        temp = document.getElementsByName(select);
        for (var i = 0; i < 4; i++) {
            if (temp[i].checked && parseInt(temp[i].value) == 1) {
                correct += 1;
            }
        }
    }
    displayResult();
}

function getRemark() {
    var remark;
    if(correct <= 2){
        remark = "Scientists say world is made up of Protons, Neutrons and Electrons.\nHell! They forgot to mentions Morons"
    }

    else if(correct <= 5){
        remark = "To discover the thing you're brilliant at you first have to endure realizing all the things you're average at.\n And this is definitely one of them"
    }
    else{
        remark = "You are GOAT"
    }
    return remark;
}

function displayResult() {
    var remark = getRemark();
    document.getElementById("score").innerText = "You've got " + correct.toString() + "/7 Questions Right"
    document.getElementById("summary").innerText = remark;
}