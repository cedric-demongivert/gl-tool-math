from .project import ROOT_DIRECTORY
import os

class GenerationResult:
    def __init__ (self, content: str):
        self._content = content

    def is_empty (self) -> bool:
        return self._content.strip() == ''

    def write_as_source (self, file: str):
        fullOutputPath = os.path.abspath(os.path.join(
            ROOT_DIRECTORY, 'src', file
        ))

        print('- writing file "{0}" ...'.format(fullOutputPath))

        with open(fullOutputPath, 'w') as output :
          output.write(self._content)

        print('- file "{0}" wrote.'.format(fullOutputPath))
