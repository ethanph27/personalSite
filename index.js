var i = 0;
var txt = "Hello, I'm Ethan Phillips, a freshman studying Computer Science at North Dakota State University in Fargo, North Dakota"; /* The text */
var speed = 45;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();