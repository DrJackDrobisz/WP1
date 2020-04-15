// this function processes option selected by the user
function process_select(obj) {
    // console.log(obj.value);
    var day_idx = obj.value;
    var msg = "";
    var weekday = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

    switch (day_idx) {
        case "1":
            msg = "I hate Mondays!";
            break;
        case "2":
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