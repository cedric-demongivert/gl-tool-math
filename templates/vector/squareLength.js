/**
* Return the squared length of a <$ vector_dimension $> <$ vector_type_name $> buffered vector.
*
* @param {<$ vector_buffer_type $>} vectorBuffer - Buffer that contains the vector to transform.
* @param {number} vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return {number} The squared length of the given vector.
*/
export function squaredLength (
  vectorBuffer,
  vectorBufferOffset
) {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/  = vectorBuffer[vectorBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  return /*% for index in range(vector_dimension) %*/a/*$ index $*/  * a/*$ index $*/ /*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
}
