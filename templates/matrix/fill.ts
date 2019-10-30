/**
* Fill a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a given value.
*
* @param matrixBuffer - Buffer that contains the matrix to fill.
* @param matrixBufferOffset - Offset to apply when we write into the given buffer.
* @param value - Value to set in each cell of the given matrix.
*
* @return The buffer with the updated matrix.
*/
export function fill (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  value : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = value
  /*% endfor %*/
  return matrixBuffer
}
