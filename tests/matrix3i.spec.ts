/* eslint-env jest */

import { matrix3i as matrix } from '../src'

describe('matrix.raw.matrix3i', function () {
  describe('#toString', function () {
    it('allows you to print a null matrix', function () {
      expect(matrix.toString(null, 0)).toBe(
        'matrix 3 by 3 integer null'
      )
    })
  })

  describe('#fill', function () {
    it(
      'allows you to fill a matrix with a given value',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          7, 8, 9, 10,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.fill(matrixBuffer, 4, 2)

        expect(matrixBuffer).toEqual(new Int32Array([
          7, 8, 9, 10,
          2, 2, 2,
          2, 2, 2,
          2, 2, 2
        ]))
      }
    )
  })

  describe('#equals', function () {
    it('allows you to check if two matrices are equals', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        -2, -18, 11,
        -20, 13, 0,
        -8, 9, 11,
        5, 6,
        -6, 8, 8,
        3, 16, -3,
        1, 14, -18
      ])

      expect(matrix.equals(matrixBuffer, 4, matrixBuffer, 4)).toBeTruthy()
      expect(matrix.equals(matrixBuffer, 4, matrixBuffer, 6 + 9)).toBeFalsy()
      expect(matrix.equals(matrixBuffer, 6 + 9, matrixBuffer, 4)).toBeFalsy()
    })
  })

  describe('#set', function () {
    it('allows you to mutate the content of a matrice', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        -2, -18, 11,
        -20, 13, 0,
        -8, 9, 11
      ])

      matrix.set(
        matrixBuffer, 4,
        19, 0, -7,
        -8, -14, -18,
        -1, 17, -15
      )

      expect(matrixBuffer).toEqual(new Int32Array([
        1, 2, 3, 4,
        19, 0, -7,
        -8, -14, -18,
        -1, 17, -15
      ]))
    })
  })

  describe('#copy', function () {
    it('allows you to copy a matrix from a buffer to another', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        -2, -18, 11,
        -20, 13, 0,
        -8, 9, 11
      ])

      matrix.copy(
        matrixBuffer, 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Int32Array([
        1, 2,
        -2, -18, 11,
        -20, 13, 0,
        -8, 9, 11,
        9, 11
      ]))
    })
  })

  describe('#transpose', function () {
    it('allows you to transpose a matrix', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        -2, -18, 11,
        -20, 13, 0,
        -8, 9, 11
      ])

      matrix.transpose(
        matrixBuffer, 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Int32Array([
        1, 2,
        -2, -20, -8,
        -18, 13, 9,
        11, 0, 11,
        9, 11
      ]))
    })
  })

  describe('#multiplyWithMatrix', function () {
    it('allows you to multiply a matrix with another one', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        -2, -18, 11,
        -20, 13, 0,
        -8, 9, 11,
        1, 0, 0, 
        0, 1, 0, 
        0, 0, 1
      ])

      matrix.multiplyWithMatrix(
        matrixBuffer, 4,
        matrixBuffer, 4 + 9,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Int32Array([
        1, 2,
        -2, -18, 11,
        -20, 13, 0,
        -8, 9, 11,
        9,
        11,
        1, 0, 0, 
        0, 1, 0, 
        0, 0, 1
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsLeftOperand', function () {
    it(
      'allows to multiply a matrix from a buffer with a given static matrix used as a left operand',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.multiplyWithStaticMatrixAsLeftOperand(
          matrixBuffer, 4,
          1, 0, 0, 
          0, 1, 0, 
          0, 0, 1,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11,
          9,
          11
        ]))
      }
    )
  })

  describe('#multiplyWithStaticMatrixAsRightOperand', function () {
    it(
      'allows to multiply a matrix from a buffer with a given static matrix used as a right operand',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.multiplyWithStaticMatrixAsRightOperand(
          matrixBuffer, 4,
          1, 0, 0, 
          0, 1, 0, 
          0, 0, 1,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11,
          9,
          11
        ]))
      }
    )
  })

  describe('#multiplyWithVector', function () {
    it('allows you to multiply a matrix with a vector of same dimension', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        1, 0, 1, 
        0, 1, 2, 
        0, 0, 1, 
        0, 1, 1
      ])

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + 9,
        matrixBuffer, 4 + 9 - 1
      )

      expect(matrixBuffer).toEqual(new Int32Array([
        1, 2, 3, 4,
        1, 0, 1, 
        0, 1, 2, 
        0, 0, 
        1, 3, 1,
        1
      ]))
    })
  })

  
  describe('#computeXComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        1, 0, 1, 
        0, 1, 2, 
        0, 0, 1, 
        0, 1, 1
      ])

      const resultBuffer : Int32Array = new Int32Array(3)

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + 9,
        resultBuffer, 0
      )

      expect(resultBuffer[0]).toBe(
        matrix.computeXComponentOfMultiplicationWithVector(
          matrixBuffer, 4,
          0, 1, 1
        )
      )
    })
  })
  
  describe('#computeYComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        1, 0, 1, 
        0, 1, 2, 
        0, 0, 1, 
        0, 1, 1
      ])

      const resultBuffer : Int32Array = new Int32Array(3)

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + 9,
        resultBuffer, 0
      )

      expect(resultBuffer[1]).toBe(
        matrix.computeYComponentOfMultiplicationWithVector(
          matrixBuffer, 4,
          0, 1, 1
        )
      )
    })
  })
  
  describe('#computeZComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrixBuffer : Int32Array = new Int32Array([
        1, 2, 3, 4,
        1, 0, 1, 
        0, 1, 2, 
        0, 0, 1, 
        0, 1, 1
      ])

      const resultBuffer : Int32Array = new Int32Array(3)

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + 9,
        resultBuffer, 0
      )

      expect(resultBuffer[2]).toBe(
        matrix.computeZComponentOfMultiplicationWithVector(
          matrixBuffer, 4,
          0, 1, 1
        )
      )
    })
  })
  

  describe('#multiplyWithScalar', function () {
    it(
      'allows to multiply a matrix from a buffer with a given scalar',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.multiplyWithScalar(
          matrixBuffer, 4,
          8,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          -16, -144, 88, 
          -160, 104, 0, 
          -64, 72, 88,
          9,
          11
        ]))
      }
    )
  })

  describe('#negate', function () {
    it(
      'allows to negate a matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.negate(
          matrixBuffer, 4,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          2, 18, -11, 
          20, -13, 0, 
          8, -9, -11,
          9, 11
        ]))
      }
    )
  })

  describe('#divideWithScalar', function () {
    it(
      'allows to divide a matrix by a scalar',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.divideWithScalar(
          matrixBuffer, 4, 2,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          -1.0, -9.0, 5.5, 
          -10.0, 6.5, 0.0, 
          -4.0, 4.5, 5.5,
          9, 11
        ]))
      }
    )
  })

  describe('#scale', function () {
    it(
      'allows multiply a matrix with a scale matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.scale(
          matrixBuffer, 4,
          1, 2, 3,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          -2, -36, 33, 
          -20, 26, 0, 
          -8, 18, 33,
          9, 11
        ]))
      }
    )
  })

  describe('#translate', function () {
    it(
      'allows to multiply a matrix with a translation matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1
        ])

        matrix.translate(
          matrixBuffer, 4,
          1, 2,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          1, 0, 1, 
          0, 1, 2, 
          0, 0, 1,
          0, 1
        ]))
      }
    )
  })

  describe('#add', function () {
    it(
      'allows to add two matrices',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11,
          -6, 8, 8,
          3, 16, -3,
          1, 14, -18
        ])

        matrix.add(
          matrixBuffer, 4,
          matrixBuffer, 4 + 9,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          -8, -10, 19, 
          -17, 29, -3, 
          -7, 23, -7,
          9, 11,
          -6, 8, 8,
          3, 16, -3,
          1, 14, -18
        ]))
      }
    )
  })

  describe('#subtract', function () {
    it(
      'allows to subtract two matrices',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11,
          -6, 8, 8,
          3, 16, -3,
          1, 14, -18
        ])

        matrix.subtract(
          matrixBuffer, 4,
          matrixBuffer, 4 + 9,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2,
          4, -26, 3, 
          -23, -3, 3, 
          -9, -5, 29,
          9, 11,
          -6, 8, 8,
          3, 16, -3,
          1, 14, -18
        ]))
      }
    )
  })

  describe('#toIdentity', function () {
    it(
      'set a matrix as an identity matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.toIdentity(
          matrixBuffer, 4
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2, 3, 4,
          1, 0, 0, 
          0, 1, 0, 
          0, 0, 1,
        ]))
      }
    )
  })

  describe('#toScale', function () {
    it(
      'set a matrix as a scale matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.toScale(
          matrixBuffer, 4,
          8,
          16,
          14
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2, 3, 4,
          8, 0, 0, 
          0, 16, 0, 
          0, 0, 14
        ]))
      }
    )
  })

  describe('#toTranslation', function () {
    it(
      'set a matrix as a translation matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.toTranslation(
          matrixBuffer, 4,
          8,
          16
        )

        expect(matrixBuffer).toEqual(new Int32Array([
          1, 2, 3, 4,
          1, 0, 8, 
          0, 1, 16, 
          0, 0, 1
        ]))
      }
    )
  })

  describe('#determinant', function () {
    it(
      'compute the determinant of a matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1
        ])

        expect(matrix.determinant(matrixBuffer, 4)).toBe(1)
      }
    )
  })

  

  describe('#extractTranslation', function () {
    it(
      'allow to extract a translation vector from a matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1
        ])

        const result : Int32Array = new Int32Array([
          0, 0
        ])

        matrix.translate(
          matrixBuffer, 4,
          8, 16,
          matrixBuffer, 4
        )

        matrix.extractTranslation(
          matrixBuffer, 4,
          result, 0
        )

        expect(result).toEqual(new Int32Array([
          8, 16
        ]))
      }
    )
  })

  describe('#clear', function () {
    it(
      'allows you to fill a matrix with zeroes',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          7, 8, 9, 10,
          -2, -18, 11,
          -20, 13, 0,
          -8, 9, 11
        ])

        matrix.clear(matrixBuffer, 4)

        expect(matrixBuffer).toEqual(new Int32Array([
          7, 8, 9, 10,
          0, 0, 0,
          0, 0, 0,
          0, 0, 0
        ]))
      }
    )
  })

  describe('#extractScale', function () {
    it(
      'allow to extract a scale vector from a matrix',
      function () {
        const matrixBuffer : Int32Array = new Int32Array([
          1, 2, 3, 4,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1
        ])

        const result : Int32Array = new Int32Array([
          0, 0, 0
        ])

        matrix.toScale(
          matrixBuffer, 4,
          8, 16, 14
        )

        matrix.extractScale(
          matrixBuffer, 4,
          result, 0
        )

        expect(result).toEqual(new Int32Array([
          8, 16, 14
        ]))
      }
    )
  })
})