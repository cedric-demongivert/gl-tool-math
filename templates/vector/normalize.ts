/*% if vector_type in ['d', 'f'] %*/import { length } from './length'

/**
* Normalize a <$ vector_dimension $> <$ vector_type_name $> buffered vector and set the result into another buffer.
*
* @param vectorBuffer - Buffer to read.
* @param vectorBufferOffset - Offset to use when we read the given buffer.
* @param resultBuffer - Buffer to write.
* @param resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return The result buffer updated with the result of this operation.
*/
export function normalize (
  vectorBuffer : /*$ vector_buffer_type $*/,
  vectorBufferOffset : number,
  resultBuffer : /*$ vector_buffer_type $*/,
  resultBufferOffset : number
) : /*$ vector_buffer_type $*/ {
  const scalar : number = length(vectorBuffer, vectorBufferOffset)

  /*% for index in range(vector_dimension) %*/const a/*$ index $*/ : number = vectorBuffer[vectorBufferOffset + /*$ index $*/ ]
  /*% endfor %*/
  /*% for index in range(vector_dimension) %*/resultBuffer[resultBufferOffset + /*$ index $*/ ] = a/*$ index $*/  / scalar
  /*% endfor %*/
  return resultBuffer
}
/*% endif %*/
