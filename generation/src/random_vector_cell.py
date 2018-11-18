import random

def random_vector_cell (index, dimensions, type, cell) :
  random.seed(index * 3 * 7 * 11 * 3 + 3 * 7 * 2 * 2)
  result = []
  for dimension in range(dimensions) :
    if type in set(['i', 's', 'ui', 'us', 'b', 'ub']):
      if cell == dimension :
        return random.randint(-20, 20)
      else :
        random.randint(-20, 20)
    else:
      if cell == dimension :
        return random.randint(-20, 20) + random_mantiss(random, random.randint(2, 4))
      else :
        random.randint(-20, 20) + random_mantiss(random, random.randint(2, 4))

def random_mantiss (random, size) :
  result = 0

  for index in range(size) :
    result += random.randint(0, 1) / (2 ** index)

  return result
