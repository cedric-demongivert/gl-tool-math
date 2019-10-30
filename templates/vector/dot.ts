/**
* Compute the dot product of two <$ vector_dimension $> <$ vector_type_name $> buffered vectors and return the result.
*
* @param leftBuffer - Buffer that contains the left operand.
* @param leftBufferOffset - Offset to use when we read the buffer that contains the left operand.
* @param rightBuffer - Buffer that contains the right operand.
* @param rightBufferOffset - Offset to use when we read the buffer that contains the right operand.
*
* @return The result of the dot product.
*/
export function dot (
  leftBuffer : /*$ vector_buffer_type $*/,
  leftBufferOffset : number,
  rightBuffer : /*$ vector_buffer_type $*/,
  rightBufferOffset : number
) : number {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ : number = leftBuffer[leftBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/const b/*$ index $*/ : number = rightBuffer[rightBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  return /*% for index in range(vector_dimension) %*/a/*$ index $*/  * b/*$ index $*/ /*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
}
