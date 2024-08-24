const button = document.querySelector(".modal-button");
const backdrop = document.querySelector(".modal-backdrop");

buttton.addEventListener('click', toggleModal);

backdrop.addEventListener('click', (e) => {
    const target = e.target.closest(".button-close-modal");

    if (!target)
        return;

    toggleModal();
});

function toggleModal() {
    backdrop.classList.toggle("is-open")
}