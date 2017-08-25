test_list = [7,13.3,9,-3.25,4,22,-30]

def print_1_to_255():
    for i in range(1,255+1):
        print i
# print_1_to_255()

def print_sum_ints_255():
    sum = 0.0
    for i in range(256):
        sum += float(i)
        print i, sum
# print_sum_ints_255()

def print_max_of_list(lst):
    max = lst[0]
    for i in range(1, len(lst)):
        if float(lst[i]) > float(max):
            max = lst[i]
    print max
# print_max_of_list(test_list)

def odds_list_1_255():
    result = []
    for i in range(128):
        result.append(2 * i + 1)
    return result;
# print odds_list_1_255()

def list_count_greater(lst, y):
    count = 0;
    for i in range(len(lst)):
        if float(lst[i]) > float(y):
            count += 1
    return count
# print list_count_greater(test_list, 7)

def max_min_avg(lst):
    max = 0.0
    min = 0.0
    sum = 0.0
    for i in range(len(lst)):
        sum += float(lst[i])
        if lst[i] > max:
            max = float(lst[i])
        elif lst[i] < min:
            min = float(lst[i])
    print "max is", max
    print "min is", min
    print "mean is", sum / len(lst)
# max_min_avg(test_list)

def swap_str_for_neg(lst, str):
    for i in range(len(lst)):
        if float(lst[i]) < 0.0:
            lst[i] = str
# swap_str_for_neg(test_list, "Dojo")
# print test_list

def odds_to_255():
    for i in range(128):
        print 2 * i + 1
# odds_to_255()

def print_list_vals(lst):
    for val in lst:
        print val
# print_list_vals(test_list)

def print_list_average(lst):
    sum = 0.0
    for val in lst:
        sum += float(val)
    print sum / len(lst)
# print_list_average(test_list)

def square_list_vals(lst):
    res = []
    for val in lst:
        res.append(val * val)
    return res
# print square_list_vals(test_list)

def zero_negatives(lst):
    result = []
    for val in lst:
        if val < 0:
            result.append(0)
        else:
            result.append(val)
    return result
# print zero_negatives(test_list)

def shift_list_vals_left(lst):
    result = []
    for i in range(1, len(lst)):
        result.append(lst[i])
    return result
# print shift_list_vals_left(test_list)
