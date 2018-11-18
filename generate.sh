#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

python3 $DIR/generation/generate-vectors.py
python3 $DIR/generation/generate-vectors-tests.py
python3 $DIR/generation/generate-vectors-wrappers.py
python3 $DIR/generation/generate-vectors-wrappers-tests.py
python3 $DIR/generation/generate-matrices.py
python3 $DIR/generation/generate-matrices-tests.py
python3 $DIR/generation/generate-matrices-wrappers.py
python3 $DIR/generation/generate-matrices-wrappers-tests.py
