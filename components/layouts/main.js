import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=dev-width, initial-scale =1" />
        <meta name="description" content="Kamil's Portfolio" />
        <meta name="author" content="Kamil Zurek" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Kamil Zurek's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Kamil Zurek - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
