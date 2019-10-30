/**
* Divide a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a scalar and put the result into another buffer.
*
* @param leftBuffer - Buffer that contains the left operand matrix.
* @param leftBufferOffset - Offset to apply when we read the first buffer.
* @param scalar - Scalar to use as right operand.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the result of the operation.
*/
export function divideWithScalar (
  leftBuffer : /*$ matrix_buffer_type $*/,
  leftBufferOffset : number,
  scalar : number,
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ : number = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/ / scalar
  /*% endfor %*/
  return resultBuffer
}
