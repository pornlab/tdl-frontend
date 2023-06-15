import * as React from 'react'
import { useState } from 'react'
import { Sheet } from 'tamagui'
import { useColorScheme } from 'react-native'

export interface ModalProps {
  isOpen: boolean
  snapPoints?: number[]
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, snapPoints, children, onClose }) => {
  const [position, setPosition] = useState(0)
  const scheme = useColorScheme()
  const theme = scheme === 'dark' ? 'black' : 'white'
  const inverseTheme = scheme === 'dark' ? 'white' : 'black'

  return (
    <>
      <Sheet
        forceRemoveScrollEnabled={isOpen}
        modal
        open={isOpen}
        onOpenChange={onClose}
        snapPoints={snapPoints || [90]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="bouncy"
        defaultOpen
      >
        <Sheet.Overlay backgroundColor={inverseTheme} />
        <Sheet.Handle backgroundColor={'$background'} />
        <Sheet.Frame backgroundColor={'$background'}>{children}</Sheet.Frame>
      </Sheet>
    </>
  )
}
