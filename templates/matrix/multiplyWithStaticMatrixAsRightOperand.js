/**
* Multiply a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with another static matrix, the buffered matrix will be used as a left operand.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the first buffer.
<% for cell in cells() %>* @param {number} a<$ cell.index $> - Value of the cell of the column <$ cell.column $> and row <$ cell.row $> of the static matrix.
<% endfor %>
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function multiplyWithStaticMatrixAsRightOperand (
  leftBuffer,
  leftBufferOffset,
  /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.endrow %*/
  /*% endif %*//*% endfor %*/,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for i in range(columns) %*/a/*$ index(i, cell.row) $*/ * b/*$ index(cell.column, i) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}
