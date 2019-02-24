/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to the content of a <$ rows $> dimensional scale matrix.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to write.
* @param {number} matrixBufferOffset - Offset to apply when we write into the buffer.
<% for index in range(rows) %>* @param {number} <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return {<$ matrix_buffer_type $>} The buffer, updated with the content of a <$ rows $> dimensional scale matrix.
*/
export function toScale (
  matrixBuffer,
  matrixBufferOffset,
  /*% for index in range(rows) %*//*$ components[index]  $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
) {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = /*% if cell.row == cell.column %*//*$ components[cell.row]  $*//*% else %*/0/*% endif %*/
  /*% endfor %*/
  return matrixBuffer
}
