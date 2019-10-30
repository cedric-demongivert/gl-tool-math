/**
* Divide a <$ vector_dimension $> <$ vector_type_name $> buffered vector with a scalar and put the result in another buffer.
*
* @param vectorBuffer - Buffer to read.
* @param vectorBufferOffset - Offset to use when we read the given buffer.
* @param scalar - Scalar to use for the division.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return The result buffer updated with the result of this operation.
*/
export function divideWithScalar (
  vectorBuffer : /*$ vector_buffer_type $*/,
  vectorBufferOffset : number,
  scalar : number,
  resultBuffer : /*$ vector_buffer_type $*/,
  resultBufferOffset : number
) : /*$ vector_buffer_type $*/ {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ : number = vectorBuffer[vectorBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/resultBuffer[resultBufferOffset + /*$ index $*/ ] = a/*$ index $*/  / scalar
  /*% endfor %*/
  return resultBuffer
}
