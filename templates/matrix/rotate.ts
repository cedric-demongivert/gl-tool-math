/*% if rows in [2, 3, 4] %*//**
* Apply a <$ rows if rows <= 3 else 3 $> dimensional rotation to a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param matrixBuffer - Buffer that contains the matrix to transform.
* @param matrixBufferOffset - Offset to apply when we read the matrix buffer.
<% for index in range(rows if rows <= 3 else 3) %>* @param <$ components[index] $> - Rotation for the <$ components[index] $> axis in radians.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the result of the operation.
*/
export function rotate (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  /*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index]  $*/ : number,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for index in range(rows if rows <= 3 else 3) %*/const cos/*$ components[index]  $*/ : number = Math.cos(/*$ components[index]  $*/)
  const sin/*$ components[index]  $*/ : number = Math.sin(/*$ components[index]  $*/)
  /*% endfor %*//*% if rows == 2 %*/
  const a00 : number = cosx
  const a10 : number = -sinx
  const a01 : number = sinx
  const a11 : number = cosx
  /*% else %*/
  const a00 : number = cosy * cosz
  const a10 : number = cosy * -sinz
  const a20 : number = siny/*% if rows == 4 %*/
  const a30 : number = 0/*% endif %*/
  const a01 : number = (-sinx * -siny * cosz + cosx * sinz)
  const a11 : number = (-sinx * -siny * -sinz + cosx * cosz)
  const a21 : number = -sinx * cosy/*% if rows == 4 %*/
  const a31 : number = 0/*% endif %*/
  const a02 : number = (cosx * -siny * cosz + sinx * sinz)
  const a12 : number = (cosx * -siny * -sinz + sinx * cosz)
  const a22 : number = cosx * cosy/*% if rows == 4 %*/
  const a32 : number = 0
  const a03 : number = 0
  const a13 : number = 0
  const a23 : number = 0
  const a33 : number = 1/*% endif %*/
  /*% endif %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ : number = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for i in range(columns) %*/a/*$ index(i, cell.row) $*/ * b/*$ index(cell.column, i) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}/*% endif %*/
