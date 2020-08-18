const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");

pads.forEach((pad, i) => {
  pad.addEventListener("click", function () {
    sounds[i].currentTime = 0;
    sounds[i].play();
  });
});
