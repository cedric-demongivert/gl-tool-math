from src import TemplateLoader, Generator, GenerationResult

types = [
    ("f", "Float32Array", "float"),
    ("d", "Float64Array", "double"),
    ("i", "Int32Array", "integer"),
    #"ui": ("Uint32Array", "unsigned integer"),
    #"s": ("Int16Array", "short"),
    #"us": ("Uint16Array", "unsigned short"),
    #"b": ("Int8Array", "byte"),
    #"ub": ("Uint8Array", "unsigned byte")
]

dimensions = [2, 3, 4]

templates = TemplateLoader('./templates/vector').templates('*.ts')

generator = Generator()

for vector_type, vector_buffer_type, vector_type_name in types:
    for vector_dimension in dimensions:
        index = []

        generator.generate_source_directory(
            './vector{0}{1}'.format(vector_dimension, vector_type)
        )

        for template in templates:
            print('- generating template "{0}" ...'.format(template.get_file()))
            template.set_parameters(
                vector_type = vector_type,
                vector_buffer_type = vector_buffer_type,
                vector_type_name = vector_type_name,
                vector_dimension = vector_dimension
            )

            result = generator.generate_template(template)

            print('- template "{0}" generated.'.format(template.get_file()))
            if not result.is_empty():
                index.append(template.get_name()[0:-3])
                result.write_as_source('./vector{0}{1}/{2}'.format(
                    vector_dimension,
                    vector_type,
                    template.get_name()
                ))

        GenerationResult(
            '\r\n'.join([
                'export * from \'./' + name + '\'' for name in index
            ])
        ).write_as_source('./vector{0}{1}/index.ts'.format(
            vector_dimension,
            vector_type
        ))
