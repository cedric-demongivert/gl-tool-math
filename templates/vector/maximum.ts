/**
* Update each component of a <$ vector_dimension $> <$ vector_type_name $> buffered vector greather than the given maximum, and put the result into another buffer.
*
* @param vectorBuffer - Buffer to read.
* @param vectorBufferOffset - Offset to use when we read the given buffer.
* @param maximum - Maximum value allowed.
* @param  resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return The result buffer updated with the result of this operation.
*/
export function maximum (
  vectorBuffer : /*$ vector_buffer_type $*/,
  vectorBufferOffset : number,
  maximum : number,
  resultBuffer : /*$ vector_buffer_type $*/,
  resultBufferOffset : number
) : /*$ vector_buffer_type $*/ {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ : number = vectorBuffer[vectorBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/resultBuffer[resultBufferOffset + /*$ index $*/ ] = Math.min(a/*$ index $*/ , maximum)
  /*% endfor %*/
  return resultBuffer
}
