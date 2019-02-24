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
