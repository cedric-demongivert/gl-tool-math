/**
* Clear the components of a <$ vector_dimension $> <$ vector_type_name $> vector.
*
* This function set each components of a <$ vector_dimension $> <$ vector_type_name $> vector
* stored into a <$ vector_buffer_type $> to zero.
*
* @param buffer - Buffer to update.
* @param bufferOffset - Offset to use for updating the given buffer.
*
* @return The updated buffer.
*/
export function clear(
  buffer: /*$ vector_buffer_type $*/,
  bufferOffset: number
): /*$ vector_buffer_type $*/ {
  /*% for index in range(vector_dimension) %*/buffer[bufferOffset + /*$ index $*/ ] = 0
  /*% endfor %*/
  return buffer
}
