import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  HStack
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/io5'
import { ItchIoIcon } from '../components/icons'

const Page = () => {
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
          <HStack w="full" align="center" justify="center" my={4} spacing={2}>
            <Link href="https://read.cv/kr3mil" target="_blank">
              <Button
                w="150px"
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                read.cv
              </Button>
            </Link>
            <NextLink href="/portfolio">
              <Button
                w="150px"
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                View CV
              </Button>
            </NextLink>
            <NextLink href="/portfolio">
              <Button
                w="150px"
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                My Portfolio
              </Button>
            </NextLink>
          </HStack>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2016</BioYear>
            Started studying Computer Games Programming (BSc Hons) at Teesside
            University, Middlesbrough
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed a placement year at Siemens (Reyrolle) as a Junior
            Software Engineer.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Received a First Class Honours Bachelor of Science Award in Computer
            Games Programming at Teesside University.
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Works as a Graduate Software Engineer at Siemens (Reyrolle).
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/kr3mil" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discordapp.com/users/121675133185294339/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Discord
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://kr3mil.itch.io/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<ItchIoIcon />}
                >
                  Itch.io
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
