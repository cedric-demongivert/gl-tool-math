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
