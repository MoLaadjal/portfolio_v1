document.querySelectorAll('.nav-list li a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('check').checked = false;
  });
});