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
  Icon
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
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            porttitor sit amet turpis non sagittis. Donec sodales justo erat.
            Vestibulum nec diam eros. Cras quis sapien a lorem sodales porta ut
            at ipsum. Fusce tincidunt ante ac mi interdum dignissim. Quisque
            vestibulum leo in nisl fringilla ultricies. Ut quis semper risus.
            Morbi eu viverra nunc.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
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
