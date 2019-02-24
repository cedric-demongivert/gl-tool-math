/**
* Transform a <$ vector_dimension $>D <$ vector_type_name $> buffered vector into a string.
*
* @param {<$ vector_buffer_type $>} vectorBuffer - Buffer that contains the vector to transform.
* @param {number} vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return {string} A string representation of the given vector.
*/
export function toString (vectorBuffer, vectorBufferOffset) {
  if (vectorBuffer == null) {
    return 'vector /*$ vector_dimension $*/ /*$ vector_type_name $*/ null'
  } else {
    /*% for index in range(vector_dimension) %*/ const a/*$ index $*/ = vectorBuffer[vectorBufferOffset + /*$ index $*/]
    /*% endfor %*/
    return [
      `vector /*$ vector_dimension $*/ /*$ vector_type_name $*/ [`,
        /*% for index in range(vector_dimension) %*/a/*$ index $*/,/*% if loop.nextitem is defined %*/ ',', /*% endif %*//*% endfor %*/
      ']'
    ].join('')
  }
}
