function rechts() {
  var elem = document.getElementById("animate");
  var pos = parseInt(elem.style.left, 10);
  console.log(pos);
  console.log("Ik ga naar rechts!");
  console.log("Ik word duizelig!");

  if (isNaN(pos)) {
    pos = 0;
  }

  var id = setInterval(frame, -15);
  var tel = 0;
  function frame() {
    if (tel == 350) {
      clearInterval(id);
    } else {
      pos++;
      tel++;
      elem.style.left = pos + 'px';
  }
}
}

function Links() {
  var elem = document.getElementById("animate");
  var pos = parseInt(elem.style.left, 10);
  console.log(pos);
  console.log("Ik ga naar links!");
  console.log("Aaaaaaaaaaaaaaaaaah")

  if (isNaN(pos)) {
    pos = 0;
  }

  var id = setInterval(frame, -15);
  var tel = 0;
  function frame() {
    if (tel == 350) {
      clearInterval(id);
    } else {
      pos--;
      tel++;
      elem.style.left = pos + 'px';
    }
  }
}

function omlaag() {
  var elem = document.getElementById("animate");
  var pos = parseInt(elem.style.top, 10);
  console.log(pos);
  console.log("Ik ga naar omlaag!");
  console.log("Oh wacht, ik vaaaaaaaaaaaaaaaaaaaaaaaaaal!");

  if (isNaN(pos)) {
    pos = 0;
  }

  var id = setInterval(frame, -15);
  var tel = 0;
  function frame() {
    if (tel == 350) {
      clearInterval(id);
    } else {
      pos++;
      tel++;
      elem.style.top = pos + 'px';
  }
}
}


function omhoog() {
  var elem = document.getElementById("animate");
  var pos = parseInt(elem.style.top, 10);
  console.log(pos);
  console.log("Ik ga naar omhoog!");
  console.log("De ruimte is echt mooi!");

  if (isNaN(pos)) {
    pos = 0;
  }

  var id = setInterval(frame, -15);
  var tel = 0;
  function frame() {
    if (tel == 350) {
      clearInterval(id);
    } else {
      pos--;
      tel++;
      elem.style.top = pos + 'px';
    }
  }
}

function bigImg(x) {
    x.style.height = "250px";
    x.style.width = "250px";
}

function normalImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}


function maakZin() {
    var gegevens = document.getElementsByClassName("invoer");
	  var uitvoer = document.getElementsByClassName("uitvoer");

    for (var i = 0; i < gegevens.length ;i++) {
        uitvoer[i].innerHTML = gegevens[i].value.toString();
	}
}
