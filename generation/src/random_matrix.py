import random

def random_matrix (index, columns, rows, type) :
  random.seed(index * 3 * 7 * 11 * 3 + 3 * 7 * 2 * 2)
  result = []
  for row in range(rows) :
    next = []
    for column in range(columns) :
      if type in set(['i', 's', 'ui', 'us', 'b', 'ub']):
        next.append(random.randint(-20, 20))
      else:
        next.append(random.randint(-20, 20) + random_mantiss(random, random.randint(2, 4)))
    result.append(next)

  return result

def random_mantiss (random, size) :
  result = 0

  for index in range(size) :
    result += random.randint(0, 1) / (2 ** index)

  return result
