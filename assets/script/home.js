// CONSTANTS
const modal = document.getElementById("rules-modal");
const btn = document.getElementById("rules-button");
const closeModal = document.getElementById("close-modal");
const music = document.getElementById("music");
const musicOnButton = document.getElementById("musicOn");
const musicOffButton = document.getElementById("musicOff");
const backgroundMusic = document.getElementById("background-music");
const footerArrow = document.getElementById("arrow");
const footerSection = document.getElementById("footer");
const mainContainer = document.getElementById("main");

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
  if (musicOnButton.classList.contains("hidden")) {
    backgroundMusic.pause();
    // put music on repeat
    backgroundMusic.loop = true;
  } else {
    backgroundMusic.play();
  }
};
// opens up the footer section
openFooter = () => {
  footerSection.classList.toggle("hidden");
  if (!footerSection.classList.contains("hidden")) {
    mainContainer.style.height = "95vh";
  } else {
    mainContainer.style.height = "100vh";
  }
};
// EVENTS
btn.addEventListener("click", openModal);
closeModal.addEventListener("click", close);
window.addEventListener("click", anyWhereClose);
music.addEventListener("click", musicOnOff);
footerArrow.addEventListener("click", openFooter);
backgroundMusic.play();
