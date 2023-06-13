import * as React from 'react'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { SheetProps, useSheet } from '@tamagui/sheet'
import { useState } from 'react'
import { Button, H1, H2, Input, Paragraph, XStack, Sheet } from 'tamagui'

export interface ModalProps {
  isOpen: boolean
}

export const createModal: React.FC = () => {
  const [position, setPosition] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="bouncy"
        defaultOpen
      >
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame
          flex={1}
          padding="$4"
          backgroundColor={'blue'}
          justifyContent="center"
          alignItems="center"
          space="$5"
        >
          <Button size="$6" circular icon={ChevronDown} onPress={() => setOpen(false)} />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
