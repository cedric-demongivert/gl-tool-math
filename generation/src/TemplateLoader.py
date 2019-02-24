import os
import os.path as paths
import glob
from .Template import Template


class TemplateLoader:
    def __init__ (self, directory: str):
        self._directory = paths.abspath(directory).rstrip(os.sep)

    def templates (self, pattern: str):
        result = list()

        if paths.exists(self._directory) :
            for template in glob.glob(self._directory + os.sep + pattern):
                result.append(
                    Template(paths.join(self._directory, template))
                )

        return result
