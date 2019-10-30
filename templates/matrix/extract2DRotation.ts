/**
* Extract a 2D rotation from a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix
*
* @param matrixBuffer - Buffer to read.
* @param matrixBufferOffset - Offset to apply when we read the buffer.
*
* @return The 2D rotation angle in radians extracted from the given matrix.
*/
export function extract2DRotation (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number
) : number {
  const a : number = matrixBuffer[matrixBufferOffset + 0]
  const b : number = matrixBuffer[matrixBufferOffset + 1]

  return Math.atan(-b / a)
}
