import os

class Template:
    def __init__ (self, file: str):
        self._file = file
        self._parameters = dict()

    def get_name (self) -> str:
        return os.path.basename(self._file)

    def get_file (self) -> str:
        return self._file

    def set_parameters (self, **parameters):
        for key in parameters.keys():
            self.set_parameter(key, parameters[key])

    def set_parameter (self, name: str, value):
        self._parameters[name] = value

    def has_parameter (self, name: str) -> bool:
        return name in self._parameters

    def get_parameters (self):
        return dict(self._parameters)

    def get_parameter (self, name: str):
        return self._parameters[name]

    def get_parameter_count (self) -> int:
        return count(self._parameters)

    def delete_parameter (self, name: str):
        del self._parameters[name]

    def __eq__ (self, other) -> bool:
        if other is not None and isinstance(other, Template):
            if self._file != other.get_file():
                return False

            if count(self._parameters) != other.get_parameter_count():
                return False

            for key in self._parameters.keys():
                if not other.has_parameter(key):
                    return False

                if other.get_parameter(key) != self._parameters[key]:
                    return False
        else:
            return False
