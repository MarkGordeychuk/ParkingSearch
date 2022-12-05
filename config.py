import os

SPHINX_HOST = os.getenv('SPHINX_HOST', '127.0.0.1')
SPHINX_PORT = int(os.getenv('SPHINX_PORT', 9306))
