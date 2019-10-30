/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to the content of an identity matrix.
*
* @param matrixBuffer - Buffer to write.
* @param matrixBufferOffset - Offset to apply when we write into the buffer.
*
* @return The buffer, updated with content of an identity matrix.
*/
export function toIdentity (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = /*% if cell.row == cell.column %*/1/*% else %*/0/*% endif %*/
  /*% endfor %*/
  return matrixBuffer
}
