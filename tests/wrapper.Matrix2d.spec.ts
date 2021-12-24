/* eslint-env jest */

import { Matrix2d as Matrix } from '../src'
import { Vector2d as Vector } from '../src'

describe('matrix.Matrix2d', function () {
  describe('#create', function () {
    it('allow to create a matrix with initial datas', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        -1.0, 14.375,
        16.375, 6.125
      ]))
    })
  })

  describe('#wrap', function () {
    it('allow to wrap an existing buffer into a matrix instance', function () {
      const buffer : Float64Array = new Float64Array([
        -1.0, 14.375,
        16.375, 6.125
      ])

      expect(Matrix.wrap(buffer).buffer).toBe(buffer)
    })
  })

  describe('#clone', function () {
    it('allow to clone an existing matrix instance', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      const clone : Matrix = Matrix.clone(matrix)

      expect(clone).not.toBe(matrix)
      expect(clone.buffer).not.toBe(matrix.buffer)
      expect(clone.buffer).toEqual(new Float64Array([
        -1.0, 14.375,
        16.375, 6.125
      ]))
    })
  })

  describe('#constructor', function () {
    it('allow to create a new empty matrix instance', function () {
      expect(new Matrix().buffer).toEqual(new Float64Array([
        0, 0, 
        0, 0
      ]))
    })
  })

  describe('#columns', function () {
    it('return the number of columns of the matrix', function () {
      expect(new Matrix().columns).toBe(2)
    })
  })

  describe('#rows', function () {
    it('return the number of rows of the matrix', function () {
      expect(new Matrix().columns).toBe(2)
    })
  })

  describe('#cells', function () {
    it('return the number of cells of the matrix', function () {
      expect(new Matrix().cells).toBe(4)
    })
  })

  describe('#buffer', function () {
    it('return the buffer of the matrix', function () {
      const buffer : Float64Array = new Float64Array([
        -1.0, 14.375,
        16.375, 6.125
      ])

      expect(Matrix.wrap(buffer).buffer).toBe(buffer)
    })
  })

  describe('#determinant', function () {
    it('return the determinant of the matrix', function () {
      const matrix : Matrix = Matrix.create(
        1, 0,
        0, 1
      )

      expect(matrix.determinant).toBe(1)
    })
  })

  
  describe('#a00', function () {
    it('allow to get the value of the cell at column 0 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      expect(matrix.a00).toBe(-1.0)
    })

    it('allow to change the value of the cell at column 0 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.a00 = 55

      expect(matrix.a00).toBe(55)
      expect(matrix.buffer[0]).toBe(55)
    })
  })
  
  describe('#a10', function () {
    it('allow to get the value of the cell at column 1 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      expect(matrix.a10).toBe(14.375)
    })

    it('allow to change the value of the cell at column 1 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.a10 = 55

      expect(matrix.a10).toBe(55)
      expect(matrix.buffer[1]).toBe(55)
    })
  })
  
  describe('#a01', function () {
    it('allow to get the value of the cell at column 0 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      expect(matrix.a01).toBe(16.375)
    })

    it('allow to change the value of the cell at column 0 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.a01 = 55

      expect(matrix.a01).toBe(55)
      expect(matrix.buffer[2]).toBe(55)
    })
  })
  
  describe('#a11', function () {
    it('allow to get the value of the cell at column 1 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      expect(matrix.a11).toBe(6.125)
    })

    it('allow to change the value of the cell at column 1 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.a11 = 55

      expect(matrix.a11).toBe(55)
      expect(matrix.buffer[3]).toBe(55)
    })
  })
  

  describe('#setCell', function () {
    it('change the value of a cell of the matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      
      matrix.setCell(0, 0, -4.25)
      
      matrix.setCell(1, 0, 1.875)
      
      matrix.setCell(0, 1, -12.5)
      
      matrix.setCell(1, 1, -13.125)
      

      expect(matrix.buffer).toEqual(new Float64Array([
        -4.25, 1.875,
        -12.5, -13.125
      ]))
    })
  })

  describe('#getCell', function () {
    it('get the value of a cell of the matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      
      expect(matrix.getCell(0, 0)).toBe(-1.0)
      
      expect(matrix.getCell(1, 0)).toBe(14.375)
      
      expect(matrix.getCell(0, 1)).toBe(16.375)
      
      expect(matrix.getCell(1, 1)).toBe(6.125)
      
    })
  })

  describe('#set', function () {
    it('allow to update the entire matrix content', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.set(
        -4.25, 1.875,
        -12.5, -13.125
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        -4.25, 1.875,
        -12.5, -13.125
      ]))
    })
  })

  describe('#copy', function () {
    it('allow to copy the content of another matrix', function () {
      const toCopy : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      const result : Matrix = Matrix.create(
        -4.25, 1.875,
        -12.5, -13.125
      )

      result.copy(toCopy)

      expect(result.buffer).toEqual(new Float64Array([
        -1.0, 14.375,
        16.375, 6.125
      ]))
    })
  })

  describe('#fill', function () {
    it('allow to fill a matrix with a given value', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.fill(5)

      expect(matrix.buffer).toEqual(new Float64Array([
        5, 5, 
        5, 5
      ]))
    })
  })

  describe('#transpose', function () {
    it('transpose the current matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.transpose()

      expect(matrix.buffer).toEqual(new Float64Array([
        -1.0, 16.375,
        14.375, 6.125,
      ]))
    })
  })

  
  describe('#invert', function () {
    it('invert the current matrix', function () {
      const matrix : Matrix = Matrix.create(
        5, 7, 
        2, 3
      )
      const invert : Matrix = Matrix.clone(matrix).invert()

      expect(matrix.multiplyWithMatrix(invert).equals(
        Matrix.create(
          1, 0,
          0, 1
        )
      )).toBeTruthy()
    })
  })
  

  describe('#negate', function () {
    it('negate the current matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.negate()

      expect(matrix.buffer).toEqual(new Float64Array([
        1.0, -14.375, 
        -16.375, -6.125
      ]))
    })
  })

  describe('#multiplyWithMatrix', function () {
    it('allow to multiply the current matrix with another', function () {
      const right : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      const left : Matrix = Matrix.create(
        2, 0, 
        0, 2
      )

      right.multiplyWithMatrix(left)

      expect(right.buffer).toEqual(new Float64Array([
        -2.0, 28.75, 
        32.75, 12.25
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsRightOperand', function () {
    it('allow to multiply the current matrix with a static one as right operand', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.multiplyWithStaticMatrixAsRightOperand(
        2, 0, 
        0, 2
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        -2.0, 28.75, 
        32.75, 12.25
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsLeftOperand', function () {
    it('allow to multiply the current matrix with a static one as right operand', function () {
      const matrix : Matrix = Matrix.create(
        2, 0, 
        0, 2
      )

      matrix.multiplyWithStaticMatrixAsLeftOperand(
        -1.0, 14.375,
        16.375, 6.125
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        -2.0, 28.75, 
        32.75, 12.25
      ]))
    })
  })

  describe('#multiplyWithVector', function () {
    it('allow to multiply a vector by the current matrix', function () {

    })
  })

  
  describe('#computeXComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrix : Matrix = Matrix.create(
        1, 1, 
        0, 1, 
        
      )

      const vector : Vector = Vector.create(0, 1)
      const result : Vector = Vector.create(0, 0)

      matrix.multiplyWithVector(vector, result)

      expect(result.x).toBe(
        matrix.computeXComponentOfMultiplicationWithVector(
          vector.x, vector.y
        )
      )
    })
  })
  
  describe('#computeYComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrix : Matrix = Matrix.create(
        1, 1, 
        0, 1, 
        
      )

      const vector : Vector = Vector.create(0, 1)
      const result : Vector = Vector.create(0, 0)

      matrix.multiplyWithVector(vector, result)

      expect(result.y).toBe(
        matrix.computeYComponentOfMultiplicationWithVector(
          vector.x, vector.y
        )
      )
    })
  })
  

  describe('#multiplyWithScalar', function () {
    it('allow to multiply the current matrix with a scalar', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.multiplyWithScalar(2)

      expect(matrix.buffer).toEqual(new Float64Array([
        -2.0, 28.75, 
        32.75, 12.25
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('allow to divide the current matrix with a scalar', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.divideWithScalar(2)

      expect(matrix.buffer).toEqual(new Float64Array([
        -0.5, 7.1875, 
        8.1875, 3.0625
      ]))
    })
  })

  describe('#scale', function () {
    it('allow to multiply the current matrix with a scale matrix of the same order', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.scale(1, 2)

      expect(matrix.buffer).toEqual(new Float64Array([
        -1.0, 28.75, 
        16.375, 12.25
      ]))
    })
  })

  describe('#translate', function () {
    it('allow to multiply the current matrix with a scale matrix of the same order', function () {
      const matrix : Matrix = Matrix.create(
        1, 0,
        0, 1
      )

      matrix.translate(1)

      expect(matrix.buffer).toEqual(new Float64Array([
        1, 1, 
        0, 1
      ]))
    })
  })

  describe('#add', function () {
    it('allow to perform a cell by cell addition with another matrix', function () {
      const left : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      const right : Matrix = Matrix.create(
        -4.25, 1.875,
        -12.5, -13.125
      )

      left.add(right)

      expect(left.buffer).toEqual(new Float64Array([
        -5.25, 16.25, 
        3.875, -7.0
      ]))
    })
  })

  describe('#subtract', function () {
    it('allow to perform a cell by cell subtraction with another matrix', function () {
      const left : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      const right : Matrix = Matrix.create(
        -4.25, 1.875,
        -12.5, -13.125
      )

      left.subtract(right)

      expect(left.buffer).toEqual(new Float64Array([
        3.25, 12.5, 
        28.875, 19.25
      ]))
    })
  })

  describe('#toIdentity', function () {
    it('set a matrix to an identity matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.toIdentity()

      expect(matrix.buffer).toEqual(new Float64Array([
        1, 0,
        0, 1
      ]))
    })
  })

  describe('#toScale', function () {
    it('set a matrix to a scale matrix of the same order', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.toScale(
        1.875,
        -13.125
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        1.875, 0, 
        0, -13.125
      ]))
    })
  })

  describe('#toTranslation', function () {
    it('set a matrix to a translation matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.toTranslation(
        1.875
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        1, 1.875, 
        0, 1
      ]))
    })
  })

  describe('#extractScale', function () {
    it('allow to extract a scale vector from the matrix', function () {
      const matrix : Matrix = Matrix.create(
        1, 0,
        0, 1
      )

      const scale : Vector = new Vector()

      matrix.scale(1, 2)
      matrix.extractScale(scale)

      expect(scale.buffer).toEqual(new Float64Array([
        1, 2
      ]))
    })
  })

  describe('#extractTranslation', function () {
    it('allow to extract a translation vector from the matrix', function () {

    })
  })

  describe('#iterator', function () {
    it('allow to iterate over the cells of the matrix in a row-major order', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      const result = []

      for (const cell of matrix) result.push(cell)

      expect(result).toEqual([
        -1.0, 14.375,
        16.375, 6.125
      ])
    })
  })

  describe('#clear', function () {
    it('allow to fill a matrix with zeroes', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      matrix.clear()

      expect(matrix.buffer).toEqual(new Float64Array([
        0, 0, 
        0, 0
      ]))
    })
  })

  describe('#equals', function () {
    it('allow to check if two matrices are equals', function () {
      const a : Matrix = Matrix.create(
        -1.0, 14.375,
        16.375, 6.125
      )

      const b : Matrix = Matrix.create(
        -4.25, 1.875,
        -12.5, -13.125
      )

      const c : Matrix = Matrix.clone(a)

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