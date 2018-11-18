def cells (columns, rows) :
  for row in range(rows) :
    for column in range(columns) :
      separator = ''
      if row != rows - 1 or column != columns - 1:
        separator = ', '

      yield {
        'column': column,
        'row': row,
        'offset': columns * row + column,
        'index': '{0}{1}'.format(column, row),
        'separator': separator,
        'rowend': row < rows - 1 and column == columns - 1
      }
