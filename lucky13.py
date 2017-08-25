test_list = [7, 13, 9, -3, 4, 22, -30]

def print_1_to_255():
    for i in range(1,255+1):
        print i
# print_1_to_255()

def print_sum_ints_255():
    sum = 0
    for i in range(256):
        sum += i
        print i, sum
# print_sum_ints_255()

def print_max_of_list(lst):
    max = lst[0]
    for i in range(1, len(lst)):
        if lst[i] > max:
            max = lst[i]
    print max
print_max_of_list(test_list)
