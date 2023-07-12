import i18next from 'i18next'
import React from 'react'
import { useState } from 'react'
import { Button, H1, H2, Input, Paragraph, XStack, Stack, YStack } from 'tamagui'
import { Modal } from 'app/features/components/Modal'
import { Content } from 'app/features/components/Content'
import { StatusBar } from 'app/features/questionList/components/StatusBar'
import { Image as ImageRN } from 'react-native'
import Approve from './icons/ok.png'
import Error from './icons/decline.png'
import List from './icons/clipboard.png'
import Clock from './icons/clock.png'
import { useLink } from 'solito/link'

const SIZE_ICON = 28

const iconStyle = {
  width: SIZE_ICON,
  height: SIZE_ICON,
}

export interface Props {
  totalCount: number
  rightCount: number
  errorCount: number
  totalTime?: string
  startAgain: () => void
  time?: string
  title?: string
  description?: string
}

export const FinishModal: React.FC<Props> = ({
  totalCount,
  rightCount,
  startAgain,
  totalTime,
  errorCount,
  title,
  description,
}) => {
  const [isOpen, setOpen] = useState(true)

  const percentRight = Math.floor((rightCount * 100) / totalCount)
  const percentWrong = Math.ceil((errorCount * 100) / totalCount)

  const menuLink = useLink({
    href: '/',
  })

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[90]}>
        <Content>
          <Stack
            f={1}
            jc={'center'}
            ai={'center'}
            ac={'center'}
            pl={16}
            pr={16}
            pt={16}
            w={'90%'}
            minWidth={300}
            maxWidth={500}
            mb={100}
          >
            <H1 ls={0} ta={'center'}>
              {i18next.t(title || 'question:excellent')}
            </H1>

            <Paragraph color={'#8B8B8B'} fontSize={20} pt={8} ta={'center'}>
              {i18next.t(description || 'question:allQuestionsAnswered')}
            </Paragraph>

            <YStack pt={60} w={'100%'} f={1} justifyContent={'center'} ai={'center'}>
              <XStack f={1} justifyContent={'space-between'} w={'100%'}>
                <XStack>
                  <ImageRN source={List} style={iconStyle} />
                  <Paragraph fontSize={16} lh={30} ml={12}>
                    {i18next.t('question:totalQuestions')}
                  </Paragraph>
                </XStack>

                <Paragraph fontSize={16} lh={30}>
                  {totalCount}
                </Paragraph>
              </XStack>

              <Stack width={'100%'} h={8} mt={20} br={2} bc={'#FF5959'}>
                <Stack
                  h={8}
                  brtr={2}
                  brbr={2}
                  width={`${percentRight}%`}
                  bc={'#8BC166'}
                  style={{
                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1);',
                  }}
                />
              </Stack>

              <XStack f={1} justifyContent={'space-between'} mt={20} w={'100%'}>
                <XStack>
                  <ImageRN source={Approve} style={iconStyle} />
                  <Paragraph fontSize={16} lh={30} ml={12}>
                    {i18next.t('question:rightAnswers')}
                  </Paragraph>
                </XStack>
                <Paragraph fontSize={16} lh={30}>
                  {`${rightCount} (${percentRight}%)`}
                </Paragraph>
              </XStack>

              <XStack f={1} justifyContent={'space-between'} mt={12} w={'100%'}>
                <XStack>
                  <ImageRN source={Error} style={iconStyle} />
                  <Paragraph fontSize={16} lh={30} ml={12}>
                    {i18next.t('question:wrongAnswers')}
                  </Paragraph>
                </XStack>
                <Paragraph fontSize={16} lh={30}>
                  {`${errorCount} (${percentWrong}%)`}
                </Paragraph>
              </XStack>

              {totalTime && (
                <>
                  <Stack h={4} bc={'#3C3C3C'} mt={20} w={'100%'} />

                  <XStack f={1} justifyContent={'space-between'} mt={12} w={'100%'}>
                    <XStack>
                      <ImageRN source={Clock} style={iconStyle} />
                      <Paragraph fontSize={16} lh={30} ml={12}>
                        {i18next.t('question:totalTime')}
                      </Paragraph>
                    </XStack>

                    <Paragraph fontSize={16} fontWeight={'bold'} lh={30}>
                      {totalTime}
                    </Paragraph>
                  </XStack>
                </>
              )}

              <YStack w={'60%'} minWidth={200} maxWidth={500} pt={60}>
                <Button bc={'#FFEB99'} onPress={startAgain} bw={1} borderColor={'#ccc'}>
                  {i18next.t('question:startAgain')}
                </Button>
                <Button bc={'#D1F4FF'} mt={12} {...menuLink} bw={1} borderColor={'#ccc'}>
                  {i18next.t('question:goToMenu')}
                </Button>
                <Button
                  bc={'#FFC5C5'}
                  mt={12}
                  bw={1}
                  borderColor={'#ccc'}
                  onPress={() => setOpen(false)}
                >
                  {i18next.t('question:checkAnswers')}
                </Button>
              </YStack>
            </YStack>
          </Stack>
        </Content>
      </Modal>
    </>
  )
}
