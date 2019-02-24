/**
* Multiply <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with another and put the result into a third buffer.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the first buffer.
* @param {<$ matrix_buffer_type $>} rightBuffer - Buffer that contains the right operand matrix.
* @param {number} rightBufferOffset - Offset to apply when we read the second buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function multiplyWithMatrix (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for i in range(columns) %*/a/*$ index(i, cell.row) $*/ * b/*$  index(cell.column, i) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}
