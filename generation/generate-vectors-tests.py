from src import Generator
from src import random_vector
from src import random_vector_cell
import math

generator = Generator()

types = {
  "f": ("Float32Array", "float"),
  "d": ("Float64Array", "double"),
  "i": ("Int32Array", "integer"),
  #"ui": ("Uint32Array", "unsigned integer"),
  #"s": ("Int16Array", "short"),
  #"us": ("Uint16Array", "unsigned short"),
  #"b": ("Int8Array", "byte"),
  #"ub": ("Uint8Array", "unsigned byte")
}

dimensions = [2, 3, 4]

generator.use('vector.raw.vector.spec.ts')

for key, (buffer, name) in types.items() :
  for dimension in dimensions :
    print (
      '- generating {0}...'.format(
        'tests/vector{0}{1}.spec.ts'.format(dimension, key)
      )
    )
    generator.generate_test(
      'vector{0}{1}.spec.ts'.format(dimension, key),
      vector_type = key,
      vector_type_name = name,
      dimension = dimension,
      to_tokens = lambda values : [str(x) for x in values],
      compute_length = lambda values : math.sqrt(sum([ x * x for x in values ])),
      vector_buffer_type = buffer,
      random_vector = lambda index : random_vector(index, dimension, key),
      random_vector_cell = lambda index, cell : random_vector_cell(index, dimension, key, cell),
      components = ['x', 'y', 'z', 'w'],
      color_components = ['r', 'g', 'b', 'a']
    )
