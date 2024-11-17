'use strict';

const clickSound = new Audio('assets/mouse-click-104737.mp3');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btn = document.querySelector('.btn');

const openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    clickSound.play();
};

const closeModal = function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.classList.add('hidden'));
    overlay.classList.add('hidden');
    clickSound.play();
};

btnOpenModal.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.id === 'csharp' ? 'cSharpModal' : button.id + 'Modal';
        openModal(modalId);
    });
});

btnCloseModal.forEach(button => {
    button.addEventListener('click', closeModal);
});

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        closeModal();
    }
});

