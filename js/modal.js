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
