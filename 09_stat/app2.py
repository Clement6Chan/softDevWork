from flask import Flask, render_template
app = Flask(__name__)

coll = [0,1,1,2,3,5,8]


@app.route("/")
def hello_world():
    print(__name__)
    return "No hablo queso!"



@app.route("/my_foist_template")
def test_tmplt():
    print(__name__)
    return render_template('model_tmplt.html', foo = "fooooo", collection = coll)
    


if __name__ == "__main__":
    app.debug = True
    app.run()
