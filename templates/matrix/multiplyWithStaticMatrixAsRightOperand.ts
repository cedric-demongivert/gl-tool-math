/**
* Multiply a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with another static matrix, the buffered matrix will be used as a left operand.
*
* @param leftBuffer - Buffer that contains the left operand matrix.
* @param leftBufferOffset - Offset to apply when we read the first buffer.
<% for cell in cells() %>* @param a<$ cell.index $> - Value of the cell of the column <$ cell.column $> and row <$ cell.row $> of the static matrix.
<% endfor %>
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the result of the operation.
*/
export function multiplyWithStaticMatrixAsRightOperand (
  leftBuffer : /*$ matrix_buffer_type $*/,
  leftBufferOffset : number,
  /*% for cell in cells() %*/a/*$ cell.index $*/ : number/*$ cell.separator $*//*% if cell.endrow %*/
  /*% endif %*//*% endfor %*/,
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/const b/*$ cell.index $*/ : number = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for i in range(columns) %*/a/*$ index(i, cell.row) $*/ * b/*$ index(cell.column, i) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}
