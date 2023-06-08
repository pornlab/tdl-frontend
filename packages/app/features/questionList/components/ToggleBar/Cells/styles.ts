import { CellType } from 'app/features/questionList/components/ToggleBar/Cells/index'

const baseStyle = {
  backgroundColor: '#818181',
  borderColor: '$background',
  borderWidth: 0,
}
const successStyle = {
  backgroundColor: '#7BC359',
  borderColor: '$background',
  borderWidth: 0,
}
const errorStyle = {
  backgroundColor: '#FF5959',
  borderColor: '$background',
  borderWidth: 0,
}
const activeStyle = {
  boxShadow: 'inset 0px 0px 8px black',
  backgroundColor: '#818181',
  borderColor: '$background',
  borderWidth: 0,
  // backgroundColor: '#c5c5c5',
  // borderColor: '$background',
  // borderWidth: 0,
}

export const getStyle = (type: CellType) => {
  switch (type) {
    case CellType.Base:
      return baseStyle
    case CellType.Active:
      return activeStyle
    case CellType.Success:
      return successStyle
    case CellType.Error:
      return errorStyle
  }
}
