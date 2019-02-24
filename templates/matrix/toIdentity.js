/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to the content of an identity matrix.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to write.
* @param {number} matrixBufferOffset - Offset to apply when we write into the buffer.
*
* @return {<$ matrix_buffer_type $>} The buffer, updated with content of an identity matrix.
*/
export function toIdentity (
  matrixBuffer,
  matrixBufferOffset
) {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = /*% if cell.row == cell.column %*/1/*% else %*/0/*% endif %*/
  /*% endfor %*/
  return matrixBuffer
}
