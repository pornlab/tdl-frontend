import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { SheetProps, useSheet } from '@tamagui/sheet'
import React from 'react'
import { useState } from 'react'
import { Button, H1, H2, Input, Paragraph, XStack, Sheet } from 'tamagui'

export const FinishModal: React.FC = () => {
  const [position, setPosition] = useState(0)
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(true)

  return (
    <>
      <XStack space>
        <Button onPress={() => setOpen(true)}>Open</Button>
        <Button onPress={() => setModal((x) => !x)}>
          {modal ? 'Type: Modal' : 'Type: Inline'}
        </Button>
      </XStack>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="bouncy"
      >
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame flex={1} padding="$4" justifyContent="center" alignItems="center" space="$5">
          <Button size="$6" circular icon={ChevronDown} onPress={() => setOpen(false)} />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
