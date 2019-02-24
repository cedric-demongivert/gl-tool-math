/**
* Fill a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a given value.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the matrix to fill.
* @param {number} matrixBufferOffset - Offset to apply when we write into the given buffer.
* @param {number} value - Value to set in each cell of the given matrix.
*
* @return {<$ matrix_buffer_type $>} The buffer with the updated matrix.
*/
export function fill (
  matrixBuffer,
  matrixBufferOffset,
  value
) {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = value
  /*% endfor %*/
  return matrixBuffer
}
