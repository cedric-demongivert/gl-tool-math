import * as vector from './vector{{vector_dimension}}{{vector_type}}/index'

/**
* Create a new {{vector_dimension}} {{vector_type_name}} vector.
*
* @param {{ '{' }}{{vector_buffer_type}}{{ '}' }} [buffer = new {{vector_buffer_type}}({{vector_dimension}})] - A buffer to wrap.
*/
export class Vector{{vector_dimension}}{{vector_type}} {{ '{' }}
  /**
  * Create a new {{vector_dimension}} {{vector_type_name}} vector with initial data.
  *
  {% for index in range(vector_dimension) %}* @param {{components[index]}} - {{components[index]}} component of the new vector{% if loop.nextitem is defined %}
  {% endif %}{% endfor %}
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} The new vector instance.
  */
  static create (
    {% for index in range(vector_dimension) %}{{components[index]}}{% if loop.nextitem is defined %},
    {% endif %}{% endfor %}
  ) {{ '{' }}
    return new Vector{{vector_dimension}}{{vector_type}}().set({% for index in range(vector_dimension) %}{{components[index]}}{% if loop.nextitem is defined %}, {% endif %}{% endfor %})
  {{ '}' }}

  /**
  * Wrap a {{vector_buffer_type}} as a {{vector_dimension}} {{vector_type_name}} vector.
  *
  * @param {{ '{' }}{{vector_buffer_type}}{{ '}' }} buffer - A buffer to wrap.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} The new vector instance.
  */
  static wrap (buffer) {{ '{' }}
    return new Vector{{vector_dimension}}{{vector_type}}(buffer)
  {{ '}' }}

  /**
  * Clone another {{vector_dimension}} {{vector_type_name}} vector and return the result.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} vector - A {{vector_dimension}} {{vector_type_name}} vector to clone.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} The cloned vector instance.
  */
  static clone (vector) {{ '{' }}
    const result = new Vector{{vector_dimension}}{{vector_type}}()
    {% for index in range(vector_dimension) %}result.{{components[index]}} = vector.{{components[index]}}
    {% endfor %}
    return result
  {{ '}' }}

  constructor (buffer = new {{vector_buffer_type}}({{vector_dimension}})) {{ '{' }}
    this._buffer = buffer
  {{ '}' }}

  {% for index in range(vector_dimension) %}/**
  * @return {{ '{' }}number{{ '}' }}
  */
  get {{components[index]}} () {{ '{' }}
      return this._buffer[{{index}}]
  {{ '}' }}

  /**
  * Set the value of the {{components[index]}} component of this vector.
  *
  * @param {{ '{' }}number{{ '}' }} value - New value of the {{components[index]}} component.
  */
  set {{components[index]}} (value) {{ '{' }}
    this._buffer[{{index}}] = value
  {{ '}' }}{% if loop.nextitem is defined %}

  {% endif %}{% endfor %}{% if vector_dimension == 4 or vector_dimension == 3 %}

  {% for index in range(vector_dimension) %}/**
  * @return {{ '{' }}number{{ '}' }}
  */
  get {{color_components[index]}} () {{ '{' }}
      return this._buffer[{{index}}]
  {{ '}' }}{% if loop.nextitem is defined %}

  {% endif %}{% endfor %}

  {% for index in range(vector_dimension) %}/**
  * Set the value of the {{components[index]}} component of this vector.
  *
  * @param {{ '{' }}number{{ '}' }} value - New value of the {{components[index]}} component.
  */
  set {{color_components[index]}} (value) {{ '{' }}
    this._buffer[{{index}}] = value
  {{ '}' }}{% if loop.nextitem is defined %}

  {% endif %}{% endfor %}{% endif %}

  /**
  * Return the underlying buffer of this vector.
  *
  * @return {{ '{' }}{{vector_buffer_type}}{{ '}' }} The underlying buffer of this vector.
  */
  get buffer () {{ '{' }}
    return this._buffer
  {{ '}' }}

  /**
  * Return the dimension of this vector.
  *
  * @return {{ '{' }}number{{ '}' }} The dimension of this vector.
  */
  get dimension () {{ '{' }}
    return {{vector_dimension}}
  {{ '}' }}

  /**
  * Return the squared length of this vector.
  *
  * @return {{ '{' }}number{{ '}' }} The squared length of this vector.
  */
  get squaredLength () {{ '{' }}
    return vector.squaredLength(this._buffer, 0)
  {{ '}' }}

  /**
  * Return the length of this vector.
  *
  * @return {{ '{' }}number{{ '}' }} The length of this vector.
  */
  get length () {{ '{' }}
    return vector.length(this._buffer, 0)
  {{ '}' }}

  /**
  * Set all components of this vector.
  *
  {% for index in range(vector_dimension) %}* @param {{components[index]}} - {{components[index]}} component of the new vector{% if loop.nextitem is defined %}
  {% endif %}{% endfor %}
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  set (
    {% for index in range(vector_dimension) %}{{components[index]}}{% if loop.nextitem is defined %},
    {% endif %}{% endfor %}
  ) {{ '{' }}
    vector.set(this._buffer, 0, {% for index in range(vector_dimension) %}{{components[index]}}{% if loop.nextitem is defined %}, {% endif %}{% endfor %})
    return this
  {{ '}' }}

  /**
  * Copy the content of another vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} toCopy - Vector to copy.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  copy (toCopy) {{ '{' }}
    vector.copy(toCopy.buffer, 0, this._buffer, 0)
    return this
  {{ '}' }}

  /**
  * Add another vector to this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} left - Left operand vector.
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  add (left, result = this) {{ '{' }}
    vector.add(
      this._buffer, 0,
      left.buffer, 0,
      result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Subtract another vector to this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} left - Left operand vector.
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  subtract (left, result = this) {{ '{' }}
    vector.subtract(
      this._buffer, 0, left.buffer, 0, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Multiply this vector with a scalar.
  *
  * @param {{ '{' }}number{{ '}' }} scalar
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  multiplyWithScalar (scalar, result = this) {{ '{' }}
    vector.multiplyWithScalar(
      this._buffer, 0, scalar, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Divide this vector by a scalar.
  *
  * @param {{ '{' }}number{{ '}' }} scalar
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  divideWithScalar (scalar, result = this) {{ '{' }}
    vector.divideWithScalar(
      this._buffer, 0, scalar, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Negate this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  negate (result = this) {{ '{' }}
    vector.negate(
      this._buffer, 0, result.buffer, 0
    )

    return this
  {{ '}' }}{% if vector_type in ['d', 'f'] %}

  /**
  * Normalize this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  normalize (result = this) {{ '{' }}
    vector.normalize(
      this._buffer, 0, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Ceil each component of this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  ceil (result = this) {{ '{' }}
    vector.ceil(
      this._buffer, 0, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Floor each component of this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  floor (result = this) {{ '{' }}
    vector.floor(
      this._buffer, 0, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Round each component of this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  round (result = this) {{ '{' }}
    vector.round(
      this._buffer, 0, result.buffer, 0
    )

    return this
  {{ '}' }}
  {% endif %}
  /**
  * Update each component of this vector less than the given minimum to the given minimum.
  *
  * @param {{ '{' }}number{{ '}' }} minimum - Minimum value allowed for each components of this vector.
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  minimum (minimum, result = this) {{ '{' }}
    vector.minimum(
      this._buffer, 0, minimum, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Update each component of this vector greather than the given maximum to the given maximum.
  *
  * @param {{ '{' }}number{{ '}' }} maximum - Maximum value allowed for each components of this vector.
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  maximum (maximum, result = this) {{ '{' }}
    vector.maximum(
      this._buffer, 0, maximum, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Clamp each component of this vector between a minimum and a amaximum value.
  *
  * @param {{ '{' }}number{{ '}' }} minimum - Minimum value allowed for each components of this vector.
  * @param {{ '{' }}number{{ '}' }} maximum - Maximum value allowed for each components of this vector.
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  clamp (minimum, maximum, result = this) {{ '{' }}
    vector.clamp(
      this._buffer, 0, minimum, maximum, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Mix this vector with another.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} left - Left operand vector.
  * @param {{ '{' }}number{{ '}' }} scalar - A value between 0 and 1.
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  mix (left, scalar, result = this) {{ '{' }}
    vector.mix(
      this._buffer, 0, left.buffer, 0, scalar, result.buffer, 0
    )

    return this
  {{ '}' }}{% if vector_dimension == 2 %}

  /**
  * Compute the clockwise normal of this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  clockwiseNormal (result = this) {{ '{' }}
    vector.clockwiseNormal(
      this._buffer, 0, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Compute the counter-clockwise normal of this vector.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} [result = this] - The result vector.
  *
  * @return {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} This vector instance for chaining purpose.
  */
  counterClockwiseNormal (result = this) {{ '{' }}
    vector.counterClockwiseNormal(
      this._buffer, 0, result.buffer, 0
    )

    return this
  {{ '}' }}

  /**
  * Compute the angle between this vector and another one and return the result in radians.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} other - The other vector to use.
  *
  * @return {{ '{' }}number{{ '}' }} The angle between this vector and the other one in radians.
  */
  angleWith (other) {{ '{' }}
    return vector.angleBetween(
      this._buffer, 0, result.buffer, 0
    )
  {{ '}' }}

  /**
  * Compute the angle between the x axis vector and this one and return it.
  *
  * @return {{ '{' }}number{{ '}' }} The angle between the x axis vector and this one in radians.
  */
  get angle () {{ '{' }}
    return vector.angle(this._buffer, 0)
  {{ '}' }}
  {% endif %}
  /**
  * Return the dot product of this vector with another one.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} left - Left operand vector.
  *
  * @return {{ '{' }}number{{ '}' }} The result of the dot product.
  */
  dot (left) {{ '{' }}
    return vector.dot(this._buffer, 0, left.buffer, 0)
  {{ '}' }}

  /**
  * Iterate over each components of this vector.
  *
  * @return {{ '{' }}Iterator<number>{{ '}' }} An iterator over each components of this vector.
  */
  * [Symbol.iterator] () {{ '{' }}
    {% for index in range(vector_dimension) %}yield this._buffer[{{ index }}]{% if loop.nextitem is defined %}
    {% endif %}{% endfor %}
  {{ '}' }}

  /**
  * Return true if this vector is equal to another.
  *
  * @param {{ '{' }}Vector{{vector_dimension}}{{vector_type}}{{ '}' }} left - Left operand vector.
  * @param {{ '{' }}number{{ '}' }} [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
  *
  * @return {{ '{' }}boolean{{ '}' }} True if this vector is equal to the given vector, false otherwise.
  */
  equals (left, tolerance = Number.EPSILON) {{ '{' }}
    return vector.equals(this._buffer, 0, left.buffer, 0, tolerance)
  {{ '}' }}

  /**
  * Return a string representation of this vector.
  *
  * @return {{ '{' }}String{{ '}' }} A string representation of this vector.
  */
  toString () {{ '{' }}
    return vector.toString(this._buffer, 0)
  {{ '}' }}
{{ '}' }}
