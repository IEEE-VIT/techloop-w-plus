var correct = 0;
var temp;

function calcScore() {
    correct = 0;
    for (var i = 1; i < 8; i++) {
        temp = $("input[name=inlineRadioOptions" + i.toString() + "]:checked").val();
        if (temp == 1) {
            correct ++;
        }
    }
    displayResult();
}

function getRemark() {
    var remark;
    if (correct <= 2) {
        remark = "Scientists say world is made up of Protons, Neutrons and Electrons.\nHell! They forgot to mention Morons"
    }

    else if (correct <= 5) {
        remark = "To discover the thing you're brilliant at you first have to endure realizing all the things you're average at.\n And this is definitely one of them"
    }
    else {
        remark = "You are G.O.A.T."
    }
    return remark;
}

function displayResult() {
    var remark = getRemark();
    $("#score").text("You've got " + correct.toString() + "/7 Questions Right");
    $("#summary").text(remark);
}