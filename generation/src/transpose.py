def transpose (matrix) :
  result = [[0] * len(matrix) for row in range(len(matrix[0]))]

  for row in range(len(matrix)):
    for column in range(len(matrix[0])):
      result[column][row] = matrix[row][column]

  return result
