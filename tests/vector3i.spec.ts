/* eslint-env jest */

import { vector3i as vector } from '../src'

describe('vector.raw.vector3i', function () {
  describe('#toString', function () {
    it ('allow to print a null vector', function () {
      expect(vector.toString(null, 0)).toBe(
        'vector 3 integer null'
      )
    })
  })

  describe('#equals', function () {
    it('test if two vectors of a buffer are equals', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11,
        -2, -18, 11,
        -6, 8, 8
      ])

      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4)).toBeTruthy()
      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4 + 3)).toBeTruthy()
      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4 + 2 * 3)).toBeFalsy()
      expect(vector.equals(vectorBuffer, 4 + 2* 3, vectorBuffer, 4 + 2 * 3)).toBeTruthy()
    })
  })

  describe('#copy', function () {
    it('copy a vector from one buffer to another', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      vector.copy(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        -2, -18, 11,
        -18, 11
      ]))
    })
  })

  describe('#add', function () {
    it('perform an addition of two vectors', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11,
        -6, 8, 8
      ])

      vector.add(
        vectorBuffer, 4,
        vectorBuffer, 4 + 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        -8, -10, 19,
        -18, 11,
        -6, 8, 8
      ]))
    })
  })

  describe('#subtract', function () {
    it('perform an subtraction of two vectors', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11,
        -6, 8, 8
      ])

      vector.subtract(
        vectorBuffer, 4,
        vectorBuffer, 4 + 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        4, -26, 3,
        -18, 11,
        -6, 8, 8
      ]))
    })
  })

  describe('#dot', function () {
    it('compute the dot product of two vectors', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11,
        -6, 8, 8
      ])

      expect(vector.dot(
        vectorBuffer, 4,
        vectorBuffer, 4 + 3
      )).toBe(
        -2 * -6 + -18 * 8 + 11 * 8
      )
    })
  })

  describe('#squaredLength', function () {
    it('compute the squared length of a vector', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      expect(vector.squaredLength(
        vectorBuffer, 4
      )).toBe(
        -2 * -2 + -18 * -18 + 11 * 11
      )
    })
  })

  describe('#length', function () {
    it('compute the length of a vector', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      expect(vector.length(
        vectorBuffer, 4
      )).toBe(
        Math.sqrt(
          -2 * -2 + -18 * -18 + 11 * 11
        )
      )
    })
  })

  describe('#set', function () {
    it('allow to set the content of a vector', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      vector.set(
        vectorBuffer, 4,
        -6, 8, 8
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8, 9, 10,
        -6, 8, 8
      ]))
    })
  })

  describe('#multiplyWithScalar', function () {
    it('allow to multiply a vector by a scalar', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      vector.multiplyWithScalar(
        vectorBuffer, 4, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        -6, -54, 33,
        -18, 11
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('allow to divide a vector by a scalar', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      vector.divideWithScalar(
        vectorBuffer, 4, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        -0.6666666666666666, -6.0, 3.6666666666666665,
        -18, 11
      ]))
    })
  })

  describe('#negate', function () {
    it('allow to negate a vector', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      vector.negate(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        2, 18, -11,
        -18, 11
      ]))
    })
  })
  describe('#minimum', function () {
    it('clamp components of a vector to a minimum value', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      vector.minimum(
        vectorBuffer, 4,
        3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        3, 3, 11,
        -18, 11
      ]))
    })
  })

  describe('#maximum', function () {
    it('clamp components of a vector to a maximum value', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      vector.maximum(
        vectorBuffer, 4,
        3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        -2, -18, 3,
        -18, 11
      ]))
    })
  })

  describe('#clamp', function () {
    it('clamp components of a vector between two value', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11
      ])

      vector.clamp(
        vectorBuffer, 4,
        1, 10,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        1, 1, 10,
        -18, 11
      ]))
    })
  })

  describe('#mix', function () {
    it('mix two vectors', function () {
      const vectorBuffer : Int32Array = new Int32Array([
        7, 8, 9, 10,
        -2, -18, 11,
        -6, 8, 8
      ])

      vector.mix(
        vectorBuffer, 4,
        vectorBuffer, 4 + 3,
        0.33,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Int32Array([
        7, 8,
        -3.3200000000000003, -9.42, 10.01,
        -18, 11,
        -6, 8, 8
      ]))
    })
  })
})