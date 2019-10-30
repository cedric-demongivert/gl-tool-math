/* eslint-env jest */

import { matrix3f as matrix } from '../src'

describe('matrix.raw.matrix3f', function () {
  describe('#toString', function () {
    it('allows you to print a null matrix', function () {
      expect(matrix.toString(null, 0)).toBe(
        'matrix 3 by 3 float null'
      )
    })
  })

  describe('#fill', function () {
    it(
      'allows you to fill a matrix with a given value',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          7, 8, 9, 10,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.fill(matrixBuffer, 4, 2)

        expect(matrixBuffer).toEqual(new Float32Array([
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
      const matrixBuffer : Float32Array = new Float32Array([
        1, 2, 3, 4,
        -1.0, 14.375, 16.375,
        6.125, -17.875, 14.0,
        -7.5, -3.0, 9.25,
        5, 6,
        -4.25, 1.875, -12.5,
        -13.125, -13.375, 18.0,
        16.75, 15.25, -3.0
      ])

      expect(matrix.equals(matrixBuffer, 4, matrixBuffer, 4)).toBeTruthy()
      expect(matrix.equals(matrixBuffer, 4, matrixBuffer, 6 + 9)).toBeFalsy()
      expect(matrix.equals(matrixBuffer, 6 + 9, matrixBuffer, 4)).toBeFalsy()
    })
  })

  describe('#set', function () {
    it('allows you to mutate the content of a matrice', function () {
      const matrixBuffer : Float32Array = new Float32Array([
        1, 2, 3, 4,
        -1.0, 14.375, 16.375,
        6.125, -17.875, 14.0,
        -7.5, -3.0, 9.25
      ])

      matrix.set(
        matrixBuffer, 4,
        19.0, -17.5, -1.625,
        -18.5, 17.75, 7.5,
        16.5, -7.5, -16.0
      )

      expect(matrixBuffer).toEqual(new Float32Array([
        1, 2, 3, 4,
        19.0, -17.5, -1.625,
        -18.5, 17.75, 7.5,
        16.5, -7.5, -16.0
      ]))
    })
  })

  describe('#copy', function () {
    it('allows you to copy a matrix from a buffer to another', function () {
      const matrixBuffer : Float32Array = new Float32Array([
        1, 2, 3, 4,
        -1.0, 14.375, 16.375,
        6.125, -17.875, 14.0,
        -7.5, -3.0, 9.25
      ])

      matrix.copy(
        matrixBuffer, 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Float32Array([
        1, 2,
        -1.0, 14.375, 16.375,
        6.125, -17.875, 14.0,
        -7.5, -3.0, 9.25,
        -3.0, 9.25
      ]))
    })
  })

  describe('#transpose', function () {
    it('allows you to transpose a matrix', function () {
      const matrixBuffer : Float32Array = new Float32Array([
        1, 2, 3, 4,
        -1.0, 14.375, 16.375,
        6.125, -17.875, 14.0,
        -7.5, -3.0, 9.25
      ])

      matrix.transpose(
        matrixBuffer, 4,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Float32Array([
        1, 2,
        -1.0, 6.125, -7.5,
        14.375, -17.875, -3.0,
        16.375, 14.0, 9.25,
        -3.0, 9.25
      ]))
    })
  })

  describe('#multiplyWithMatrix', function () {
    it('allows you to multiply a matrix with another one', function () {
      const matrixBuffer : Float32Array = new Float32Array([
        1, 2, 3, 4,
        -1.0, 14.375, 16.375,
        6.125, -17.875, 14.0,
        -7.5, -3.0, 9.25,
        1, 0, 0, 
        0, 1, 0, 
        0, 0, 1
      ])

      matrix.multiplyWithMatrix(
        matrixBuffer, 4,
        matrixBuffer, 4 + 9,
        matrixBuffer, 2
      )

      expect(matrixBuffer).toEqual(new Float32Array([
        1, 2,
        -1.0, 14.375, 16.375,
        6.125, -17.875, 14.0,
        -7.5, -3.0, 9.25,
        -3.0,
        9.25,
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
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.multiplyWithStaticMatrixAsLeftOperand(
          matrixBuffer, 4,
          1, 0, 0, 
          0, 1, 0, 
          0, 0, 1,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25,
          -3.0,
          9.25
        ]))
      }
    )
  })

  describe('#multiplyWithStaticMatrixAsRightOperand', function () {
    it(
      'allows to multiply a matrix from a buffer with a given static matrix used as a right operand',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.multiplyWithStaticMatrixAsRightOperand(
          matrixBuffer, 4,
          1, 0, 0, 
          0, 1, 0, 
          0, 0, 1,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25,
          -3.0,
          9.25
        ]))
      }
    )
  })

  describe('#multiplyWithVector', function () {
    it('allows you to multiply a matrix with a vector of same dimension', function () {
      const matrixBuffer : Float32Array = new Float32Array([
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

      expect(matrixBuffer).toEqual(new Float32Array([
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
      const matrixBuffer : Float32Array = new Float32Array([
        1, 2, 3, 4,
        1, 0, 1, 
        0, 1, 2, 
        0, 0, 1, 
        0, 1, 1
      ])

      const resultBuffer : Float32Array = new Float32Array(3)

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
      const matrixBuffer : Float32Array = new Float32Array([
        1, 2, 3, 4,
        1, 0, 1, 
        0, 1, 2, 
        0, 0, 1, 
        0, 1, 1
      ])

      const resultBuffer : Float32Array = new Float32Array(3)

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
      const matrixBuffer : Float32Array = new Float32Array([
        1, 2, 3, 4,
        1, 0, 1, 
        0, 1, 2, 
        0, 0, 1, 
        0, 1, 1
      ])

      const resultBuffer : Float32Array = new Float32Array(3)

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
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.multiplyWithScalar(
          matrixBuffer, 4,
          8,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2,
          -8.0, 115.0, 131.0, 
          49.0, -143.0, 112.0, 
          -60.0, -24.0, 74.0,
          -3.0,
          9.25
        ]))
      }
    )
  })

  describe('#negate', function () {
    it(
      'allows to negate a matrix',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.negate(
          matrixBuffer, 4,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2,
          1.0, -14.375, -16.375, 
          -6.125, 17.875, -14.0, 
          7.5, 3.0, -9.25,
          -3.0, 9.25
        ]))
      }
    )
  })

  describe('#divideWithScalar', function () {
    it(
      'allows to divide a matrix by a scalar',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.divideWithScalar(
          matrixBuffer, 4, 2,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2,
          -0.5, 7.1875, 8.1875, 
          3.0625, -8.9375, 7.0, 
          -3.75, -1.5, 4.625,
          -3.0, 9.25
        ]))
      }
    )
  })

  describe('#scale', function () {
    it(
      'allows multiply a matrix with a scale matrix',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.scale(
          matrixBuffer, 4,
          1, 2, 3,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2,
          -1.0, 28.75, 49.125, 
          6.125, -35.75, 42.0, 
          -7.5, -6.0, 27.75,
          -3.0, 9.25
        ]))
      }
    )
  })

  describe('#translate', function () {
    it(
      'allows to multiply a matrix with a translation matrix',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
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

        expect(matrixBuffer).toEqual(new Float32Array([
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
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25,
          -4.25, 1.875, -12.5,
          -13.125, -13.375, 18.0,
          16.75, 15.25, -3.0
        ])

        matrix.add(
          matrixBuffer, 4,
          matrixBuffer, 4 + 9,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2,
          -5.25, 16.25, 3.875, 
          -7.0, -31.25, 32.0, 
          9.25, 12.25, 6.25,
          -3.0, 9.25,
          -4.25, 1.875, -12.5,
          -13.125, -13.375, 18.0,
          16.75, 15.25, -3.0
        ]))
      }
    )
  })

  describe('#subtract', function () {
    it(
      'allows to subtract two matrices',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25,
          -4.25, 1.875, -12.5,
          -13.125, -13.375, 18.0,
          16.75, 15.25, -3.0
        ])

        matrix.subtract(
          matrixBuffer, 4,
          matrixBuffer, 4 + 9,
          matrixBuffer, 2
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2,
          3.25, 12.5, 28.875, 
          19.25, -4.5, -4.0, 
          -24.25, -18.25, 12.25,
          -3.0, 9.25,
          -4.25, 1.875, -12.5,
          -13.125, -13.375, 18.0,
          16.75, 15.25, -3.0
        ]))
      }
    )
  })

  describe('#toIdentity', function () {
    it(
      'set a matrix as an identity matrix',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.toIdentity(
          matrixBuffer, 4
        )

        expect(matrixBuffer).toEqual(new Float32Array([
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
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.toScale(
          matrixBuffer, 4,
          1.875,
          -13.375,
          15.25
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2, 3, 4,
          1.875, 0, 0, 
          0, -13.375, 0, 
          0, 0, 15.25
        ]))
      }
    )
  })

  describe('#toTranslation', function () {
    it(
      'set a matrix as a translation matrix',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          -1.0, 14.375, 16.375,
          6.125, -17.875, 14.0,
          -7.5, -3.0, 9.25
        ])

        matrix.toTranslation(
          matrixBuffer, 4,
          1.875,
          -13.375
        )

        expect(matrixBuffer).toEqual(new Float32Array([
          1, 2, 3, 4,
          1, 0, 1.875, 
          0, 1, -13.375, 
          0, 0, 1
        ]))
      }
    )
  })

  describe('#determinant', function () {
    it(
      'compute the determinant of a matrix',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1
        ])

        expect(matrix.determinant(matrixBuffer, 4)).toBe(1)
      }
    )
  })

  
  describe('#invert', function () {
    it(
      'invert a matrix',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          5, 7, 2, 
          2, 3, 0, 
          9, 13, 4,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1
        ])

        matrix.invert(
          matrixBuffer, 4,
          matrixBuffer, 4 + 9
        )

        matrix.multiplyWithMatrix(
          matrixBuffer, 4 + 9,
          matrixBuffer, 4,
          matrixBuffer, 4
        )

        expect(
          matrix.equals(
            matrixBuffer, 4,
            matrixBuffer, 4 + 2 * 9,
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
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1
        ])

        const result : Float32Array = new Float32Array([
          0, 0
        ])

        matrix.translate(
          matrixBuffer, 4,
          1.875, -13.375,
          matrixBuffer, 4
        )

        matrix.extractTranslation(
          matrixBuffer, 4,
          result, 0
        )

        expect(result).toEqual(new Float32Array([
          1.875, -13.375
        ]))
      }
    )
  })

  describe('#extractScale', function () {
    it(
      'allow to extract a scale vector from a matrix',
      function () {
        const matrixBuffer : Float32Array = new Float32Array([
          1, 2, 3, 4,
          1, 0, 0,
          0, 1, 0,
          0, 0, 1
        ])

        const result : Float32Array = new Float32Array([
          0, 0, 0
        ])

        matrix.toScale(
          matrixBuffer, 4,
          1.875, -13.375, 15.25
        )

        matrix.extractScale(
          matrixBuffer, 4,
          result, 0
        )

        expect(result).toEqual(new Float32Array([
          1.875, -13.375, 15.25
        ]))
      }
    )
  })
})