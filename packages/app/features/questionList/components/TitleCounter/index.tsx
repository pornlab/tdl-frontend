import * as React from 'react'
import { H2, Stack, H4 } from '@my/ui'

interface Props {
  title: string
  current: number
  totalCount: number
  time?: string
}

export const TitleCounter: React.FC<Props> = ({ time, title, current, totalCount }) => {
  return (
    <Stack f={1} fd={'row'} jc={'space-between'} w={'100%'} pb={20} ai={'center'}>
      {time && (
        <H4
          ta={'left'}
          letterSpacing={0}
          pt={0}
          pb={0}
          pr={10}
          pl={10}
          backgroundColor={'#7759c3'}
          borderRadius={10}
          marginRight={4}
          color={'#fff'}
        >
          <span>{time}</span>
        </H4>
      )}
      <H2 ta={'left'} letterSpacing={0}>
        {title}
      </H2>
      <Stack bc={'#8BC166'} pt={4} pr={12} pb={4} pl={16} bblr={24} btlr={24}>
        <H4 color={'#fff'}>{`${current} / ${totalCount}`}</H4>
      </Stack>
    </Stack>
  )
}

// font-size: 19px;
// /* border: 1px solid; */
// padding: 0px 10px;
// background: #7759c3;
// border-radius: 10px;

/*


<Stack f={1} fd={'row'} jc={'space-between'} w={'100%'} pb={20} ai={'center'}>
      <H4
        ta={'left'}
        letterSpacing={0}
        pt={0}
        pb={0}
        pr={10}
        pl={10}
        backgroundColor={'#7759c3'}
        borderRadius={10}
        marginRight={4}
      >
        <span>{'47:56'}</span>
      </H4>
      <H3 ta={'left'} letterSpacing={0}>
        {title}
      </H3>
<H4
    color={'#fff'}
    bc={'#8BC166'}
    pt={0}
    pr={4}
    pb={0}
    pl={10}
    bblr={24}
    btlr={24}
>{`${current} / ${totalCount}`}</H4>
</Stack>
 */
