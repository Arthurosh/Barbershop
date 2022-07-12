// Dropbox Modal

const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backdrop: document.querySelector("[data-modal]"),
  body: document.querySelector("[body]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  document.body.classList.toggle("modal-open");
  refs.backdrop.classList.toggle("is-hidden");
  refs.body.classList.toggle("no-scroll");
}

function logBackdropClick() {
  console.log("Это клик в бекдроп");
}
