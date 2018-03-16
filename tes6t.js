function rechts() {
  var elem = document.getElementById("animate");
  var pos = parseInt(elem.style.left, 10);
  console.log(pos);

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
