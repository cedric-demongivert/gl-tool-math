/**
* Copy a vector from a buffer to another.
*
* @param {<$ vector_buffer_type $>} sourceBuffer - Buffer that contains the left operand vector.
* @param {number} sourceBufferOffset - Offset to use when we read the buffer that contains the left operand vector.
* @param {<$ vector_buffer_type $>} destinationBuffer - Buffer that contains the right operand vector.
* @param {number} destinationBufferOffset - Offset to use when we read the buffer that contains the right operand vector.
*
* @return {<$ vector_buffer_type $>} The updated destination buffer.
*/
export function copy (
  sourceBuffer,
  sourceBufferOffset,
  destinationBuffer,
  destinationBufferOffset
) {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/  = sourceBuffer[sourceBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/destinationBuffer[destinationBufferOffset + /*$ index $*/ ] = a/*$ index $*/ 
  /*% endfor %*/
  return destinationBuffer
}
