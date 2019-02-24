/**
* Transpose a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the source buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the transposed matrix readed from the source buffer.
*/
export function transpose (
  matrixBuffer,
  matrixBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.row $*//*$ cell.column $*/
  /*% endfor %*/
  return resultBuffer
}
