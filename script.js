var score = 0;
var duration = 5;
var startTime;
var ended = true;

var timerTxt = document.getElementById("time");
var scoreTxt = document.getElementById("clicks");
var cpsTxt = document.getElementById("cps");
var clickArea = document.getElementById("click-area");

var timeButton1 = document.getElementById('1s');
var timeButton2 = document.getElementById('2s');
var timeButton5 = document.getElementById('5s');
var timeButton10 = document.getElementById('10s');
var timeButton30 = document.getElementById('30s');
var timeButton60 = document.getElementById('60s');
var timeButton600 = document.getElementById('600s');

var currentActive = timeButton10;

function start() {
    ended = false;
    startTime = new Date().getTime();

      var timerId = setInterval(function() {
        var total = (new Date().getTime() - startTime) / 1000;

        if (total < duration) {
          timerTxt.textContent = total.toFixed(3);
          cpsTxt.textContent = (score / total).toFixed(2);
        } else {
            //game ended
          ended = true;
          clearInterval(timerId);
          endGame();
        }
      }, 1);
}

function endGame() {
    var cps = (score / duration).toFixed(2);
    timerTxt.textContent = duration.toFixed(3);
    cpsTxt.textContent = cps;

    //show result
    setTimeout(function() {
        var resultText = 'You made ' + score + ' clicks in ' + duration + 
        ' seconds. It is ' + cps + 
        ' clicks per second. ';

        
        if (cps > 20) {
            resultText += "You are a god a clicking.";

        }else if (cps > 15) {
            resultText += "You're crazy.";
        }else if (cps > 10) {
            resultText += "Fast enough.";
        }else if (cps > 5) {
            resultText += "Human average";
        }else {
            resultText += "What are you doing?"
        }

        alert(resultText);

        score = 0;
    }, 10);
  }

  function removeActiveTag() {
    var element = currentActive;
    element.classList.remove('active');
  }

  function addActiveTag(e) {
    e.classList.add('active');
}


  clickArea.addEventListener("click", function(e) {
    if (ended) {
      start();
    }
    score++;
    scoreTxt.textContent = score;
  });

  timeButton1.addEventListener("click", function(e) {
    if (!ended) return;
    removeActiveTag();
    timeButton1.classList.add('active');
    currentActive = timeButton1;
    duration = 1;
  });

  timeButton2.addEventListener("click", function(e) {
    if (!ended) return;
    removeActiveTag();
    timeButton2.classList.add('active');
    currentActive = timeButton2;
    duration = 2;
  });

  timeButton5.addEventListener("click", function(e) {
    if (!ended) return;
    removeActiveTag();
    timeButton5.classList.add('active');
    currentActive = timeButton5;
    duration = 5;
  });

  timeButton10.addEventListener("click", function(e) {
    if (!ended) return;
    removeActiveTag();
    timeButton10.classList.add('active');
    currentActive = timeButton10;
    duration = 10;
  });

  timeButton30.addEventListener("click", function(e) {
    if (!ended) return;
    removeActiveTag();
    timeButton30.classList.add('active');
    currentActive = timeButton30;
    duration = 30;
  });

  timeButton60.addEventListener("click", function(e) {
    if (!ended) return;
    removeActiveTag();
    timeButton60.classList.add('active');
    currentActive = timeButton60;
    duration = 60;
  });
  timeButton600.addEventListener("click", function(e) {
    if (!ended) return;
    removeActiveTag();
    timeButton600.classList.add('active');
    currentActive = timeButton600;
    duration = 600;
  });

