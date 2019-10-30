from src import Generator

from jinja2 import Template
import os

generator = Generator()

generator.use('VectorWrapper.ts')

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

for key, (buffer, name) in types.items() :
  for dimension in dimensions :
    print (
      '- generating {0}...'.format(
        'src/Vector{0}{1}.ts'.format(dimension, key)
      )
    )

    generator.generate(
      'Vector{0}{1}.ts'.format(dimension, key),
      vector_type = key,
      vector_type_name = name,
      vector_dimension = dimension,
      vector_buffer_type = buffer,
      components = ['x', 'y', 'z', 'w'],
      color_components = ['r', 'g', 'b', 'a']
    )
