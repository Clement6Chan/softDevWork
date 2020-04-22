

orig = open ('NYPD_Shooting_Incident_Data__Historic_.csv','r')
cleaned = open('../static/shootings.csv', 'w')


arr = orig.readlines()
newArr=[]
boop = [3,8,10,11,13]

for i in range(1,len(arr)):
#for i in range(1,5):
    temp = arr[i][:-1].split(',')
    s=[]
    date = temp[1].split("/")
    print(date)
    if int(date[2])<2019 and int(date[2])>2009:
        dateN = "/".join([date[2],date[0],date[1]])
        s.append(dateN)
        for idx in boop:
            s.append(temp[idx])
        newArr.append(",".join(s))


newArr.sort()
cleaned.write("\n".join(newArr))

orig.close()
cleaned.close()



