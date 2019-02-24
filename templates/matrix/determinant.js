/**
* Compute and return the determinant of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the buffer.
*
* @return {number} The determinant of the given <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*/
export function determinant (
  matrixBuffer,
  matrixBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  return /*$ determinant_to_string(determinant(columns, [] | matrix_elements('a', columns, rows)))  $*/
}
