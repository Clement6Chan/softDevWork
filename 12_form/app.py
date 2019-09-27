#Clement Chan
#SoftDev1 pd1
#K12 -- Echo Echo Echo
#2019-09-27

from flask import Flask, render_template, request
app = Flask(__name__)


@app.route("/")
def hello_world():
    print(app)
    return "No hablo queso!"

@app.route("/form1")
def test_tmplt():
    return render_template('form1.html')

@app.route("/auth")
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    print("***DIAG: request.args['username'] ***")
    print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    #return "Waaaa hooo HAAAH"
    return render_template('response.html', ans = request.args['username'])
    


if __name__ == "__main__":
    app.debug = True
    app.run()
