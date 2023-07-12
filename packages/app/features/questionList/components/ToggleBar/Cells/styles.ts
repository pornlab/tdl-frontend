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
export const activeStyle = {
  boxShadow: 'white 0px 0px 0px 3px inset',
  borderWidth: 0,
}

export const getStyle = (type: CellType, isExam?: boolean) => {
  switch (type) {
    case CellType.Success:
      return {
        ...successStyle,
        backgroundColor: isExam ? '#313131FF' : successStyle.backgroundColor,
      }
    case CellType.Error:
      return {
        ...errorStyle,
        backgroundColor: isExam ? '#313131FF' : errorStyle.backgroundColor,
      }
    default:
      return baseStyle
  }
}
