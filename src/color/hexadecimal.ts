import { Vector4f, Vector3f, Vector4d, Vector3d } from '..'

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
export function encode (red : number, green : number, blue : number, alpha : number) {
  return Math.round(red * 255) << 24 ^
         Math.round(green * 255) << 16 ^
         Math.round(blue * 255) << 8 ^
         Math.round(alpha * 255) << 0
}

/**
* Return an hexadecimal representation of a 4D float vector.
*
* @param color - A color to encode.
*
* @return An hexadecimal representation of the given color.
*/
export function encodeVector4f (color : Vector4f) : number {
  return encode(color.r, color.g, color.b, color.a)
}

/**
* Return an hexadecimal representation of a 3D float vector.
*
* @param color - A color to encode.
*
* @return An hexadecimal representation of the given color.
*/
export function encodeVector3f (color : Vector3f) : number {
  return encode(color.r, color.g, color.b, 1.0)
}

/**
* Return an hexadecimal representation of a vector 4d.
*
* @param color - A color to encode.
*
* @return An hexadecimal representation of the given color.
*/
export function encodeVector4d (color : Vector4d) : number {
  return encode(color.r, color.g, color.b, color.a)
}

/**
* Return an hexadecimal representation of a vector 3d.
*
* @param color - A color to encode.
*
* @return An hexadecimal representation of the given color.
*/
export function encodeVector3d (color : Vector3d) : number {
  return encode(color.r, color.g, color.b, 1.0)
}

/**
* Decode the red channel value from an hexadecimal color and return it.
*
* @param hexadecimal - Hexadecimal color to decode.
*
* @return The red channel value of the given color.
*/
export function decodeRed (hexadecimal : number) : number {
  return (hexadecimal >> 24 & 255) / 255
}

/**
* Decode the green channel value from an hexadecimal color and return it.
*
* @param hexadecimal - Hexadecimal color to decode.
*
* @return The green channel value of the given color.
*/
export function decodeGreen (hexadecimal : number) : number {
  return (value >> 16 & 255) / 255
}

/**
* Decode the blue channel value from an hexadecimal color and return it.
*
* @param hexadecimal - Hexadecimal color to decode.
*
* @return The blue channel value of the given color.
*/
export function decodeBlue (hexadecimal : number) : number {
  return (value >> 8 & 255) / 255
}

/**
* Decode the alpha channel value from an hexadecimal color and return it.
*
* @param hexadecimal - Hexadecimal color to decode.
*
* @return The alpha channel value of the given color.
*/
export function decodeAlpha (hexadecimal : number) : number {
  return (value >> 0 & 255) / 255
}

/**
* Decode the given hexadecimal color as a Vector4f.
*
* @param hexadecimal - Hexadecimal color to decode.
* @param [result = new Vector4f()] - Result vector.
*
* @return The result vector.
*/
export function decodeAsVector4f (
  hexadecimal : number,
  result : Vector4f = new Vector4f()
) : Vector4f {
  result.r = decodeRed(hexadecimal)
  result.g = decodeGreen(hexadecimal)
  result.b = decodeBlue(hexadecimal)
  result.a = decodeAlpha(hexadecimal)

  return result
}

/**
* Decode the given hexadecimal color as a Vector4d.
*
* @param hexadecimal - Hexadecimal color to decode.
* @param [result = new Vector4d()] - Result vector.
*
* @return The result vector.
*/
export function decodeAsVector4d (
  hexadecimal : number,
  result : Vector4d = new Vector4d()
) : Vector4d {
  result.r = decodeRed(hexadecimal)
  result.g = decodeGreen(hexadecimal)
  result.b = decodeBlue(hexadecimal)
  result.a = decodeAlpha(hexadecimal)

  return result
}

/**
* Decode the given hexadecimal color as a Vector3f.
*
* @param hexadecimal - Hexadecimal color to decode.
* @param [result = new Vector3f()] - Result vector.
*
* @return The result vector.
*/
export function decodeAsVector3f (
  hexadecimal : number,
  result : Vector3f = new Vector3f()
) : Vector3f {
  result.r = decodeRed(hexadecimal)
  result.g = decodeGreen(hexadecimal)
  result.b = decodeBlue(hexadecimal)

  return result
}

/**
* Decode the given hexadecimal color as a Vector3d.
*
* @param hexadecimal - Hexadecimal color to decode.
* @param [result = new Vector3d()] - Result vector.
*
* @return The result vector.
*/
export function decodeAsVector3d (
  hexadecimal : number,
  result : Vector3d = new Vector3d()
) : Vector3d {
  result.r = decodeRed(hexadecimal)
  result.g = decodeGreen(hexadecimal)
  result.b = decodeBlue(hexadecimal)

  return result
}
