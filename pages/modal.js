const modalOpen = document.querySelector('#modal-open-btn')
const modalClose = document.querySelector('#modal-close-btn')
const modalToggle = document.querySelector('#modal-toggle')

modalOpen.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
modalToggle.addEventListener('click', closestModal)

function openModal() {
  modalToggle.classList.add('flex')
}

function closeModal() {
  modalToggle.classList.remove('flex')
}

function closestModal(event) {
  if (event.target.closest('.modal-alert-container')) return
  modalToggle.classList.remove('flex')
}
