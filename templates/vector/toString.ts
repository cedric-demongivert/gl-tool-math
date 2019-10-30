/**
* Transform a <$ vector_dimension $>D <$ vector_type_name $> buffered vector into a string.
*
* @param vectorBuffer - Buffer that contains the vector to transform.
* @param vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return A string representation of the given vector.
*/
export function toString (
  vectorBuffer : /*$ vector_buffer_type $*/,
  vectorBufferOffset : number
) : string {
  if (vectorBuffer == null) {
    return 'vector /*$ vector_dimension $*/ /*$ vector_type_name $*/ null'
  } else {
    /*% for index in range(vector_dimension) %*/ const a/*$ index $*/ : number = vectorBuffer[vectorBufferOffset + /*$ index $*/]
    /*% endfor %*/
    return [
      `vector /*$ vector_dimension $*/ /*$ vector_type_name $*/ [`,
        /*% for index in range(vector_dimension) %*/a/*$ index $*/,/*% if loop.nextitem is defined %*/ ',', /*% endif %*//*% endfor %*/
      ']'
    ].join('')
  }
}
