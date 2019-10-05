/*% if vector_dimension == 2 %*//**
* Compute the clockwise normal of a <$ vector_dimension $> <$ vector_type_name $> buffered vector and return the result.
*
* @param {<$ vector_buffer_type $>} leftBuffer - Buffer that contains the vector to transform.
* @param {number} leftBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
* @param {<$ vector_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {<$ vector_buffer_type $>} The updated result buffer.
*/
export function clockwiseNormal (
  leftBuffer,
  leftBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  const a0 = leftBuffer[leftBufferOffset + 0]
  const a1 = leftBuffer[leftBufferOffset + 1]

  resultBuffer[resultBufferOffset + 0] = a1
  resultBuffer[resultBufferOffset + 1] = -a0

  return resultBuffer
}

/**
* Compute the counter-clockwise normal of a <$ vector_dimension $> <$ vector_type_name $> buffered vector and return the result.
*
* @param {<$ vector_buffer_type $>} leftBuffer - Buffer that contains the vector to transform.
* @param {number} leftBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
* @param {<$ vector_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {<$ vector_buffer_type $>} The updated result buffer.
*/
export function counterClockwiseNormal (
  leftBuffer,
  leftBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  const a0 = leftBuffer[leftBufferOffset + 0]
  const a1 = leftBuffer[leftBufferOffset + 1]

  resultBuffer[resultBufferOffset + 0] = -a1
  resultBuffer[resultBufferOffset + 1] = a0

  return resultBuffer
}/*% endif %*/
