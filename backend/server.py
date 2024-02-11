# !pip install flask
# !pip install flask-cors

from flask import Flask, request, render_template
import datetime
import logic
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  

# @app.route("/data")
# def run_gemini():
#     print("IT WORKS")
#     return {
#         "name": "HELLO",
#         "loc": "BYE"
#     }

# @app.route("/data", methods=["POST"])
# def data():
#     data = request.json
#     print(data)
#     # Here you can handle the data received from the React app
#     return "Data received successfully"


@app.route("/", methods=["GET", "POST"])
def data():
    if request.method == "GET":
        x = logic.main()
        print(x)
        return x
    elif request.method == "POST":
        data = request.json
        print(data)
        # Here you can handle the data received from the React app
        return "Data received successfully"







# @app.route("/data", methods=["POST"])
# def data():
#     print("LOOK ", request.method )
#     # if request.method == "GET":
#     #     return "HELLO"
#     if request.method == "POST":
#         data = request.json
#         print(data)
#         # Here you can handle the data received from the React app
#         return "Data received successfully"







# @app.route('/api/query', methods = ['POST'])
# def get_query_from_react():
#     data = request.get_json()
#     print(data)
#     return data


# @app.route('/')
# def hello():
#     return 'Hello, Flask is running!'

if __name__ == "__main__":
    app.run(debug=True)
