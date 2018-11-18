import random

def random_matrix_cell (index, icolumn, irow, columns, rows, type) :
  random.seed(index * 3 * 7 * 11 * 3 + 3 * 7 * 2 * 2)
  for row in range(rows) :
    for column in range(columns) :
      cell = None
      if type in set(['i', 's', 'ui', 'us', 'b', 'ub']):
        cell = random.randint(-20, 20)
      else:
        cell = random.randint(-20, 20) + random_mantiss(random, random.randint(2, 4))
      if column == icolumn and row == irow :
        return cell


def random_mantiss (random, size) :
  result = 0

  for index in range(size) :
    result += random.randint(0, 1) / (2 ** index)

  return result
