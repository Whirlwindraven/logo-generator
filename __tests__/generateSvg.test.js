const { createSVG } = require('../generateSvg');

test('Generated SVG should contain the correct elements and attributes', () => {
  const options = {
    text: 'XYZ',
    textColor: '#FF5733',
    shape: 'triangle',
    shapeColor: '#33FF57',
  };

  const svg = createSVG(options);
  const svgElement = new DOMParser().parseFromString(svg, 'image/svg+xml').documentElement;

  // Check if the SVG has the correct dimensions
  expect(svgElement.getAttribute('width')).toBe('300');
  expect(svgElement.getAttribute('height')).toBe('200');

  // Check if the shape element has the correct type and color
  const shapeElement = svgElement.querySelector('polygon, circle, rect');
  expect(shapeElement.tagName).toBe('polygon');
  expect(shapeElement.getAttribute('fill')).toBe(options.shapeColor);

  // Check if the text element has the correct content, font, and color
  const textElement = svgElement.querySelector('text');
  expect(textElement.textContent).toBe(options.text);
  expect(textElement.getAttribute('fill')).toBe(options.textColor);
  expect(textElement.style.fontFamily).toBe('Arial');
  expect(textElement.style.fontSize).toBe('50px');
});
