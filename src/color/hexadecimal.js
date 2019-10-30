"use strict";
exports.__esModule = true;
var __1 = require("..");
/**
* Return an hexadecimal representation of an rgba color.
*
* @param red - Red channel value.
* @param green - Green channel value.
* @param blue - Blue channel value.
* @param alpha - Alpha channel value.
*
* @return An hexadecimal representation of the given color.
*/
function encode(red, green, blue, alpha) {
    return Math.round(red * 255) << 24 ^
        Math.round(green * 255) << 16 ^
        Math.round(blue * 255) << 8 ^
        Math.round(alpha * 255) << 0;
}
exports.encode = encode;
/**
* Return an hexadecimal representation of a 4D float vector.
*
* @param color - A color to encode.
*
* @return An hexadecimal representation of the given color.
*/
function encodeVector4f(color) {
    return encode(color.r, color.g, color.b, color.a);
}
exports.encodeVector4f = encodeVector4f;
/**
* Return an hexadecimal representation of a 3D float vector.
*
* @param color - A color to encode.
*
* @return An hexadecimal representation of the given color.
*/
function encodeVector3f(color) {
    return encode(color.r, color.g, color.b, 1.0);
}
exports.encodeVector3f = encodeVector3f;
/**
* Return an hexadecimal representation of a vector 4d.
*
* @param color - A color to encode.
*
* @return An hexadecimal representation of the given color.
*/
function encodeVector4d(color) {
    return encode(color.r, color.g, color.b, color.a);
}
exports.encodeVector4d = encodeVector4d;
/**
* Return an hexadecimal representation of a vector 3d.
*
* @param color - A color to encode.
*
* @return An hexadecimal representation of the given color.
*/
function encodeVector3d(color) {
    return encode(color.r, color.g, color.b, 1.0);
}
exports.encodeVector3d = encodeVector3d;
/**
* Decode the red channel value from an hexadecimal color and return it.
*
* @param hexadecimal - Hexadecimal color to decode.
*
* @return The red channel value of the given color.
*/
function decodeRed(hexadecimal) {
    return (hexadecimal >> 24 & 255) / 255;
}
exports.decodeRed = decodeRed;
/**
* Decode the green channel value from an hexadecimal color and return it.
*
* @param hexadecimal - Hexadecimal color to decode.
*
* @return The green channel value of the given color.
*/
function decodeGreen(hexadecimal) {
    return (hexadecimal >> 16 & 255) / 255;
}
exports.decodeGreen = decodeGreen;
/**
* Decode the blue channel value from an hexadecimal color and return it.
*
* @param hexadecimal - Hexadecimal color to decode.
*
* @return The blue channel value of the given color.
*/
function decodeBlue(hexadecimal) {
    return (hexadecimal >> 8 & 255) / 255;
}
exports.decodeBlue = decodeBlue;
/**
* Decode the alpha channel value from an hexadecimal color and return it.
*
* @param hexadecimal - Hexadecimal color to decode.
*
* @return The alpha channel value of the given color.
*/
function decodeAlpha(hexadecimal) {
    return (hexadecimal >> 0 & 255) / 255;
}
exports.decodeAlpha = decodeAlpha;
/**
* Decode the given hexadecimal color as a Vector4f.
*
* @param hexadecimal - Hexadecimal color to decode.
* @param [result = new Vector4f()] - Result vector.
*
* @return The result vector.
*/
function decodeAsVector4f(hexadecimal, result) {
    if (result === void 0) { result = new __1.Vector4f(); }
    result.r = decodeRed(hexadecimal);
    result.g = decodeGreen(hexadecimal);
    result.b = decodeBlue(hexadecimal);
    result.a = decodeAlpha(hexadecimal);
    return result;
}
exports.decodeAsVector4f = decodeAsVector4f;
/**
* Decode the given hexadecimal color as a Vector4d.
*
* @param hexadecimal - Hexadecimal color to decode.
* @param [result = new Vector4d()] - Result vector.
*
* @return The result vector.
*/
function decodeAsVector4d(hexadecimal, result) {
    if (result === void 0) { result = new __1.Vector4d(); }
    result.r = decodeRed(hexadecimal);
    result.g = decodeGreen(hexadecimal);
    result.b = decodeBlue(hexadecimal);
    result.a = decodeAlpha(hexadecimal);
    return result;
}
exports.decodeAsVector4d = decodeAsVector4d;
/**
* Decode the given hexadecimal color as a Vector3f.
*
* @param hexadecimal - Hexadecimal color to decode.
* @param [result = new Vector3f()] - Result vector.
*
* @return The result vector.
*/
function decodeAsVector3f(hexadecimal, result) {
    if (result === void 0) { result = new __1.Vector3f(); }
    result.r = decodeRed(hexadecimal);
    result.g = decodeGreen(hexadecimal);
    result.b = decodeBlue(hexadecimal);
    return result;
}
exports.decodeAsVector3f = decodeAsVector3f;
/**
* Decode the given hexadecimal color as a Vector3d.
*
* @param hexadecimal - Hexadecimal color to decode.
* @param [result = new Vector3d()] - Result vector.
*
* @return The result vector.
*/
function decodeAsVector3d(hexadecimal, result) {
    if (result === void 0) { result = new __1.Vector3d(); }
    result.r = decodeRed(hexadecimal);
    result.g = decodeGreen(hexadecimal);
    result.b = decodeBlue(hexadecimal);
    return result;
}
exports.decodeAsVector3d = decodeAsVector3d;
