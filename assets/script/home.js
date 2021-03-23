// Game Rules button - Modal

const modal = document.getElementById("rules-modal");
const btn = document.getElementById("rules-button");
const closeModal = document.getElementById("close-modal");

openModal = () => {
  modal.style.display = "block";
};
btn.addEventListener("click", openModal);

close = () => {
  modal.style.display = "none";
};
closeModal.addEventListener("click", close);

anyWhereClose = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
window.addEventListener("click", anyWhereClose);
