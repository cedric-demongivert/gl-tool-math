/* eslint-env jest */

import { Vector/*$ dimension $*//*$ vector_type $*/ as Vector } from '@library'

describe('vector.Vector/*$ dimension $*//*$ vector_type $*/', function () {
  describe('#create', function () {
    it('allows to create a new vector with initial datas', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ]))
    })
  })

  describe('#wrap', function () {
    it('allows to wrap an existing buffer into a new Vector instance', function () {
      const buffer : /*$ vector_buffer_type $*/ = new /*$ vector_buffer_type $*/([
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      const vector : Vector = Vector.wrap(buffer)

      expect(vector.buffer).toBe(buffer)
    })
  })

  describe('#clone', function () {
    it('allows to clone an existing vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)
      const clone : Vector = Vector.clone(vector)

      expect(clone.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ]))
      expect(clone.buffer).not.toBe(vector.buffer)
    })
  })

  describe('#constructor', function () {
    it('allows create a new empty vector', function () {
      const vector : Vector = new Vector()

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/(/*$ dimension $*/))
    })
  })

  /*% for index in range(dimension) %*/
  describe('#/*$ components[index] $*/', function () {
    it('allow to get the value of the component at index /*$ index $*/ of this vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      expect(vector./*$ components[index] $*/).toBe(/*$ random_vector_cell(0, index) $*/)
    })

    it('allow to set the value of the component at index /*$ index $*/ of this vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector./*$ components[index] $*/ = 65

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for cell in range(dimension) %*//*$ random_vector_cell(0, cell) if cell != index else 65 $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })/*% if dimension == 3 or dimension == 4 %*/

  describe('#/*$ color_components[index] $*/', function () {
    it('allow to get the value of the component at index /*$ index $*/ of this vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      expect(vector./*$ color_components[index] $*/).toBe(/*$ random_vector_cell(0, index) $*/)
    })

    it('allow to set the value of the component at index /*$ index $*/ of this vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector./*$ color_components[index] $*/ = 65

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for cell in range(dimension) %*//*$ random_vector_cell(0, cell) if cell != index else 65 $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })
  /*% endif %*//*% endfor %*/

  describe('#buffer', function () {
    it('allows to get the underlying buffer of a vector', function () {
      const buffer /*$ vector_buffer_type $*/ = new /*$ vector_buffer_type $*/([
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      const vector : Vector = Vector.wrap(buffer)

      expect(vector.buffer).toBe(buffer)
    })
  })

  describe('#dimension', function () {
    it('return the dimension of the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      expect(vector.dimension).toBe(/*$ dimension $*/)
    })
  })

  describe('#squaredLength', function () {
    it('return the squared length of the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      expect(vector.squaredLength).toBe(
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) $*/ * /*$ random_vector_cell(0, index) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
      )
    })
  })

  describe('#length', function () {
    it('return the length of the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      expect(vector.length).toBe(
        Math.sqrt(/*% for index in range(dimension) %*//*$ random_vector_cell(0, index) $*/ * /*$ random_vector_cell(0, index) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/)
      )
    })
  })

  describe('#set', function () {
    it('set the entire content of a vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.set(/*$ ', '.join(to_tokens(random_vector(1))) $*/)

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ]))
    })
  })

  describe('#copy', function () {
    it('copy another vector', function () {
      const base : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)
      const toCopy : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(1))) $*/)

      base.copy(toCopy)

      expect(base.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ]))
      expect(base.buffer).not.toBe(toCopy.buffer)
    })
  })

  describe('#add', function () {
    it('add another vector', function () {
      const left : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)
      const right : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(1))) $*/)

      left.add(right)

      expect(left.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) + random_vector_cell(1, index) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#subtract', function () {
    it('subtract another vector', function () {
      const left : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)
      const right : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(1))) $*/)

      left.subtract(right)

      expect(left.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) - random_vector_cell(1, index) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })/*% if dimension == 2 %*/

  describe('#clockwiseNormal', function () {
    it('compute the clockwise normal', function () {
      const left : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      left.clockwiseNormal()

      expect(left.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*$ random_vector_cell(0, 1) $*/,
        /*$ -random_vector_cell(0, 0) $*/
      ]))
    })
  })

  describe('#counterClockwiseNormal', function () {
    it('compute the counter-clockwise normal', function () {
      const left : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      left.counterClockwiseNormal()

      expect(left.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*$ -random_vector_cell(0, 1) $*/,
        /*$ random_vector_cell(0, 0) $*/
      ]))
    })
  })
  /*% endif %*/
  describe('#multiplyWithScalar', function () {
    it('multiply by a scalar', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.multiplyWithScalar(5)

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) * 5 $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('divide by a scalar', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.divideWithScalar(2)

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) / 2 $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#negate', function () {
    it('negate the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.negate()

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ - random_vector_cell(0, index) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })/*% if vector_type in ['d', 'f'] %*/

  describe('#normalize', function () {
    it('normalize the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.normalize()

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) / compute_length(random_vector(0)) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#ceil', function () {
    it('it ceil each component of the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.ceil()

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
      /*% for index in range(dimension) %*/Math.ceil(/*$ random_vector_cell(0, index) $*/)/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#floor', function () {
    it('it floor each component of the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.floor()

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
      /*% for index in range(dimension) %*/Math.floor(/*$ random_vector_cell(0, index) $*/)/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#round', function () {
    it('it floor each component of the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.round()

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
      /*% for index in range(dimension) %*/Math.round(/*$ random_vector_cell(0, index) $*/)/*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })
  /*% endif %*/

  describe('#minimum', function () {
    it('it clamp each component of the vector to a minimum', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.minimum(3)

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ 3 if random_vector_cell(0, index) < 3 else random_vector_cell(0, index) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#maximum', function () {
    it('it clamp each component of the vector to a maximum', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.maximum(3)

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ 3 if random_vector_cell(0, index) > 3 else random_vector_cell(0, index) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#clamp', function () {
    it('it clamp each component of the vector between two values', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)

      vector.clamp(1, 10)

      expect(vector.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ 1 if random_vector_cell(0, index) < 1 else 10 if random_vector_cell(0, index) > 10 else random_vector_cell(0, index) $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#mix', function () {
    it('mix two vectors', function () {
      const left : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)
      const right : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(1))) $*/)

      left.mix(right, 0.33)

      expect(left.buffer).toEqual(new /*$ vector_buffer_type $*/([
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) + (random_vector_cell(1, index) - random_vector_cell(0, index)) * 0.33 $*//*% if loop.nextitem is defined %*/, /*% endif %*//*% endfor %*/
      ]))
    })
  })

  describe('#dot', function () {
    it('compute the dot product of two vectors', function () {
      const left : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)
      const right : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(1))) $*/)

      expect(left.dot(right)).toBe(
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) $*/ * /*$ random_vector_cell(1, index) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
      )
    })
  })

  describe('#iterator', function () {
    it('iterate over each component of the vector', function () {
      const vector : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)
      const result : number[] = []

      for (const component of vector) {
        result.push(component)
      }


      expect(result).toEqual([
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])
    })
  })

  describe('#equals', function () {
    it('check if two vectors are equals', function () {
      const a : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(0))) $*/)
      const b : Vector = Vector.clone(a)
      const c : Vector = Vector.create(/*$ ', '.join(to_tokens(random_vector(1))) $*/)

      expect(a.equals(a)).toBeTruthy()
      expect(a.equals(b)).toBeTruthy()
      expect(a.equals(c)).toBeFalsy()
      expect(b.equals(c)).toBeFalsy()
    })
  })
})
