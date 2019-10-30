/* eslint-env jest */

import { Matrix4d as Matrix } from '@library'
import { Vector4d as Vector } from '@library'

describe('matrix.Matrix4d', function () {
  describe('#create', function () {
    it('allow to create a matrix with initial datas', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      ]))
    })
  })

  describe('#wrap', function () {
    it('allow to wrap an existing buffer into a matrix instance', function () {
      const buffer : Float64Array = new Float64Array([
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      ])

      expect(Matrix.wrap(buffer).buffer).toBe(buffer)
    })
  })

  describe('#clone', function () {
    it('allow to clone an existing matrix instance', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      const clone : Matrix = Matrix.clone(matrix)

      expect(clone).not.toBe(matrix)
      expect(clone.buffer).not.toBe(matrix.buffer)
      expect(clone.buffer).toEqual(new Float64Array([
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      ]))
    })
  })

  describe('#constructor', function () {
    it('allow to create a new empty matrix instance', function () {
      expect(new Matrix().buffer).toEqual(new Float64Array([
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
      const buffer : Float64Array = new Float64Array([
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
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
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a00).toBe(-1.0)
    })

    it('allow to change the value of the cell at column 0 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a00 = 55

      expect(matrix.a00).toBe(55)
      expect(matrix.buffer[0]).toBe(55)
    })
  })
  
  describe('#a10', function () {
    it('allow to get the value of the cell at column 1 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a10).toBe(14.375)
    })

    it('allow to change the value of the cell at column 1 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a10 = 55

      expect(matrix.a10).toBe(55)
      expect(matrix.buffer[1]).toBe(55)
    })
  })
  
  describe('#a20', function () {
    it('allow to get the value of the cell at column 2 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a20).toBe(16.375)
    })

    it('allow to change the value of the cell at column 2 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a20 = 55

      expect(matrix.a20).toBe(55)
      expect(matrix.buffer[2]).toBe(55)
    })
  })
  
  describe('#a30', function () {
    it('allow to get the value of the cell at column 3 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a30).toBe(6.125)
    })

    it('allow to change the value of the cell at column 3 and row 0', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a30 = 55

      expect(matrix.a30).toBe(55)
      expect(matrix.buffer[3]).toBe(55)
    })
  })
  
  describe('#a01', function () {
    it('allow to get the value of the cell at column 0 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a01).toBe(-17.875)
    })

    it('allow to change the value of the cell at column 0 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a01 = 55

      expect(matrix.a01).toBe(55)
      expect(matrix.buffer[4]).toBe(55)
    })
  })
  
  describe('#a11', function () {
    it('allow to get the value of the cell at column 1 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a11).toBe(14.0)
    })

    it('allow to change the value of the cell at column 1 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a11 = 55

      expect(matrix.a11).toBe(55)
      expect(matrix.buffer[5]).toBe(55)
    })
  })
  
  describe('#a21', function () {
    it('allow to get the value of the cell at column 2 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a21).toBe(-7.5)
    })

    it('allow to change the value of the cell at column 2 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a21 = 55

      expect(matrix.a21).toBe(55)
      expect(matrix.buffer[6]).toBe(55)
    })
  })
  
  describe('#a31', function () {
    it('allow to get the value of the cell at column 3 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a31).toBe(-3.0)
    })

    it('allow to change the value of the cell at column 3 and row 1', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a31 = 55

      expect(matrix.a31).toBe(55)
      expect(matrix.buffer[7]).toBe(55)
    })
  })
  
  describe('#a02', function () {
    it('allow to get the value of the cell at column 0 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a02).toBe(9.25)
    })

    it('allow to change the value of the cell at column 0 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a02 = 55

      expect(matrix.a02).toBe(55)
      expect(matrix.buffer[8]).toBe(55)
    })
  })
  
  describe('#a12', function () {
    it('allow to get the value of the cell at column 1 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a12).toBe(18.125)
    })

    it('allow to change the value of the cell at column 1 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a12 = 55

      expect(matrix.a12).toBe(55)
      expect(matrix.buffer[9]).toBe(55)
    })
  })
  
  describe('#a22', function () {
    it('allow to get the value of the cell at column 2 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a22).toBe(-7.5)
    })

    it('allow to change the value of the cell at column 2 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a22 = 55

      expect(matrix.a22).toBe(55)
      expect(matrix.buffer[10]).toBe(55)
    })
  })
  
  describe('#a32', function () {
    it('allow to get the value of the cell at column 3 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a32).toBe(11.0)
    })

    it('allow to change the value of the cell at column 3 and row 2', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a32 = 55

      expect(matrix.a32).toBe(55)
      expect(matrix.buffer[11]).toBe(55)
    })
  })
  
  describe('#a03', function () {
    it('allow to get the value of the cell at column 0 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a03).toBe(-19.5)
    })

    it('allow to change the value of the cell at column 0 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a03 = 55

      expect(matrix.a03).toBe(55)
      expect(matrix.buffer[12]).toBe(55)
    })
  })
  
  describe('#a13', function () {
    it('allow to get the value of the cell at column 1 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a13).toBe(21.5)
    })

    it('allow to change the value of the cell at column 1 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a13 = 55

      expect(matrix.a13).toBe(55)
      expect(matrix.buffer[13]).toBe(55)
    })
  })
  
  describe('#a23', function () {
    it('allow to get the value of the cell at column 2 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a23).toBe(5.875)
    })

    it('allow to change the value of the cell at column 2 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a23 = 55

      expect(matrix.a23).toBe(55)
      expect(matrix.buffer[14]).toBe(55)
    })
  })
  
  describe('#a33', function () {
    it('allow to get the value of the cell at column 3 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.a33).toBe(-12.5)
    })

    it('allow to change the value of the cell at column 3 and row 3', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.a33 = 55

      expect(matrix.a33).toBe(55)
      expect(matrix.buffer[15]).toBe(55)
    })
  })
  

  describe('#setCell', function () {
    it('change the value of a cell of the matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      
      matrix.setCell(0, 0, -4.25)
      
      matrix.setCell(1, 0, 1.875)
      
      matrix.setCell(2, 0, -12.5)
      
      matrix.setCell(3, 0, -13.125)
      
      matrix.setCell(0, 1, -13.375)
      
      matrix.setCell(1, 1, 18.0)
      
      matrix.setCell(2, 1, 16.75)
      
      matrix.setCell(3, 1, 15.25)
      
      matrix.setCell(0, 2, -3.0)
      
      matrix.setCell(1, 2, 5.0)
      
      matrix.setCell(2, 2, 15.5)
      
      matrix.setCell(3, 2, -14.0)
      
      matrix.setCell(0, 3, -18.5)
      
      matrix.setCell(1, 3, -9.25)
      
      matrix.setCell(2, 3, 12.75)
      
      matrix.setCell(3, 3, 2.125)
      

      expect(matrix.buffer).toEqual(new Float64Array([
        -4.25, 1.875, -12.5, -13.125,
        -13.375, 18.0, 16.75, 15.25,
        -3.0, 5.0, 15.5, -14.0,
        -18.5, -9.25, 12.75, 2.125
      ]))
    })
  })

  describe('#getCell', function () {
    it('get the value of a cell of the matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      
      expect(matrix.getCell(0, 0)).toBe(-1.0)
      
      expect(matrix.getCell(1, 0)).toBe(14.375)
      
      expect(matrix.getCell(2, 0)).toBe(16.375)
      
      expect(matrix.getCell(3, 0)).toBe(6.125)
      
      expect(matrix.getCell(0, 1)).toBe(-17.875)
      
      expect(matrix.getCell(1, 1)).toBe(14.0)
      
      expect(matrix.getCell(2, 1)).toBe(-7.5)
      
      expect(matrix.getCell(3, 1)).toBe(-3.0)
      
      expect(matrix.getCell(0, 2)).toBe(9.25)
      
      expect(matrix.getCell(1, 2)).toBe(18.125)
      
      expect(matrix.getCell(2, 2)).toBe(-7.5)
      
      expect(matrix.getCell(3, 2)).toBe(11.0)
      
      expect(matrix.getCell(0, 3)).toBe(-19.5)
      
      expect(matrix.getCell(1, 3)).toBe(21.5)
      
      expect(matrix.getCell(2, 3)).toBe(5.875)
      
      expect(matrix.getCell(3, 3)).toBe(-12.5)
      
    })
  })

  describe('#set', function () {
    it('allow to update the entire matrix content', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.set(
        -4.25, 1.875, -12.5, -13.125,
        -13.375, 18.0, 16.75, 15.25,
        -3.0, 5.0, 15.5, -14.0,
        -18.5, -9.25, 12.75, 2.125
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        -4.25, 1.875, -12.5, -13.125,
        -13.375, 18.0, 16.75, 15.25,
        -3.0, 5.0, 15.5, -14.0,
        -18.5, -9.25, 12.75, 2.125
      ]))
    })
  })

  describe('#copy', function () {
    it('allow to copy the content of another matrix', function () {
      const toCopy : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      const result : Matrix = Matrix.create(
        -4.25, 1.875, -12.5, -13.125,
        -13.375, 18.0, 16.75, 15.25,
        -3.0, 5.0, 15.5, -14.0,
        -18.5, -9.25, 12.75, 2.125
      )

      result.copy(toCopy)

      expect(result.buffer).toEqual(new Float64Array([
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      ]))
    })
  })

  describe('#fill', function () {
    it('allow to fill a matrix with a given value', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.fill(5)

      expect(matrix.buffer).toEqual(new Float64Array([
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
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.transpose()

      expect(matrix.buffer).toEqual(new Float64Array([
        -1.0, -17.875, 9.25, -19.5,
        14.375, 14.0, 18.125, 21.5,
        16.375, -7.5, -7.5, 5.875,
        6.125, -3.0, 11.0, -12.5,
      ]))
    })
  })

  
  describe('#invert', function () {
    it('invert the current matrix', function () {
      const matrix : Matrix = Matrix.create(
        5, 7, 2, 4, 
        2, 3, 0, 1, 
        9, 13, 4, 7, 
        2, 3, 1, 2
      )
      const invert : Matrix = Matrix.clone(matrix).invert()

      expect(matrix.multiplyWithMatrix(invert).equals(
        Matrix.create(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
        )
      )).toBeTruthy()
    })
  })
  

  describe('#negate', function () {
    it('negate the current matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.negate()

      expect(matrix.buffer).toEqual(new Float64Array([
        1.0, -14.375, -16.375, -6.125, 
        17.875, -14.0, 7.5, 3.0, 
        -9.25, -18.125, 7.5, -11.0, 
        19.5, -21.5, -5.875, 12.5
      ]))
    })
  })

  describe('#multiplyWithMatrix', function () {
    it('allow to multiply the current matrix with another', function () {
      const right : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      const left : Matrix = Matrix.create(
        2, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 0, 2, 0, 
        0, 0, 0, 2
      )

      right.multiplyWithMatrix(left)

      expect(right.buffer).toEqual(new Float64Array([
        -2.0, 28.75, 32.75, 12.25, 
        -35.75, 28.0, -15.0, -6.0, 
        18.5, 36.25, -15.0, 22.0, 
        -39.0, 43.0, 11.75, -25.0
      ]))
    })
  })

  describe('#multiplyWithStaticMatrixAsRightOperand', function () {
    it('allow to multiply the current matrix with a static one as right operand', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.multiplyWithStaticMatrixAsRightOperand(
        2, 0, 0, 0, 
        0, 2, 0, 0, 
        0, 0, 2, 0, 
        0, 0, 0, 2
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        -2.0, 28.75, 32.75, 12.25, 
        -35.75, 28.0, -15.0, -6.0, 
        18.5, 36.25, -15.0, 22.0, 
        -39.0, 43.0, 11.75, -25.0
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
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        -2.0, 28.75, 32.75, 12.25, 
        -35.75, 28.0, -15.0, -6.0, 
        18.5, 36.25, -15.0, 22.0, 
        -39.0, 43.0, 11.75, -25.0
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
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.multiplyWithScalar(2)

      expect(matrix.buffer).toEqual(new Float64Array([
        -2.0, 28.75, 32.75, 12.25, 
        -35.75, 28.0, -15.0, -6.0, 
        18.5, 36.25, -15.0, 22.0, 
        -39.0, 43.0, 11.75, -25.0
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('allow to divide the current matrix with a scalar', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.divideWithScalar(2)

      expect(matrix.buffer).toEqual(new Float64Array([
        -0.5, 7.1875, 8.1875, 3.0625, 
        -8.9375, 7.0, -3.75, -1.5, 
        4.625, 9.0625, -3.75, 5.5, 
        -9.75, 10.75, 2.9375, -6.25
      ]))
    })
  })

  describe('#scale', function () {
    it('allow to multiply the current matrix with a scale matrix of the same order', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.scale(1, 2, 3, 4)

      expect(matrix.buffer).toEqual(new Float64Array([
        -1.0, 28.75, 49.125, 24.5, 
        -17.875, 28.0, -22.5, -12.0, 
        9.25, 36.25, -22.5, 44.0, 
        -19.5, 43.0, 17.625, -50.0
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

      expect(matrix.buffer).toEqual(new Float64Array([
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
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      const right : Matrix = Matrix.create(
        -4.25, 1.875, -12.5, -13.125,
        -13.375, 18.0, 16.75, 15.25,
        -3.0, 5.0, 15.5, -14.0,
        -18.5, -9.25, 12.75, 2.125
      )

      left.add(right)

      expect(left.buffer).toEqual(new Float64Array([
        -5.25, 16.25, 3.875, -7.0, 
        -31.25, 32.0, 9.25, 12.25, 
        6.25, 23.125, 8.0, -3.0, 
        -38.0, 12.25, 18.625, -10.375
      ]))
    })
  })

  describe('#subtract', function () {
    it('allow to perform a cell by cell subtraction with another matrix', function () {
      const left : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      const right : Matrix = Matrix.create(
        -4.25, 1.875, -12.5, -13.125,
        -13.375, 18.0, 16.75, 15.25,
        -3.0, 5.0, 15.5, -14.0,
        -18.5, -9.25, 12.75, 2.125
      )

      left.subtract(right)

      expect(left.buffer).toEqual(new Float64Array([
        3.25, 12.5, 28.875, 19.25, 
        -4.5, -4.0, -24.25, -18.25, 
        12.25, 13.125, -23.0, 25.0, 
        -1.0, 30.75, -6.875, -14.625
      ]))
    })
  })

  describe('#toIdentity', function () {
    it('set a matrix to an identity matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.toIdentity()

      expect(matrix.buffer).toEqual(new Float64Array([
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
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.toScale(
        1.875,
        18.0,
        5.0,
        -9.25
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        1.875, 0, 0, 0, 
        0, 18.0, 0, 0, 
        0, 0, 5.0, 0, 
        0, 0, 0, -9.25
      ]))
    })
  })

  describe('#toTranslation', function () {
    it('set a matrix to a translation matrix', function () {
      const matrix : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      matrix.toTranslation(
        1.875,
        18.0,
        5.0
      )

      expect(matrix.buffer).toEqual(new Float64Array([
        1, 0, 0, 1.875, 
        0, 1, 0, 18.0, 
        0, 0, 1, 5.0, 
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

      expect(scale.buffer).toEqual(new Float64Array([
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
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      const result = []

      for (const cell of matrix) result.push(cell)

      expect(result).toEqual([
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      ])
    })
  })

  describe('#equals', function () {
    it('allow to check if two matrices are equals', function () {
      const a : Matrix = Matrix.create(
        -1.0, 14.375, 16.375, 6.125,
        -17.875, 14.0, -7.5, -3.0,
        9.25, 18.125, -7.5, 11.0,
        -19.5, 21.5, 5.875, -12.5
      )

      const b : Matrix = Matrix.create(
        -4.25, 1.875, -12.5, -13.125,
        -13.375, 18.0, 16.75, 15.25,
        -3.0, 5.0, 15.5, -14.0,
        -18.5, -9.25, 12.75, 2.125
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