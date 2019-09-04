// For globals variables check .eslintrc.json or
// put at the beginning of .js file /* globals var1, var2 ... */

/* let svgWidth = document.querySelector('.content').clientWidth;
let svgHeight = document.querySelector('.content').clientHeight;

const svg = document.querySelector('svg'); */

d3.select('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

/* window.addEventListener('resize', (event) => {
  svgWidth = svg.parentElement.clientWidth;
  svgHeight = svg.parentElement.clientHeight;
  // eslint-disable-next-line no-console
  console.log(event.detail);
}); */
