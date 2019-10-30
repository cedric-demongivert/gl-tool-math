/**
* Multiply a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with another static matrix, the buffered matrix will be used as a left operand.
*
* @param rightBuffer - Buffer that contains the right operand matrix.
* @param rightBufferOffset - Offset to apply when we read the first buffer.
<% for row in range(rows) %><% for column in range(columns) %>* @param b<$ column $><$ row $> - Value of the cell of the column <$ column $> and row <$ row $> of the static matrix.
<% endfor %><% endfor %>,
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the result of the operation.
*/
export function multiplyWithStaticMatrixAsLeftOperand (
  rightBuffer : /*$ matrix_buffer_type $*/,
  rightBufferOffset : number,
  /*% for cell in cells() %*/b/*$ cell.index $*/ : number/*$ cell.separator $*//*% if cell.endrow %*/
  /*% endif %*//*% endfor %*/,
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ : number = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for index in range(columns) %*/a/*$ index $*//*$ cell.row $*/ * b/*$ cell.column $*//*$ index $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}
