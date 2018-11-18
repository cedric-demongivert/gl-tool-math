@echo off

python %~dp0/generation/generate-vectors.py
python %~dp0/generation/generate-vectors-tests.py
python %~dp0/generation/generate-vectors-wrappers.py
python %~dp0/generation/generate-vectors-wrappers-tests.py
python %~dp0/generation/generate-matrices.py
python %~dp0/generation/generate-matrices-tests.py
python %~dp0/generation/generate-matrices-wrappers.py
python %~dp0/generation/generate-matrices-wrappers-tests.py
