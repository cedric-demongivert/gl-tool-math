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
