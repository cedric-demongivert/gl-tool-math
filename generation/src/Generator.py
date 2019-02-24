from jinja2 import Template, Environment, FileSystemLoader
from .project import ROOT_DIRECTORY
from .GenerationResult import GenerationResult
import os

TEMPLATE_LOADER = FileSystemLoader('{0}/templates'.format(ROOT_DIRECTORY))

class Generator :
  def __init__ (self) :
    self._script_environment = Environment(
      block_start_string='/*%',
      block_end_string='%*/',
      variable_start_string='/*$',
      variable_end_string='$*/'
    )
    self._comment_environment = Environment(
      loader=TEMPLATE_LOADER,
      block_start_string='<%',
      block_end_string='%>',
      variable_start_string='<$',
      variable_end_string='$>'
    )
    self._template = None

  def use (self, template) :
    self._template = self._comment_environment.get_template(template)

  def addGlobal (self, name, value) :
    self._script_environment.globals[name] = value
    self._comment_environment.globals[name] = value

  def addFilter (self, name, value) :
    self._script_environment.filters[name] = value
    self._comment_environment.filters[name] = value

  def _makeOutputDirIfNotExists (self, outputPath) :
    outputDir = os.path.dirname(outputPath)

    if not os.path.exists(outputDir) :
      os.makedirs(outputDir)

  def generate_source_directory (self, directory: str):
    full_directory = os.path.abspath(os.path.join(
        ROOT_DIRECTORY, 'src', directory
    ))

    print('- Generating source directory "{0}"...'.format(full_directory))
    if not os.path.exists(full_directory) :
      os.makedirs(full_directory)
      print('- Directory "{0}" generated.'.format(full_directory))
    else:
      print('- Directory "{0}" already generated.'.format(full_directory))

  def generate_template (self, template):
      parameters = template.get_parameters()

      with open(template.get_file(), 'r') as file:
        return GenerationResult(
          self._script_environment.from_string(
            self._comment_environment.from_string(
                file.read()
            ).render(**parameters)
          ).render(**parameters)
        )

  def generate (self, outputPath, **fields) :
    fullOutputPath = os.path.abspath(
      '{0}/src/{1}'.format(ROOT_DIRECTORY, outputPath)
    )

    self._makeOutputDirIfNotExists(fullOutputPath)

    with open(fullOutputPath, 'w') as output :
      output.write(self._script_environment.from_string(
        self._template.render(**fields)
      ).render(**fields))

  def generate_test (self, outputPath, **fields) :
    fullOutputPath = os.path.abspath(
      '{0}/tests/{1}'.format(ROOT_DIRECTORY, outputPath)
    )

    self._makeOutputDirIfNotExists(fullOutputPath)

    with open(fullOutputPath, 'w') as output :
      output.write(self._script_environment.from_string(
        self._template.render(**fields)
      ).render(**fields))
