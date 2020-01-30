
import random

KREWES = {
    'orpheus': ['Emily', 'Kevin', 'Vishwaa', 'Eric', 'ray', 'Jesse'],
    'rex' : ['William', 'Joseph', 'Calvin', 'Ethan'],
    'endymion' : ['Grace', 'Nahi', 'Derek', 'Jun Tao', 'Connor', 'Jason', 'Tammy']
    }



def randStudent(team):
    students = KREWES[team]
    name = students[random.randrange(len(students))]
    print (name)


randStudent("orpheus")
