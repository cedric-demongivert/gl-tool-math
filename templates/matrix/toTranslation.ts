/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to the content of a <$ rows - 1$> dimensional translation matrix.
*
* @param matrixBuffer - Buffer to write.
* @param matrixBufferOffset - Offset to apply when we write into the buffer.
<% for index in range(rows - 1) %>* @param <$ components[index] $> - Translation to apply to the <$ components[index] $> axis.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return The buffer, updated with the content of a <$ rows - 1 $> dimensional translation matrix.
*/
export function toTranslation (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  /*% for index in range(rows - 1) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = /*% if cell.row == cell.column %*/1/*% elif cell.column == columns - 1 %*//*$ components[cell.row]  $*//*% else %*/0/*% endif %*/
  /*% endfor %*/
  return matrixBuffer
}
