function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/10294/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
		alert("You r almost done click OK to take test")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}

function closeform()
{
	alert("thanks for submit");
	location.replace("my.html")
}

let hours = 0; // starting number of hours
let minutes = 30; // starting number of minutes
let seconds = 00; // starting number of seconds

// converts all to seconds
let totalSeconds =
 hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} else {
    return 0;
}
};

//sets seconds
const setSeconds = (s) => {
document.querySelector("#seconds").textContent = s + "s";
};

//sets minutes
const setMinutes = (m) => {
document.querySelector("#minutes").textContent = m + "m";
};

//sets hours
const setHours = (h) => {
document.querySelector("#hours").textContent = h + "h";
};

//sets Days
const setDays = (d) => {
document.querySelector("#days").textContent = d + "d";
};

// Update the count down every 1 second
var x = setInterval(() => {
//clears countdown when all seconds are counted
if (totalSeconds <= 0) {
    clearInterval(x);
}

setHours(convert(tempSeconds, 60 * 60));
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
totalSeconds--;
tempSeconds = totalSeconds;
if(tempSeconds<0)
{
	SubForm();
	closeform();
}
}, 1000);

function mcloseform()
{
	SubForm();
	closeform();
}