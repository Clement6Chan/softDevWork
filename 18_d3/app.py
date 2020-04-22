# Clement Chan
# SoftDev pd1
# K18 -- Come Up For Air
# 2020-04-21

import csv
from flask import Flask, render_template

app = Flask(__name__)

data = []
count = []

monthConversion = {
    '01': "JANUARY",
    '02': "FEBRUARY",
    '03': "MARCH",
    '04': "APRIL",
    '05': "MAY",
    '06': "JUNE",
    '07': "JULY",
    '08': "AUGUST",
    '09': "SEPTEMBER",
    '10': "OCTOBER",
    '11': "NOVEMBER",
    '12': "DECEMBER",
}
for i in range(9):
    count.append([{}, {}, {}, {}, {}, {}])


def countData():
    file = open('./static/shootings.csv')
    reader = csv.reader(file)
    for row in reader:
        yearIDX = int(row[0][2:4]) - 10
        # months
        countItem(row[0][5:7], 0, yearIDX)
        # boroughs
        countItem(row[1], 1, yearIDX)
        # perp age
        countItem(row[2], 2, yearIDX)
        # perp race
        countItem(row[3], 3, yearIDX)
        # victim age
        countItem(row[4], 4, yearIDX)
        # victim race
        countItem(row[5], 5, yearIDX)


def countItem(item, idx, year):
    if item == 'ASIAN / PACIFIC ISLANDER':
        item = 'ASIAN'
    if item not in count[year][idx].keys():
        count[year][idx][item] = 1
    else:
        count[year][idx][item] += 1


countData()
print(count)

for year in count:
    sampleYear = [
        [{'name': 'JANUARY', 'value': 0}, {'name': 'FEBRUARY', 'value': 0}, {'name': 'MARCH', 'value': 0},
         {'name': 'APRIL', 'value': 0}, {'name': 'MAY', 'value': 0}, {'name': 'JUNE', 'value': 0},
         {'name': 'JULY', 'value': 0}, {'name': 'AUGUST', 'value': 0}, {'name': 'SEPTEMBER', 'value': 0},
         {'name': 'OCTOBER', 'value': 0}, {'name': 'NOVEMBER', 'value': 0}, {'name': 'DECEMBER', 'value': 0}],

        [{'name': 'BROOKLYN', 'value': 0}, {'name': 'QUEENS', 'value': 0}, {'name': 'MANHATTAN', 'value': 0},
         {'name': 'BRONX', 'value': 0}, {'name': 'STATEN ISLAND', 'value': 0}],

        [{'name': '<18', 'value': 0}, {'name': '18-24', 'value': 0}, {'name': '25-44', 'value': 0},
         {'name': '45-64', 'value': 0}, {'name': '65+', 'value': 0}, {'name': 'UNKNOWN', 'value': 0}],

        [{'name': 'WHITE', 'value': 0}, {'name': 'BLACK', 'value': 0}, {'name': 'WHITE HISPANIC', 'value': 0},
         {'name': 'BLACK HISPANIC', 'value': 0}, {'name': 'ASIAN', 'value': 0},
         {'name': 'UNKNOWN', 'value': 0}],

        [{'name': '<18', 'value': 0}, {'name': '18-24', 'value': 0}, {'name': '25-44', 'value': 0},
         {'name': '45-64', 'value': 0}, {'name': '65+', 'value': 0}, {'name': 'UNKNOWN', 'value': 0}],

        [{'name': 'WHITE', 'value': 0}, {'name': 'BLACK', 'value': 0}, {'name': 'WHITE HISPANIC', 'value': 0},
         {'name': 'BLACK HISPANIC', 'value': 0}, {'name': 'ASIAN', 'value': 0},
         {'name': 'UNKNOWN', 'value': 0}]
    ]
    for dataType in range(6):
        for key in year[dataType].keys():
            for entry in sampleYear[dataType]:
                if dataType == 0:
                    if monthConversion[key] == entry['name']:
                        entry['value'] = year[dataType][key]
                else:
                    if key == entry['name']:
                        entry['value'] = year[dataType][key]
    data.append(sampleYear)
print(data)


@app.route("/")
def home():
    countData()
    return render_template('base.html', data=data)


if __name__ == "__main__":
    app.debug = True
    app.run()
