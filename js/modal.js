// modal.js

// Открыть модальное окно
function openModal() {
  document.getElementById('modal').style.display = "block";
}

// Закрыть модальное окно
function closeModal() {
  document.getElementById('modal').style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('modalWindow');

  // Открытие модального окна
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Закрытие модального окна
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Закрытие модального окна при клике вне его содержимого
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});