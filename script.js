function closeDiv() { //Close incorrect answer with X
  var falseanswer = document.getElementById("false")
  falseanswer.style.display = "none";
}

function questionFalse() { //Show text by incorrect given answer
    var x = document.getElementById("false");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function questionCorrect() { //Enable going to next answer with button for next question
    var x = document.getElementById("correct");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function question1() {
    var answer;
    answer = document.getElementById("answer1").value;
    if (answer == 35) {
    	questionCorrect()
    }
    else {
      questionFalse()
    }
}

function question5() {
    var answer;
    answer = document.getElementById("answer5").value.toLowerCase();
    if (answer == "stiekem en zwijgen") {
    	questionCorrect()
    }
    else {
      questionFalse()
    }
}

/* voor Kompas */
var byId = function (id) {
  return document.getElementById(id);
};
var text = function (id, value) {
  byId(id).innerHTML = value;
};
var transform = function (id, commands) {
  var props = ['transform', 'webkitTransform', 'mozTransform',
               'msTransform', 'oTransform'];
  var node  = byId(id);
  for (var i = 0; i < props.length; i ++) {
    if ( typeof(node.style[props[i]]) != 'undefined' ) {
      node.style[props[i]] = commands;
      break;
    }
  }
};
var round = function (value) {
  return (Math.round(value * 100) / 100) + '&#176;';
};

Compass.noSupport(function () {
  text('text', 'no support');
}).needGPS(function () {
  text('text', 'need GPS');
}).needMove(function () {
  text('text', 'need move');
}).init(function (method) {
  if ( method == 'orientationAndGPS' ) {
    text('meta', 'GPS diff: ' + round(Compass._gpsDiff));
  }
}).watch(function (heading) {
  text('text', round(heading));
  transform('compass', 'rotate(' + (-heading) + 'deg)');
});
