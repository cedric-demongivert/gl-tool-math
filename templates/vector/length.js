import { squaredLength } from './squaredLength'

/**
* Return the length of a <$ vector_dimension $> <$ vector_type_name $> buffered vector.
*
* @param {<$ vector_buffer_type $>} vectorBuffer - Buffer that contains the vector to transform.
* @param {number} vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return {number} The length of the given vector.
*/
export function length (
  vectorBuffer,
  vectorBufferOffset
) {
  return Math.sqrt(squaredLength(vectorBuffer, vectorBufferOffset))
}
