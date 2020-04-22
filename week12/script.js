// this function processes option selected by the user
var sel1 = 0;
function process_help() {
    //console.log("process_help");
    var msg2 = "";
    if (sel1 == 1) {
        msg2 = "I hate Mondays too!";
    } else if (sel1 == 2) {
        msg2 = "I love Tuesday too!";
    } else {
        msg2 = "I don't know what to say";
    }
    document.getElementById("history").innerHTML = msg2;
}

function process_select(obj) {
    // console.log(obj.value);
    var day_idx = obj.value;
    var msg = "";
    var weekday = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

    switch (day_idx) {
        case "1":
            sel1 = 1;
            msg = "I hate Mondays!";
            break;
        case "2":
            sel1 = 2;
            msg = "I love taco Tuesdays!";
            break;
        case "3":
            msg = "Half way, yay!";
            break;
        case "4":
            msg = "Thirsty Thursday!";
            break;
        case "5":
            msg = "Happy hour Friday!";
            break;
        case "6":
            msg = "I love Saturdays!";
            break;
        case "7":
            msg = "Family time!";
            break;
        default:
            msg = "Please select day of week."
            break;
    }

    if (day_idx > 0 && day_idx <= 7) {
        document.getElementById("output").innerHTML = "For " + weekday[day_idx-1] + " I have to say this: " + msg;
    /*
        document.getElementById("history").innerHTML = document.getElementById("history").innerHTML +
        "For <b>" + weekday[day_idx-1] + "</b> I have to say this: " + msg + "<br>";

        document.getElementById("history").innerHTML = document.getElementById("history").innerHTML +
        "<div class='form-group'><label for='sel1'><h6>Select a learning platform to watch a video tutorial.</h6>\
            </label>\
            <select class='form-control' id='sel1' onchange='process_select(this)'>\
                <option value='z'>Please Select</option>\
                <option value='a'>Edgenuity</option>\
                <option value='e'>Microsoft Teams</option>\
            </select>\
        </div>";
    */

    } else {
        document.getElementById("output").innerHTML = "";
    }
/*
    for (var x = 0; x < 7; x++) {
        console.log(weekday[x]);    
    }
*/
    var x = 0;
    while (x < 7) {
        console.log(weekday[x]);
        x++;
    }
}