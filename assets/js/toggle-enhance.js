// assets/js/toggle-enhance.js
document.addEventListener("DOMContentLoaded", function() {
    const detailElements = document.querySelectorAll('details');
  
    detailElements.forEach((detail) => {
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          detail.querySelector('summary').innerText = 'Fold';
        } else {
          detail.querySelector('summary').innerText = 'Unfold';
        }
      });
    });
  });
  