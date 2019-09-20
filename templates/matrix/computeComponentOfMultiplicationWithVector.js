/*% for component in range(rows) %*/
/**
* Multiply <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a <$ rows $> <$ matrix_type_name $> vector and return a component of the resulting vector.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the left operand matrix.
* @param {number} matrixBufferOffset - Offset to apply when we read the first buffer.
<% for index in range(rows) %>* @param {number} <$ components[index] $> - Value of the <$ components[index] $> component of the vector to multiply.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return {number} A component of the resulting vector.
*/
export function compute/*$ components[component] | upper $*/ComponentOfMultiplicationWithVector (
  matrixBuffer,
  matrixBufferOffset,
  /*% for index in range(rows) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
) {
  /*% for column in range(columns) %*/const a/*$ column $*//*$ component $*/ = matrixBuffer[matrixBufferOffset + /*$ offset(column, component) $*/]
  /*% endfor %*/

  return /*% for column in range(columns) %*/a/*$ index(column, component) $*/ * /*$ components[column] $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
}
/*% endfor %*/
