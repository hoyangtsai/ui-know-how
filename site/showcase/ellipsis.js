var container = document.querySelector('.ellipsis-container');
document.querySelector('.intro-more').addEventListener('click', e => {
  e.stopPropagation();
  container.classList.add('expand');
});
container.addEventListener('click', e => {
  if (!container.classList.contains('expand')) return false;
  container.classList.remove('expand');
}, true);
