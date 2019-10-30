/**
* Copy a vector from a buffer to another.
*
* @param sourceBuffer - Buffer that contains the left operand vector.
* @param sourceBufferOffset - Offset to use when we read the buffer that contains the left operand vector.
* @param destinationBuffer - Buffer that contains the right operand vector.
* @param destinationBufferOffset - Offset to use when we read the buffer that contains the right operand vector.
*
* @return The updated destination buffer.
*/
export function copy (
  sourceBuffer : /*$ vector_buffer_type $*/,
  sourceBufferOffset : number,
  destinationBuffer : /*$ vector_buffer_type $*/,
  destinationBufferOffset : number
) : /*$ vector_buffer_type $*/ {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ : number = sourceBuffer[sourceBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/destinationBuffer[destinationBufferOffset + /*$ index $*/ ] = a/*$ index $*/
  /*% endfor %*/
  return destinationBuffer
}
