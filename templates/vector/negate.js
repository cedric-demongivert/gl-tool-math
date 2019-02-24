/**
* Negate a <$ vector_dimension $> <$ vector_type_name $> buffered vector and put the result in another buffer.
*
* @param {<$ vector_buffer_type $>} vectorBuffer - Buffer to read.
* @param {number} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {<$ vector_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {<$ vector_buffer_type $>} The result buffer updated with the result of this operation.
*/
export function negate (
  vectorBuffer,
  vectorBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/  = vectorBuffer[vectorBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/resultBuffer[resultBufferOffset + /*$ index $*/ ] = -a/*$ index $*/ 
  /*% endfor %*/
  return resultBuffer
}
