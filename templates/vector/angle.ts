/*% if vector_dimension == 2 %*//**
* Compute the angle between the x axis and a <$ vector_dimension $> <$ vector_type_name $> buffered vector and return the result in radians.
*
* @param leftBuffer - Buffer that contains the vector.
* @param leftBufferOffset - Offset to use when we read the buffer that contains the vector.
*
* @return The angle between the x axis vector and the given one in radians.
*/
export function angle (
  leftBuffer : /*$ vector_buffer_type $*/,
  leftBufferOffset : number
) : number {
  const a0 : number = leftBuffer[leftBufferOffset + 0]
  const a1 : number = leftBuffer[leftBufferOffset + 1]

  const result : number = Math.atan2(a0, a1)

  return result < 0 ? result + 2 * Math.PI : result
}

/**
* Compute the angle between two <$ vector_dimension $> <$ vector_type_name $> buffered vectors and return the result in radians.
*
* @param leftBuffer - Buffer that contains the left operand vector.
* @param leftBufferOffset - Offset to use when we read the buffer that contains the left operand vector.
* @param rightBuffer - Buffer that contains the right operand vector.
* @param rightBufferOffset - Offset to use when we read the buffer that contains the right operand vector
*
* @return The angle between the two vectors in radians.
*/
export function angleBetween (
  leftBuffer : /*$ vector_buffer_type $*/,
  leftBufferOffset : number,
  rightBuffer : /*$ vector_buffer_type $*/,
  rightBufferOffset : number
) : number {
  const aAngle : number = angle(leftBuffer, leftBufferOffset)
  const bAngle : number = angle(rightBuffer, rightBufferOffset)

  return bAngle > aAngle ? bAngle - aAngle : Math.PI * 2 + bAngle - aAngle
}/*% endif %*/
