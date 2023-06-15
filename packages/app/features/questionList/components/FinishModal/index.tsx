import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
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

const SIZE_ICON = 28

export const FinishModal: React.FC = () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <>
      <Button onPress={() => setOpen(true)}>{'Open Modal'}</Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[90]}>
        <Content>
          {/*{!sessionStore.checkIsAllQuestionsAnswered() && <FinishModal />}*/}
          <Stack
            f={1}
            jc={'center'}
            ai={'center'}
            ac={'center'}
            maxWidth={700}
            pl={16}
            pr={16}
            pt={16}
            w={'60%'}
            minWidth={300}
          >
            <H1 ls={0}>Отлично!</H1>
            <Paragraph color={'#8B8B8B'} fontSize={20} pt={8}>
              Вы ответили на все вопросы
            </Paragraph>
            <YStack pt={60} w={'100%'}>
              <XStack f={1} justifyContent={'space-between'} w={'100%'}>
                <XStack>
                  <ImageRN
                    source={List}
                    style={{
                      width: SIZE_ICON,
                      height: SIZE_ICON,
                    }}
                  />
                  <Paragraph fontSize={16} lh={30} ml={12}>
                    Всего вопросов
                  </Paragraph>
                </XStack>

                <Paragraph fontSize={16} lh={30}>
                  42
                </Paragraph>
              </XStack>

              <Stack width={'100%'} h={8} mt={20} br={2} bc={'#FF5959'}>
                <Stack
                  h={8}
                  brtr={2}
                  brbr={2}
                  width={`30%`}
                  bc={'#8BC166'}
                  style={{
                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1);',
                  }}
                />
              </Stack>

              <XStack f={1} justifyContent={'space-between'} mt={20} w={'100%'}>
                <XStack>
                  <ImageRN
                    source={Approve}
                    style={{
                      width: SIZE_ICON,
                      height: SIZE_ICON,
                    }}
                  />
                  <Paragraph fontSize={16} lh={30} ml={12}>
                    Правильно
                  </Paragraph>
                </XStack>
                <Paragraph fontSize={16} lh={30}>
                  28 (67%)
                </Paragraph>
              </XStack>

              <XStack f={1} justifyContent={'space-between'} mt={12} w={'100%'}>
                <XStack>
                  <ImageRN
                    source={Error}
                    style={{
                      width: SIZE_ICON,
                      height: SIZE_ICON,
                    }}
                  />
                  <Paragraph fontSize={16} lh={30} ml={12}>
                    Неправильно
                  </Paragraph>
                </XStack>
                <Paragraph fontSize={16} lh={30}>
                  14 (33%)
                </Paragraph>
              </XStack>

              <Stack h={4} bc={'#3C3C3C'} mt={20} />

              <XStack f={1} justifyContent={'space-between'} mt={12} w={'100%'}>
                <XStack>
                  <ImageRN
                    source={Clock}
                    style={{
                      width: SIZE_ICON,
                      height: SIZE_ICON,
                    }}
                  />
                  <Paragraph fontSize={16} lh={30} ml={12}>
                    Потрачено времени
                  </Paragraph>
                </XStack>
                <Paragraph fontSize={16} fontWeight={'bold'} lh={30}>
                  17:56
                </Paragraph>
              </XStack>
            </YStack>
          </Stack>
        </Content>
      </Modal>
    </>
  )
}
