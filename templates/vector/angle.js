/*% if vector_dimension == 2 %*//**
* Compute the angle between the x axis and a <$ vector_dimension $> <$ vector_type_name $> buffered vector and return the result in radians.
*
* @param {<$ vector_buffer_type $>} leftBuffer - Buffer that contains the vector.
* @param {number} leftBufferOffset - Offset to use when we read the buffer that contains the vector.
*
* @return {number} The angle between the x axis vector and the given one in radians.
*/
export function angle (
  leftBuffer,
  leftBufferOffset
) {
  const a0 = leftBuffer[leftBufferOffset + 0]
  const a1 = leftBuffer[leftBufferOffset + 1]

  const result = Math.atan2(a0, a1)

  return result < 0 ? result + 2 * Math.PI : result
}

/**
* Compute the angle between two <$ vector_dimension $> <$ vector_type_name $> buffered vectors and return the result in radians.
*
* @param {<$ vector_buffer_type $>} leftBuffer - Buffer that contains the left operand vector.
* @param {number} leftBufferOffset - Offset to use when we read the buffer that contains the left operand vector.
* @param {<$ vector_buffer_type $>} rightBuffer - Buffer that contains the right operand vector.
* @param {number} rightBufferOffset - Offset to use when we read the buffer that contains the right operand vector
*
* @return {number} The angle between the two vectors in radians.
*/
export function angleBetween (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset
) {
  const aAngle = angle(leftBuffer, leftBufferOffset)
  const bAngle = angle(rightBuffer, rightBufferOffset)

  return bAngle - aAngle
}/*% endif %*/
