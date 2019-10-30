/**
* Extract a translation from a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix
*
* @param matrixBuffer - Buffer to read.
* @param matrixBufferOffset - Offset to apply when we read the buffer.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to apply when we write into the result buffer.
*
* @return The result buffer updated with the content of the translation vector extracted from the given matrix.
*/
export function extractTranslation (
  matrixBuffer : /*$ matrix_buffer_type $*/,
  matrixBufferOffset : number,
  resultBuffer : /*$ matrix_buffer_type $*/,
  resultBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for index in range(rows - 1) %*/resultBuffer[resultBufferOffset + /*$ index $*/] = matrixBuffer[matrixBufferOffset + /*$ columns * index + rows - 1 $*/]
  /*% endfor %*/
  return resultBuffer
}
