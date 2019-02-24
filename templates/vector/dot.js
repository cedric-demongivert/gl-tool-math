/**
* Compute the dot product of two <$ vector_dimension $> <$ vector_type_name $> buffered vectors and return the result.
*
* @param {<$ vector_buffer_type $>} leftBuffer - Buffer that contains the left operand.
* @param {number} leftBufferOffset - Offset to use when we read the buffer that contains the left operand.
* @param {<$ vector_buffer_type $>} rightBuffer - Buffer that contains the right operand.
* @param {number} rightBufferOffset - Offset to use when we read the buffer that contains the right operand.
*
* @return {number} The result of the dot product.
*/
export function dot (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset
) {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/  = leftBuffer[leftBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/const b/*$ index $*/  = rightBuffer[rightBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  return /*% for index in range(vector_dimension) %*/a/*$ index $*/  * b/*$ index $*/ /*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
}
