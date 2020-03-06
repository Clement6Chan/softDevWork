from flask import Flask, render_template

app = Flask(__name__)

x = "Id, title, season num, before date, desc"

@app.route("/")
def test_tmplt():
    return render_template("base.html")

@app.route("/s")
def hello_world():
    return "No hablo queso!"





if __name__ == "__main__":
    app.debug = True
    app.run()





