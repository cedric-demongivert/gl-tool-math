/*% if rows in [2, 3, 4] %*//**
* Apply a <$ rows if rows <= 3 else 3 $> dimensional rotation to a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the matrix to transform.
* @param {number} matrixBufferOffset - Offset to apply when we read the matrix buffer.
<% for index in range(rows if rows <= 3 else 3) %>* @param {number} <$ components[index] $> - Rotation for the <$ components[index] $> axis in radians.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function rotate (
  matrixBuffer,
  matrixBufferOffset,
  /*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index]  $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
  resultBuffer,
  resultBufferOffset
) {
  /*% for index in range(rows if rows <= 3 else 3) %*/const cos/*$ components[index]  $*/ = Math.cos(/*$ components[index]  $*/)
  const sin/*$ components[index]  $*/ = Math.sin(/*$ components[index]  $*/)
  /*% endfor %*//*% if rows == 2 %*/
  const a00 = cosx
  const a10 = -sinx
  const a01 = sinx
  const a11 = cosx
  /*% else %*/
  const a00 = cosy * cosz
  const a10 = cosy * -sinz
  const a20 = siny/*% if rows == 4 %*/
  const a30 = 0/*% endif %*/
  const a01 = (-sinx * -siny * cosz + cosx * sinz)
  const a11 = (-sinx * -siny * -sinz + cosx * cosz)
  const a21 = -sinx * cosy/*% if rows == 4 %*/
  const a31 = 0/*% endif %*/
  const a02 = (cosx * -siny * cosz + sinx * sinz)
  const a12 = (cosx * -siny * -sinz + sinx * cosz)
  const a22 = cosx * cosy/*% if rows == 4 %*/
  const a32 = 0
  const a03 = 0
  const a13 = 0
  const a23 = 0
  const a33 = 1/*% endif %*/
  /*% endif %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for i in range(columns) %*/a/*$ index(i, cell.row) $*/ * b/*$ index(cell.column, i) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}/*% endif %*/
