function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

function startDictation() {

        if (window.hasOwnProperty('webkitSpeechRecognition')) {

          var recognition = new webkitSpeechRecognition();

          recognition.continuous = false;
          recognition.interimResults = false;
          recognition.lang = "en-US";
          recognition.start();

          recognition.onresult = function (e) {
            document.getElementById('transcript').value = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById('labnol').submit();
          };
          recognition.onerror = function(e) {
            recognition.stop();
          }
        }
      }
      window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("main");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}