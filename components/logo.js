import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding-top: 2px;
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
          >
            Kamil Zurek
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
