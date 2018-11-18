/**
* Transform a {{vector_dimension}} {{vector_type_name}} buffered vector into a string.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer that contains the vector to transform.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return {{ '{' }}String{{ '}' }} A string representation of the given vector.
*/
export function toString (vectorBuffer, vectorBufferOffset) {{ '{' }}
  if (vectorBuffer == null) {{ '{' }}
    return 'vector {{vector_dimension}} {{vector_type_name}} null'
  {{ '}' }} else {{ '{' }}
    {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
    {% endfor %}
    return [
      `vector {{vector_dimension}} {{vector_type_name}} [`,
        {% for index in range(vector_dimension) %}a{{index}},{% if loop.nextitem is defined %} ',', {% endif %}{% endfor %}
      ']'
    ].join('')
  {{ '}' }}
{{ '}' }}

/**
* Test if two 2D vectors from two buffers are equals.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} leftBuffer - Buffer that contains the left operand vector.
* @param {{ '{' }}boolean{{ '}' }} leftBufferOffset - Offset to use when we read the buffer that contains the left operand vector.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} rightBuffer - Buffer that contains the right operand vector.
* @param {{ '{' }}boolean{{ '}' }} rightBufferOffset - Offset to use when we read the buffer that contains the right operand vector.
* @param {{ '{' }}number{{ '}' }} [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
*
* @return {{ '{' }}boolean{{ '}' }} True if both vector are equals, false otherwise.
*/
export function equals (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  tolerance = Number.EPSILON
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = leftBuffer[leftBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}const b{{index}} = rightBuffer[rightBufferOffset + {{ index }}]
  {% endfor %}
  return {% for index in range(vector_dimension) %}Math.abs(a{{index}} - b{{index}}) < tolerance{% if loop.nextitem is defined %} &&
         {% endif %}{% endfor %}
{{ '}' }}

/**
* Copy a vector from a buffer to another.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} sourceBuffer - Buffer that contains the left operand vector.
* @param {{ '{' }}boolean{{ '}' }} sourceBufferOffset - Offset to use when we read the buffer that contains the left operand vector.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} destinationBuffer - Buffer that contains the right operand vector.
* @param {{ '{' }}boolean{{ '}' }} destinationBufferOffset - Offset to use when we read the buffer that contains the right operand vector.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The updated destination buffer.
*/
export function copy (
  sourceBuffer,
  sourceBufferOffset,
  destinationBuffer,
  destinationBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = sourceBuffer[sourceBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}destinationBuffer[destinationBufferOffset + {{index}}] = a{{index}}
  {% endfor %}
  return destinationBuffer
{{ '}' }}

/**
* Compute the addition of two {{vector_dimension}} {{vector_type_name}} buffered vectors and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} leftBuffer - Buffer that contains the left operand.
* @param {{ '{' }}number{{ '}' }} leftBufferOffset - Offset to use when we read the buffer that contains the left operand.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} rightBuffer - Buffer that contains the right operand.
* @param {{ '{' }}number{{ '}' }} rightBufferOffset - Offset to use when we read the buffer that contains the right operand.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The updated result buffer.
*/
export function add (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = leftBuffer[leftBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}const b{{index}} = rightBuffer[rightBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = a{{index}} + b{{index}}
  {% endfor %}
  return resultBuffer
{{ '}' }}
/**
* Compute the subtraction of two {{vector_dimension}} {{vector_type_name}} buffered vectors and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} leftBuffer - Buffer that contains the left operand.
* @param {{ '{' }}number{{ '}' }} leftBufferOffset - Offset to use when we read the buffer that contains the left operand.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} rightBuffer - Buffer that contains the right operand.
* @param {{ '{' }}number{{ '}' }} rightBufferOffset - Offset to use when we read the buffer that contains the right operand.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function subtract (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = leftBuffer[leftBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}const b{{index}} = rightBuffer[rightBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = a{{index}} - b{{index}}
  {% endfor %}
  return resultBuffer
{{ '}' }}

/**
* Compute the dot product of two {{vector_dimension}} {{vector_type_name}} buffered vectors and return the result.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} leftBuffer - Buffer that contains the left operand.
* @param {{ '{' }}boolean{{ '}' }} leftBufferOffset - Offset to use when we read the buffer that contains the left operand.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} rightBuffer - Buffer that contains the right operand.
* @param {{ '{' }}boolean{{ '}' }} rightBufferOffset - Offset to use when we read the buffer that contains the right operand.
*
* @return {{ '{' }}number{{ '}' }} The result of the dot product.
*/
export function dot (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = leftBuffer[leftBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}const b{{index}} = rightBuffer[rightBufferOffset + {{ index }}]
  {% endfor %}
  return {% for index in range(vector_dimension) %}a{{index}} * b{{index}}{% if loop.nextitem is defined %} + {% endif %}{% endfor %}
{{ '}' }}

/**
* Return the squared length of a {{vector_dimension}} {{vector_type_name}} buffered vector.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer that contains the vector to transform.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return {{ '{' }}number{{ '}' }} The squared length of the given vector.
*/
export function squaredLength (
  vectorBuffer,
  vectorBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  return {% for index in range(vector_dimension) %}a{{index}} * a{{index}}{% if loop.nextitem is defined %} + {% endif %}{% endfor %}
{{ '}' }}

/**
* Return the length of a {{vector_dimension}} {{vector_type_name}} buffered vector.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer that contains the vector to transform.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the buffer that contains the vector to transform.
*
* @return {{ '{' }}number{{ '}' }} The length of the given vector.
*/
export function length (
  vectorBuffer,
  vectorBufferOffset
) {{ '{' }}
  return Math.sqrt(squaredLength(vectorBuffer, vectorBufferOffset))
{{ '}' }}

/**
* Set the content of a {{vector_dimension}} {{vector_type_name}} buffered vector.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we write the result into the given buffer.
* @param {{ '{' }}...number{{ '}' }} values - Values to set.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The given buffer updated with the new values.
*/
export function set (
  vectorBuffer,
  vectorBufferOffset,
  {% for index in range(vector_dimension) %}a{{index}}{% if loop.nextitem is defined %},
  {% endif %}{% endfor %}
) {{ '{' }}
  {% for index in range(vector_dimension) %}vectorBuffer[vectorBufferOffset + {{index}}] = a{{index}}
  {% endfor %}
  return vectorBuffer
{{ '}' }}

/**
* Multiply a {{vector_dimension}} {{vector_type_name}} buffered vector with a scalar and put the result in another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}number{{ '}' }} scalar - Scalar to use for the multiplication.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function multiplyWithScalar (
  vectorBuffer,
  vectorBufferOffset,
  scalar,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = a{{ index }} * scalar
  {% endfor %}
  return resultBuffer
{{ '}' }}

/**
* Divide a {{vector_dimension}} {{vector_type_name}} buffered vector with a scalar and put the result in another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}number{{ '}' }} scalar - Scalar to use for the division.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function divideWithScalar (
  vectorBuffer,
  vectorBufferOffset,
  scalar,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = a{{ index }} / scalar
  {% endfor %}
  return resultBuffer
{{ '}' }}

/**
* Negate a {{vector_dimension}} {{vector_type_name}} buffered vector and put the result in another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function negate (
  vectorBuffer,
  vectorBufferOffset,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = -a{{ index }}
  {% endfor %}
  return resultBuffer
{{ '}' }}

{% if vector_type in ['d', 'f'] %}
/**
* Normalize a {{vector_dimension}} {{vector_type_name}} buffered vector and set the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function normalize (
  vectorBuffer,
  vectorBufferOffset,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  const scalar = length(vectorBuffer, vectorBufferOffset)

  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = a{{ index }} / scalar
  {% endfor %}
  return resultBuffer
{{ '}' }}

/**
* Ceil each component of a {{vector_dimension}} {{vector_type_name}} buffered vector and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function ceil (
  vectorBuffer,
  vectorBufferOffset,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = Math.ceil(a{{ index }})
  {% endfor %}
  return resultBuffer
{{ '}' }}

/**
* Floor each component of a {{vector_dimension}} {{vector_type_name}} buffered vector and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function floor (
  vectorBuffer,
  vectorBufferOffset,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = Math.floor(a{{ index }})
  {% endfor %}
  return resultBuffer
{{ '}' }}

/**
* Round each component of a {{vector_dimension}} {{vector_type_name}} buffered vector and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function round (
  vectorBuffer,
  vectorBufferOffset,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = Math.round(a{{ index }})
  {% endfor %}
  return resultBuffer
{{ '}' }}
{% endif %}

/**
* Update each component of a {{vector_dimension}} {{vector_type_name}} buffered vector less than the given minimum, and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}number{{ '}' }} minimum - Minimum value allowed.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function minimum (
  vectorBuffer,
  vectorBufferOffset,
  minimum,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = Math.max(a{{ index }}, minimum)
  {% endfor %}
  return resultBuffer
{{ '}' }}

/**
* Update each component of a {{vector_dimension}} {{vector_type_name}} buffered vector greather than the given maximum, and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}number{{ '}' }} maximum - Maximum value allowed.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function maximum (
  vectorBuffer,
  vectorBufferOffset,
  maximum,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = Math.min(a{{ index }}, maximum)
  {% endfor %}
  return resultBuffer
{{ '}' }}


/**
* Clamp each component of {{vector_dimension}} {{vector_type_name}} buffered vector between two values, and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} vectorBuffer - Buffer to read.
* @param {{ '{' }}number{{ '}' }} vectorBufferOffset - Offset to use when we read the given buffer.
* @param {{ '{' }}number{{ '}' }} minimum - Minimum value allowed.
* @param {{ '{' }}number{{ '}' }} maximum - Maximum value allowed.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The result buffer updated with the result of this operation.
*/
export function clamp (
  vectorBuffer,
  vectorBufferOffset,
  minimum,
  maximum,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = vectorBuffer[vectorBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = Math.max(Math.min(a{{ index }}, maximum), minimum)
  {% endfor %}
  return resultBuffer
{{ '}' }}

/**
* Compute the a vector that is a mix of two {{vector_dimension}} {{vector_type_name}} buffered vectors and put the result into another buffer.
*
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} leftBuffer - Buffer that contains the left operand.
* @param {{ '{' }}number{{ '}' }} leftBufferOffset - Offset to use when we read the buffer that contains the left operand.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} rightBuffer - Buffer that contains the right operand.
* @param {{ '{' }}number{{ '}' }} rightBufferOffset - Offset to use when we read the buffer that contains the right operand.
* @param {{ '{' }}number{{ '}' }} scalar - A float number between 0 and 1.
* @param {{ '{' }}{{ vector_buffer_type }}{{ '}' }} resultBuffer - Buffer to write.
* @param {{ '{' }}number{{ '}' }} resultBufferOffset - Offset to use when we write into the result buffer.
*
* @return {{ '{' }}{{ vector_buffer_type }}{{ '}' }} The updated result buffer.
*/
export function mix (
  leftBuffer,
  leftBufferOffset,
  rightBuffer,
  rightBufferOffset,
  scalar,
  resultBuffer,
  resultBufferOffset
) {{ '{' }}
  {% for index in range(vector_dimension) %}const a{{index}} = leftBuffer[leftBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}const b{{index}} = rightBuffer[rightBufferOffset + {{ index }}]
  {% endfor %}
  {% for index in range(vector_dimension) %}resultBuffer[resultBufferOffset + {{index}}] = a{{index}} + (b{{index}} - a{{index}}) * scalar
  {% endfor %}
  return resultBuffer
{{ '}' }}
