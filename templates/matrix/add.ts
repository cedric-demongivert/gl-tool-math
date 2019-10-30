/**
* Add a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to another one and put the result into a third buffer.
*
* @param leftBuffer - Buffer that contains the left operand matrix.
* @param leftBufferOffset - Offset to apply when we read the first buffer.
* @param rightBuffer - Buffer that contains the right operand matrix.
* @param rightBufferOffset - Offset to apply when we read the second buffer.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the result of the operation.
*/
export function add (
  leftBuffer : /*$ matrix_buffer_type $*/,
  leftBufferOffset : number,
  rightBuffer : /*$ matrix_buffer_type $*/,
  rightBufferOffset : number,
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ : number = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ : number = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/ + b/*$ cell.index $*/
  /*% endfor %*/
  return resultBuffer
}
