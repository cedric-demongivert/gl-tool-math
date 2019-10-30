import { squaredLength } from './squaredLength'

/**
* Return the length of a <$ vector_dimension $> <$ vector_type_name $> buffered vector.
*
* @param vectorBuffer - Buffer that contains the vector to transform.
* @param vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return The length of the given vector.
*/
export function length (
  vectorBuffer : /*$ vector_buffer_type $*/,
  vectorBufferOffset : number
) : number {
  return Math.sqrt(squaredLength(vectorBuffer, vectorBufferOffset))
}
