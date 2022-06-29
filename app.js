//called the button tag using queryselector
const openBtn = document.querySelector('button');
//called the close button using queryselector
const closeBtn = document.querySelector('#close');
//called the modal class tag using queryselector
const modal = document.querySelector('.modal');
//called the form page using queryselector
const form = document.querySelector('form');

//add event listener to the open button
openBtn.addEventListener('click', openModal);
//
function openModal() {
    modal.style.display = 'grid';
}
//add event listener to the close button
closeBtn.addEventListener('click', closeModal);

function closeModal() {
    //added the close-modal-animation class to the modal classList
    modal.classList.add('close-modal-animation');
    setTimeout(() => {
        //exited the modal classList
        modal.style.display = 'none';
        window.location.reload();
    }, 500);

}

modal.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
})

form.addEventListener('submit', submitForm);

function submitForm() {
    const card = document.querySelector('.card');
    card.innerHTML = "<h1>Thanks For Your Subscription</h1>"
    setTimeout(() => {
        closeModal();
    }, 3000);
}