import * as matrix from './matrix/*$ columns $*//*$ matrix_type $*//index'
import { Vector/*$ rows $*//*$ matrix_type $*/ } from './Vector/*$ rows $*//*$ matrix_type $*/'/*% if rows > 2 %*/
import { Vector/*$ rows - 1 $*//*$ matrix_type $*/ } from './Vector/*$ rows - 1 $*//*$ matrix_type $*/'
/*% endif %*/
export class Matrix/*$ columns $*//*$ matrix_type $*/ {
  /**
  * Create a new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix with initial content.
  *
  <% for cell in cells() %>* @param a<$ cell.index $> - Value of the cell at column <$ cell.column $> and row <$ cell.row $> of the matrix.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return A new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix with the given initial content.
  */
  public static create (
    /*% for cell in cells() %*/a/*$ cell.index $*/ : number/*$ cell.separator $*//*% if cell.rowend %*/
    /*% endif %*//*% endfor %*/
  ) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    return new Matrix/*$ columns $*//*$ matrix_type $*/().set(
      /*% for cell in cells() %*/a/*$ cell.index $*//*$ cell.separator $*//*% if cell.rowend %*/
      /*% endif %*//*% endfor %*/
    )
  }

  /**
  * Wrap a <$ matrix_buffer_type $> as a <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix.
  *
  * @param buffer - A buffer to wrap.
  *
  * @return A new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix that wrap the given buffer.
  */
  public static wrap (buffer : /*$ matrix_buffer_type $*/) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    return new Matrix/*$ columns $*//*$ matrix_type $*/(buffer)
  }

  /**
  * Clone a <$ matrix_buffer_type $> as a <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix instance and return the result.
  *
  * @param toClone - A <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix instance to clone.
  *
  * @return A new <$ columns $> by <$ rows $> <$ matrix_type_name $> matrix that wrap the given buffer.
  */
  public static clone (toClone : Matrix/*$ columns $*//*$ matrix_type $*/) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    const result : Matrix/*$ columns $*//*$ matrix_type $*/ = new Matrix/*$ columns $*//*$ matrix_type $*/()

    /*% for cell in cells() %*/result.a/*$ cell.column $*//*$ cell.row $*/ = toClone.a/*$ cell.column $*//*$ cell.row $*/
    /*% endfor %*/
    return result
  }

  private _buffer : /*$ matrix_buffer_type $*/

  /**
  * Wrap a <$ matrix_buffer_type $> as a <$ columns $> by <$ rows $> matrix.
  *
  * @param [buffer = new <$ matrix_buffer_type $>(<$ columns * rows $>)] - A buffer to wrap.
  */
  public constructor (buffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/(/*$ columns * rows $*/)) {
    this._buffer = buffer
  }

  /**
  * @return The number of columns of this matrix.
  */
  public get columns () : number {
    return /*$ columns $*/
  }

  /**
  * @return The number of rows of this matrix.
  */
  public get rows () : number {
    return /*$ rows $*/
  }

  /**
  * @return The number of cells of this matrix.
  */
  public get cells () : number {
    return /*$ columns * rows $*/
  }

  /**
  * @return The underlying buffer of this matrix.
  */
  public get buffer () : /*$ matrix_buffer_type $*/ {
    return this._buffer
  }

  /**
  * @return The determinant of this matrix.
  */
  public get determinant () : number {
    return matrix.determinant(this._buffer, 0)
  }

  /*% for cell in cells() %*/
  /**
  * Return the value of the cell at the column /*$ cell.column $*/ and row /*$ cell.row $*/.
  *
  * @return return the value of the cell at the column /*$ cell.column $*/ and row /*$ cell.row $*/.
  */
  public get a/*$ cell.index $*/ () : number {
    return this._buffer[/*$ cell.offset $*/]
  }

  /**
  * Update the value of the cell at the column /*$ cell.column $*/ and row /*$ cell.row $*/.
  *
  * @param value - The new value of the cell at the column /*$ cell.column $*/ and row /*$ cell.row $*/.
  */
  public set a/*$ cell.index $*/ (value : number) {
    this._buffer[/*$ cell.offset $*/] = value
  }
  /*% endfor %*/
  /**
  * Set the content of a cell of this matrix.
  *
  * @param column - Column of the cell to set.
  * @param row - Row of the cell to set.
  * @param value - Value to set.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public setCell (column : number, row : number, value : number) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    this._buffer[/*$ columns $*/ * row + column] = value
    return this
  }

  /**
  * Get the content of a cell of this matrix.
  *
  * @param column - Column of the cell to get.
  * @param row - Row of the cell to get.
  *
  * @return The value of the given cell.
  */
  public getCell (column : number, row : number) : number {
    return this._buffer[/*$ columns $*/ * row + column]
  }

  /**
  * Set this matrix content.
  *
  <% for cell in cells() %>* @param a<$ cell.index $> - Value of the cell at column <$ cell.column $> and row <$ cell.row $> of the matrix.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public set (
    /*% for cell in cells() %*/a/*$ cell.index $*/ : number/*$ cell.separator $*//*% if cell.rowend %*/
    /*% endif %*//*% endfor %*/
  ) : Matrix/*$ columns $*//*$ matrix_type $*/ {
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
  * @param toCopy - Matrix instance to copy.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public copy (toCopy : Matrix/*$ columns $*//*$ matrix_type $*/) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.copy(toCopy.buffer, 0, this._buffer, 0)
    return this
  }

  /**
  * Fill this matrix with a particular value.
  *
  * @param value - Value to use for filling this matrix.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public fill (value : number) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.fill(this._buffer, 0, value)
    return this
  }

  /**
  * Transpose this matrix.
  *
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public transpose (result : Matrix/*$ columns $*//*$ matrix_type $*/ = this) : Matrix/*$ columns $*//*$ matrix_type $*/{
    matrix.transpose(this._buffer, 0, result.buffer, 0)
    return this
  }

  /*% if matrix_type in ['f', 'd'] %*/
  /**
  * Invert this matrix.
  *
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public invert (result : Matrix/*$ columns $*//*$ matrix_type $*/ = this) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.invert(this._buffer, 0, result.buffer, 0)
    return this
  }
  /*% endif %*/

  /**
  * Negate this matrix.
  *
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public negate (result : Matrix/*$ columns $*//*$ matrix_type $*/ = this) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.negate(this._buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Multiply this matrix with another one.
  *
  * @param left - Left operand matrix.
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public multiplyWithMatrix (left : Matrix/*$ columns $*//*$ matrix_type $*/, result : Matrix/*$ columns $*//*$ matrix_type $*/ = this) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.multiplyWithMatrix(this._buffer, 0, left.buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Multiply this matrix with a static one, this matrix will be used as right operand.
  *
  <% for cell in cells() %>* @param a<$ cell.index $> - Value of the cell of the column <$ column $> and row <$ row $> of the static matrix.
  <% endfor %>
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public multiplyWithStaticMatrixAsRightOperand (
    /*% for cell in cells() %*/a/*$ cell.index $*/ : number/*$ cell.separator $*//*% if cell.rowend %*/
    /*% endif %*//*% endfor %*/,
    result : Matrix/*$ columns $*//*$ matrix_type $*/ = this
  ) : Matrix/*$ columns $*//*$ matrix_type $*/ {
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
  <% for cell in cells() %>* @param a<$ cell.index $> - Value of the cell of the column <$ column $> and row <$ row $> of the static matrix.
  <% endfor %>
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public multiplyWithStaticMatrixAsLeftOperand (
    /*% for cell in cells() %*/a/*$ cell.index $*/ : number/*$ cell.separator $*//*% if cell.rowend %*/
    /*% endif %*//*% endfor %*/,
    result : Matrix/*$ columns $*//*$ matrix_type $*/ = this
  ) : Matrix/*$ columns $*//*$ matrix_type $*/ {
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
  * @param left - Left operand vector.
  * @param [result = left] - Vector to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public multiplyWithVector (left : Vector/*$ rows $*//*$ matrix_type $*/, result : Vector/*$ rows $*//*$ matrix_type $*/ = left) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.multiplyWithVector(this._buffer, 0, left.buffer, 0, result.buffer, 0)
    return this
  }

  /*% for component in range(rows) %*/
  /**
  * Multiply <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix with a <$ rows $> <$ matrix_type_name $> vector and return a component of the resulting vector.
  *
  <% for index in range(rows) %>* @param <$ components[index] $> - Value of the <$ components[index] $> component of the vector to multiply.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return A component of the resulting vector.
  */
  public compute/*$ components[component] | upper $*/ComponentOfMultiplicationWithVector (
    /*% for index in range(rows) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
  ) : number {
    return matrix.compute/*$ components[component] | upper $*/ComponentOfMultiplicationWithVector(
      this._buffer, 0, /*% for index in range(rows) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
    )
  }
  /*% endfor %*/

  /**
  * Multiply this matrix with a scalar.
  *
  * @param scalar - Scalar to use for the multiplication.
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public multiplyWithScalar (scalar : number, result : Matrix/*$ columns $*//*$ matrix_type $*/ = this) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.multiplyWithScalar(this._buffer, 0, scalar, result.buffer, 0)
    return this
  }

  /**
  * Divide this matrix by a scalar.
  *
  * @param scalar - Scalar to use for the division.
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public divideWithScalar (scalar : number, result : Matrix/*$ columns $*//*$ matrix_type $*/ = this) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.divideWithScalar(this._buffer, 0, scalar, result.buffer, 0)
    return this
  }

  /**
  * Multiply this matrix with a scale matrix of the same order.
  *
  <% for index in range(rows) %>* @param <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public scale (
    /*% for index in range(rows) %*//*$ components[index] $*/ : number,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
    result : Matrix/*$ columns $*//*$ matrix_type $*/ = this
  ) : Matrix/*$ columns $*//*$ matrix_type $*/ {
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
  <% for index in range(rows if rows <= 3 else 3) %>* @param <$ components[index] $> - Rotation for the <$ components[index] $> axis in radians.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public rotate (
    /*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index] $*/ : number,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
    result : Matrix/*$ columns $*//*$ matrix_type $*/ = this
  ) : Matrix/*$ columns $*//*$ matrix_type $*/ {
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
  <% for index in range(rows - 1) %>* @param <$ components[index] $> - Translation to apply to the <$ components[index] $> axis.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public translate (
    /*% for index in range(rows - 1) %*//*$ components[index] $*/ : number,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
    result : Matrix/*$ columns $*//*$ matrix_type $*/ = this
  ) : Matrix/*$ columns $*//*$ matrix_type $*/ {
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
  * @param left - Left operand matrix.
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public add (left : Matrix/*$ columns $*//*$ matrix_type $*/, result : Matrix/*$ columns $*//*$ matrix_type $*/ = this) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.add(this._buffer, 0, left.buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Subtract another matrix to this matrix.
  *
  * @param left - Left operand matrix.
  * @param [result = this] - Matrix to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public subtract (left : Matrix/*$ columns $*//*$ matrix_type $*/, result : Matrix/*$ columns $*//*$ matrix_type $*/ = this) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.subtract(this._buffer, 0, left.buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Transform this matrix into an identity matrix.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public toIdentity () : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.toIdentity(this._buffer, 0)
    return this
  }

  /**
  * Transform this matrix into a scale matrix of the same order.
  *
  <% for index in range(rows) %>* @param <$ components[index] $> - Scale factor of the <$ components[index] $> axis.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public toScale (/*% for index in range(rows) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.toScale(this._buffer, 0, /*% for index in range(rows) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/)
    return this
  }/*% if rows in [2, 3, 4] %*/

  /**
  * Transform this matrix into a <$ rows if rows <= 3 else 3 $> dimensional rotation matrix.
  *
  <% for index in range(rows if rows <= 3 else 3) %>* @param <$ components[index] $> - Rotation for the <$ components[index] $> axis in radians.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public toRotation (/*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.toRotation(this._buffer, 0, /*% for index in range(rows if rows <= 3 else 3) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/)
    return this
  }/*% endif %*/

  /**
  * Transform this matrix into a translation matrix of the same order.
  *
  <% for index in range(rows - 1) %>* @param <$ components[index] $> - Translation to apply to the <$ components[index] $> axis.<% if loop.nextitem is defined %>
  <% endif %><% endfor %>
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public toTranslation (/*% for index in range(rows - 1) %*//*$ components[index] $*/ : number/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.toTranslation(this._buffer, 0, /*% for index in range(rows - 1) %*//*$ components[index] $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/)
    return this
  }

  /**
  * Extract a scale vector from this matrix.
  *
  * @param result - Vector to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public extractScale (result : Vector/*$ columns $*//*$ matrix_type $*/) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.extractScale(this._buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Extract a translation vector from this matrix.
  *
  * @param result - Vector to use for writing the result of this operation.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public extractTranslation (result : Vector/*$ rows - 1 if rows > 2 else 2 $*//*$ matrix_type $*/) : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.extractTranslation(this._buffer, 0, result.buffer, 0)
    return this
  }

  /**
  * Extract a 2 dimensional rotation angle from this matrix.
  *
  * @return The result of the extraction.
  */
  public extract2DRotation () : number {
    return matrix.extract2DRotation(this._buffer, 0)
  }

  /**
  * Iterate over each components of this matrix in row-major order.
  *
  * @return An iterator over each components of this matrix in row-major order.
  */
  public * [Symbol.iterator] () : Iterator<number> {
    /*% for cell in cells() %*/yield this._buffer[/*$ cell.offset $*/]
    /*% endfor %*/
  }

  /**
  * Return true if this matrix is equals to another one.
  *
  * @param other - Matrix instance to use for comparison.
  * @param [tolerance = Number.EPSILON] - Tolerance to use for the equality comparison.
  *
  * @return True if this matrix is equals to the other.
  */
  public equals (other : Matrix/*$ columns $*//*$ matrix_type $*/, tolerance : number = Number.EPSILON) : boolean {
    return matrix.equals(
      this._buffer, 0,
      other.buffer, 0,
      tolerance
    )
  }

  /**
  * Fill this matrix with zeroes.
  *
  * @return The updated instance of this matrix for chaining purpose.
  */
  public clear () : Matrix/*$ columns $*//*$ matrix_type $*/ {
    matrix.clear(this._buffer, 0)
    return this
  }

  /**
  * Return a string representation of this matrix.
  *
  * @return A string representation of this matrix.
  */
  public toString () : string {
    return matrix.toString(this._buffer, 0)
  }
}
