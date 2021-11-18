import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { TerminalIcon } from '@heroicons/react/outline'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 10px;

  .icon {
    transition: 500ms ease;
  }

  &:hover .icon {
    transform: rotate(360deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <TerminalIcon
            width="20px"
            style={{ marginRight: '5px' }}
            className="icon"
          />
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
