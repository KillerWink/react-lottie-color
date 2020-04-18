'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var hexRgb = _interopDefault(require('hex-rgb'));

const newColor = hex => {
  return newColorArr = hexRgb(hex, {
    format: 'array'
  }).map(function (rgb, index) {
    return index <= 2 ? rgb / 255 : rgb;
  });
};

const regex = /(\d\.[0-9]+\,\d\.[0-9]+\,\d\.[0-9]+\,\d)/g;
const changeSVGColor = (svg, color) => {
  const parsedSVG = JSON.stringify(svg);
  return JSON.parse(parsedSVG.replace(regex, `${newColor(color).join(',')}`));
};

module.exports = changeSVGColor;
