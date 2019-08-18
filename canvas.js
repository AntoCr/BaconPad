const canvas = document.querySelector('canvas');

// canvas.height = getComputedStyle(canvas.parentElement).getPropertyValue('height');
canvas.height = canvas.parentElement.clientHeight;
canvas.width = canvas.parentElement.clientWidth;


window.addEventListener('resize', (event) => {
  canvas.height = canvas.parentElement.clientHeight;
  canvas.width = canvas.parentElement.clientWidth;
  // eslint-disable-next-line no-console
  console.log(event);
});
