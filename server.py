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

ToReturn = ""

@app.route('/Pro', methods=['POST'])
def Pro():
    data = request.get_json()

    if data["MSG"] == "Account+":
        print("Account request, " + str(data))

        if os.path.exists(SaveAccountPath + data["Username"]):
            print("Account request, " + str(data) + ". Already Exsits!")

            ToReturn = "AE"
        else:
            os.mkdir(SaveAccountPath + data["Username"])

            TempJSON = {
                "Username" : data["Username"],
                "Password" : data["Password"],
                "Coin" : 15,
                "Admin" : True # Once released change to False.
            }
            
            open(SaveAccountPath + data["Username"] + "info.json").write(json.dump(TempJSON))
    elif data["MSG"] == "Email":
        PathToUser = SaveAccountPath + data["To"] + "/mail.txt"

        if os.path.exists(PathToUser):
            open(PathToUser, "w").close()
            open(PathToUser, "w").write(data["Context"] + "\n\n" + data["Content"])
        else:
            open(PathToUser, "w").write(data["Context"] + "\n\n" + data["Content"])
    elif data["MSG"] == "Echeck":
        if os.path.exists(SaveAccountPath + data["Username"] + "/mail.txt"):
            ToReturn = {"response" : open(SaveAccountPath + data["Username"] + "/mail.txt").read()}
        else:
            ToReturn = "NE"

if __name__ == '__main__':
    app.run(debug=True, host = "0.0.0.0", port = 2080)