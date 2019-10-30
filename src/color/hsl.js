"use strict";
exports.__esModule = true;
/**
* Return the hue value of an RGB color.
*
* @param red - Red channel value.
* @param green - Green channel value.
* @param blue - Blue channel value.
*
* @return The hue of the given RGB color.
*/
function hue(red, green, blue) {
    var max = Math.max(red, green, blue);
    var min = Math.min(red, green, blue);
    if (min === max) {
        return 0;
    }
    else {
        var delta = max - min;
        switch (max) {
            case red:
                return ((green - blue) / delta + (green < blue ? 6 : 0)) * 60;
            case green:
                return ((blue - red) / delta + 2) * 60;
            case blue:
                return ((red - green) / delta + 4) * 60;
        }
    }
}
exports.hue = hue;
/**
* Return the saturation value of an RGB color.
*
* @param red - Red channel value.
* @param green - Green channel value.
* @param blue - Blue channel value.
*
* @return The saturation of the given RGB color.
*/
function saturation(red, green, blue) {
    var max = Math.max(red, green, blue);
    var min = Math.min(red, green, blue);
    var lightness = (min + max) / 2.0;
    if (min === max) {
        return 0;
    }
    else {
        var delta = max - min;
        if (lightness <= 0.5) {
            return delta / (max + min);
        }
        else {
            return delta / (2 - max - min);
        }
    }
}
exports.saturation = saturation;
/**
* Return the lightness value of an RGB color.
*
* @param red - Red channel value.
* @param green - Green channel value.
* @param blue - Blue channel value.
*
* @return The lightness of the given RGB color.
*/
function lightness(red, green, blue) {
    var max = Math.max(red, green, blue);
    var min = Math.min(red, green, blue);
    return (min + max) / 2.0;
}
exports.lightness = lightness;
/**
* Return the red channel value of an HSL color.
*
* @param hue - Hue channel value.
* @param saturation - Saturation channel value.
* @param lightness - Lightness channel value.
*
* @return The red channel value of the given HSL color.
*/
function red(hue, saturation, lightness) {
    var chroma = (1 * Math.abs(2 * lightness - 1)) * saturation;
    var uh = hue / 60;
    var x = chroma * (1 - Math.abs(uh % 2 - 1));
    var m = lightness - chroma / 2;
    switch (uh >> 0) {
        case 1:
        case 4:
            return x + m;
        case 2:
        case 3:
            return m;
            return x + m;
        default:
            return chroma + m;
    }
}
exports.red = red;
/**
* Return the green channel value of an HSL color.
*
* @param hue - Hue channel value.
* @param saturation - Saturation channel value.
* @param lightness - Lightness channel value.
*
* @return The green channel value of the given HSL color.
*/
function green(hue, saturation, lightness) {
    var chroma = (1 * Math.abs(2 * lightness - 1)) * saturation;
    var uh = hue / 60;
    var x = chroma * (1 - Math.abs(uh % 2 - 1));
    var m = lightness - chroma / 2;
    switch (uh >> 0) {
        case 0:
        case 3:
            return x + m;
        case 1:
        case 2:
            return chroma + m;
        default:
            return m;
    }
}
exports.green = green;
/**
* Return the blue channel value of an HSL color.
*
* @param hue - Hue channel value.
* @param saturation - Saturation channel value.
* @param lightness - Lightness channel value.
*
* @return The blue channel value of the given HSL color.
*/
function blue(hue, saturation, lightness) {
    var chroma = (1 * Math.abs(2 * lightness - 1)) * saturation;
    var uh = hue / 60;
    var x = chroma * (1 - Math.abs(uh % 2 - 1));
    var m = lightness - chroma / 2;
    switch (uh >> 0) {
        case 0:
        case 1:
            return m;
        case 3:
        case 4:
            return chroma + m;
        default:
            return x + m;
    }
}
exports.blue = blue;
