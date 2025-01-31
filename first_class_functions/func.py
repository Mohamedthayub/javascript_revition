def fist_class(x):
    def second_class(y):
        return x + y 
    
    return second_class

result = fist_class(100)
print(result(100))
