"""
Career Compass - Flask Application Entry Point
Enables standard Flask CLI execution: `flask run` or `python app.py`
"""

import sys
import os

# Add current directory to path
sys.path.insert(0, os.path.dirname(__file__))

from server import app, run, PORT

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    run(port)
