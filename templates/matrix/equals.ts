/**
* Compare two <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and return true if they are both equals.
*
* @param leftBuffer - Buffer that contains the left operand matrix.
* @param leftBufferOffset - Offset to apply when we read the buffer that contains the left operand matrix.
* @param rightBuffer - Buffer that contains the right operand matrix.
* @param rightBufferOffset - Offset to apply when we read the buffer that contains the right operand matrix.
* @param [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
*
* @return True if both matrices are equals.
*/
export function equals (
  leftBuffer : /*$ matrix_buffer_type $*/,
  leftBufferOffset : number,
  rightBuffer : /*$ matrix_buffer_type $*/,
  rightBufferOffset : number,
  tolerance : number = Number.EPSILON
) : boolean {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ : number = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ : number = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  return /*% for cell in cells() %*/Math.abs(a/*$ cell.index $*/ - b/*$ cell.index $*/) < tolerance/*% if loop.nextitem is defined %*/ &&
         /*% endif %*//*% endfor %*/
}
