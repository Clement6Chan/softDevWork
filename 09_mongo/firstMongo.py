

import pprint
from bson.json_util import loads
from pymongo import MongoClient
client = MongoClient()
db = client.restaurants



originFile = open('primer-dataset.json', 'r')
dataset = originFile.read().split('\n')
originFile.close()



def findBorough(borough):
    for restaurant in db.restaurants.find({"borough": borough}):
        pprint.pprint(restaurant)

# find restaurants by ZIPCODE
def findZipcode(zipcode):
    for restaurant in db.restaurants.find({"address.zipcode": zipcode}):
        pprint.pprint(restaurant)

# find restaurants by ZIPCODE and =GRADE
def findZipcodeGrade(zipcode, grade):
     for restaurant in db.restaurants.find({'address.zipcode': zipcode, 'grades': {'$elemMatch': {'grade': grade}}}):
          pprint.pprint(restaurant)

# find restaurants by ZIPCODE and <SCORE
def findZipcodeScoreBelow(zipcode, score):
     for restaurant in db.restaurants.find({'address.zipcode': zipcode, 'grades': {'$elemMatch': {'score': {'$lt': score}}}}):
          pprint.pprint(restaurant)

# ~creative~: find restaurants by BOROUGH, CUISINE and >SCORE
def findBoroughCuisineScore(borough, cuisine, score):
     for restaurant in db.restaurants.find({'borough': borough, 'cuisine': cuisine, 'grades': {'$elemMatch': {'score': {'$gte': score}}}}):
          pprint.pprint(restaurant)

