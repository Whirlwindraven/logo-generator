const SVG = require('svg.js');

function createSVG({ text, textColor, shape, shapeColor }) {
  const width = 300;
  const height = 200;

  const draw = SVG().size(width, height);
  let shapeElement;

  switch (shape) {
    case 'circle':
      shapeElement = draw.circle(Math.min(width, height) / 2).center(width / 2, height / 2);
      break;
    case 'triangle':
      shapeElement = draw.polygon('0,200 300,200 150,0');
      break;
    case 'square':
      shapeElement = draw.rect(width / 2, height / 2).center(width / 2, height / 2);
      break;
  }

  shapeElement.fill(shapeColor);

  const textElement = draw.text(text).font({ family: 'Arial', size: 50 });
  textElement.move(width / 2 - textElement.bbox().width / 2, height / 2 - textElement.bbox().height / 2);
  textElement.fill(textColor);

  return draw.svg();
}

module.exports = { createSVG };
