/* eslint-env jest */

import { matrix/*$ columns $*//*$ matrix_type $*/ as matrix } from '../src'

describe('matrix.raw.matrix/*$ columns $*//*$ matrix_type $*/', function () {
  describe('#toString', function () {
    it('allows you to print a null matrix', function () {
      expect(matrix.toString(null, 0)).toBe(
        'matrix /*$ columns $*/ by /*$ rows $*/ /*$ matrix_type_name $*/ null'
      )
    })
  })

  describe('#fill', function () {
    it(
      'allows you to fill a matrix with a given value',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          7, 8, 9, 10,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.fill(matrixBuffer, 4, 2)

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          7, 8, 9, 10,
          /*% for row in print_rows([[2] * columns] * rows) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ]))
      }
    )
  })

  describe('#equals', function () {
    it('allows you to check if two matrices are equals', function () {
      const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/,
        5, 6,
        /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ])

      expect(matrix.equals(matrixBuffer, 4, matrixBuffer, 4)).toBeTruthy()
      expect(matrix.equals(matrixBuffer, 4, matrixBuffer, 6 + /*$ columns * rows $*/)).toBeFalsy()
      expect(matrix.equals(matrixBuffer, 6 + /*$ columns * rows $*/, matrixBuffer, 4)).toBeFalsy()
    })
  })

  describe('#set', function () {
    it('allows you to mutate the content of a matrice', function () {
      const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ])

      matrix.set(
        matrixBuffer, 4,
        /*% for row in print_rows(random_matrix(5)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      )

      expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for row in print_rows(random_matrix(5)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#copy', function () {
    it('allows you to copy a matrix from a buffer to another', function () {
      const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ])

      matrix.copy(
        matrixBuffer, 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
        1, 2,
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/,
        /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/, /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/
      ]))
    })
  })

  describe('#transpose', function () {
    it('allows you to transpose a matrix', function () {
      const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/
      ])

      matrix.transpose(
        matrixBuffer, 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
        1, 2,
        /*% for row in print_rows(transpose(random_matrix(0))) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/,
        /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/, /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/
      ]))
    })
  })

  describe('#multiplyWithMatrix', function () {
    it('allows you to multiply a matrix with another one', function () {
      const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/,
        /*% for cell in cells() : %*//*$ 1 if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ])

      matrix.multiplyWithMatrix(
        matrixBuffer, 4,
        matrixBuffer, 4 + /*$ rows * columns $*/,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
        1, 2,
        /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*/,
        /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/,
        /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/,
        /*% for cell in cells() : %*//*$ 1 if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
        /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsLeftOperand', function () {
    it(
      'allows to multiply a matrix from a buffer with a given static matrix used as a left operand',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.multiplyWithStaticMatrixAsLeftOperand(
          matrixBuffer, 4,
          /*% for cell in cells() : %*//*$ 1 if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/,
          /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/,
          /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/
        ]))
      }
    )
  })

  describe('#multiplyWithStaticMatrixAsRightOperand', function () {
    it(
      'allows to multiply a matrix from a buffer with a given static matrix used as a right operand',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.multiplyWithStaticMatrixAsRightOperand(
          matrixBuffer, 4,
          /*% for cell in cells() : %*//*$ 1 if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/,
          /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/,
          /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/
        ]))
      }
    )
  })

  describe('#multiplyWithVector', function () {
    it('allows you to multiply a matrix with a vector of same dimension', function () {
      const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for cell in cells() : %*//*% if cell.row == cell.column %*//*$ 1 $*//*% elif cell.column == rows - 1 %*//*$ cell.row + 1 $*//*% else %*//*$ 0 $*//*% endif %*/, /*% if cell.rowend or not loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*//*% for row in range(rows) : %*//*$ 1 if row == rows - 1 else row $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ])

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + /*$ rows * columns $*/,
        matrixBuffer, 4 + /*$ rows * columns $*/ - 1
      )

      expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for cell in cells() : %*//*% if cell.column != rows - 1 or cell.row != rows - 1 %*//*% if cell.row == cell.column %*//*$ 1 $*//*% elif cell.column == rows - 1 %*//*$ cell.row + 1 $*//*% else %*//*$ 0 $*//*% endif %*/, /*% if cell.rowend or not loop.nextitem is defined %*/
        /*% endif %*//*% endif %*//*% endfor %*/
        /*% for row in range(rows) : %*//*$ 1 if row == rows - 1 else 2 * row + 1  $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/,
        1
      ]))
    })
  })

  /*% for component in range(rows) %*/
  describe('#compute/*$ components[component] | upper $*/ComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
        1, 2, 3, 4,
        /*% for cell in cells() : %*//*% if cell.row == cell.column %*//*$ 1 $*//*% elif cell.column == rows - 1 %*//*$ cell.row + 1 $*//*% else %*//*$ 0 $*//*% endif %*/, /*% if cell.rowend or not loop.nextitem is defined %*/
        /*% endif %*//*% endfor %*//*% for row in range(rows) : %*//*$ 1 if row == rows - 1 else row $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ])

      const resultBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/(/*$ rows $*/)

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + /*$ rows * columns $*/,
        resultBuffer, 0
      )

      expect(resultBuffer[/*$ component $*/]).toBe(
        matrix.compute/*$ components[component] | upper $*/ComponentOfMultiplicationWithVector(
          matrixBuffer, 4,
          /*% for row in range(rows) : %*//*$ 1 if row == rows - 1 else row $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
        )
      )
    })
  })
  /*% endfor %*/

  describe('#multiplyWithScalar', function () {
    it(
      'allows to multiply a matrix from a buffer with a given scalar',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.multiplyWithScalar(
          matrixBuffer, 4,
          8,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) * 8 $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/,
          /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/
        ]))
      }
    )
  })

  describe('#negate', function () {
    it(
      'allows to negate a matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.negate(
          matrixBuffer, 4,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for cell in cells() : %*//*$ -random_matrix_cell(0, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/, /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/
        ]))
      }
    )
  })

  describe('#divideWithScalar', function () {
    it(
      'allows to divide a matrix by a scalar',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.divideWithScalar(
          matrixBuffer, 4, 2,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) / 2 $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/, /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/
        ]))
      }
    )
  })

  describe('#scale', function () {
    it(
      'allows multiply a matrix with a scale matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.scale(
          matrixBuffer, 4,
          /*% for row in range(rows) %*//*$ row + 1 $*/,/*% if loop.nextitem is defined %*/ /*% else %*//*% endif %*//*% endfor %*/
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) * (cell.column + 1) $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/, /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/
        ]))
      }
    )
  })

  describe('#translate', function () {
    it(
      'allows to multiply a matrix with a translation matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.translate(
          matrixBuffer, 4,
          /*% for row in range(rows - 1) %*//*$ row + 1 $*/,/*% if loop.nextitem is defined %*/ /*% else %*//*% endif %*//*% endfor %*/
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for cell in cells() : %*//*% if cell.column == columns - 1 and cell.row < rows - 1 %*//*$ cell.row + 1 $*//*% else %*//*$ 1 if cell.row == cell.column else 0 $*//*% endif %*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          0, 1
        ]))
      }
    )
  })

  describe('#add', function () {
    it(
      'allows to add two matrices',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/,
          /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.add(
          matrixBuffer, 4,
          matrixBuffer, 4 + /*$ rows * columns $*/,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) + random_matrix_cell(1, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/, /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/,
          /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ]))
      }
    )
  })

  describe('#subtract', function () {
    it(
      'allows to subtract two matrices',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/,
          /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.subtract(
          matrixBuffer, 4,
          matrixBuffer, 4 + /*$ rows * columns $*/,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2,
          /*% for cell in cells() : %*//*$ random_matrix_cell(0, cell.column, cell.row) - random_matrix_cell(1, cell.column, cell.row) $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          /*$ random_matrix_cell(0, columns - 2, rows - 1) $*/, /*$ random_matrix_cell(0, columns - 1, rows - 1) $*/,
          /*% for row in print_rows(random_matrix(1)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ]))
      }
    )
  })

  describe('#toIdentity', function () {
    it(
      'set a matrix as an identity matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.toIdentity(
          matrixBuffer, 4
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for cell in cells() : %*//*$ 1 if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
        ]))
      }
    )
  })

  describe('#toScale', function () {
    it(
      'set a matrix as a scale matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.toScale(
          matrixBuffer, 4,
          /*% for row in range(rows) : %*//*$ random_matrix_cell(1, 1, row) $*//*% if loop.nextitem is defined %*/,
          /*% endif %*//*% endfor %*/
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for cell in cells() : %*//*$ random_matrix_cell(1, 1, cell.row) if cell.row == cell.column else 0 $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/
        ]))
      }
    )
  })

  describe('#toTranslation', function () {
    it(
      'set a matrix as a translation matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(random_matrix(0)) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.toTranslation(
          matrixBuffer, 4,
          /*% for row in range(rows - 1) : %*//*$ random_matrix_cell(1, 1, row) $*//*% if loop.nextitem is defined %*/,
          /*% endif %*//*% endfor %*/
        )

        expect(matrixBuffer).toEqual(new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for cell in cells() : %*//*% if cell.column == columns - 1 %*//*$ random_matrix_cell(1, 1, cell.row) if cell.row < rows - 1 else 1 $*//*% else %*//*$ 1 if cell.row == cell.column else 0 $*//*% endif %*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/
        ]))
      }
    )
  })

  describe('#determinant', function () {
    it(
      'compute the determinant of a matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        expect(matrix.determinant(matrixBuffer, 4)).toBe(1)
      }
    )
  })

  /*% if matrix_type in ['f', 'd'] %*/
  describe('#invert', function () {
    it(
      'invert a matrix',
      function () {
        /*% set invmatrix = [
          5, 7, 2, 4,
          2, 3, 0, 1,
          9, 13, 4, 7,
          2, 3, 1, 2
        ] %*/const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for cell in cells() : %*//*$ invmatrix[cell.row * 4 + cell.column] $*//*$ cell.separator $*//*% if cell.rowend %*/
          /*% endif %*//*% endfor %*/,
          /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/,
          /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        matrix.invert(
          matrixBuffer, 4,
          matrixBuffer, 4 + /*$ columns * rows $*/
        )

        matrix.multiplyWithMatrix(
          matrixBuffer, 4 + /*$ columns * rows $*/,
          matrixBuffer, 4,
          matrixBuffer, 4
        )

        expect(
          matrix.equals(
            matrixBuffer, 4,
            matrixBuffer, 4 + 2 * /*$ columns * rows $*/,
            0.000001
          )
        ).toBeTruthy()
      }
    )
  })
  /*% endif %*/

  describe('#extractTranslation', function () {
    it(
      'allow to extract a translation vector from a matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        const result : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          /*% for row in range(rows - 1) : %*/0/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
        ])

        matrix.translate(
          matrixBuffer, 4,
          /*% for row in range(rows - 1) : %*//*$ random_matrix_cell(1, 1, row) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/,
          matrixBuffer, 4
        )

        matrix.extractTranslation(
          matrixBuffer, 4,
          result, 0
        )

        expect(result).toEqual(new /*$ matrix_buffer_type $*/([
          /*% for row in range(rows - 1) : %*//*$ random_matrix_cell(1, 1, row) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
        ]))
      }
    )
  })

  describe('#extractScale', function () {
    it(
      'allow to extract a scale vector from a matrix',
      function () {
        const matrixBuffer : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          1, 2, 3, 4,
          /*% for row in print_rows(identity_matrix) : %*//*$ row $*//*% if loop.nextitem is defined %*/
          /*% endif %*//*% endfor %*/
        ])

        const result : /*$ matrix_buffer_type $*/ = new /*$ matrix_buffer_type $*/([
          /*% for row in range(rows) : %*/0/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
        ])

        matrix.toScale(
          matrixBuffer, 4,
          /*% for row in range(rows) : %*//*$ random_matrix_cell(1, 1, row) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
        )

        matrix.extractScale(
          matrixBuffer, 4,
          result, 0
        )

        expect(result).toEqual(new /*$ matrix_buffer_type $*/([
          /*% for row in range(rows) : %*//*$ random_matrix_cell(1, 1, row) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
        ]))
      }
    )
  })
})
