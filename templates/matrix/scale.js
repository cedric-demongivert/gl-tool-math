/**
* Apply a <$ rows $> dimensional scale to a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the matrix to transform.
* @param {number} matrixBufferOffset - Offset to apply when we read the matrix buffer.
<% for index in range(rows) %>* @param {number} <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function scale (
  matrixBuffer,
  matrixBufferOffset,
  /*% for index in range(rows) %*//*$ components[index]  $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*$ components[cell.column] $*/ * b/*$ cell.index $*/
  /*% endfor %*/
  return resultBuffer
}
