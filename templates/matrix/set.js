/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*
* @param {<$ matrix_buffer_type $>} buffer - Buffer to mutate.
* @param {number} bufferOffset - Offset to apply when we mutate the buffer.
<% for cell in cells() %>* @param {number} a<$ cell.index $> - Value of the cell at column <$ cell.column $> and row <$ cell.row $> of the matrix.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return {<$ matrix_buffer_type $>} The buffer, updated with the given data.
*/
export function set (
  buffer,
  bufferOffset,
  /*% for cell in cells() %*/a/*$ cell.index $*//*% if loop.nextitem is defined %*/, /*% endif %*/
  /*% endfor %*/
) {
  /*% for cell in cells() %*/buffer[bufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/
  /*% endfor %*/
  return buffer
}
