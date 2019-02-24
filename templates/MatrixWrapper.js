import * as matrix from './matrix/*$ columns $*//*$ matrix_type $*/'

/**
* Wrap a <$ matrix_buffer_type $> as a <$ columns $> by <$ rows $> matrix.
*
* @param {<$ matrix_buffer_type $>} [buffer = new <$ matrix_buffer_type $>(<$ columns * rows $>)] - A buffer to wrap.
*/
export class Matrix/*$ columns $*//*$ matrix_type $*/ {
  /**
  * Create a new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix with initial content.
  *
  * @param {...number} content - Content of new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix in row-major order.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} A new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix with the given initial content.
  */
  static create (
    /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
    /*% endif %*//*% endfor %*/
  ) {
    return new Matrix/*$ columns $*//*$ matrix_type $*/().set(
      /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
      /*% endif %*//*% endfor %*/
    )
  }

  /**
  * Wrap a <$ matrix_buffer_type $> as a <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix.
  *
  * @param {<$ matrix_buffer_type $>} buffer - A buffer to wrap.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} A new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix that wrap the given buffer.
  */
  static wrap (buffer) {
    return new Matrix/*$ columns $*//*$ matrix_type $*/(buffer)
  }

  /**
  * Clone a <$ matrix_buffer_type $> as a <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix instance and return the result.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} toClone - A <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix instance to clone.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} A new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix that wrap the given buffer.
  */
  static clone (toClone) {
    const result = new Matrix/*$ columns $*//*$ matrix_type $*/()

    /*% for cell in cells() %*/result.a/*$ cell.column $*//*$ cell.row $*/ = toClone.a/*$ cell.column $*//*$ cell.row $*/
    /*% endfor %*/
    return result
  }

  constructor (buffer = new /*$ matrix_buffer_type $*/(/*$ columns * rows $*/)) {
    this._buffer = buffer
  }

  /**
  * @return {number} The number of columns of this matrix.
  */
  get columns () {
    return /*$ columns $*/
  }

  /**
  * @return {number} The number of rows of this matrix.
  */
  get rows () {
    return /*$ rows $*/
  }

  /**
  * @return {number} The number of cells of this matrix.
  */
  get cells () {
    return /*$ columns * rows $*/
  }

  /**
  * @return {<$ matrix_buffer_type $>} The underlying buffer of this matrix.
  */
  get buffer () {
    return this._buffer
  }

  /**
  * @return {number} The determinant of this matrix.
  */
  get determinant () {
    return matrix.determinant(this._buffer, 0)
  }

  /*% for cell in cells() %*/
  /**
  * Return the value of the cell at the column /*$ cell.column $*/ and row /*$ cell.row $*/.
  *
  * @return {number} return the value of the cell at the column /*$ cell.column $*/ and row /*$ cell.row $*/.
  */
  get a/*$ cell.index $*/ () {
    return this._buffer[/*$ cell.offset $*/]
  }

  /**
  * Update the value of the cell at the column /*$ cell.column $*/ and row /*$ cell.row $*/.
  *
  * @param {number} value - The new value of the cell at the column /*$ cell.column $*/ and row /*$ cell.row $*/.
  */
  set a/*$ cell.index $*/ (value) {
    this._buffer[/*$ cell.offset $*/] = value
  }
  /*% endfor %*/
  /**
  * Set the content of a cell of this matrix.
  *
  * @param {number} column - Column of the cell to set.
  * @param {number} row - Row of the cell to set.
  * @param {number} value - Value to set.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  setCell (column, row, value) {
    this._buffer[/*$ columns $*/ * row + column] = value
    return this
  }

  /**
  * Get the content of a cell of this matrix.
  *
  * @param {number} column - Column of the cell to get.
  * @param {number} row - Row of the cell to get.
  *
  * @return {number} The value of the given cell.
  */
  getCell (column, row) {
    return this._buffer[/*$ columns $*/ * row + column]
  }

  /**
  * Set this matrix content.
  *
  * @param {...number} content - New content of this <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix in row-major order.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  set (
    /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
    /*% endif %*//*% endfor %*/
  ) {
    matrix.set(
      this._buffer, 0,
      /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
      /*% endif %*//*% endfor %*/
    )
    return this
  }

  /**
  * Copy another matrix content.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} toCopy - Matrix instance to copy.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  copy (toCopy) {
    matrix.copy(toCopy.buffer, 0, this._buffer, 0)
    return this
  }

  /**
  * Fill this matrix with a particular value.
  *
  * @param {number} value - Value to use for filling this matrix.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  fill (value) {
    matrix.fill(this._buffer, 0, value)
    return this
  }

  /**
  * Transpose this matrix.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  transpose (result = this) {
    matrix.transpose(this._buffer, 0, result.buffer, 0)
    return this
  }

  /*% if matrix_type in ['f', 'd'] %*/
  /**
  * Invert this matrix.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  invert (result = this) {
    matrix.invert(this._buffer, 0, result.buffer, 0)
    return this
  }
  /*% endif %*/

  /**
  * Negate this matrix.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  negate (result = this) {
    matrix.negate(this._buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Multiply this matrix with another one.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} left - Left operand matrix.
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  multiplyWithMatrix (left, result = this) {
    matrix.multiplyWithMatrix(this._buffer, 0, left.buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Multiply this matrix with a static one, this matrix will be used as right operand.
  *
  <% for cell in cells() %>* @param {number} a<$ cell.index $> - Value of the cell of the column <$ column $> and row <$ row $> of the static matrix.
  <% endfor %>
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  multiplyWithStaticMatrixAsRightOperand (
    /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
    /*% endif %*//*% endfor %*/,
    result = this
  ) {
    matrix.multiplyWithStaticMatrixAsRightOperand(
      this._buffer, 0,
      /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
      /*% endif %*//*% endfor %*/,
      result.buffer, 0
    )
    return this
  }

  /**
  * Multiply this matrix with a static one, this matrix will be used as a left operand.
  *
  <% for cell in cells() %>* @param {number} a<$ cell.index $> - Value of the cell of the column <$ column $> and row <$ row $> of the static matrix.
  <% endfor %>
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  multiplyWithStaticMatrixAsLeftOperand (
    /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
    /*% endif %*//*% endfor %*/,
    result = this
  ) {
    matrix.multiplyWithStaticMatrixAsLeftOperand(
      this._buffer, 0,
      /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
      /*% endif %*//*% endfor %*/,
      result.buffer, 0
    )
    return this
  }

  /**
  * Multiply this matrix with a vector.
  *
  * @param {Vector<$ rows $><$ matrix_type $>} left - Left operand vector.
  * @param {Vector<$ columns $><$ matrix_type $>} [result = left] - Vector to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  multiplyWithVector (left, result = left) {
    matrix.multiplyWithVector(this._buffer, 0, left.buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Multiply this matrix with a scalar.
  *
  * @param {number} scalar - Scalar to use for the multiplication.
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  multiplyWithScalar (scalar, result = this) {
    matrix.multiplyWithScalar(this._buffer, 0, scalar, result.buffer, 0)
    return this
  }

  /**
  * Divide this matrix by a scalar.
  *
  * @param {number} scalar - Scalar to use for the division.
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  divideWithScalar (scalar, result = this) {
    matrix.divideWithScalar(this._buffer, 0, scalar, result.buffer, 0)
    return this
  }

  /**
  * Multiply this matrix with a scale matrix of the same order.
  *
  <% for index in range(rows) %>* @param {number} <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  scale (
    /*% for index in range(rows) %*//*$ components[index] $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
    result = this
  ) {
    matrix.scale(
      this._buffer, 0,
      /*% for index in range(rows) %*//*$ components[index] $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
      result.buffer, 0
    )
    return this
  }/*% if rows in [2, 3, 4] %*/

  /**
  * Multiply this matrix with a <$ rows if rows <= 3 else 3 $> dimensional rotation matrix.
  *
  <% for index in range(rows if rows <= 3 else 3) %>* @param {number} <$ components[index] $> - Rotation for the <$ components[index] $> axis in radians.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  rotate (
    /*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index] $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
    result = this
  ) {
    matrix.rotate(
      this._buffer, 0,
      /*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index] $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
      result.buffer, 0
    )
    return this
  }/*% endif %*/

  /**
  * Multiply this matrix with a translation matrix of the same order.
  *
  <% for index in range(rows - 1) %>* @param {number} <$ components[index] $> - Translation to apply to the <$ components[index] $> axis.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  translate (
    /*% for index in range(rows - 1) %*//*$ components[index] $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
    result = this
  ) {
    matrix.translate(
      this._buffer, 0,
      /*% for index in range(rows - 1) %*//*$ components[index] $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
      result.buffer, 0
    )
    return this
  }

  /**
  * Add another matrix to this matrix.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} left - Left operand matrix.
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  add (left, result = this) {
    matrix.add(this._buffer, 0, left.buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Subtract another matrix to this matrix.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} left - Left operand matrix.
  * @param {Matrix<$ columns $><$ matrix_type $>} [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  subtract (left, result = this) {
    matrix.subtract(this._buffer, 0, left.buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Transform this matrix into an identity matrix.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  toIdentity () {
    matrix.toIdentity(this._buffer, 0)
    return this
  }

  /**
  * Transform this matrix into a scale matrix of the same order.
  *
  <% for index in range(rows) %>* @param {number} <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  toScale (/*% for index in range(rows) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/) {
    matrix.toScale(this._buffer, 0, /*% for index in range(rows) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/)
    return this
  }/*% if rows in [2, 3, 4] %*/

  /**
  * Transform this matrix into a <$ rows if rows <= 3 else 3 $> dimensional rotation matrix.
  *
  <% for index in range(rows if rows <= 3 else 3) %>* @param {number} <$ components[index] $> - Rotation for the <$ components[index] $> axis in radians.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  toRotation (/*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/) {
    matrix.toRotation(this._buffer, 0, /*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/)
    return this
  }/*% endif %*/

  /**
  * Transform this matrix into a translation matrix of the same order.
  *
  <% for index in range(rows - 1) %>* @param {number} <$ components[index] $> - Translation to apply to the <$ components[index] $> axis.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  toTranslation (/*% for index in range(rows - 1) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/) {
    matrix.toTranslation(this._buffer, 0, /*% for index in range(rows - 1) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/)
    return this
  }

  /**
  * Extract a scale vector from this matrix.
  *
  * @param {Vector<$ columns $><$ matrix_type $>} result - Vector to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  extractScale (result) {
    matrix.extractScale(this._buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Extract a translation vector from this matrix.
  *
  * @param {Vector<$ rows - 1 if rows > 2 else 2 $><$ matrix_type $>} result - Vector to use for writing the result of this operation.
  *
  * @return {Matrix<$ columns $><$ matrix_type $>} The updated instance of this matrix for chaining purpose.
  */
  extractTranslation (result) {
    matrix.extractTranslation(this._buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Extract a 2 dimensional rotation angle from this matrix.
  *
  * @return {number} The result of the extraction.
  */
  extract2DRotation () {
    return matrix.extract2DRotation(this._buffer, 0)
  }

  /**
  * Iterate over each components of this matrix in row-major order.
  *
  * @return {Iterator<number>} An iterator over each components of this matrix in row-major order.
  */
  * [Symbol.iterator] () {
    /*% for cell in cells() %*/yield this._buffer[/*$ cell.offset $*/]
    /*% endfor %*/
  }

  /**
  * Return true if this matrix is equals to another one.
  *
  * @param {Matrix<$ columns $><$ matrix_type $>} other - Matrix instance to use for comparison.
  * @param {number} [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
  *
  * @return {boolean} True if this matrix is equals to the other.
  */
  equals (other, tolerance = Number.EPSILON) {
    return matrix.equals(
      this._buffer, 0,
      other.buffer, 0,
      tolerance
    )
  }

  /*
  * Return a string representation of this matrix.
  *
  * @return {string} A string representation of this matrix.
  */
  toString () {
    return matrix.toString(this._buffer, 0)
  }
}
