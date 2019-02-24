/*% if matrix_type in ['f', 'd'] %*/import { determinant } from './determinant'

/**
* Invert a <$ columns $> by <$ rows $> <$ matrix_type_name $> buffered matrix and write the result into another buffer.
*
* @param {<$ matrix_buffer_type $>} matrixBuffer - Buffer to read.
* @param {number} matrixBufferOffset - Offset to apply when we read the buffer.
* @param {<$ matrix_buffer_type $>} resultBuffer - Buffer to write.
* @param {number} resultBufferOffset - Offset to apply when we write into the result buffer.
*
* @return {<$ matrix_buffer_type $>} The result buffer updated with the result of this operation.
*/
export function invert (
  matrixBuffer,
  matrixBufferOffset,
  resultBuffer,
  resultBufferOffset
) {
  /*% for cell in cells() %*/const a/*$ cell.column $*//*$ cell.row $*/ = matrixBuffer[matrixBufferOffset + /*$ cell.offset $*/]
  /*% endfor %*//*% set elements = [] | matrix_elements('a', columns, rows) %*/
  const determinantValue = determinant(matrixBuffer, matrixBufferOffset)
  /*% if rows == 2 %*/
  resultBuffer[resultBufferOffset + 0] = a11 / determinantValue
  resultBuffer[resultBufferOffset + 1] = -a10 / determinantValue
  resultBuffer[resultBufferOffset + 2] = -a01 / determinantValue
  resultBuffer[resultBufferOffset + 3] = a00 / determinantValue
  /*% else %*/
  /*% for cell in cells() %*/resultBuffer[resultBufferOffset + /*$ cell.offset $*/] = /*% if (cell.row + cell.column) % 2 == 1 %*/-/*% endif %*/(/*$ determinant_to_string(determinant(rows - 1, elements | covariant_matrix(cell.row, cell.column, rows)))  $*/) / determinantValue
  /*% endfor %*//*% endif %*/
  return resultBuffer
}
/*% endif %*/
