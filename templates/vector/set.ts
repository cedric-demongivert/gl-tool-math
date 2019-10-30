/**
* Set the content of a <$ vector_dimension $> <$ vector_type_name $> buffered vector.
*
* @param vectorBuffer - Buffer to write.
* @param vectorBufferOffset - Offset to use when we write the result into the given buffer.
<% for index in range(vector_dimension) %>* @param a<$ index $> - <$ index $>th vector component value.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return The given buffer updated with the new values.
*/
export function set (
  vectorBuffer : /*$ vector_buffer_type $*/,
  vectorBufferOffset : number,
  /*% for index in range(vector_dimension) %*/a/*$ index $*/ : number/*% if loop.nextitem is defined %*/,
  /*% endif %*//*% endfor %*/
) : /*$ vector_buffer_type $*/ {
  /*% for index in range(vector_dimension) %*/vectorBuffer[vectorBufferOffset + /*$ index $*/ ] = a/*$ index $*/
  /*% endfor %*/
  return vectorBuffer
}
