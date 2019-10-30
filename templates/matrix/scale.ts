/**
* Apply a <$ rows $> dimensional scale to a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param matrixBuffer - Buffer that contains the matrix to transform.
* @param matrixBufferOffset - Offset to apply when we read the matrix buffer.
<% for index in range(rows) %>* @param <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the result of the operation.
*/
export function scale (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  /*% for index in range(rows) %*//*$ components[index]  $*/ : number,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/const b/*$ cell.index $*/ : number = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*$ components[cell.column] $*/ * b/*$ cell.index $*/
  /*% endfor %*/
  return resultBuffer
}
