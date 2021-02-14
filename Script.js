window.onload = function() {

    //Create variables for elements to be used

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("Tens")
    var appendSeconds = document.getElementById("Seconds")
    var startbutton = document.getElementById("startButton");
    var stopbutton = document.getElementById("stopButton"); 
    var resetbutton = document.getElementById("resetButton");
    var interval;

    //Set Events for buttons

    startbutton.onclick = function() {
        clearInterval(interval);
        //Interval for the timer to start
        interval = setInterval (startTimer, 10);
    }

    //when pressed, interval is cleared
    stopbutton.onclick = function() {
        clearInterval(interval);
    } 

    //when pressed,clears the interal & sets the values to zero.
    resetbutton.onclick = function() {
        clearInterval(interval);
        tens= "00";
        seconds= "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }


    function startTimer() {
        //Increments tens(00) by 1 each time.
        tens++;

        //untill < 9, the left zero remains unchanged. value of right zero keeps varrying
        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }
        //when > 9, value of both figures varries.
        if (tens > 9) {
             appendTens.innerHTML = tens;
        }
        // when reaches 99, starts incrementing the value of seconds 1 by 1
        if (tens > 99) {
            seconds++;
             appendSeconds.innerHTML = "0" + seconds;
             tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        //when > 9, value of both figures varries.
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
         }
    }

}

