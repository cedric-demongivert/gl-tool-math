/**
* Copy the content of a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix into another.
*
* @param sourceBuffer - Buffer to read.
* @param sourceBufferOffset - Offset to apply when we read the source buffer.
* @param destinationBuffer - Buffer to write.
* @param destinationBufferOffset - Offset to apply when we write into the destination buffer.
*
* @return The destination buffer, updated with the source data.
*/
export function copy (
  sourceBuffer : /*$ matrix_buffer_type $*/,
  sourceBufferOffset : number,
  destinationBuffer : /*$ matrix_buffer_type $*/,
  destinationBufferOffset : number
) : /*$ matrix_buffer_type $*/ {
  /*% for cell in cells() %*/const a/*$ cell.index $*/ : number = sourceBuffer[sourceBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*/
  /*% for cell in cells() %*/destinationBuffer[destinationBufferOffset + /*$ cell.offset $*/] = a/*$ cell.index $*/
  /*% endfor %*/
  return destinationBuffer
}
