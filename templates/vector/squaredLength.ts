/**
* Return the squared length of a <$ vector_dimension $> <$ vector_type_name $> buffered vector.
*
* @param vectorBuffer - Buffer that contains the vector to transform.
* @param vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return The squared length of the given vector.
*/
export function squaredLength (
  vectorBuffer : /*$ vector_buffer_type $*/,
  vectorBufferOffset : number
) : number {
  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ : number = vectorBuffer[vectorBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  return /*% for index in range(vector_dimension) %*/a/*$ index $*/  * a/*$ index $*/ /*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
}
