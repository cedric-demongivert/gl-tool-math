/**
* Multiply <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a <$ rows $> <$ matrix_type_name $> buffered vector and put the result into a third buffer.
*
* @param matrixBuffer - Buffer that contains the left operand matrix.
* @param matrixBufferOffset - Offset to apply when we read the first buffer.
* @param vectorBuffer - Buffer that contains the right operand vector.
* @param vectorBufferOffset - Offset to apply when we read the second buffer.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the result of the operation.
*/
export function multiplyWithVector (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  vectorBuffer : /*$ matrix_buffer_type $*/,
  vectorBufferOffset : number,
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ : number = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for index in range(rows) %*/const b0/*$ index $*/ : number = vectorBuffer[vectorBufferOffset + /*$ index $*/]
  /*% endfor %*/
  /*% for row in range(rows) %*/resultBuffer[resultBufferOffset + /*$ row $*/] = /*% for column in range(columns) %*/a/*$ index(column, row) $*/ * b/*$ index(0, column) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}
