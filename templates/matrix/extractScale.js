/**
* Extract a scale from a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the result buffer.
*
* @return {<$ matrix_buffer_type $>} The result buffer updated with the content of the <$ rows $> dimensional scale vector extracted from the given matrix.
*/
export function extractScale (
  matrixBuffer,
  matrixBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for row in range(rows) %*/resultBuffer[resultBufferOffset + /*$ row $*/] = Math.sqrt(/*% for column in range(columns) %*/a/*$ column $*//*$ row $*/ * a/*$ column $*//*$ row $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/) * ((a/*$ row $*//*$ row $*/ < 0) ? -1 : 1)
  /*% endfor %*/
  return resultBuffer
}
