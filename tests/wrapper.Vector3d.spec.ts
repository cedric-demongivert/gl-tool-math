/* eslint-env jest */

import { Vector3d as Vector } from '../src'

describe('vector.Vector3d', function () {
  describe('#create', function () {
    it('allows to create a new vector with initial datas', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.buffer).toEqual(new Float64Array([
        -1.0, 14.375, 16.375
      ]))
    })
  })

  describe('#wrap', function () {
    it('allows to wrap an existing buffer into a new Vector instance', function () {
      const buffer : Float64Array = new Float64Array([
        -1.0, 14.375, 16.375
      ])

      const vector : Vector = Vector.wrap(buffer)

      expect(vector.buffer).toBe(buffer)
    })
  })

  describe('#clone', function () {
    it('allows to clone an existing vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)
      const clone : Vector = Vector.clone(vector)

      expect(clone.buffer).toEqual(new Float64Array([
        -1.0, 14.375, 16.375
      ]))
      expect(clone.buffer).not.toBe(vector.buffer)
    })
  })

  describe('#constructor', function () {
    it('allows create a new empty vector', function () {
      const vector : Vector = new Vector()

      expect(vector.buffer).toEqual(new Float64Array(3))
    })
  })

  
  describe('#x', function () {
    it('allow to get the value of the component at index 0 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.x).toBe(-1.0)
    })

    it('allow to set the value of the component at index 0 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.x = 65

      expect(vector.buffer).toEqual(new Float64Array([
        65, 14.375, 16.375
      ]))
    })
  })

  describe('#r', function () {
    it('allow to get the value of the component at index 0 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.r).toBe(-1.0)
    })

    it('allow to set the value of the component at index 0 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.r = 65

      expect(vector.buffer).toEqual(new Float64Array([
        65, 14.375, 16.375
      ]))
    })
  })
  
  describe('#y', function () {
    it('allow to get the value of the component at index 1 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.y).toBe(14.375)
    })

    it('allow to set the value of the component at index 1 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.y = 65

      expect(vector.buffer).toEqual(new Float64Array([
        -1.0, 65, 16.375
      ]))
    })
  })

  describe('#g', function () {
    it('allow to get the value of the component at index 1 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.g).toBe(14.375)
    })

    it('allow to set the value of the component at index 1 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.g = 65

      expect(vector.buffer).toEqual(new Float64Array([
        -1.0, 65, 16.375
      ]))
    })
  })
  
  describe('#z', function () {
    it('allow to get the value of the component at index 2 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.z).toBe(16.375)
    })

    it('allow to set the value of the component at index 2 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.z = 65

      expect(vector.buffer).toEqual(new Float64Array([
        -1.0, 14.375, 65
      ]))
    })
  })

  describe('#b', function () {
    it('allow to get the value of the component at index 2 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.b).toBe(16.375)
    })

    it('allow to set the value of the component at index 2 of this vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.b = 65

      expect(vector.buffer).toEqual(new Float64Array([
        -1.0, 14.375, 65
      ]))
    })
  })
  

  describe('#buffer', function () {
    it('allows to get the underlying buffer of a vector', function () {
      const buffer : Float64Array = new Float64Array([
        -1.0, 14.375, 16.375
      ])

      const vector : Vector = Vector.wrap(buffer)

      expect(vector.buffer).toBe(buffer)
    })
  })

  describe('#dimension', function () {
    it('return the dimension of the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.dimension).toBe(3)
    })
  })

  describe('#squaredLength', function () {
    it('return the squared length of the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.squaredLength).toBe(
        -1.0 * -1.0 + 14.375 * 14.375 + 16.375 * 16.375
      )
    })
  })

  describe('#length', function () {
    it('return the length of the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      expect(vector.length).toBe(
        Math.sqrt(-1.0 * -1.0 + 14.375 * 14.375 + 16.375 * 16.375)
      )
    })
  })

  describe('#set', function () {
    it('set the entire content of a vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.set(-4.25, 1.875, -12.5)

      expect(vector.buffer).toEqual(new Float64Array([
        -4.25, 1.875, -12.5
      ]))
    })
  })

  describe('#copy', function () {
    it('copy another vector', function () {
      const base : Vector = Vector.create(-1.0, 14.375, 16.375)
      const toCopy : Vector = Vector.create(-4.25, 1.875, -12.5)

      base.copy(toCopy)

      expect(base.buffer).toEqual(new Float64Array([
        -4.25, 1.875, -12.5
      ]))
      expect(base.buffer).not.toBe(toCopy.buffer)
    })
  })

  describe('#add', function () {
    it('add another vector', function () {
      const left : Vector = Vector.create(-1.0, 14.375, 16.375)
      const right : Vector = Vector.create(-4.25, 1.875, -12.5)

      left.add(right)

      expect(left.buffer).toEqual(new Float64Array([
        -5.25, 16.25, 3.875
      ]))
    })
  })

  describe('#subtract', function () {
    it('subtract another vector', function () {
      const left : Vector = Vector.create(-1.0, 14.375, 16.375)
      const right : Vector = Vector.create(-4.25, 1.875, -12.5)

      left.subtract(right)

      expect(left.buffer).toEqual(new Float64Array([
        3.25, 12.5, 28.875
      ]))
    })
  })
  describe('#multiplyWithScalar', function () {
    it('multiply by a scalar', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.multiplyWithScalar(5)

      expect(vector.buffer).toEqual(new Float64Array([
        -5.0, 71.875, 81.875
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('divide by a scalar', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.divideWithScalar(2)

      expect(vector.buffer).toEqual(new Float64Array([
        -0.5, 7.1875, 8.1875
      ]))
    })
  })

  describe('#negate', function () {
    it('negate the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.negate()

      expect(vector.buffer).toEqual(new Float64Array([
        1.0, -14.375, -16.375
      ]))
    })
  })

  describe('#normalize', function () {
    it('normalize the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.normalize()

      expect(vector.buffer).toEqual(new Float64Array([
        -0.04584546040490022, 0.6590284933204407, 0.7507194141302411
      ]))
    })
  })

  describe('#ceil', function () {
    it('it ceil each component of the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.ceil()

      expect(vector.buffer).toEqual(new Float64Array([
      Math.ceil(-1.0), Math.ceil(14.375), Math.ceil(16.375)
      ]))
    })
  })

  describe('#floor', function () {
    it('it floor each component of the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.floor()

      expect(vector.buffer).toEqual(new Float64Array([
      Math.floor(-1.0), Math.floor(14.375), Math.floor(16.375)
      ]))
    })
  })

  describe('#round', function () {
    it('it floor each component of the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.round()

      expect(vector.buffer).toEqual(new Float64Array([
      Math.round(-1.0), Math.round(14.375), Math.round(16.375)
      ]))
    })
  })
  

  describe('#minimum', function () {
    it('it clamp each component of the vector to a minimum', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.minimum(3)

      expect(vector.buffer).toEqual(new Float64Array([
        3, 14.375, 16.375
      ]))
    })
  })

  describe('#maximum', function () {
    it('it clamp each component of the vector to a maximum', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.maximum(3)

      expect(vector.buffer).toEqual(new Float64Array([
        -1.0, 3, 3
      ]))
    })
  })

  describe('#clamp', function () {
    it('it clamp each component of the vector between two values', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)

      vector.clamp(1, 10)

      expect(vector.buffer).toEqual(new Float64Array([
        1, 10, 10
      ]))
    })
  })

  describe('#mix', function () {
    it('mix two vectors', function () {
      const left : Vector = Vector.create(-1.0, 14.375, 16.375)
      const right : Vector = Vector.create(-4.25, 1.875, -12.5)

      left.mix(right, 0.33)

      expect(left.buffer).toEqual(new Float64Array([
        -2.0725, 10.25, 6.8462499999999995
      ]))
    })
  })

  describe('#dot', function () {
    it('compute the dot product of two vectors', function () {
      const left : Vector = Vector.create(-1.0, 14.375, 16.375)
      const right : Vector = Vector.create(-4.25, 1.875, -12.5)

      expect(left.dot(right)).toBe(
        -1.0 * -4.25 + 14.375 * 1.875 + 16.375 * -12.5
      )
    })
  })

  describe('#iterator', function () {
    it('iterate over each component of the vector', function () {
      const vector : Vector = Vector.create(-1.0, 14.375, 16.375)
      const result : number[] = []

      for (const component of vector) {
        result.push(component)
      }


      expect(result).toEqual([
        -1.0, 14.375, 16.375
      ])
    })
  })

  describe('#equals', function () {
    it('check if two vectors are equals', function () {
      const a : Vector = Vector.create(-1.0, 14.375, 16.375)
      const b : Vector = Vector.clone(a)
      const c : Vector = Vector.create(-4.25, 1.875, -12.5)

      expect(a.equals(a)).toBeTruthy()
      expect(a.equals(b)).toBeTruthy()
      expect(a.equals(c)).toBeFalsy()
      expect(b.equals(c)).toBeFalsy()
    })
  })
})