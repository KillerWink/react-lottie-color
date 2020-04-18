(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('hex-rgb')) :
    typeof define === 'function' && define.amd ? define(['hex-rgb'], factory) :
    (global = global || self, global['@killerwink/react-lottie-color'] = factory(global['hex-rgb']));
}(this, (function (hexRgb) { 'use strict';

    hexRgb = hexRgb && Object.prototype.hasOwnProperty.call(hexRgb, 'default') ? hexRgb['default'] : hexRgb;

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

    return changeSVGColor;

})));
