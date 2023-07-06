import * as React from 'react'
import { Image as ImageTamagui, H1 } from '@my/ui'
import { useEffect, useState } from 'react'
import { Stack } from 'tamagui'
import { images } from '../../dbList/images/index'
import { Dimensions } from 'react-native'

interface Props {
  id: number
  width?: number
  height?: number
}

const DEFAULT_IMAGE_WIDTH = '90%'
const DEFAULT_IMAGE_HEIGHT = 300

const WIDTH_PERCENT = 80

export const Image: React.FC<Props> = ({ id = 0 }) => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [error, setError] = useState(false)

  useEffect(() => {
    const { width: widthScreen, height: heightScreen } = Dimensions.get('window')

    const widthContent = widthScreen < 700 ? widthScreen : 700

    if (!id) {
      setError(true)
      setSize({
        width: 200,
        height: 200,
      })
      return
    }
    try {
      ImageTamagui.getSize(images[id], (width, height) => {
        const newImageWidth = (WIDTH_PERCENT * widthContent) / 100
        setSize({
          width: newImageWidth,
          height: (height * newImageWidth) / width,
        })
      })
    } catch (e) {
      console.error(e)
    }
  }, [])

  if (error) {
    return <H1>No image</H1>
  }

  return (
    <Stack f={1} jc={'center'} ai={'center'} mb={40}>
      <ImageTamagui
        src={images[id]}
        borderRadius={14}
        width={size.width || DEFAULT_IMAGE_WIDTH}
        height={size.height || DEFAULT_IMAGE_HEIGHT}
        scale={0.9}
      />
    </Stack>
  )
}
