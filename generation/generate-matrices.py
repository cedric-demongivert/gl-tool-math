from src import TemplateLoader, Generator, GenerationResult
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

def determinant (order, values) :
  if order == 2 :
    return {
      'adds': [[values[0], values[3]]],
      'subs': [[values[1],  values[2]]]
    }
  else :
    result = {
      'adds': [],
      'subs': []
    }

    for index in range(order) :
      child_result = determinant(order - 1, sub_determinant_matrix(values, order, index))
      if index % 2 == 0 :
        for entry in child_result['adds'] :
          result['adds'].append(entry + [values[index]])
        for entry in child_result['subs'] :
          result['subs'].append(entry + [values[index]])
      else :
        for entry in child_result['adds'] :
          result['subs'].append(entry + [values[index]])
        for entry in child_result['subs'] :
          result['adds'].append(entry + [values[index]])

    return result

def determinant_to_string (det) :
  return ' + '.join([' * '.join(entries) for entries in det['adds']]) + ' - ' + ' - '.join([' * '.join(entries) for entries in det['subs']])

types = {
  ("f", "Float32Array", "float"),
  ("d", "Float64Array", "double"),
  ("i", "Int32Array", "integer"),
  #"ui": ("Uint32Array", "unsigned integer"),
  #"s": ("Int16Array", "short"),
  #"us": ("Uint16Array", "unsigned short"),
  #"b": ("Int8Array", "byte"),
  #"ub": ("Uint8Array", "unsigned byte")
}

dimensions = [2, 3, 4]

templates = TemplateLoader('./templates/matrix').templates('*.js')

for matrix_type, matrix_buffer_type, matrix_type_name in types:
    for matrix_dimension in dimensions:
        index_elements = []

        generator.generate_source_directory(
            './matrix{0}{1}'.format(matrix_dimension, matrix_type)
        )

        for template in templates:
            print('- generating template "{0}" ...'.format(template.get_file()))
            template.set_parameters(
                matrix_type = matrix_type,
                matrix_type_name = matrix_type_name,
                index = index,
                cells = lambda : cells(matrix_dimension, matrix_dimension),
                offset = lambda column, row : offset(column, row, matrix_dimension),
                columns = matrix_dimension,
                rows = matrix_dimension,
                matrix_buffer_type = matrix_buffer_type,
                determinant = determinant,
                determinant_to_string = determinant_to_string,
                components = ['x', 'y', 'z', 'w'],
                print_rows = print_rows
            )

            result = generator.generate_template(template)

            print('- template "{0}" generated.'.format(template.get_file()))
            if not result.is_empty():
                index_elements.append(template.get_name()[0:-3])
                result.write_as_source('./matrix{0}{1}/{2}'.format(
                    matrix_dimension,
                    matrix_type,
                    template.get_name()
                ))

        GenerationResult(
            '\n\r'.join([
                'export * from \'./' + name + '.js\'' for name in index_elements
            ])
        ).write_as_source('./matrix{0}{1}/index.js'.format(
            matrix_dimension,
            matrix_type
        ))
