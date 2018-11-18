#!bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

python $DIR/generation/generate-vectors.py
python $DIR/generation/generate-vectors-tests.py
python $DIR/generation/generate-vectors-wrappers.py
python $DIR/generation/generate-vectors-wrappers-tests.py
python $DIR/generation/generate-matrices.py
python $DIR/generation/generate-matrices-tests.py
python $DIR/generation/generate-matrices-wrappers.py
python $DIR/generation/generate-matrices-wrappers-tests.py
