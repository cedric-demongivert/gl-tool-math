/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to the content of a <$ rows $> dimensional scale matrix.
*
* @param matrixBuffer - Buffer to write.
* @param matrixBufferOffset - Offset to apply when we write into the buffer.
<% for index in range(rows) %>* @param <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return The buffer, updated with the content of a <$ rows $> dimensional scale matrix.
*/
export function toScale (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  /*% for index in range(rows) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = /*% if cell.row == cell.column %*//*$ components[cell.row]  $*//*% else %*/0/*% endif %*/
  /*% endfor %*/
  return matrixBuffer
}
