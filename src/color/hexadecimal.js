import { Vector4f, Vector3f, Vector4d, Vector3d } from '../vector'

/**
* Return an hexadecimal representation of an rgba color.
*
* @param {number} red - Red channel value.
* @param {number} green - Green channel value.
* @param {number} blue - Blue channel value.
* @param {number} alpha - Alpha channel value.
*
* @return {number} An hexadecimal representation of the given color.
*/
export function encode (red, green, blue, alpha) {
  return Math.round(red * 255) << 24 ^
         Math.round(green * 255) << 16 ^
         Math.round(blue * 255) << 8 ^
         Math.round(alpha * 255) << 0
}

/**
* Return an hexadecimal representation of a vector 4f.
*
* @param {Vector4f} color - A color to encode.
*
* @return {number} An hexadecimal representation of the given color.
*/
export function encodeVector4f (color) {
  return encode(color.r, color.g, color.b, color.a)
}

/**
* Return an hexadecimal representation of a vector 3f.
*
* @param {Vector3f} color - A color to encode.
*
* @return {number} An hexadecimal representation of the given color.
*/
export function encodeVector3f (color) {
  return encode(color.r, color.g, color.b, 1.0)
}

/**
* Return an hexadecimal representation of a vector 4f.
*
* @param {Vector4d} color - A color to encode.
*
* @return {number} An hexadecimal representation of the given color.
*/
export function encodeVector4d (color) {
  return encode(color.r, color.g, color.b, color.a)
}

/**
* Return an hexadecimal representation of a vector 3f.
*
* @param {Vector3d} color - A color to encode.
*
* @return {number} An hexadecimal representation of the given color.
*/
export function encodeVector3d (color) {
  return encode(color.r, color.g, color.b, 1.0)
}

/**
* Decode the red channel value from an hexadecimal color and return it.
*
* @param {number} hexadecimal - Hexadecimal color to decode.
*
* @return {number} The red channel value of the given color.
*/
export function decodeRed (hexadecimal) {
  return (hexadecimal >> 24 & 255) / 255
}

/**
* Decode the green channel value from an hexadecimal color and return it.
*
* @param {number} hexadecimal - Hexadecimal color to decode.
*
* @return {number} The green channel value of the given color.
*/
export function decodeGreen (hexadecimal) {
  return (value >> 16 & 255) / 255
}

/**
* Decode the blue channel value from an hexadecimal color and return it.
*
* @param {number} hexadecimal - Hexadecimal color to decode.
*
* @return {number} The blue channel value of the given color.
*/
export function decodeBlue (hexadecimal) {
  return (value >> 8 & 255) / 255
}

/**
* Decode the alpha channel value from an hexadecimal color and return it.
*
* @param {number} hexadecimal - Hexadecimal color to decode.
*
* @return {number} The alpha channel value of the given color.
*/
export function decodeAlpha (hexadecimal) {
  return (value >> 0 & 255) / 255
}

/**
* Decode the given hexadecimal color as a Vector4f.
*
* @param {number} hexadecimal - Hexadecimal color to decode.
* @param {Vector4f} [result = new Vector4f()] - Result vector.
*
* @return {Vector4f} The result vector.
*/
export function decodeAsVector4f (hexadecimal, result = new Vector4f()) {
  result.r = decodeRed(hexadecimal)
  result.g = decodeGreen(hexadecimal)
  result.b = decodeBlue(hexadecimal)
  result.a = decodeAlpha(hexadecimal)

  return result
}

/**
* Decode the given hexadecimal color as a Vector4d.
*
* @param {number} hexadecimal - Hexadecimal color to decode.
* @param {Vector4d} [result = new Vector4d()] - Result vector.
*
* @return {Vector4d} The result vector.
*/
export function decodeAsVector4d (hexadecimal, result = new Vector4d()) {
  result.r = decodeRed(hexadecimal)
  result.g = decodeGreen(hexadecimal)
  result.b = decodeBlue(hexadecimal)
  result.a = decodeAlpha(hexadecimal)

  return result
}

/**
* Decode the given hexadecimal color as a Vector3f.
*
* @param {number} hexadecimal - Hexadecimal color to decode.
* @param {Vector3f} [result = new Vector3f()] - Result vector.
*
* @return {Vector3f} The result vector.
*/
export function decodeAsVector3f (hexadecimal, result = new Vector3f()) {
  result.r = decodeRed(hexadecimal)
  result.g = decodeGreen(hexadecimal)
  result.b = decodeBlue(hexadecimal)

  return result
}

/**
* Decode the given hexadecimal color as a Vector3d.
*
* @param {number} hexadecimal - Hexadecimal color to decode.
* @param {Vector3d} [result = new Vector3d()] - Result vector.
*
* @return {Vector3d} The result vector.
*/
export function decodeAsVector3d (hexadecimal, result = new Vector3d()) {
  result.r = decodeRed(hexadecimal)
  result.g = decodeGreen(hexadecimal)
  result.b = decodeBlue(hexadecimal)

  return result
}
