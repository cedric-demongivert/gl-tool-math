/**
* Multiply <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a <$ rows $> <$ matrix_type_name $> buffered vector and put the result into a third buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the left operand matrix.
* @param {number} matrixBufferOffset - Offset to apply when we read the first buffer.
* @param {<$ matrix_buffer_type $>} vectorBuffer - Buffer that contains the right operand vector.
* @param {number} vectorBufferOffset - Offset to apply when we read the second buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function multiplyWithVector (
  matrixBuffer,
  matrixBufferOffset,
  vectorBuffer,
  vectorBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for index in range(rows) %*/const b0/*$ index $*/ = vectorBuffer[vectorBufferOffset + /*$ index $*/]
  /*% endfor %*/
  /*% for row in range(rows) %*/resultBuffer[resultBufferOffset + /*$ row $*/] = /*% for column in range(columns) %*/a/*$ index(column, row) $*/ * b0/*$ column $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}
