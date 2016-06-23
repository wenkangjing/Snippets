import operator

with open('D:/devel/mnewmanTfs/tebasebuildlog2.txt') as f:
    lines = f.readlines()

for i in range(0, len(lines)):
    lines[i] = lines[i].replace(' ', '')

line_count = []
for line in lines:
    count = line_count.get(line, 0)
    line_count[line] = count + 1

sorted_line_count = []
sorted_line_count = sorted(line_count.items(), key=operator.itemgetter(1))

for i in range(0, 100):
   sorted_line_count[len(sorted_line_count)-i-1]