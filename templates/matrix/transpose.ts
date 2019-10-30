/**
* Transpose a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param matrixBuffer - Buffer to read.
* @param matrixBufferOffset - Offset to apply when we read the source buffer.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the transposed matrix readed from the source buffer.
*/
export function transpose (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ : number = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.row $*//*$ cell.column $*/
  /*% endfor %*/
  return resultBuffer
}
