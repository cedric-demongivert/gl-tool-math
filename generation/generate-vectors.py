from jinja2 import Template
import os

if not os.path.exists("./src/vector/raw"):
  os.makedirs("./src/vector/raw")

with open('./templates/vector.js', 'r') as template_file :
  template = Template(template_file.read())

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
      with open('./src/vector/raw/vector{0}{1}.js'.format(dimension, key), 'w') as output :
        print (
          '- generating {0}...'.format(
            'src/vector/raw/vector{0}{1}.js'.format(dimension, key)
          )
        )
        output.write(template.render(
          vector_type = key,
          vector_type_name = name,
          vector_dimension = dimension,
          vector_buffer_type = buffer,
          components = ['x', 'y', 'z', 'w']
        ))

  index = []

  for key, (buffer, name) in types.items() :
    for dimension in dimensions :
      index.append("import * as vector{0}{1} from './vector{0}{1}'".format(dimension, key))

  index.append("")

  for key, (buffer, name) in types.items() :
    for dimension in dimensions :
      index.append("export {0} vector{1}{2} {3}".format('{', dimension, key, '}'))

  with open('./src/vector/raw/index.js', 'w') as output :
    output.write('\n\r'.join(index))
