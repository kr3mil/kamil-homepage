import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  SimpleGrid,
  HStack,
  Link
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const About = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kamil Zurek
            </Heading>
            <p>Software Engineer ( Full-Stack Developer / Designer ) </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/kamil.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Graduate Software Engineer currently working for Siemens,
            centralising on the enhancement and expansion of my skillset and
            career. Repertoire inclusive of but not limited to (insert main
            skills/languages here).
          </Paragraph>
          <HStack w="full" align="center" my={4}>
            <Link href="https://read.cv/kr3mil" target="_blank">
              <Button
                w="full"
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                read.cv
              </Button>
            </Link>
            <NextLink href="/portfolio">
              <Button
                w="full"
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                View CV
              </Button>
            </NextLink>
            <NextLink href="/portfolio">
              <Button
                w="full"
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                My Portfolio
              </Button>
            </NextLink>
          </HStack>
        </Section>
      </Container>
    </Layout>
  )
}

export default About
