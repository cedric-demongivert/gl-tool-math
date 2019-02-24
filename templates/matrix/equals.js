/**
* Compare two <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and return true if they are both equals.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the buffer that contains the left operand matrix.
* @param {<$ matrix_buffer_type $>} rightBuffer - Buffer that contains the right operand matrix.
* @param {number} rightBufferOffset - Offset to apply when we read the buffer that contains the right operand matrix.
* @param {number} [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
*
* @return {boolean} True if both matrices are equals.
*/
export function equals (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  tolerance = Number.EPSILON
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  return /*% for cell in cells() %*/Math.abs(a/*$ cell.index $*/ - b/*$ cell.index $*/) < tolerance/*% if loop.nextitem is defined %*/ &&
         /*% endif %*//*% endfor %*/
}
