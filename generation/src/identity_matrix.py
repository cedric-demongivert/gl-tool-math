import random

def identity_matrix (columns, rows) :
  result = []
  for row in range(rows) :
    next = []
    for column in range(columns) :
      next.append( 1 if row == column else 0)
    result.append(next)

  return result
