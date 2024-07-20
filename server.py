# app.py

from flask import Flask, request, jsonify
from flask import render_template
import json
import os

# Imports CORS

from flask_cors import CORS

# Runs cors

app = Flask(__name__)
CORS(app)

SaveAccountPath = "Users/"

@app.route('/Pro', methods=['POST'])
def Pro():
    data = request.get_json()

    if data["MSG"] == "Email":
        PathToUser = SaveAccountPath + data["To"] + "/mail.txt"

        if os.path.exists(PathToUser):
            open(PathToUser, "w").close()
            open(PathToUser, "w").write(data["Context"] + "\n\n" + data["Content"])
        else:
            open(PathToUser, "w").write(data["Context"] + "\n\n" + data["Content"])


if __name__ == '__main__':
    app.run(debug=True, host = "0.0.0.0", port = 2080)