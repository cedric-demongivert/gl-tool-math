import * as vector from './vector/*$ vector_dimension $*//*$ vector_type $*//index'

export class Vector/*$ vector_dimension $*//*$ vector_type $*/ {
  /**
  * Create a new <$ vector_dimension $> <$ vector_type_name $> vector with initial data.
  *
  <% for index in range(vector_dimension) %>* @param <$ components[index] $> - <$ components[index] $> component of the new vector<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return The new vector instance.
  */
  static create (
    /*% for index in range(vector_dimension) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/,
    /*% endif %*//*% endfor %*/
  ) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    return new Vector/*$ vector_dimension $*//*$ vector_type $*/().set(/*% for index in range(vector_dimension) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/)
  }

  /**
  * Wrap a <$ vector_buffer_type $> as a <$ vector_dimension $> <$ vector_type_name $> vector.
  *
  * @param buffer - A buffer to wrap.
  *
  * @return The new vector instance.
  */
  static wrap (buffer : /*$ vector_buffer_type $*/) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    return new Vector/*$ vector_dimension $*//*$ vector_type $*/(buffer)
  }

  /**
  * Clone another <$ vector_dimension $> <$ vector_type_name $> vector and return the result.
  *
  * @param vector - A <$ vector_dimension $> <$ vector_type_name $> vector to clone.
  *
  * @return The cloned vector instance.
  */
  static clone (vector : Vector/*$ vector_dimension $*//*$ vector_type $*/) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    const result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = new Vector/*$ vector_dimension $*//*$ vector_type $*/()
    /*% for index in range(vector_dimension) %*/result./*$ components[index] $*/ = vector./*$ components[index] $*/
    /*% endfor %*/
    return result
  }

  private _buffer : /*$ vector_buffer_type $*/

  /**
  * Create a new <$ vector_dimension $> <$ vector_type_name $> vector.
  *
  * @param [buffer = new <$ vector_buffer_type $>(<$ vector_dimension $>)] - A buffer to wrap.
  */
  public constructor (buffer : /*$ vector_buffer_type $*/ = new /*$ vector_buffer_type $*/(/*$ vector_dimension $*/)) {
    this._buffer = buffer
  }

  /*% for index in range(vector_dimension) %*//**
  * @return The <$ components[index] $> component of this vector.
  */
  public get /*$ components[index] $*/ () : number {
      return this._buffer[/*$ index $*/]
  }

  /**
  * Set the value of the <$ components[index] $> component of this vector.
  *
  * @param value - New value of the <$ components[index] $> component.
  */
  public set /*$ components[index] $*/ (value : number) {
    this._buffer[/*$ index $*/] = value
  }/*% if loop.nextitem is defined %*/

  /*% endif %*//*% endfor %*//*% if vector_dimension == 4 or vector_dimension == 3 %*/

  /*% for index in range(vector_dimension) %*//**
  * @return {number} The <$ color_components[index] $> component of this vector.
  */
  public get /*$ color_components[index] $*/ () : number {
      return this._buffer[/*$ index $*/]
  }/*% if loop.nextitem is defined %*/

  /*% endif %*//*% endfor %*/

  /*% for index in range(vector_dimension) %*//**
  * Set the value of the <$ components[index] $> component of this vector.
  *
  * @param value - New value of the <$ components[index] $> component.
  */
  public set /*$ color_components[index] $*/ (value : number) {
    this._buffer[/*$ index $*/] = value
  }/*% if loop.nextitem is defined %*/

  /*% endif %*//*% endfor %*//*% endif %*/

  /**
  * Return the underlying buffer of this vector.
  *
  * @return The underlying buffer of this vector.
  */
  public get buffer () : /*$ vector_buffer_type $*/ {
    return this._buffer
  }

  /**
  * Return the dimension of this vector.
  *
  * @return The dimension of this vector.
  */
  public get dimension () : number {
    return /*$ vector_dimension $*/
  }

  /**
  * Return the squared length of this vector.
  *
  * @return The squared length of this vector.
  */
  public get squaredLength () : number {
    return vector.squaredLength(this._buffer, 0)
  }

  /**
  * Return the length of this vector.
  *
  * @return The length of this vector.
  */
  public get length () : number {
    return vector.length(this._buffer, 0)
  }

  /**
  * Set all components of this vector.
  *
  <% for index in range(vector_dimension) %>* @param <$ components[index] $> - <$ components[index] $> component of the new vector<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return This vector instance for chaining purpose.
  */
  public set (
    /*% for index in range(vector_dimension) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/,
    /*% endif %*//*% endfor %*/
  ) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.set(this._buffer, 0, /*% for index in range(vector_dimension) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/)
    return this
  }

  /**
  * Copy the content of another vector.
  *
  * @param toCopy - Vector to copy.
  *
  * @return This vector instance for chaining purpose.
  */
  public copy (toCopy : Vector/*$ vector_dimension $*//*$ vector_type $*/) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.copy(toCopy.buffer, 0, this._buffer, 0)
    return this
  }

  /**
  * Add another vector to this vector.
  *
  * @param left - Left operand vector.
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public add (left : Vector/*$ vector_dimension $*//*$ vector_type $*/, result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.add(
      this._buffer, 0,
      left.buffer, 0,
      result.buffer, 0
    )

    return this
  }

  /**
  * Subtract another vector to this vector.
  *
  * @param left - Left operand vector.
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public subtract (left : Vector/*$ vector_dimension $*//*$ vector_type $*/, result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.subtract(
      this._buffer, 0, left.buffer, 0, result.buffer, 0
    )

    return this
  }

  /**
  * Multiply this vector with a scalar.
  *
  * @param scalar
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public multiplyWithScalar (scalar : number, result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.multiplyWithScalar(
      this._buffer, 0, scalar, result.buffer, 0
    )

    return this
  }

  /**
  * Divide this vector by a scalar.
  *
  * @param scalar
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public divideWithScalar (scalar : number, result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.divideWithScalar(
      this._buffer, 0, scalar, result.buffer, 0
    )

    return this
  }

  /**
  * Negate this vector.
  *
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public negate (result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.negate(
      this._buffer, 0, result.buffer, 0
    )

    return this
  }/*% if vector_type in ['d', 'f'] %*/

  /**
  * Normalize this vector.
  *
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public normalize (result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.normalize(
      this._buffer, 0, result.buffer, 0
    )

    return this
  }

  /**
  * Ceil each component of this vector.
  *
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public ceil (result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.ceil(
      this._buffer, 0, result.buffer, 0
    )

    return this
  }

  /**
  * Floor each component of this vector.
  *
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public floor (result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.floor(
      this._buffer, 0, result.buffer, 0
    )

    return this
  }

  /**
  * Round each component of this vector.
  *
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public round (result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.round(
      this._buffer, 0, result.buffer, 0
    )

    return this
  }
  /*% endif %*/
  /**
  * Update each component of this vector less than the given minimum to the given minimum.
  *
  * @param minimum - Minimum value allowed for each components of this vector.
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public minimum (minimum : number, result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.minimum(
      this._buffer, 0, minimum, result.buffer, 0
    )

    return this
  }

  /**
  * Update each component of this vector greather than the given maximum to the given maximum.
  *
  * @param maximum - Maximum value allowed for each components of this vector.
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public maximum (maximum : number, result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.maximum(
      this._buffer, 0, maximum, result.buffer, 0
    )

    return this
  }

  /**
  * Clamp each component of this vector between a minimum and a amaximum value.
  *
  * @param minimum - Minimum value allowed for each components of this vector.
  * @param maximum - Maximum value allowed for each components of this vector.
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public clamp (minimum : number, maximum : number, result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.clamp(
      this._buffer, 0, minimum, maximum, result.buffer, 0
    )

    return this
  }

  /**
  * Mix this vector with another.
  *
  * @param left - Left operand vector.
  * @param scalar - A value between 0 and 1.
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public mix (left : Vector/*$ vector_dimension $*//*$ vector_type $*/, scalar : number, result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.mix(
      this._buffer, 0, left.buffer, 0, scalar, result.buffer, 0
    )

    return this
  }/*% if vector_dimension == 2 %*/

  /**
  * Compute the clockwise normal of this vector.
  *
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public clockwiseNormal (result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.clockwiseNormal(
      this._buffer, 0, result.buffer, 0
    )

    return this
  }

  /**
  * Compute the counter-clockwise normal of this vector.
  *
  * @param [result = this] - The result vector.
  *
  * @return This vector instance for chaining purpose.
  */
  public counterClockwiseNormal (result : Vector/*$ vector_dimension $*//*$ vector_type $*/ = this) : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.counterClockwiseNormal(
      this._buffer, 0, result.buffer, 0
    )

    return this
  }

  /**
  * Compute the angle between this vector and another one and return the result in radians.
  *
  * @param other - The other vector to use.
  *
  * @return The angle between this vector and the other one in radians.
  */
  public angleWith (other : Vector/*$ vector_dimension $*//*$ vector_type $*/) : number {
    return vector.angleBetween(
      this._buffer, 0, other.buffer, 0
    )
  }

  /**
  * Compute the angle between the x axis vector and this one and return it.
  *
  * @return The angle between the x axis vector and this one in radians.
  */
  public get angle () : number {
    return vector.angle(this._buffer, 0)
  }
  /*% endif %*/
  /**
  * Return the dot product of this vector with another one.
  *
  * @param left - Left operand vector.
  *
  * @return The result of the dot product.
  */
  public dot (left : Vector/*$ vector_dimension $*//*$ vector_type $*/) : number {
    return vector.dot(this._buffer, 0, left.buffer, 0)
  }

  /**
  * Iterate over each components of this vector.
  *
  * @return An iterator over each components of this vector.
  */
  public * [Symbol.iterator] () : Iterator<number> {
    /*% for index in range(vector_dimension) %*/yield this._buffer[/*$ index $*/]/*% if loop.nextitem is defined %*/
    /*% endif %*//*% endfor %*/
  }

  /**
  * Set each component of this vector to zero.
  *
  * @return This vector instance for chaining purpose.
  */
  public clear () : Vector/*$ vector_dimension $*//*$ vector_type $*/ {
    vector.clear(this._buffer, 0)
    return this
  }

  /**
  * Return true if this vector is equal to another.
  *
  * @param left - Left operand vector.
  * @param [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
  *
  * @return True if this vector is equal to the given vector, false otherwise.
  */
  public equals (left : Vector/*$ vector_dimension $*//*$ vector_type $*/, tolerance : number = Number.EPSILON) : boolean {
    return vector.equals(this._buffer, 0, left.buffer, 0, tolerance)
  }

  /**
  * Return a string representation of this vector.
  *
  * @return A string representation of this vector.
  */
  public toString () : string {
    return vector.toString(this._buffer, 0)
  }
}
