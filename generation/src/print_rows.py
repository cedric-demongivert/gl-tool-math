def print_rows (matrix) :
  rows = []

  for row in range(len(matrix)) :
    result = []
    for column in range(len(matrix[row])) :
      if column > 0 :
        result.append(', ')
      result.append(str(matrix[row][column]))
    if row <len(matrix) - 1:
      result.append(',')

    rows.append(''.join(result))

  return rows
