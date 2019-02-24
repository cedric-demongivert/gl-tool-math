/*% if rows in [2, 3, 4] %*//**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to a <$ rows if rows <= 3 else 3 $> dimensional rotation.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the matrix to transform.
* @param {number} matrixBufferOffset - Offset to apply when we read the matrix buffer.
<% for index in range(rows if rows <= 3 else 3) %>* @param {number} <$ components[index] $> - Rotation for the <$ components[index] $> axis in radians.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return {<$ matrix_buffer_type $>} The buffer, updated with the content of a <$ rows if rows <= 3 else 3 $> dimensional rotation.
*/
export function toRotation (
  matrixBuffer,
  matrixBufferOffset,
  /*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index]  $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
) {
  /*% for index in range(rows if rows <= 3 else 3) %*/const cos/*$ components[index]  $*/ = Math.cos(/*$ components[index]  $*/)
  const sin/*$ components[index]  $*/ = Math.sin(/*$ components[index]  $*/)
  /*% endfor %*//*% if rows == 2 %*/
  matrixBuffer[matrixBufferOffset + 0] = cosx
  matrixBuffer[matrixBufferOffset + 1] = -sinx
  matrixBuffer[matrixBufferOffset + 2] = sinx
  matrixBuffer[matrixBufferOffset + 3] = cosx
  /*% else %*/
  matrixBuffer[matrixBufferOffset + 0] = cosy * cosz
  matrixBuffer[matrixBufferOffset + 1] = cosy * -sinz
  matrixBuffer[matrixBufferOffset + 2] = siny/*% if rows == 4 %*/
  matrixBuffer[matrixBufferOffset + 3] = 0/*% endif %*/
  matrixBuffer[matrixBufferOffset + /*$ columns $*/] = (-sinx * -siny * cosz + cosx * sinz)
  matrixBuffer[matrixBufferOffset + /*$ columns + 1 $*/] = (-sinx * -siny * -sinz + cosx * cosz)
  matrixBuffer[matrixBufferOffset + /*$ columns + 2 $*/] = -sinx * cosy/*% if rows == 4 %*/
  matrixBuffer[matrixBufferOffset + /*$ columns + 3 $*/] = 0/*% endif %*/
  matrixBuffer[matrixBufferOffset + /*$ columns * 2 + 0 $*/] = (cosx * -siny * cosz + sinx * sinz)
  matrixBuffer[matrixBufferOffset + /*$ columns * 2 + 1 $*/] = (cosx * -siny * -sinz + sinx * cosz)
  matrixBuffer[matrixBufferOffset + /*$ columns * 2 + 2 $*/] = cosx * cosy/*% if rows == 4 %*/
  matrixBuffer[matrixBufferOffset + /*$ columns * 2 + 3 $*/] = 0
  matrixBuffer[matrixBufferOffset + /*$ columns * 3 + 0 $*/] = 0
  matrixBuffer[matrixBufferOffset + /*$ columns * 3 + 1 $*/] = 0
  matrixBuffer[matrixBufferOffset + /*$ columns * 3 + 2 $*/] = 0
  matrixBuffer[matrixBufferOffset + /*$ columns * 3 + 3 $*/] = 1/*% endif %*/
  /*% endif %*/
  return matrixBuffer
}/*% endif %*/
