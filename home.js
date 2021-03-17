// Game Rules button - Modal

const modal = document.getElementById('rules-modal');
const btn = document.getElementById('rules-button');
const closeModal = document.getElementById('close-modal');

 function openModal() {
    modal.style.display ='block';
 }
 btn.addEventListener('click', openModal);

 function close() {
     modal.style.display = 'none';
 }
 closeModal.addEventListener('click', close);

 function anyWhereClose(event) {
     if (event.target == modal) {
        modal.style.display ='none';
     } 
}
window.addEventListener('click', anyWhereClose);

