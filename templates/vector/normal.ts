/*% if vector_dimension == 2 %*//**
* Compute the clockwise normal of a <$ vector_dimension $> <$ vector_type_name $> buffered vector and return the result.
*
* @param leftBuffer - Buffer that contains the vector to transform.
* @param leftBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return The updated result buffer.
*/
export function clockwiseNormal (
  leftBuffer : /*$ vector_buffer_type $*/,
  leftBufferOffset : number,
  resultBuffer : /*$ vector_buffer_type $*/,
  resultBufferOffset : number
) : /*$ vector_buffer_type $*/ {
  const a0 : number = leftBuffer[leftBufferOffset + 0]
  const a1 : number = leftBuffer[leftBufferOffset + 1]

  resultBuffer[resultBufferOffset + 0] = a1
  resultBuffer[resultBufferOffset + 1] = -a0

  return resultBuffer
}

/**
* Compute the counter-clockwise normal of a <$ vector_dimension $> <$ vector_type_name $> buffered vector and return the result.
*
* @param leftBuffer - Buffer that contains the vector to transform.
* @param leftBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return The updated result buffer.
*/
export function counterClockwiseNormal (
  leftBuffer: /*$ vector_buffer_type $*/ ,
  leftBufferOffset : number,
  resultBuffer: /*$ vector_buffer_type $*/ ,
  resultBufferOffset : number
) : /*$ vector_buffer_type $*/ {
  const a0 : number = leftBuffer[leftBufferOffset + 0]
  const a1 : number = leftBuffer[leftBufferOffset + 1]

  resultBuffer[resultBufferOffset + 0] = -a1
  resultBuffer[resultBufferOffset + 1] = a0

  return resultBuffer
}/*% endif %*/
