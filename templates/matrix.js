/**
* Transform a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix into a string.
*
* @param {<$ matrix_buffer_type  $>} matrixBuffer - The buffer that contains the matrix to transform.
* @param {number} matrixBufferOffset - The offset to apply when we read the given buffer.
*
* @return {string} A string representation of the given matrix.
*/
export function toString (
  matrixBuffer,
  matrixBufferOffset
) {
  if (matrixBuffer == null) {
    return 'matrix /*$ columns $*/ by /*$ rows $*/ /*$ matrix_type_name $*/ null'
  } else {
    return [
      `matrix /*$ columns $*/ by /*$ rows $*/ /*$ matrix_type_name $*/ `,
      '[',
      /*% for row in range(rows) %*/'\n\r\t', /*% for column in range(columns) %*/matrixBuffer[matrixBufferOffset + /*$ offset(column, row) $*/].toPrecision(8),/*% if loop.nextitem is defined %*/ ', ', /*% endif %*//*% endfor %*//*% if loop.nextitem is defined %*/ ',',
      /*% endif %*//*% endfor %*/
      '\n\r]'
    ].join('')
  }
}

/**
* Fill a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a given value.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the matrix to fill.
* @param {number} matrixBufferOffset - Offset to apply when we write into the given buffer.
* @param {number} value - Value to set in each cell of the given matrix.
*
* @return {<$ matrix_buffer_type $>} The buffer with the updated matrix.
*/
export function fill (
  matrixBuffer,
  matrixBufferOffset,
  value
) {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = value
  /*% endfor %*/
  return matrixBuffer
}

/**
* Compare two <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and return true if they are both equals.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the buffer that contains the left operand matrix.
* @param {<$ matrix_buffer_type $>} rightBuffer - Buffer that contains the right operand matrix.
* @param {number} rightBufferOffset - Offset to apply when we read the buffer that contains the right operand matrix.
* @param {number} [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
*
* @return {boolean} True if both matrices are equals.
*/
export function equals (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  tolerance = Number.EPSILON
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  return /*% for cell in cells() %*/Math.abs(a/*$ cell.index $*/ - b/*$ cell.index $*/) < tolerance/*% if loop.nextitem is defined %*/ &&
         /*% endif %*//*% endfor %*/
}

/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*
* @param {<$ matrix_buffer_type $>} buffer - Buffer to mutate.
* @param {number} bufferOffset - Offset to apply when we mutate the buffer.
* @param {...number} content - New content of the <$ columns $> by <$ rows $> matrix in row-major order.
*
* @return {<$ matrix_buffer_type $>} The buffer, updated with the given data.
*/
export function set (
  buffer,
  bufferOffset,
  /*% for cell in cells() %*/a/*$ cell.index $*//*% if loop.nextitem is defined %*/, /*% endif %*/
  /*% endfor %*/
) {
  /*% for cell in cells() %*/buffer[bufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/
  /*% endfor %*/
  return buffer
}

/**
* Copy the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix into another.
*
* @param {<$ matrix_buffer_type $>} sourceBuffer - Buffer to read.
* @param {number} sourceBufferOffset - Offset to apply when we read the source buffer.
* @param {<$ matrix_buffer_type $>} destinationBuffer - Buffer to write.
* @param {number} destinationBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the source data.
*/
export function copy (
  sourceBuffer,
  sourceBufferOffset,
  destinationBuffer,
  destinationBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = sourceBuffer[sourceBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/destinationBuffer[destinationBufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/
  /*% endfor %*/
  return destinationBuffer
}

/**
* Transpose a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the source buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the transposed matrix readed from the source buffer.
*/
export function transpose (
  matrixBuffer,
  matrixBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.row $*//*$ cell.column $*/
  /*% endfor %*/
  return resultBuffer
}

/**
* Multiply <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with another and put the result into a third buffer.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the first buffer.
* @param {<$ matrix_buffer_type $>} rightBuffer - Buffer that contains the right operand matrix.
* @param {number} rightBufferOffset - Offset to apply when we read the second buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function multiplyWithMatrix (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for i in range(columns) %*/a/*$ index(i, cell.row) $*/ * b/*$  index(cell.column, i) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}

/**
* Multiply a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with another static matrix, the buffered matrix will be used as a left operand.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the left operand matrix.
* @param {number} matrixBufferOffset - Offset to apply when we read the first buffer.
<% for row in range(rows) %><% for column in range(columns) %>* @param {number} b<$ column $><$ row $> - Value of the cell of the column <$ column $> and row <$ row $> of the static matrix.
<% endfor %><% endfor %>,
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function multiplyWithStaticMatrixAsLeftOperand (
  rightBuffer,
  rightBufferOffset,
  /*% for cell in cells() %*/b/*$ cell.index $*//*$ cell.separator $*//*% if cell.endrow %*/
  /*% endif %*//*% endfor %*/,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for index in range(columns) %*/a/*$ index $*//*$ cell.row $*/ * b/*$ cell.column $*//*$ index $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}

/**
* Multiply a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with another static matrix, the buffered matrix will be used as a left operand.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the left operand matrix.
* @param {number} matrixBufferOffset - Offset to apply when we read the first buffer.
<% for cell in cells() %>* @param {number} a<$ cell.index $> - Value of the cell of the column <$ cell.column $> and row <$ cell.row $> of the static matrix.
<% endfor %>
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function multiplyWithStaticMatrixAsRightOperand (
  leftBuffer,
  leftBufferOffset,
  /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.endrow %*/
  /*% endif %*//*% endfor %*/,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% for i in range(columns) %*/a/*$ index(i, cell.row) $*/ * b/*$ index(cell.column, i) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}

/**
* Multiply <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a <$ rows $> <$ matrix_type_name $> buffered vector and put the result into a third buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the left operand matrix.
* @param {number} matrixBufferOffset - Offset to apply when we read the first buffer.
* @param {<$ matrix_buffer_type $>} vectorBuffer - Buffer that contains the right operand vector.
* @param {number} vectorBufferOffset - Offset to apply when we read the second buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function multiplyWithVector (
  matrixBuffer,
  matrixBufferOffset,
  vectorBuffer,
  vectorBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for index in range(rows) %*/const b0/*$ index $*/ = vectorBuffer[vectorBufferOffset + /*$ index $*/]
  /*% endfor %*/
  /*% for row in range(rows) %*/resultBuffer[resultBufferOffset + /*$ row $*/] = /*% for column in range(columns) %*/a/*$ index(column, row) $*/ * b0/*$ column $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
  /*% endfor %*/
  return resultBuffer
}

/**
* Multiply a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a scalar and put the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the first buffer.
* @param {number} scalar - Scalar to use as right operand.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function multiplyWithScalar (
  leftBuffer,
  leftBufferOffset,
  scalar,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/ * scalar
  /*% endfor %*/
  return resultBuffer
}

/**
* Negate a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and put the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer that contains the matrix.
* @param {number} matrixBufferOffset - Offset to apply when we read the matrix buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function negate (
  matrixBuffer,
  matrixBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = -a/*$ cell.index $*/
  /*% endfor %*/
  return resultBuffer
}

/**
* Divide a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a scalar and put the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the first buffer.
* @param {number} scalar - Scalar to use as right operand.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function divideWithScalar (
  leftBuffer,
  leftBufferOffset,
  scalar,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/ / scalar
  /*% endfor %*/
  return resultBuffer
}

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
}/*% if rows in [2, 3, 4] %*/

/**
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

/**
* Add a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to another one and put the result into a third buffer.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the first buffer.
* @param {<$ matrix_buffer_type $>} rightBuffer - Buffer that contains the right operand matrix.
* @param {number} rightBufferOffset - Offset to apply when we read the second buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function add (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/ + b/*$ cell.index $*/
  /*% endfor %*/
  return resultBuffer
}

/**
* Subtract a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to one and put the result into a third buffer.
*
* @param {<$ matrix_buffer_type $>} leftBuffer - Buffer that contains the left operand matrix.
* @param {number} leftBufferOffset - Offset to apply when we read the first buffer.
* @param {<$ matrix_buffer_type $>} rightBuffer - Buffer that contains the right operand matrix.
* @param {number} rightBufferOffset - Offset to apply when we read the second buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return {<$ matrix_buffer_type $>} The destination buffer, updated with the result of the operation.
*/
export function subtract (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = leftBuffer[leftBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/const b/*$ cell.index $*/ = rightBuffer[rightBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/ - b/*$ cell.index $*/
  /*% endfor %*/
  return resultBuffer
}

/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to the content of an identity matrix.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to write.
* @param {number} matrixBufferOffset - Offset to apply when we write into the buffer.
*
* @return {<$ matrix_buffer_type $>} The buffer, updated with content of an identity matrix.
*/
export function toIdentity (
  matrixBuffer,
  matrixBufferOffset
) {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = /*% if cell.row == cell.column %*/1/*% else %*/0/*% endif %*/
  /*% endfor %*/
  return matrixBuffer
}

/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to the content of a <$ rows $> dimensional scale matrix.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to write.
* @param {number} matrixBufferOffset - Offset to apply when we write into the buffer.
<% for index in range(rows) %>* @param {number} <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return {<$ matrix_buffer_type $>} The buffer, updated with the content of a <$ rows $> dimensional scale matrix.
*/
export function toScale (
  matrixBuffer,
  matrixBufferOffset,
  /*% for index in range(rows) %*//*$ components[index]  $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
) {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = /*% if cell.row == cell.column %*//*$ components[cell.row]  $*//*% else %*/0/*% endif %*/
  /*% endfor %*/
  return matrixBuffer
}/*% if rows in [2, 3, 4] %*/

/**
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

/**
* Set the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix to the content of a <$ rows - 1$> dimensional translation matrix.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to write.
* @param {number} matrixBufferOffset - Offset to apply when we write into the buffer.
<% for index in range(rows - 1) %>* @param {number} <$ components[index] $> - Translation to apply to the <$ components[index] $> axis.<% if loop.nextitem is defined %>
<% endif %><% endfor %>
*
* @return {<$ matrix_buffer_type $>} The buffer, updated with the content of a <$ rows - 1 $> dimensional translation matrix.
*/
export function toTranslation (
  matrixBuffer,
  matrixBufferOffset,
  /*% for index in range(rows - 1) %*//*$ components[index]  $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
) {
  /*% for cell in cells() %*/matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/] = /*% if cell.row == cell.column %*/1/*% elif cell.column == columns - 1 %*//*$ components[cell.row]  $*//*% else %*/0/*% endif %*/
  /*% endfor %*/
  return matrixBuffer
}

/**
* Compute and return the determinant of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the buffer.
*
* @return {number} The determinant of the given <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix.
*/
export function determinant (
  matrixBuffer,
  matrixBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  return /*$ determinant_to_string(determinant(columns, [] | matrix_elements('a', columns, rows)))  $*/
}

/*% if matrix_type in ['f', 'd'] %*/
/**
* Invert a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and write the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the result buffer.
*
* @return {<$ matrix_buffer_type $>} The result buffer updated with the result of this operation.
*/
export function invert (
  matrixBuffer,
  matrixBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.column $*//*$ cell.row $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*//*% set elements = [] | matrix_elements('a', columns, rows) %*/
  const determinantValue = determinant(matrixBuffer, matrixBufferOffset)
  /*% if rows == 2 %*/
  resultBuffer[resultBufferOffset + 0] = a11 / determinantValue
  resultBuffer[resultBufferOffset + 1] = -a10 / determinantValue
  resultBuffer[resultBufferOffset + 2] = -a01 / determinantValue
  resultBuffer[resultBufferOffset + 3] = a00 / determinantValue
  /*% else %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% if (cell.row + cell.column) % 2 == 1 %*/-/*% endif %*/(/*$ determinant_to_string(determinant(rows - 1, elements | covariant_matrix(cell.row, cell.column, rows)))  $*/) / determinantValue
  /*% endfor %*//*% endif %*/
  return resultBuffer
}
/*% endif %*/

/**
* Extract a translation from a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the result buffer.
*
* @return {<$ matrix_buffer_type $>} The result buffer updated with the content of the translation vector extracted from the given matrix.
*/
export function extractTranslation (
  matrixBuffer,
  matrixBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for index in range(rows - 1) %*/resultBuffer[resultBufferOffset + /*$ index $*/] = matrixBuffer[matrixBufferOffset + /*$ columns * index + rows - 1 $*/]
  /*% endfor %*/
  return resultBuffer
}

/**
* Extract a scale from a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the result buffer.
*
* @return {<$ matrix_buffer_type $>} The result buffer updated with the content of the <$ rows $> dimensional scale vector extracted from the given matrix.
*/
export function extractScale (
  matrixBuffer,
  matrixBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for row in range(rows) %*/resultBuffer[resultBufferOffset + /*$ row $*/] = Math.sqrt(/*% for column in range(columns) %*/a/*$ column $*//*$ row $*/ * a/*$ column $*//*$ row $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/) * ((a/*$ row $*//*$ row $*/ < 0) ? -1 : 1)
  /*% endfor %*/
  return resultBuffer
}

/**
* Extract a 2D rotation from a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the buffer.
*
* @return {number} The 2D rotation angle in radians extracted from the given matrix.
*/
export function extract2DRotation (
  matrixBuffer,
  matrixBufferOffset
) {
  const a = matrixBuffer[matrixBufferOffset + 0]
  const b = matrixBuffer[matrixBufferOffset + 1]

  return Math.atan(-b / a)
}
