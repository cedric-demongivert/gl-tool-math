/**
* Test if two <$ vector_dimension $> <$ vector_type_name $> vectors from two buffers are equals.
*
* @param {<$ vector_buffer_type $>} leftBuffer - Buffer that contains the left operand vector.
* @param {number} leftBufferOffset - Offset to use when we read the buffer that contains the left operand vector.
* @param {<$ vector_buffer_type $>} rightBuffer - Buffer that contains the right operand vector.
* @param {number} rightBufferOffset - Offset to use when we read the buffer that contains the right operand vector.
* @param {number} [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
*
* @return {boolean} True if both vector are equals, false otherwise.
*/
export function equals (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  tolerance = Number.EPSILON
) {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ = leftBuffer[leftBufferOffset + /*$  index  $*/]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/const b/*$ index $*/ = rightBuffer[rightBufferOffset + /*$  index  $*/]
  /*% endfor %*/
  return /*% for index in range(vector_dimension) %*/Math.abs(a/*$ index $*/ - b/*$ index $*/) < tolerance/*% if loop.nextitem is defined %*/ &&
         /*% endif %*//*% endfor %*/
}
