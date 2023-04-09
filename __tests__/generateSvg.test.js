const { createSVG } = require('../generateSvg');
const { JSDOM } = require('jsdom');

describe('Generated SVG', () => {
  test('Generated SVG should contain the correct elements and attributes', () => {
    const options = {
      text: 'XYZ',
      textColor: '#FF0000',
      shape: 'circle',
      shapeColor: '#00FF00',
    };

    const svg = createSVG(options);
    const dom = new JSDOM(svg);
    const svgElement = dom.window.document.querySelector('svg');

    // Check if the SVG has the correct dimensions
    expect(svgElement.getAttribute('width')).toBe('300');
    expect(svgElement.getAttribute('height')).toBe('200');

    // Check if the SVG contains the correct shape element
    const shapeElement = svgElement.querySelector(options.shape);
    expect(shapeElement).toBeTruthy();

    // Check if the shape element has the correct color attribute
    expect(shapeElement.getAttribute('fill')).toBe(options.shapeColor);

    // Check if the SVG contains the correct text element
    const textElement = svgElement.querySelector('text');
    expect(textElement).toBeTruthy();

    // Check if the text element has the correct content and color attribute
    expect(textElement.textContent.trim()).toBe(options.text);
    expect(textElement.getAttribute('fill')).toBe(options.textColor);

  });
});
