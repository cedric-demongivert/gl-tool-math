/* eslint-env jest */

import { vector2f as vector } from '@library'

describe('vector.raw.vector2f', function () {
  describe('#toString', function () {
    it ('allow to print a null vector', function () {
      expect(vector.toString(null, 0)).toBe(
        'vector 2 float null'
      )
    })
  })

  describe('#equals', function () {
    it('test if two vectors of a buffer are equals', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375,
        -1.0, 14.375,
        -4.25, 1.875
      ])

      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4)).toBeTruthy()
      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4 + 2)).toBeTruthy()
      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4 + 2 * 2)).toBeFalsy()
      expect(vector.equals(vectorBuffer, 4 + 2* 2, vectorBuffer, 4 + 2 * 2)).toBeTruthy()
    })
  })

  describe('#copy', function () {
    it('copy a vector from one buffer to another', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.copy(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        -1.0, 14.375,
        -1.0, 14.375
      ]))
    })
  })

  describe('#add', function () {
    it('perform an addition of two vectors', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375,
        -4.25, 1.875
      ])

      vector.add(
        vectorBuffer, 4,
        vectorBuffer, 4 + 2,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        -5.25, 16.25,
        -1.0, 14.375,
        -4.25, 1.875
      ]))
    })
  })

  describe('#subtract', function () {
    it('perform an subtraction of two vectors', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375,
        -4.25, 1.875
      ])

      vector.subtract(
        vectorBuffer, 4,
        vectorBuffer, 4 + 2,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        3.25, 12.5,
        -1.0, 14.375,
        -4.25, 1.875
      ]))
    })
  })

  describe('#dot', function () {
    it('compute the dot product of two vectors', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375,
        -4.25, 1.875
      ])

      expect(vector.dot(
        vectorBuffer, 4,
        vectorBuffer, 4 + 2
      )).toBe(
        -1.0 * -4.25 + 14.375 * 1.875
      )
    })
  })

  describe('#squaredLength', function () {
    it('compute the squared length of a vector', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      expect(vector.squaredLength(
        vectorBuffer, 4
      )).toBe(
        -1.0 * -1.0 + 14.375 * 14.375
      )
    })
  })

  describe('#length', function () {
    it('compute the length of a vector', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      expect(vector.length(
        vectorBuffer, 4
      )).toBe(
        Math.sqrt(
          -1.0 * -1.0 + 14.375 * 14.375
        )
      )
    })
  })

  describe('#set', function () {
    it('allow to set the content of a vector', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.set(
        vectorBuffer, 4,
        -4.25, 1.875
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8, 9, 10,
        -4.25, 1.875
      ]))
    })
  })

  describe('#multiplyWithScalar', function () {
    it('allow to multiply a vector by a scalar', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.multiplyWithScalar(
        vectorBuffer, 4, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        -3.0, 43.125,
        -1.0, 14.375
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('allow to divide a vector by a scalar', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.divideWithScalar(
        vectorBuffer, 4, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        -0.3333333333333333, 4.791666666666667,
        -1.0, 14.375
      ]))
    })
  })

  describe('#negate', function () {
    it('allow to negate a vector', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.negate(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        1.0, -14.375,
        -1.0, 14.375
      ]))
    })
  })
  
  describe('#normalize', function () {
    it('allow to normalize a vector', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.normalize(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        -0.06939750171322034, 0.9975890871275425,
        -1.0, 14.375
      ]))
    })
  })

  describe('#ceil', function () {
    it('ceil each components of a vector', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.ceil(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
      Math.ceil(-1.0), Math.ceil(14.375),
        -1.0, 14.375
      ]))
    })
  })

  describe('#floor', function () {
    it('floor each components of a vector', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.floor(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
      Math.floor(-1.0), Math.floor(14.375),
        -1.0, 14.375
      ]))
    })
  })

  describe('#round', function () {
    it('round each components of a vector', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.round(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        Math.round(-1.0), Math.round(14.375),
        -1.0, 14.375
      ]))
    })
  })
  

  describe('#clockwiseNormal', function () {
    it('compute the clockwise normal', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 5,
        -1.0, 14.375
      ])

      vector.clockwiseNormal(
        vectorBuffer, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        14.375,
        1.0,
        14.375
      ]))
    })
  })

  describe('#counterClockwiseNormal', function () {
    it('compute the counter-clockwise normal', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 5,
        -1.0, 14.375
      ])

      vector.counterClockwiseNormal(
        vectorBuffer, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        -14.375,
        -1.0,
        14.375
      ]))
    })
  })

  describe('#minimum', function () {
    it('clamp components of a vector to a minimum value', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.minimum(
        vectorBuffer, 4,
        3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        3, 14.375,
        -1.0, 14.375
      ]))
    })
  })

  describe('#maximum', function () {
    it('clamp components of a vector to a maximum value', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.maximum(
        vectorBuffer, 4,
        3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        -1.0, 3,
        -1.0, 14.375
      ]))
    })
  })

  describe('#clamp', function () {
    it('clamp components of a vector between two value', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375
      ])

      vector.clamp(
        vectorBuffer, 4,
        1, 10,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        1, 10,
        -1.0, 14.375
      ]))
    })
  })

  describe('#mix', function () {
    it('mix two vectors', function () {
      const vectorBuffer : Float32Array = new Float32Array([
        7, 8, 9, 10,
        -1.0, 14.375,
        -4.25, 1.875
      ])

      vector.mix(
        vectorBuffer, 4,
        vectorBuffer, 4 + 2,
        0.33,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new Float32Array([
        7, 8,
        -2.0725, 10.25,
        -1.0, 14.375,
        -4.25, 1.875
      ]))
    })
  })
})