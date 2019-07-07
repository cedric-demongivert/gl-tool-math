/**
* Update each component of a <$ vector_dimension $> <$ vector_type_name $> buffered vector less than the given minimum, and put the result into another buffer.
*
* @param {<$  vector_buffer_type $>} vectorBuffer - Buffer to read.
* @param {number} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {number} minimum - Minimum value allowed.
* @param {<$  vector_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {<$  vector_buffer_type $>} The result buffer updated with the result of this operation.
*/
export function minimum (
  vectorBuffer,
  vectorBufferOffset,
  minimum,
  resultBuffer,
  resultBufferOffset
) {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/  = vectorBuffer[vectorBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/resultBuffer[resultBufferOffset + /*$ index $*/ ] = Math.max(a/*$ index $*/ , minimum)
  /*% endfor %*/
  return resultBuffer
}