/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*
* @param buffer - Buffer to mutate.
* @param bufferOffset - Offset to apply when we mutate the buffer.
<% for cell in cells() %>* @param a<$ cell.index $> - Value of the cell at column <$ cell.column $> and row <$ cell.row $> of the matrix.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return The buffer, updated with the given data.
*/
export function set (
  buffer : /*$ matrix_buffer_type $*/,
  bufferOffset : number,
  /*% for cell in cells() %*/a/*$ cell.index $*/ : number/*% if loop.nextitem is defined %*/, /*% endif %*/
  /*% endfor %*/
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/buffer[bufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/
  /*% endfor %*/
  return buffer
}
