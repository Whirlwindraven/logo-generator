function createSVG({ text, textColor, shape, shapeColor }) {
    const width = 300;
    const height = 200;
  
    const shapeElement = createShapeElement(shape, shapeColor);
    const textElement = createTextElement(text, textColor);
  
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        ${shapeElement}
        ${textElement}
      </svg>
    `;
  }
  
  function createShapeElement(shape, shapeColor) {
    let shapeElement;
  
    switch (shape) {
      case 'circle':
        shapeElement = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
        break;
      case 'triangle':
        shapeElement = `<polygon points="150,50 250,150 50,150" fill="${shapeColor}" />`;
        break;
      case 'square':
        shapeElement = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
        break;
    }
  
    return shapeElement;
  }
  
  function createTextElement(text, textColor) {
    return `
      <text x="150" y="100" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-size="24px" fill="${textColor}">
        ${text}
      </text>
    `;
  }
  
  module.exports = {
    createSVG,
  };
  