/* eslint-env jest */

import { vector3d as vector } from '../src'

describe('vector.raw.vector3d', function () {
  describe('#toString', function () {
    it ('allow to print a null vector', function () {
      expect(vector.toString(null, 0)).toBe(
        'vector 3 double null'
      )
    })
  })

  describe('#equals', function () {
    it('test if two vectors of a buffer are equals', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375,
        -1.0, 14.375, 16.375,
        -4.25, 1.875, -12.5
      ])

      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4)).toBeTruthy()
      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4 + 3)).toBeTruthy()
      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4 + 2 * 3)).toBeFalsy()
      expect(vector.equals(vectorBuffer, 4 + 2* 3, vectorBuffer, 4 + 2 * 3)).toBeTruthy()
    })
  })

  describe('#copy', function () {
    it('copy a vector from one buffer to another', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.copy(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        -1.0, 14.375, 16.375,
        14.375, 16.375
      ]))
    })
  })

  describe('#add', function () {
    it('perform an addition of two vectors', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375,
        -4.25, 1.875, -12.5
      ])

      vector.add(
        vectorBuffer, 4,
        vectorBuffer, 4 + 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        -5.25, 16.25, 3.875,
        14.375, 16.375,
        -4.25, 1.875, -12.5
      ]))
    })
  })

  describe('#subtract', function () {
    it('perform an subtraction of two vectors', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375,
        -4.25, 1.875, -12.5
      ])

      vector.subtract(
        vectorBuffer, 4,
        vectorBuffer, 4 + 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        3.25, 12.5, 28.875,
        14.375, 16.375,
        -4.25, 1.875, -12.5
      ]))
    })
  })

  describe('#dot', function () {
    it('compute the dot product of two vectors', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375,
        -4.25, 1.875, -12.5
      ])

      expect(vector.dot(
        vectorBuffer, 4,
        vectorBuffer, 4 + 3
      )).toBe(
        -1.0 * -4.25 + 14.375 * 1.875 + 16.375 * -12.5
      )
    })
  })

  describe('#squaredLength', function () {
    it('compute the squared length of a vector', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      expect(vector.squaredLength(
        vectorBuffer, 4
      )).toBe(
        -1.0 * -1.0 + 14.375 * 14.375 + 16.375 * 16.375
      )
    })
  })

  describe('#length', function () {
    it('compute the length of a vector', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      expect(vector.length(
        vectorBuffer, 4
      )).toBe(
        Math.sqrt(
          -1.0 * -1.0 + 14.375 * 14.375 + 16.375 * 16.375
        )
      )
    })
  })

  describe('#set', function () {
    it('allow to set the content of a vector', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.set(
        vectorBuffer, 4,
        -4.25, 1.875, -12.5
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8, 9, 10,
        -4.25, 1.875, -12.5
      ]))
    })
  })

  describe('#multiplyWithScalar', function () {
    it('allow to multiply a vector by a scalar', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.multiplyWithScalar(
        vectorBuffer, 4, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        -3.0, 43.125, 49.125,
        14.375, 16.375
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('allow to divide a vector by a scalar', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.divideWithScalar(
        vectorBuffer, 4, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        -0.3333333333333333, 4.791666666666667, 5.458333333333333,
        14.375, 16.375
      ]))
    })
  })

  describe('#negate', function () {
    it('allow to negate a vector', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.negate(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        1.0, -14.375, -16.375,
        14.375, 16.375
      ]))
    })
  })
  
  describe('#normalize', function () {
    it('allow to normalize a vector', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.normalize(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        -0.04584546040490022, 0.6590284933204407, 0.7507194141302411,
        14.375, 16.375
      ]))
    })
  })

  describe('#ceil', function () {
    it('ceil each components of a vector', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.ceil(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
      Math.ceil(-1.0), Math.ceil(14.375), Math.ceil(16.375),
        14.375, 16.375
      ]))
    })
  })

  describe('#floor', function () {
    it('floor each components of a vector', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.floor(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
      Math.floor(-1.0), Math.floor(14.375), Math.floor(16.375),
        14.375, 16.375
      ]))
    })
  })

  describe('#round', function () {
    it('round each components of a vector', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.round(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        Math.round(-1.0), Math.round(14.375), Math.round(16.375),
        14.375, 16.375
      ]))
    })
  })
  describe('#minimum', function () {
    it('clamp components of a vector to a minimum value', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.minimum(
        vectorBuffer, 4,
        3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        3, 14.375, 16.375,
        14.375, 16.375
      ]))
    })
  })

  describe('#maximum', function () {
    it('clamp components of a vector to a maximum value', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.maximum(
        vectorBuffer, 4,
        3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        -1.0, 3, 3,
        14.375, 16.375
      ]))
    })
  })

  describe('#clamp', function () {
    it('clamp components of a vector between two value', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.clamp(
        vectorBuffer, 4,
        1, 10,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        1, 10, 10,
        14.375, 16.375
      ]))
    })
  })

  describe('#clear', function () {
    it('set each components of a vector to zero', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375
      ])

      vector.clear(vectorBuffer, 4)

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8, 9, 10,
        0, 0, 0,
      ]))
    })
  })

  describe('#mix', function () {
    it('mix two vectors', function () {
      const vectorBuffer : Float64Array = new Float64Array([
        7, 8, 9, 10,
        -1.0, 14.375, 16.375,
        -4.25, 1.875, -12.5
      ])

      vector.mix(
        vectorBuffer, 4,
        vectorBuffer, 4 + 3,
        0.33,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float64Array([
        7, 8,
        -2.0725, 10.25, 6.8462499999999995,
        14.375, 16.375,
        -4.25, 1.875, -12.5
      ]))
    })
  })
})