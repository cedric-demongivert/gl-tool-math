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
