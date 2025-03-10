// assets/js/progress-bar.js
window.onscroll = function() {
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
  
    document.getElementById("progress-bar").style.width = scrolled + "%";
  };
  