// Game Rules button - Modal

// CONSTANTS
const modal = document.getElementById("rules-modal");
const btn = document.getElementById("rules-button");
const closeModal = document.getElementById("close-modal");
const music = document.getElementById("music");

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
musicOn = () => {
  music.innerHTML = `<i class="fas fa-volume-up"></i>`;
  music.classList.add("hidden");
};

// EVENTS
btn.addEventListener("click", openModal);
closeModal.addEventListener("click", close);
window.addEventListener("click", anyWhereClose);
music.addEventListener("click", musicOn);
