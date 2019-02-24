/**
* Update each component of a <$ vector_dimension $> <$ vector_type_name $> buffered vector greather than the given maximum, and put the result into another buffer.
*
* @param {<$ vector_buffer_type $>} vectorBuffer - Buffer to read.
* @param {number} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {number} maximum - Maximum value allowed.
* @param {<$ vector_buffer_type  $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {<$ vector_buffer_type $>} The result buffer updated with the result of this operation.
*/
export function maximum (
  vectorBuffer,
  vectorBufferOffset,
  maximum,
  resultBuffer,
  resultBufferOffset
) {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/  = vectorBuffer[vectorBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/resultBuffer[resultBufferOffset + /*$ index $*/ ] = Math.min(a/*$ index $*/ , maximum)
  /*% endfor %*/
  return resultBuffer
}
