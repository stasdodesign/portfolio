// tabs.js

// Функция для показа вкладок
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const tabLinks = document.querySelectorAll('.tab-link');

  // Скрыть все вкладки и убрать активный класс с вкладок
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });

  tabLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // Показать выбранную вкладку и добавить активный класс к кнопке
  document.getElementById(tabId).classList.add('active');
  document.querySelector(`.tab-link[onclick="showTab('${tabId}')"]`).classList.add('active');
}
