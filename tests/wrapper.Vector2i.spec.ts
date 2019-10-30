/* eslint-env jest */

import { Vector2i as Vector } from '../src'

describe('vector.Vector2i', function () {
  describe('#create', function () {
    it('allows to create a new vector with initial datas', function () {
      const vector : Vector = Vector.create(-2, -18)

      expect(vector.buffer).toEqual(new Int32Array([
        -2, -18
      ]))
    })
  })

  describe('#wrap', function () {
    it('allows to wrap an existing buffer into a new Vector instance', function () {
      const buffer : Int32Array = new Int32Array([
        -2, -18
      ])

      const vector : Vector = Vector.wrap(buffer)

      expect(vector.buffer).toBe(buffer)
    })
  })

  describe('#clone', function () {
    it('allows to clone an existing vector', function () {
      const vector : Vector = Vector.create(-2, -18)
      const clone : Vector = Vector.clone(vector)

      expect(clone.buffer).toEqual(new Int32Array([
        -2, -18
      ]))
      expect(clone.buffer).not.toBe(vector.buffer)
    })
  })

  describe('#constructor', function () {
    it('allows create a new empty vector', function () {
      const vector : Vector = new Vector()

      expect(vector.buffer).toEqual(new Int32Array(2))
    })
  })

  
  describe('#x', function () {
    it('allow to get the value of the component at index 0 of this vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      expect(vector.x).toBe(-2)
    })

    it('allow to set the value of the component at index 0 of this vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.x = 65

      expect(vector.buffer).toEqual(new Int32Array([
        65, -18
      ]))
    })
  })
  describe('#y', function () {
    it('allow to get the value of the component at index 1 of this vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      expect(vector.y).toBe(-18)
    })

    it('allow to set the value of the component at index 1 of this vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.y = 65

      expect(vector.buffer).toEqual(new Int32Array([
        -2, 65
      ]))
    })
  })

  describe('#buffer', function () {
    it('allows to get the underlying buffer of a vector', function () {
      const buffer : Int32Array = new Int32Array([
        -2, -18
      ])

      const vector : Vector = Vector.wrap(buffer)

      expect(vector.buffer).toBe(buffer)
    })
  })

  describe('#dimension', function () {
    it('return the dimension of the vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      expect(vector.dimension).toBe(2)
    })
  })

  describe('#squaredLength', function () {
    it('return the squared length of the vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      expect(vector.squaredLength).toBe(
        -2 * -2 + -18 * -18
      )
    })
  })

  describe('#length', function () {
    it('return the length of the vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      expect(vector.length).toBe(
        Math.sqrt(-2 * -2 + -18 * -18)
      )
    })
  })

  describe('#set', function () {
    it('set the entire content of a vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.set(-6, 8)

      expect(vector.buffer).toEqual(new Int32Array([
        -6, 8
      ]))
    })
  })

  describe('#copy', function () {
    it('copy another vector', function () {
      const base : Vector = Vector.create(-2, -18)
      const toCopy : Vector = Vector.create(-6, 8)

      base.copy(toCopy)

      expect(base.buffer).toEqual(new Int32Array([
        -6, 8
      ]))
      expect(base.buffer).not.toBe(toCopy.buffer)
    })
  })

  describe('#add', function () {
    it('add another vector', function () {
      const left : Vector = Vector.create(-2, -18)
      const right : Vector = Vector.create(-6, 8)

      left.add(right)

      expect(left.buffer).toEqual(new Int32Array([
        -8, -10
      ]))
    })
  })

  describe('#subtract', function () {
    it('subtract another vector', function () {
      const left : Vector = Vector.create(-2, -18)
      const right : Vector = Vector.create(-6, 8)

      left.subtract(right)

      expect(left.buffer).toEqual(new Int32Array([
        4, -26
      ]))
    })
  })

  describe('#clockwiseNormal', function () {
    it('compute the clockwise normal', function () {
      const left : Vector = Vector.create(-2, -18)

      left.clockwiseNormal()

      expect(left.buffer).toEqual(new Int32Array([
        -18,
        2
      ]))
    })
  })

  describe('#counterClockwiseNormal', function () {
    it('compute the counter-clockwise normal', function () {
      const left : Vector = Vector.create(-2, -18)

      left.counterClockwiseNormal()

      expect(left.buffer).toEqual(new Int32Array([
        18,
        -2
      ]))
    })
  })
  
  describe('#multiplyWithScalar', function () {
    it('multiply by a scalar', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.multiplyWithScalar(5)

      expect(vector.buffer).toEqual(new Int32Array([
        -10, -90
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('divide by a scalar', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.divideWithScalar(2)

      expect(vector.buffer).toEqual(new Int32Array([
        -1.0, -9.0
      ]))
    })
  })

  describe('#negate', function () {
    it('negate the vector', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.negate()

      expect(vector.buffer).toEqual(new Int32Array([
        2, 18
      ]))
    })
  })

  describe('#minimum', function () {
    it('it clamp each component of the vector to a minimum', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.minimum(3)

      expect(vector.buffer).toEqual(new Int32Array([
        3, 3
      ]))
    })
  })

  describe('#maximum', function () {
    it('it clamp each component of the vector to a maximum', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.maximum(3)

      expect(vector.buffer).toEqual(new Int32Array([
        -2, -18
      ]))
    })
  })

  describe('#clamp', function () {
    it('it clamp each component of the vector between two values', function () {
      const vector : Vector = Vector.create(-2, -18)

      vector.clamp(1, 10)

      expect(vector.buffer).toEqual(new Int32Array([
        1, 1
      ]))
    })
  })

  describe('#mix', function () {
    it('mix two vectors', function () {
      const left : Vector = Vector.create(-2, -18)
      const right : Vector = Vector.create(-6, 8)

      left.mix(right, 0.33)

      expect(left.buffer).toEqual(new Int32Array([
        -3.3200000000000003, -9.42
      ]))
    })
  })

  describe('#dot', function () {
    it('compute the dot product of two vectors', function () {
      const left : Vector = Vector.create(-2, -18)
      const right : Vector = Vector.create(-6, 8)

      expect(left.dot(right)).toBe(
        -2 * -6 + -18 * 8
      )
    })
  })

  describe('#iterator', function () {
    it('iterate over each component of the vector', function () {
      const vector : Vector = Vector.create(-2, -18)
      const result : number[] = []

      for (const component of vector) {
        result.push(component)
      }


      expect(result).toEqual([
        -2, -18
      ])
    })
  })

  describe('#equals', function () {
    it('check if two vectors are equals', function () {
      const a : Vector = Vector.create(-2, -18)
      const b : Vector = Vector.clone(a)
      const c : Vector = Vector.create(-6, 8)

      expect(a.equals(a)).toBeTruthy()
      expect(a.equals(b)).toBeTruthy()
      expect(a.equals(c)).toBeFalsy()
      expect(b.equals(c)).toBeFalsy()
    })
  })
})