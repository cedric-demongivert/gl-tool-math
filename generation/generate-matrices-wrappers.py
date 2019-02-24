from src import Generator
from src import cells
from src import index
from src import offset
from src import print_rows

generator = Generator()

def matrix_elements (list, label, width, height) :
  for row in range(height) :
    for column in range(width) :
      list.append(label + str(column) + str(row))

  return list

generator.addFilter('matrix_elements', matrix_elements)

def sub_determinant_matrix (values, order, index) :
  return [values[row * order + column] for row in range(1, order) for column in range(order) if column != index]

generator.addFilter('sub_determinant_matrix', sub_determinant_matrix)

def covariant_matrix (values, column, row, order) :
  return [values[irow * order + icolumn] for irow in range(order) for icolumn in range(order) if icolumn != column and irow != row]

generator.addFilter('covariant_matrix', covariant_matrix)

generator.use('MatrixWrapper.js')

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
        'src/Matrix{0}{1}.js'.format(dimension, key)
      )
    )

    generator.generate(
      'Matrix{0}{1}.js'.format(dimension, key),
      matrix_type = key,
      matrix_type_name = name,
      matrix_elements = matrix_elements,
      cells = lambda : cells(dimension, dimension),
      offset = lambda column, row : offset(column, row, dimension),
      columns = dimension,
      rows = dimension,
      matrix_buffer_type = buffer,
      components = ['x', 'y', 'z', 'w'],
      print_rows = print_rows
    )
