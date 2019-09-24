from flask import Flask, render_template
import random
app = Flask(__name__)

def randomizer(dictionary):
    threshold = float(random.randint(1,100))
    for item in dictionary:
        value = dictionary[item][0]
        if (threshold - value <= 0):
            return item
        else:
            threshold = threshold - value
            

def genDict():
    dictionary = {}
    csv = open("jobs.csv","r")
    data = open("jobs.csv").read().split("\n")
    data = data[1:len(data)-2]
    for item in data:
        input = item.rsplit(",",1)
        dictionary[input[0]] = float(input[1])
        csv.close()
    return dictionary



@app.route("/")
def hello_world():
    print(__name__)
    return "No hablo queso!"



@app.route("/occupyflaskst")
def test_tmplt():
    print(__name__)
    dictionary = genDict();
    return render_template('model_tmplt.html', foo = "fooooo", collection = dictionary)

    






if __name__ == "__main__":
    app.debug = True
    app.run()
