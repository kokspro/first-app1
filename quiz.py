# x = 0
# for i in range(34):
#     for j in range(45,88):
#         x += 2
#         x += 3
#         x += 2

# x += 2

# print(x)

# total = 0
# for x in range(50):
#     for y in range (4,57):
#         if y > x:
#             total += 1

# print(total)            

# total = 0
# for x in range(10,21):
#     for y in range(4,x):
#         total += 3

# total += 4
# print(total)        

total = 0;
for i in range(4,64):
    j = 0
    while 2**j <= i:
        total += 4
        j += 1

print(total)