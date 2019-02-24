/**
* Compute the a vector that is a mix of two <$ vector_dimension $> <$ vector_type_name $> buffered vectors and put the result into another buffer.
*
* @param {<$ vector_buffer_type $>} leftBuffer - Buffer that contains the left operand.
* @param {number} leftBufferOffset - Offset to use when we read the buffer that contains the left operand.
* @param {<$ vector_buffer_type $>} rightBuffer - Buffer that contains the right operand.
* @param {number} rightBufferOffset - Offset to use when we read the buffer that contains the right operand.
* @param {number} scalar - A float number between 0 and 1.
* @param {<$ vector_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {<$ vector_buffer_type $>} The updated result buffer.
*/
export function mix (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  scalar,
  resultBuffer,
  resultBufferOffset
) {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/  = leftBuffer[leftBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/const b/*$ index $*/  = rightBuffer[rightBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/resultBuffer[resultBufferOffset + /*$ index $*/ ] = a/*$ index $*/  + (b/*$ index $*/  - a/*$ index $*/ ) * scalar
  /*% endfor %*/
  return resultBuffer
}
