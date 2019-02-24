/**
* Set the content of a <$ vector_dimension $> <$ vector_type_name $> buffered vector.
*
* @param {<$ vector_buffer_type $>} vectorBuffer - Buffer to write.
* @param {number} vectorBufferOffset - Offset to use when we write the result into the given buffer.
<% for index in range(vector_dimension) %>* @param {number} a<$ index $> - <$ index $>th vector component value.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return {<$ vector_buffer_type $> } The given buffer updated with the new values.
*/
export function set (
  vectorBuffer,
  vectorBufferOffset,
  /*% for index in range(vector_dimension) %*/a/*$ index $*/ /*% if loop.nextitem is defined %*/,
  /*% endif %*//*% endfor %*/
) {
  /*% for index in range(vector_dimension) %*/vectorBuffer[vectorBufferOffset + /*$ index $*/ ] = a/*$ index $*/
  /*% endfor %*/
  return vectorBuffer
}
