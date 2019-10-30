/**
* Compute the subtraction of two <$ vector_dimension $> <$ vector_type_name $> buffered vectors and put the result into another buffer.
*
* @param leftBuffer - Buffer that contains the left operand.
* @param leftBufferOffset - Offset to use when we read the buffer that contains the left operand.
* @param rightBuffer - Buffer that contains the right operand.
* @param rightBufferOffset - Offset to use when we read the buffer that contains the right operand.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return The result buffer updated with the result of this operation.
*/
export function subtract (
  leftBuffer : /*$ vector_buffer_type $*/,
  leftBufferOffset : number,
  rightBuffer : /*$ vector_buffer_type $*/,
  rightBufferOffset : number,
  resultBuffer : /*$ vector_buffer_type $*/,
  resultBufferOffset : number
) : /*$ vector_buffer_type $*/ {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ : number = leftBuffer[leftBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/const b/*$ index $*/ : number = rightBuffer[rightBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/resultBuffer[resultBufferOffset + /*$ index $*/ ] = a/*$ index $*/  - b/*$ index $*/
  /*% endfor %*/
  return resultBuffer
}
