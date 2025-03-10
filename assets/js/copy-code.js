// assets/js/copy-code.js
document.addEventListener("DOMContentLoaded", function() {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach((block) => {
      const button = document.createElement('button');
      button.innerText = 'copy';
      button.classList.add('copy-button');
      button.addEventListener('click', () => {
        navigator.clipboard.writeText(block.innerText);
        button.innerText = 'copied!';
        setTimeout(() => button.innerText = 'copy', 2000);
      });
      block.appendChild(button);
    });
  });
  