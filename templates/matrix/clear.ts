/**
* Fill a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with zeroes.
*
* @param matrixBuffer - Buffer that contains the matrix to clear.
* @param matrixBufferOffset - Offset to apply when we write into the given buffer.
*
* @return The buffer with the updated matrix.
*/
export function clear (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = 0
  /*% endfor %*/
  return matrixBuffer
}
