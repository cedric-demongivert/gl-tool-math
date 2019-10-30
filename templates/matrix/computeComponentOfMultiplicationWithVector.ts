/*% for component in range(rows) %*/
/**
* Multiply <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a <$ rows $> <$ matrix_type_name $> vector and return a component of the resulting vector.
*
* @param matrixBuffer - Buffer that contains the left operand matrix.
* @param matrixBufferOffset - Offset to apply when we read the first buffer.
<% for index in range(rows) %>* @param <$ components[index] $> - Value of the <$ components[index] $> component of the vector to multiply.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return A component of the resulting vector.
*/
export function compute/*$ components[component] | upper $*/ComponentOfMultiplicationWithVector (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  /*% for index in range(rows) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
) : number  {
  /*% for column in range(columns) %*/const a/*$ column $*//*$ component $*/ : number = matrixBuffer[matrixBufferOffset + /*$ offset(column, component) $*/]
  /*% endfor %*/

  return /*% for column in range(columns) %*/a/*$ index(column, component) $*/ * /*$ components[column] $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
}
/*% endfor %*/
