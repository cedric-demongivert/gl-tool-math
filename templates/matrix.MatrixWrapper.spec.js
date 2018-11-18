/* eslint-env jest */

import { Matrix/*$ columns $*//*$ matrix_type $*/ as Matrix } from '@library/matrix'
import { Vector/*$ columns $*//*$ matrix_type $*/ } from '@library/vector'

describe('matrix.Matrix/*$ columns $*//*$ matrix_type $*/', function () {
  describe('#create', function () {
    it('allow to create a matrix with initial datas', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#wrap', function () {
    it('allow to wrap an existing buffer into a matrix instance', function () {
      const buffer = new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ])

      expect(Matrix.wrap(buffer).buffer).toBe(buffer)
    })
  })

  describe('#clone', function () {
    it('allow to clone an existing matrix instance', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const clone = Matrix.clone(matrix)

      expect(clone).not.toBe(matrix)
      expect(clone.buffer).not.toBe(matrix.buffer)
      expect(clone.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#constructor', function () {
    it('allow to create a new empty matrix instance', function () {
      expect(new Matrix().buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*/0/*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#columns', function () {
    it('return the number of columns of the matrix', function () {
      expect(new Matrix().columns).toBe(/*$ columns $*/)
    })
  })

  describe('#rows', function () {
    it('return the number of rows of the matrix', function () {
      expect(new Matrix().columns).toBe(/*$ rows $*/)
    })
  })

  describe('#cells', function () {
    it('return the number of cells of the matrix', function () {
      expect(new Matrix().cells).toBe(/*$ rows * columns $*/)
    })
  })

  describe('#buffer', function () {
    it('return the buffer of the matrix', function () {
      const buffer = new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ])

      expect(Matrix.wrap(buffer).buffer).toBe(buffer)
    })
  })

  describe('#determinant', function () {
    it('return the determinant of the matrix', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      expect(matrix.determinant).toBe(1)
    })
  })

  /*% for row in range(rows) %*//*% for column in range(columns) %*/
  describe('#a/*$ column $*//*$ row $*/', function () {
    it('allow to get the value of the cell at column /*$ column $*/ and row /*$ row $*/', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      expect(matrix.a/*$ column $*//*$ row $*/).toBe(/*$ random_matrix_cell(0, column, row) $*/)
    })

    it('allow to change the value of the cell at column /*$ column $*/ and row /*$ row $*/', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.a/*$ column $*//*$ row $*/ = 55

      expect(matrix.a/*$ column $*//*$ row $*/).toBe(55)
      expect(matrix.buffer[/*$ row * columns + column $*/]).toBe(55)
    })
  })
  /*% endfor %*//*% endfor %*/

  describe('#setCell', function () {
    it('change the value of a cell of the matrix', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      /*% for cell in cells() %*/
      matrix.setCell(/*$ cell.column $*/, /*$ cell.row $*/, /*$ random_matrix_cell(1, cell.column, cell.row) $*/)
      /*% endfor %*/

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#getCell', function () {
    it('get the value of a cell of the matrix', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      /*% for cell in cells() %*/
      expect(matrix.getCell(/*$ cell.column $*/, /*$ cell.row $*/)).toBe(/*$ random_matrix_cell(0, cell.column, cell.row) $*/)
      /*% endfor %*/
    })
  })

  describe('#set', function () {
    it('allow to update the entire matrix content', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.set(
        /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#copy', function () {
    it('allow to copy the content of another matrix', function () {
      const toCopy = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const result = Matrix.create(
        /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      result.copy(toCopy)

      expect(result.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#fill', function () {
    it('allow to fill a matrix with a given value', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.fill(5)

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*/5/*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#transpose', function () {
    it('transpose the current matrix', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.transpose()

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(transpose(random_matrix(0))) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/,
      ]))
    })
  })

  /*% if matrix_type in ['f', 'd'] %*/
  describe('#invert', function () {
    it('transpose the current matrix', function () {
      /*% set invmatrix = [
        5, 7, 2, 4,
        2, 3, 0, 1,
        9, 13, 4, 7,
        2, 3, 1, 2
      ] %*/const matrix = Matrix.create(
        /*% for cell in cells() : %*//*$ invmatrix[cell.row * 4 + cell.column] $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      )
      const invert = Matrix.clone(matrix).invert()

      expect(matrix.multiplyWithMatrix(invert).equals(
        Matrix.create(
          /*% for row in print_rows(transpose(identity_matrix)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        )
      )).toBeTruthy()
    })
  })
  /*% endif %*/

  describe('#negate', function () {
    it('negate the current matrix', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.negate()

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ -random_matrix_cell(0, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#multiplyWithMatrix', function () {
    it('allow to multiply the current matrix with another', function () {
      const right = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const left = Matrix.create(
        /*% for cell in cells() : %*//*$ 2 if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      )

      right.multiplyWithMatrix(left)

      expect(right.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ 2 * random_matrix_cell(0, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsRightOperand', function () {
    it('allow to multiply the current matrix with a static one as right operand', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.multiplyWithStaticMatrixAsRightOperand(
        /*% for cell in cells() : %*//*$ 2 if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      )

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ 2 * random_matrix_cell(0, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsLeftOperand', function () {
    it('allow to multiply the current matrix with a static one as right operand', function () {
      const matrix = Matrix.create(
        /*% for cell in cells() : %*//*$ 2 if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.multiplyWithStaticMatrixAsLeftOperand(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ 2 * random_matrix_cell(0, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#multiplyWithVector', function () {
    it('allow to multiply a vector by the current matrix', function () {

    })
  })

  describe('#multiplyWithScalar', function () {
    it('allow to multiply the current matrix with a scalar', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.multiplyWithScalar(2)

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ 2 * random_matrix_cell(0, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('allow to divide the current matrix with a scalar', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.divideWithScalar(2)

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) / 2 $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#scale', function () {
    it('allow to multiply the current matrix with a scale matrix of the same order', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.scale(/*% for column in range(columns) %*//*$ column + 1 $*//*% if loop.nextitem is defined %*/, /*% else %*//*% endif %*//*% endfor %*/)

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) * (cell.column + 1) $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#translate', function () {
    it('allow to multiply the current matrix with a scale matrix of the same order', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.translate(/*% for row in range(rows - 1) %*//*$ row + 1 $*//*% if loop.nextitem is defined %*/, /*% else %*//*% endif %*//*% endfor %*/)

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*% if cell.column == columns - 1 and cell.row < rows - 1 %*//*$ cell.row + 1 $*//*% else %*//*$ 1 if cell.row == cell.column else 0 $*//*% endif %*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#add', function () {
    it('allow to perform a cell by cell addition with another matrix', function () {
      const left = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const right = Matrix.create(
        /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      left.add(right)

      expect(left.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) + random_matrix_cell(1, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#subtract', function () {
    it('allow to perform a cell by cell subtraction with another matrix', function () {
      const left = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const right = Matrix.create(
        /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      left.subtract(right)

      expect(left.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) - random_matrix_cell(1, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#toIdentity', function () {
    it('set a matrix to an identity matrix', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.toIdentity()

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#toScale', function () {
    it('set a matrix to a scale matrix of the same order', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.toScale(
        /*% for row in range(rows) : %*//*$ random_matrix_cell(1, 1, row) $*//*% if loop.nextitem is defined %*/,
        /*% endif %*//*% endfor %*/
      )

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*$ random_matrix_cell(1, 1, cell.row) if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#toTranslation', function () {
    it('set a matrix to a translation matrix', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      matrix.toTranslation(
        /*% for row in range(rows - 1) : %*//*$ random_matrix_cell(1, 1, row) $*//*% if loop.nextitem is defined %*/,
        /*% endif %*//*% endfor %*/
      )

      expect(matrix.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for cell in cells() : %*//*% if cell.column == columns - 1 %*//*$ random_matrix_cell(1, 1, cell.row) if cell.row < rows - 1 else 1 $*//*% else %*//*$ 1 if cell.row == cell.column else 0 $*//*% endif %*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#extractScale', function () {
    it('allow to extract a scale vector from the matrix', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const scale = new Vector/*$ columns $*//*$ matrix_type $*/()

      matrix.scale(/*% for column in range(columns) %*//*$ column + 1 $*//*% if loop.nextitem is defined %*/, /*% else %*//*% endif %*//*% endfor %*/)
      matrix.extractScale(scale)

      expect(scale.buffer).toEqual(new /*$ matrix_buffer_type $*/([
        /*% for column in range(columns) %*//*$ column + 1 $*//*% if loop.nextitem is defined %*/, /*% else %*//*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#extractTranslation', function () {
    it('allow to extract a translation vector from the matrix', function () {

    })
  })

  describe('#iterator', function () {
    it('allow to iterate over the cells of the matrix in a row-major order', function () {
      const matrix = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const result = []

      for (const cell of matrix) result.push(cell)

      expect(result).toEqual([
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ])
    })
  })

  describe('#equals', function () {
    it('allow to check if two matrices are equals', function () {
      const a = Matrix.create(
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const b = Matrix.create(
        /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      const c = Matrix.clone(a)

      expect(a.equals(a)).toBeTruthy()
      expect(a.equals(b)).toBeFalsy()
      expect(a.equals(c)).toBeTruthy()
      expect(b.equals(c)).toBeFalsy()
    })
  })

  describe('#toString', function () {
    it('return a string representation of the matrix', function () {

    })
  })
})
