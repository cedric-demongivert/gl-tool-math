/* eslint-env jest */

import { matrix2d as matrix } from '../src'

describe('matrix.raw.matrix2d', function () {
  describe('#toString', function () {
    it('allows you to print a null matrix', function () {
      expect(matrix.toString(null, 0)).toBe(
        'matrix 2 by 2 double null'
      )
    })
  })

  describe('#fill', function () {
    it(
      'allows you to fill a matrix with a given value',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          7, 8, 9, 10,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.fill(matrixBuffer, 4, 2)

        expect(matrixBuffer).toEqual(new Float64Array([
          7, 8, 9, 10,
          2, 2,
          2, 2
        ]))
      }
    )
  })

  describe('#equals', function () {
    it('allows you to check if two matrices are equals', function () {
      const matrixBuffer : Float64Array = new Float64Array([
        1, 2, 3, 4,
        -1.0, 14.375,
        16.375, 6.125,
        5, 6,
        -4.25, 1.875,
        -12.5, -13.125
      ])

      expect(matrix.equals(matrixBuffer, 4, matrixBuffer, 4)).toBeTruthy()
      expect(matrix.equals(matrixBuffer, 4, matrixBuffer, 6 + 4)).toBeFalsy()
      expect(matrix.equals(matrixBuffer, 6 + 4, matrixBuffer, 4)).toBeFalsy()
    })
  })

  describe('#set', function () {
    it('allows you to mutate the content of a matrice', function () {
      const matrixBuffer : Float64Array = new Float64Array([
        1, 2, 3, 4,
        -1.0, 14.375,
        16.375, 6.125
      ])

      matrix.set(
        matrixBuffer, 4,
        19.0, -17.5,
        -1.625, -18.5
      )

      expect(matrixBuffer).toEqual(new Float64Array([
        1, 2, 3, 4,
        19.0, -17.5,
        -1.625, -18.5
      ]))
    })
  })

  describe('#copy', function () {
    it('allows you to copy a matrix from a buffer to another', function () {
      const matrixBuffer : Float64Array = new Float64Array([
        1, 2, 3, 4,
        -1.0, 14.375,
        16.375, 6.125
      ])

      matrix.copy(
        matrixBuffer, 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Float64Array([
        1, 2,
        -1.0, 14.375,
        16.375, 6.125,
        16.375, 6.125
      ]))
    })
  })

  describe('#transpose', function () {
    it('allows you to transpose a matrix', function () {
      const matrixBuffer : Float64Array = new Float64Array([
        1, 2, 3, 4,
        -1.0, 14.375,
        16.375, 6.125
      ])

      matrix.transpose(
        matrixBuffer, 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Float64Array([
        1, 2,
        -1.0, 16.375,
        14.375, 6.125,
        16.375, 6.125
      ]))
    })
  })

  describe('#multiplyWithMatrix', function () {
    it('allows you to multiply a matrix with another one', function () {
      const matrixBuffer : Float64Array = new Float64Array([
        1, 2, 3, 4,
        -1.0, 14.375,
        16.375, 6.125,
        1, 0, 
        0, 1
      ])

      matrix.multiplyWithMatrix(
        matrixBuffer, 4,
        matrixBuffer, 4 + 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Float64Array([
        1, 2,
        -1.0, 14.375,
        16.375, 6.125,
        16.375,
        6.125,
        1, 0, 
        0, 1
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsLeftOperand', function () {
    it(
      'allows to multiply a matrix from a buffer with a given static matrix used as a left operand',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.multiplyWithStaticMatrixAsLeftOperand(
          matrixBuffer, 4,
          1, 0, 
          0, 1,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          -1.0, 14.375,
          16.375, 6.125,
          16.375,
          6.125
        ]))
      }
    )
  })

  describe('#multiplyWithStaticMatrixAsRightOperand', function () {
    it(
      'allows to multiply a matrix from a buffer with a given static matrix used as a right operand',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.multiplyWithStaticMatrixAsRightOperand(
          matrixBuffer, 4,
          1, 0, 
          0, 1,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          -1.0, 14.375,
          16.375, 6.125,
          16.375,
          6.125
        ]))
      }
    )
  })

  describe('#multiplyWithVector', function () {
    it('allows you to multiply a matrix with a vector of same dimension', function () {
      const matrixBuffer : Float64Array = new Float64Array([
        1, 2, 3, 4,
        1, 1, 
        0, 1, 
        0, 1
      ])

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + 4,
        matrixBuffer, 4 + 4 - 1
      )

      expect(matrixBuffer).toEqual(new Float64Array([
        1, 2, 3, 4,
        1, 1, 
        0, 
        1, 1,
        1
      ]))
    })
  })

  
  describe('#computeXComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrixBuffer : Float64Array = new Float64Array([
        1, 2, 3, 4,
        1, 1, 
        0, 1, 
        0, 1
      ])

      const resultBuffer : Float64Array = new Float64Array(2)

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + 4,
        resultBuffer, 0
      )

      expect(resultBuffer[0]).toBe(
        matrix.computeXComponentOfMultiplicationWithVector(
          matrixBuffer, 4,
          0, 1
        )
      )
    })
  })
  
  describe('#computeYComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrixBuffer : Float64Array = new Float64Array([
        1, 2, 3, 4,
        1, 1, 
        0, 1, 
        0, 1
      ])

      const resultBuffer : Float64Array = new Float64Array(2)

      matrix.multiplyWithVector(
        matrixBuffer, 4,
        matrixBuffer, 4 + 4,
        resultBuffer, 0
      )

      expect(resultBuffer[1]).toBe(
        matrix.computeYComponentOfMultiplicationWithVector(
          matrixBuffer, 4,
          0, 1
        )
      )
    })
  })
  

  describe('#multiplyWithScalar', function () {
    it(
      'allows to multiply a matrix from a buffer with a given scalar',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.multiplyWithScalar(
          matrixBuffer, 4,
          8,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          -8.0, 115.0, 
          131.0, 49.0,
          16.375,
          6.125
        ]))
      }
    )
  })

  describe('#negate', function () {
    it(
      'allows to negate a matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.negate(
          matrixBuffer, 4,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          1.0, -14.375, 
          -16.375, -6.125,
          16.375, 6.125
        ]))
      }
    )
  })

  describe('#divideWithScalar', function () {
    it(
      'allows to divide a matrix by a scalar',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.divideWithScalar(
          matrixBuffer, 4, 2,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          -0.5, 7.1875, 
          8.1875, 3.0625,
          16.375, 6.125
        ]))
      }
    )
  })

  describe('#scale', function () {
    it(
      'allows multiply a matrix with a scale matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.scale(
          matrixBuffer, 4,
          1, 2,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          -1.0, 28.75, 
          16.375, 12.25,
          16.375, 6.125
        ]))
      }
    )
  })

  describe('#translate', function () {
    it(
      'allows to multiply a matrix with a translation matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          1, 0,
          0, 1
        ])

        matrix.translate(
          matrixBuffer, 4,
          1,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          1, 1, 
          0, 1,
          0, 1
        ]))
      }
    )
  })

  describe('#add', function () {
    it(
      'allows to add two matrices',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125,
          -4.25, 1.875,
          -12.5, -13.125
        ])

        matrix.add(
          matrixBuffer, 4,
          matrixBuffer, 4 + 4,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          -5.25, 16.25, 
          3.875, -7.0,
          16.375, 6.125,
          -4.25, 1.875,
          -12.5, -13.125
        ]))
      }
    )
  })

  describe('#subtract', function () {
    it(
      'allows to subtract two matrices',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125,
          -4.25, 1.875,
          -12.5, -13.125
        ])

        matrix.subtract(
          matrixBuffer, 4,
          matrixBuffer, 4 + 4,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2,
          3.25, 12.5, 
          28.875, 19.25,
          16.375, 6.125,
          -4.25, 1.875,
          -12.5, -13.125
        ]))
      }
    )
  })

  describe('#toIdentity', function () {
    it(
      'set a matrix as an identity matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.toIdentity(
          matrixBuffer, 4
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2, 3, 4,
          1, 0, 
          0, 1,
        ]))
      }
    )
  })

  describe('#toScale', function () {
    it(
      'set a matrix as a scale matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.toScale(
          matrixBuffer, 4,
          1.875,
          -13.125
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2, 3, 4,
          1.875, 0, 
          0, -13.125
        ]))
      }
    )
  })

  describe('#toTranslation', function () {
    it(
      'set a matrix as a translation matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.toTranslation(
          matrixBuffer, 4,
          1.875
        )

        expect(matrixBuffer).toEqual(new Float64Array([
          1, 2, 3, 4,
          1, 1.875, 
          0, 1
        ]))
      }
    )
  })

  describe('#determinant', function () {
    it(
      'compute the determinant of a matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          1, 0,
          0, 1
        ])

        expect(matrix.determinant(matrixBuffer, 4)).toBe(1)
      }
    )
  })

  
  describe('#invert', function () {
    it(
      'invert a matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          5, 7, 
          2, 3,
          1, 0,
          0, 1,
          1, 0,
          0, 1
        ])

        matrix.invert(
          matrixBuffer, 4,
          matrixBuffer, 4 + 4
        )

        matrix.multiplyWithMatrix(
          matrixBuffer, 4 + 4,
          matrixBuffer, 4,
          matrixBuffer, 4
        )

        expect(
          matrix.equals(
            matrixBuffer, 4,
            matrixBuffer, 4 + 2 * 4,
            0.000001
          )
        ).toBeTruthy()
      }
    )
  })
  

  describe('#extractTranslation', function () {
    it(
      'allow to extract a translation vector from a matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          1, 0,
          0, 1
        ])

        const result : Float64Array = new Float64Array([
          0
        ])

        matrix.translate(
          matrixBuffer, 4,
          1.875,
          matrixBuffer, 4
        )

        matrix.extractTranslation(
          matrixBuffer, 4,
          result, 0
        )

        expect(result).toEqual(new Float64Array([
          1.875
        ]))
      }
    )
  })

  describe('#clear', function () {
    it(
      'allows you to fill a matrix with zeroes',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          7, 8, 9, 10,
          -1.0, 14.375,
          16.375, 6.125
        ])

        matrix.clear(matrixBuffer, 4)

        expect(matrixBuffer).toEqual(new Float64Array([
          7, 8, 9, 10,
          0, 0,
          0, 0
        ]))
      }
    )
  })

  describe('#extractScale', function () {
    it(
      'allow to extract a scale vector from a matrix',
      function () {
        const matrixBuffer : Float64Array = new Float64Array([
          1, 2, 3, 4,
          1, 0,
          0, 1
        ])

        const result : Float64Array = new Float64Array([
          0, 0
        ])

        matrix.toScale(
          matrixBuffer, 4,
          1.875, -13.125
        )

        matrix.extractScale(
          matrixBuffer, 4,
          result, 0
        )

        expect(result).toEqual(new Float64Array([
          1.875, -13.125
        ]))
      }
    )
  })
})