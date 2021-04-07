// Game Rules button - Modal

// CONSTANTS
const modal = document.getElementById("rules-modal");
const btn = document.getElementById("rules-button");
const closeModal = document.getElementById("close-modal");
const music = document.getElementById("music");
const musicOnButton = document.getElementById("musicOn");
const musicOffButton = document.getElementById("musicOff");
const backgroundMusic = document.getElementById("background-music");

// FUNCTIONS
// open the modal when the user clicks on the button
openModal = () => {
  modal.style.display = "block";
};
// close the modal when the user clicks on the <span> (X)
close = () => {
  modal.style.display = "none";
};
// close the modal when the user clicks anywhere outside of the modal
anyWhereClose = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// turn the music on, display the on icon and hide the mute icon
musicOnOff = () => {
  musicOnButton.classList.toggle("hidden");
  musicOffButton.classList.toggle("hidden");
  if (musicOffButton.classList.contains("hidden")) {
    backgroundMusic.play();
    // put music on repeat
    backgroundMusic.loop = true;
  } else {
    backgroundMusic.pause();
  }
};

// EVENTS
btn.addEventListener("click", openModal);
closeModal.addEventListener("click", close);
window.addEventListener("click", anyWhereClose);
music.addEventListener("click", musicOnOff);
