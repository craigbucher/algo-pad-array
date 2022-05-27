#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    if len(array) < min_size:
        delta = min_size - len(array)
        while delta > 0:
            array.append(value)
            delta -= 1
    return(array)
#print(pad([1,2,3], 5))