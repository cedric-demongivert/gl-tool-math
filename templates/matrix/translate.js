/**
* Apply a <$  rows - 1  $> dimensional translation to a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the matrix to transform.
* @param {number} matrixBufferOffset - Offset to apply when we read the matrix buffer.
<% for index in range(rows - 1) %>* @param {number} <$ components[index] $> - Translation to apply to the <$ components[index] $> axis.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function translate (
  matrixBuffer,
  matrixBufferOffset,
  /*% for index in range(rows - 1) %*//*$ components[index]  $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = /*% if cell.column == cell.row %*/1/*% elif cell.column == columns - 1%*//*$ components[cell.row] $*//*% else %*/0/*% endif %*/
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for i in range(columns) %*/a/*$ index(i, cell.row) $*/ * b/*$ index(cell.column, i) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}
