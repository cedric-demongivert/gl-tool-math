/* eslint-env jest */

import { vector/*$ dimension $*//*$ vector_type $*/ as vector } from '@library/vector/raw'

describe('vector.raw.vector/*$ dimension $*//*$ vector_type $*/', function () {
  describe('#toString', function () {
    it ('allow to print a null vector', function () {
      expect(vector.toString(null, 0)).toBe(
        'vector /*$ dimension $*/ /*$ vector_type_name $*/ null'
      )
    })
  })

  describe('#equals', function () {
    it('test if two vectors of a buffer are equals', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ])

      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4)).toBeTruthy()
      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4 + /*$ dimension $*/)).toBeTruthy()
      expect(vector.equals(vectorBuffer, 4, vectorBuffer, 4 + 2 * /*$ dimension $*/)).toBeFalsy()
      expect(vector.equals(vectorBuffer, 4 + 2* /*$ dimension $*/, vectorBuffer, 4 + 2 * /*$ dimension $*/)).toBeTruthy()
    })
  })

  describe('#copy', function () {
    it('copy a vector from one buffer to another', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.copy(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/,
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#add', function () {
    it('perform an addition of two vectors', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ])

      vector.add(
        vectorBuffer, 4,
        vectorBuffer, 4 + /*$ dimension $*/,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) + random_vector_cell(1, index) $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ]))
    })
  })

  describe('#subtract', function () {
    it('perform an subtraction of two vectors', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ])

      vector.subtract(
        vectorBuffer, 4,
        vectorBuffer, 4 + /*$ dimension $*/,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) - random_vector_cell(1, index) $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ]))
    })
  })

  describe('#dot', function () {
    it('compute the dot product of two vectors', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ])

      expect(vector.dot(
        vectorBuffer, 4,
        vectorBuffer, 4 + /*$ dimension $*/
      )).toBe(
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) $*/ * /*$ random_vector_cell(1, index) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
      )
    })
  })

  describe('#squaredLength', function () {
    it('compute the squared length of a vector', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      expect(vector.squaredLength(
        vectorBuffer, 4
      )).toBe(
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) $*/ * /*$ random_vector_cell(0, index) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
      )
    })
  })

  describe('#length', function () {
    it('compute the length of a vector', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      expect(vector.length(
        vectorBuffer, 4
      )).toBe(
        Math.sqrt(
          /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) $*/ * /*$ random_vector_cell(0, index) $*//*% if loop.nextitem is defined %*/ + /*% endif %*//*% endfor %*/
        )
      )
    })
  })

  describe('#set', function () {
    it('allow to set the content of a vector', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.set(
        vectorBuffer, 4,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ]))
    })
  })

  describe('#multiplyWithScalar', function () {
    it('allow to multiply a vector by a scalar', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.multiplyWithScalar(
        vectorBuffer, 4, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) * 3 $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#divideWithScalar', function () {
    it('allow to divide a vector by a scalar', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.divideWithScalar(
        vectorBuffer, 4, 3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) / 3 $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#negate', function () {
    it('allow to negate a vector', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.negate(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ - random_vector_cell(0, index) $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })
  /*% if vector_type in ['d', 'f'] %*/
  describe('#normalize', function () {
    it('allow to normalize a vector', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.normalize(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) / compute_length(random_vector(0)) $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#ceil', function () {
    it('ceil each components of a vector', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.ceil(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
      /*% for index in range(dimension) %*/Math.ceil(/*$ random_vector_cell(0, index) $*/),/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#floor', function () {
    it('floor each components of a vector', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.floor(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
      /*% for index in range(dimension) %*/Math.floor(/*$ random_vector_cell(0, index) $*/),/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#round', function () {
    it('round each components of a vector', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.round(
        vectorBuffer, 4,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*/Math.round(/*$ random_vector_cell(0, index) $*/),/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })
  /*% endif %*/
  describe('#minimum', function () {
    it('clamp components of a vector to a minimum value', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.minimum(
        vectorBuffer, 4,
        3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ 3 if random_vector_cell(0, index) < 3 else random_vector_cell(0, index) $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#maximum', function () {
    it('clamp components of a vector to a maximum value', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.maximum(
        vectorBuffer, 4,
        3,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ 3 if random_vector_cell(0, index) > 3 else random_vector_cell(0, index) $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#clamp', function () {
    it('clamp components of a vector between two value', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/
      ])

      vector.clamp(
        vectorBuffer, 4,
        1, 10,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ 1 if random_vector_cell(0, index) < 1 else 10 if random_vector_cell(0, index) > 10 else random_vector_cell(0, index) $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/
      ]))
    })
  })

  describe('#mix', function () {
    it('mix two vectors', function () {
      const vectorBuffer = new /*$ vector_buffer_type $*/([
        7, 8, 9, 10,
        /*$ ', '.join(to_tokens(random_vector(0))) $*/,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ])

      vector.mix(
        vectorBuffer, 4,
        vectorBuffer, 4 + /*$ dimension $*/,
        0.33,
        vectorBuffer, 2
      )

      expect(vectorBuffer).toEqual(new /*$ vector_buffer_type $*/([
        7, 8,
        /*% for index in range(dimension) %*//*$ random_vector_cell(0, index) + (random_vector_cell(1, index) - random_vector_cell(0, index)) * 0.33 $*/,/*% if loop.nextitem is defined %*/ /*% endif %*//*% endfor %*/
        /*$ random_vector_cell(0, dimension - 2) $*/, /*$ random_vector_cell(0, dimension - 1) $*/,
        /*$ ', '.join(to_tokens(random_vector(1))) $*/
      ]))
    })
  })
})
