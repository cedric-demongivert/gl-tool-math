/**
* Test if two <$ vector_dimension $> <$ vector_type_name $> vectors from two buffers are equals.
*
* @param leftBuffer - Buffer that contains the left operand vector.
* @param leftBufferOffset - Offset to use when we read the buffer that contains the left operand vector.
* @param rightBuffer - Buffer that contains the right operand vector.
* @param rightBufferOffset - Offset to use when we read the buffer that contains the right operand vector.
* @param [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
*
* @return True if both vector are equals, false otherwise.
*/
export function equals (
  leftBuffer : /*$ vector_buffer_type $*/,
  leftBufferOffset : number,
  rightBuffer : /*$ vector_buffer_type $*/,
  rightBufferOffset : number,
  tolerance : number = Number.EPSILON
) : boolean {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ : number = leftBuffer[leftBufferOffset + /*$  index  $*/]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/const b/*$ index $*/ : number = rightBuffer[rightBufferOffset + /*$  index  $*/]
  /*% endfor %*/
  return /*% for index in range(vector_dimension) %*/Math.abs(a/*$ index $*/ - b/*$ index $*/) < tolerance/*% if loop.nextitem is defined %*/ &&
         /*% endif %*//*% endfor %*/
}
