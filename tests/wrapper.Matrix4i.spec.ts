/* eslint-env jest */

import { Matrix4i as Matrix } from '@library'
import { Vector4i as Vector } from '@library'

describe('matrix.Matrix4i', function () {
  describe('#create', function () {
    it('allow to create a matrix with initial datas', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.buffer).toEqual(new Int32Array([
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      ]))
    })
  })

  describe('#wrap', function () {
    it('allow to wrap an existing buffer into a matrix instance', function () {
      const buffer : Int32Array = new Int32Array([
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      ])

      expect(Matrix.wrap(buffer).buffer).toBe(buffer)
    })
  })

  describe('#clone', function () {
    it('allow to clone an existing matrix instance', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      const clone : Matrix = Matrix.clone(matrix)

      expect(clone).not.toBe(matrix)
      expect(clone.buffer).not.toBe(matrix.buffer)
      expect(clone.buffer).toEqual(new Int32Array([
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      ]))
    })
  })

  describe('#constructor', function () {
    it('allow to create a new empty matrix instance', function () {
      expect(new Matrix().buffer).toEqual(new Int32Array([
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0, 
        0, 0, 0, 0
      ]))
    })
  })

  describe('#columns', function () {
    it('return the number of columns of the matrix', function () {
      expect(new Matrix().columns).toBe(4)
    })
  })

  describe('#rows', function () {
    it('return the number of rows of the matrix', function () {
      expect(new Matrix().columns).toBe(4)
    })
  })

  describe('#cells', function () {
    it('return the number of cells of the matrix', function () {
      expect(new Matrix().cells).toBe(16)
    })
  })

  describe('#buffer', function () {
    it('return the buffer of the matrix', function () {
      const buffer : Int32Array = new Int32Array([
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      ])

      expect(Matrix.wrap(buffer).buffer).toBe(buffer)
    })
  })

  describe('#determinant', function () {
    it('return the determinant of the matrix', function () {
      const matrix : Matrix = Matrix.create(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      )

      expect(matrix.determinant).toBe(1)
    })
  })

  
  describe('#a00', function () {
    it('allow to get the value of the cell at column 0 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a00).toBe(-2)
    })

    it('allow to change the value of the cell at column 0 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a00 = 55

      expect(matrix.a00).toBe(55)
      expect(matrix.buffer[0]).toBe(55)
    })
  })
  
  describe('#a10', function () {
    it('allow to get the value of the cell at column 1 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a10).toBe(-18)
    })

    it('allow to change the value of the cell at column 1 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a10 = 55

      expect(matrix.a10).toBe(55)
      expect(matrix.buffer[1]).toBe(55)
    })
  })
  
  describe('#a20', function () {
    it('allow to get the value of the cell at column 2 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a20).toBe(11)
    })

    it('allow to change the value of the cell at column 2 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a20 = 55

      expect(matrix.a20).toBe(55)
      expect(matrix.buffer[2]).toBe(55)
    })
  })
  
  describe('#a30', function () {
    it('allow to get the value of the cell at column 3 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a30).toBe(-20)
    })

    it('allow to change the value of the cell at column 3 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a30 = 55

      expect(matrix.a30).toBe(55)
      expect(matrix.buffer[3]).toBe(55)
    })
  })
  
  describe('#a01', function () {
    it('allow to get the value of the cell at column 0 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a01).toBe(13)
    })

    it('allow to change the value of the cell at column 0 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a01 = 55

      expect(matrix.a01).toBe(55)
      expect(matrix.buffer[4]).toBe(55)
    })
  })
  
  describe('#a11', function () {
    it('allow to get the value of the cell at column 1 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a11).toBe(0)
    })

    it('allow to change the value of the cell at column 1 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a11 = 55

      expect(matrix.a11).toBe(55)
      expect(matrix.buffer[5]).toBe(55)
    })
  })
  
  describe('#a21', function () {
    it('allow to get the value of the cell at column 2 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a21).toBe(-8)
    })

    it('allow to change the value of the cell at column 2 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a21 = 55

      expect(matrix.a21).toBe(55)
      expect(matrix.buffer[6]).toBe(55)
    })
  })
  
  describe('#a31', function () {
    it('allow to get the value of the cell at column 3 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a31).toBe(9)
    })

    it('allow to change the value of the cell at column 3 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a31 = 55

      expect(matrix.a31).toBe(55)
      expect(matrix.buffer[7]).toBe(55)
    })
  })
  
  describe('#a02', function () {
    it('allow to get the value of the cell at column 0 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a02).toBe(11)
    })

    it('allow to change the value of the cell at column 0 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a02 = 55

      expect(matrix.a02).toBe(55)
      expect(matrix.buffer[8]).toBe(55)
    })
  })
  
  describe('#a12', function () {
    it('allow to get the value of the cell at column 1 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a12).toBe(15)
    })

    it('allow to change the value of the cell at column 1 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a12 = 55

      expect(matrix.a12).toBe(55)
      expect(matrix.buffer[9]).toBe(55)
    })
  })
  
  describe('#a22', function () {
    it('allow to get the value of the cell at column 2 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a22).toBe(3)
    })

    it('allow to change the value of the cell at column 2 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a22 = 55

      expect(matrix.a22).toBe(55)
      expect(matrix.buffer[10]).toBe(55)
    })
  })
  
  describe('#a32', function () {
    it('allow to get the value of the cell at column 3 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a32).toBe(18)
    })

    it('allow to change the value of the cell at column 3 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a32 = 55

      expect(matrix.a32).toBe(55)
      expect(matrix.buffer[11]).toBe(55)
    })
  })
  
  describe('#a03', function () {
    it('allow to get the value of the cell at column 0 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a03).toBe(-11)
    })

    it('allow to change the value of the cell at column 0 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a03 = 55

      expect(matrix.a03).toBe(55)
      expect(matrix.buffer[12]).toBe(55)
    })
  })
  
  describe('#a13', function () {
    it('allow to get the value of the cell at column 1 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a13).toBe(14)
    })

    it('allow to change the value of the cell at column 1 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a13 = 55

      expect(matrix.a13).toBe(55)
      expect(matrix.buffer[13]).toBe(55)
    })
  })
  
  describe('#a23', function () {
    it('allow to get the value of the cell at column 2 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a23).toBe(-4)
    })

    it('allow to change the value of the cell at column 2 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a23 = 55

      expect(matrix.a23).toBe(55)
      expect(matrix.buffer[14]).toBe(55)
    })
  })
  
  describe('#a33', function () {
    it('allow to get the value of the cell at column 3 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.a33).toBe(13)
    })

    it('allow to change the value of the cell at column 3 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.a33 = 55

      expect(matrix.a33).toBe(55)
      expect(matrix.buffer[15]).toBe(55)
    })
  })
  

  describe('#setCell', function () {
    it('change the value of a cell of the matrix', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      
      matrix.setCell(0, 0, -6)
      
      matrix.setCell(1, 0, 8)
      
      matrix.setCell(2, 0, 8)
      
      matrix.setCell(3, 0, 3)
      
      matrix.setCell(0, 1, 16)
      
      matrix.setCell(1, 1, -3)
      
      matrix.setCell(2, 1, 1)
      
      matrix.setCell(3, 1, 14)
      
      matrix.setCell(0, 2, -18)
      
      matrix.setCell(1, 2, 8)
      
      matrix.setCell(2, 2, 19)
      
      matrix.setCell(3, 2, 15)
      
      matrix.setCell(0, 3, 4)
      
      matrix.setCell(1, 3, 18)
      
      matrix.setCell(2, 3, -2)
      
      matrix.setCell(3, 3, -13)
      

      expect(matrix.buffer).toEqual(new Int32Array([
        -6, 8, 8, 3,
        16, -3, 1, 14,
        -18, 8, 19, 15,
        4, 18, -2, -13
      ]))
    })
  })

  describe('#getCell', function () {
    it('get the value of a cell of the matrix', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      
      expect(matrix.getCell(0, 0)).toBe(-2)
      
      expect(matrix.getCell(1, 0)).toBe(-18)
      
      expect(matrix.getCell(2, 0)).toBe(11)
      
      expect(matrix.getCell(3, 0)).toBe(-20)
      
      expect(matrix.getCell(0, 1)).toBe(13)
      
      expect(matrix.getCell(1, 1)).toBe(0)
      
      expect(matrix.getCell(2, 1)).toBe(-8)
      
      expect(matrix.getCell(3, 1)).toBe(9)
      
      expect(matrix.getCell(0, 2)).toBe(11)
      
      expect(matrix.getCell(1, 2)).toBe(15)
      
      expect(matrix.getCell(2, 2)).toBe(3)
      
      expect(matrix.getCell(3, 2)).toBe(18)
      
      expect(matrix.getCell(0, 3)).toBe(-11)
      
      expect(matrix.getCell(1, 3)).toBe(14)
      
      expect(matrix.getCell(2, 3)).toBe(-4)
      
      expect(matrix.getCell(3, 3)).toBe(13)
      
    })
  })

  describe('#set', function () {
    it('allow to update the entire matrix content', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.set(
        -6, 8, 8, 3,
        16, -3, 1, 14,
        -18, 8, 19, 15,
        4, 18, -2, -13
      )

      expect(matrix.buffer).toEqual(new Int32Array([
        -6, 8, 8, 3,
        16, -3, 1, 14,
        -18, 8, 19, 15,
        4, 18, -2, -13
      ]))
    })
  })

  describe('#copy', function () {
    it('allow to copy the content of another matrix', function () {
      const toCopy : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      const result : Matrix = Matrix.create(
        -6, 8, 8, 3,
        16, -3, 1, 14,
        -18, 8, 19, 15,
        4, 18, -2, -13
      )

      result.copy(toCopy)

      expect(result.buffer).toEqual(new Int32Array([
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      ]))
    })
  })

  describe('#fill', function () {
    it('allow to fill a matrix with a given value', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.fill(5)

      expect(matrix.buffer).toEqual(new Int32Array([
        5, 5, 5, 5, 
        5, 5, 5, 5, 
        5, 5, 5, 5, 
        5, 5, 5, 5
      ]))
    })
  })

  describe('#transpose', function () {
    it('transpose the current matrix', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.transpose()

      expect(matrix.buffer).toEqual(new Int32Array([
        -2, 13, 11, -11,
        -18, 0, 15, 14,
        11, -8, 3, -4,
        -20, 9, 18, 13,
      ]))
    })
  })

  

  describe('#negate', function () {
    it('negate the current matrix', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.negate()

      expect(matrix.buffer).toEqual(new Int32Array([
        2, 18, -11, 20, 
        -13, 0, 8, -9, 
        -11, -15, -3, -18, 
        11, -14, 4, -13
      ]))
    })
  })

  describe('#multiplyWithMatrix', function () {
    it('allow to multiply the current matrix with another', function () {
      const right : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      const left : Matrix = Matrix.create(
        2, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 0, 2, 0, 
        0, 0, 0, 2
      )

      right.multiplyWithMatrix(left)

      expect(right.buffer).toEqual(new Int32Array([
        -4, -36, 22, -40, 
        26, 0, -16, 18, 
        22, 30, 6, 36, 
        -22, 28, -8, 26
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsRightOperand', function () {
    it('allow to multiply the current matrix with a static one as right operand', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.multiplyWithStaticMatrixAsRightOperand(
        2, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 0, 2, 0, 
        0, 0, 0, 2
      )

      expect(matrix.buffer).toEqual(new Int32Array([
        -4, -36, 22, -40, 
        26, 0, -16, 18, 
        22, 30, 6, 36, 
        -22, 28, -8, 26
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsLeftOperand', function () {
    it('allow to multiply the current matrix with a static one as right operand', function () {
      const matrix : Matrix = Matrix.create(
        2, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 0, 2, 0, 
        0, 0, 0, 2
      )

      matrix.multiplyWithStaticMatrixAsLeftOperand(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      expect(matrix.buffer).toEqual(new Int32Array([
        -4, -36, 22, -40, 
        26, 0, -16, 18, 
        22, 30, 6, 36, 
        -22, 28, -8, 26
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
        1, 0, 0, 1, 
        0, 1, 0, 2, 
        0, 0, 1, 3, 
        0, 0, 0, 1, 
        
      )

      const vector : Vector = Vector.create(0, 1, 2, 1)
      const result : Vector = Vector.create(0, 0, 0, 0)

      matrix.multiplyWithVector(vector, result)

      expect(result.x).toBe(
        matrix.computeXComponentOfMultiplicationWithVector(
          vector.x, vector.y, vector.z, vector.w
        )
      )
    })
  })
  
  describe('#computeYComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrix : Matrix = Matrix.create(
        1, 0, 0, 1, 
        0, 1, 0, 2, 
        0, 0, 1, 3, 
        0, 0, 0, 1, 
        
      )

      const vector : Vector = Vector.create(0, 1, 2, 1)
      const result : Vector = Vector.create(0, 0, 0, 0)

      matrix.multiplyWithVector(vector, result)

      expect(result.y).toBe(
        matrix.computeYComponentOfMultiplicationWithVector(
          vector.x, vector.y, vector.z, vector.w
        )
      )
    })
  })
  
  describe('#computeZComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrix : Matrix = Matrix.create(
        1, 0, 0, 1, 
        0, 1, 0, 2, 
        0, 0, 1, 3, 
        0, 0, 0, 1, 
        
      )

      const vector : Vector = Vector.create(0, 1, 2, 1)
      const result : Vector = Vector.create(0, 0, 0, 0)

      matrix.multiplyWithVector(vector, result)

      expect(result.z).toBe(
        matrix.computeZComponentOfMultiplicationWithVector(
          vector.x, vector.y, vector.z, vector.w
        )
      )
    })
  })
  
  describe('#computeWComponentOfMultiplicationWithVector', function () {
    it('compute only one component of the vector that is a result of a multiplication of this matrix with a vector', function () {
      const matrix : Matrix = Matrix.create(
        1, 0, 0, 1, 
        0, 1, 0, 2, 
        0, 0, 1, 3, 
        0, 0, 0, 1, 
        
      )

      const vector : Vector = Vector.create(0, 1, 2, 1)
      const result : Vector = Vector.create(0, 0, 0, 0)

      matrix.multiplyWithVector(vector, result)

      expect(result.w).toBe(
        matrix.computeWComponentOfMultiplicationWithVector(
          vector.x, vector.y, vector.z, vector.w
        )
      )
    })
  })
  

  describe('#multiplyWithScalar', function () {
    it('allow to multiply the current matrix with a scalar', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.multiplyWithScalar(2)

      expect(matrix.buffer).toEqual(new Int32Array([
        -4, -36, 22, -40, 
        26, 0, -16, 18, 
        22, 30, 6, 36, 
        -22, 28, -8, 26
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('allow to divide the current matrix with a scalar', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.divideWithScalar(2)

      expect(matrix.buffer).toEqual(new Int32Array([
        -1.0, -9.0, 5.5, -10.0, 
        6.5, 0.0, -4.0, 4.5, 
        5.5, 7.5, 1.5, 9.0, 
        -5.5, 7.0, -2.0, 6.5
      ]))
    })
  })

  describe('#scale', function () {
    it('allow to multiply the current matrix with a scale matrix of the same order', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.scale(1, 2, 3, 4)

      expect(matrix.buffer).toEqual(new Int32Array([
        -2, -36, 33, -80, 
        13, 0, -24, 36, 
        11, 30, 9, 72, 
        -11, 28, -12, 52
      ]))
    })
  })

  describe('#translate', function () {
    it('allow to multiply the current matrix with a scale matrix of the same order', function () {
      const matrix : Matrix = Matrix.create(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      )

      matrix.translate(1, 2, 3)

      expect(matrix.buffer).toEqual(new Int32Array([
        1, 0, 0, 1, 
        0, 1, 0, 2, 
        0, 0, 1, 3, 
        0, 0, 0, 1
      ]))
    })
  })

  describe('#add', function () {
    it('allow to perform a cell by cell addition with another matrix', function () {
      const left : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      const right : Matrix = Matrix.create(
        -6, 8, 8, 3,
        16, -3, 1, 14,
        -18, 8, 19, 15,
        4, 18, -2, -13
      )

      left.add(right)

      expect(left.buffer).toEqual(new Int32Array([
        -8, -10, 19, -17, 
        29, -3, -7, 23, 
        -7, 23, 22, 33, 
        -7, 32, -6, 0
      ]))
    })
  })

  describe('#subtract', function () {
    it('allow to perform a cell by cell subtraction with another matrix', function () {
      const left : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      const right : Matrix = Matrix.create(
        -6, 8, 8, 3,
        16, -3, 1, 14,
        -18, 8, 19, 15,
        4, 18, -2, -13
      )

      left.subtract(right)

      expect(left.buffer).toEqual(new Int32Array([
        4, -26, 3, -23, 
        -3, 3, -9, -5, 
        29, 7, -16, 3, 
        -15, -4, -2, 26
      ]))
    })
  })

  describe('#toIdentity', function () {
    it('set a matrix to an identity matrix', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.toIdentity()

      expect(matrix.buffer).toEqual(new Int32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ]))
    })
  })

  describe('#toScale', function () {
    it('set a matrix to a scale matrix of the same order', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.toScale(
        8,
        -3,
        8,
        18
      )

      expect(matrix.buffer).toEqual(new Int32Array([
        8, 0, 0, 0, 
        0, -3, 0, 0, 
        0, 0, 8, 0, 
        0, 0, 0, 18
      ]))
    })
  })

  describe('#toTranslation', function () {
    it('set a matrix to a translation matrix', function () {
      const matrix : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      matrix.toTranslation(
        8,
        -3,
        8
      )

      expect(matrix.buffer).toEqual(new Int32Array([
        1, 0, 0, 8, 
        0, 1, 0, -3, 
        0, 0, 1, 8, 
        0, 0, 0, 1
      ]))
    })
  })

  describe('#extractScale', function () {
    it('allow to extract a scale vector from the matrix', function () {
      const matrix : Matrix = Matrix.create(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      )

      const scale : Vector = new Vector()

      matrix.scale(1, 2, 3, 4)
      matrix.extractScale(scale)

      expect(scale.buffer).toEqual(new Int32Array([
        1, 2, 3, 4
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
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      const result = []

      for (const cell of matrix) result.push(cell)

      expect(result).toEqual([
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      ])
    })
  })

  describe('#equals', function () {
    it('allow to check if two matrices are equals', function () {
      const a : Matrix = Matrix.create(
        -2, -18, 11, -20,
        13, 0, -8, 9,
        11, 15, 3, 18,
        -11, 14, -4, 13
      )

      const b : Matrix = Matrix.create(
        -6, 8, 8, 3,
        16, -3, 1, 14,
        -18, 8, 19, 15,
        4, 18, -2, -13
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