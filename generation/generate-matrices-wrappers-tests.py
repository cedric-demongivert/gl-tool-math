from src import Generator
from src import cells
from src import index
from src import offset
from src import print_rows
from src import identity_matrix
from src import random_matrix
from src import random_matrix_cell
from src import transpose

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

generator.use('matrix.MatrixWrapper.spec.js')

for key, (buffer, name) in types.items() :
  for dimension in dimensions :
    print (
      '- generating {0}...'.format(
        'tests/matrix.Matrix{0}{1}.spec.js'.format(dimension, key)
      )
    )
    generator.generate_test(
      'matrix.Matrix{0}{1}.spec.js'.format(dimension, key),
      primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
      matrix_type = key,
      matrix_type_name = name,
      identity_matrix = identity_matrix(dimension, dimension),
      index = index,
      print_rows = print_rows,
      cells = lambda : cells(dimension, dimension),
      offset = lambda column, row : offset(column, row, dimension),
      random_matrix = lambda index : random_matrix(index, dimension, dimension, key),
      random_matrix_cell = lambda index, column, row : random_matrix_cell(index, column, row, dimension, dimension, key),
      columns = dimension,
      rows = dimension,
      transpose = transpose,
      matrix_buffer_type = buffer,
      components = ['x', 'y', 'z', 'w']
    )
