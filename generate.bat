@echo off

mkdir %~dp0/tests
python3 %~dp0/generation/generate-vectors.py
python3 %~dp0/generation/generate-vectors-tests.py
python3 %~dp0/generation/generate-vectors-wrappers.py
python3 %~dp0/generation/generate-vectors-wrappers-tests.py
python3 %~dp0/generation/generate-matrices.py
python3 %~dp0/generation/generate-matrices-tests.py
python3 %~dp0/generation/generate-matrices-wrappers.py
python3 %~dp0/generation/generate-matrices-wrappers-tests.py
