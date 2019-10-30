/**
* Compute and return the determinant of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*
* @param matrixBuffer - Buffer to read.
* @param matrixBufferOffset - Offset to apply when we read the buffer.
*
* @return The determinant of the given <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*/
export function determinant (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number
) : number {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ : number = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  return /*$ determinant_to_string(determinant(columns, [] | matrix_elements('a', columns, rows)))  $*/
}
