// Tab switching script just for good measure :3 -Xansi
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');

      // Remove active class from all buttons and contents
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
});
