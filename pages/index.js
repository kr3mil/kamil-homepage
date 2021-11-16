import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in the United Kingdom!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kamil Zurek
          </Heading>
          <p>Digital Craftzman ( Artist / Developer / Designer ) </p>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor
          sit amet turpis non sagittis. Donec sodales justo erat. Vestibulum nec
          diam eros. Cras quis sapien a lorem sodales porta ut at ipsum. Fusce
          tincidunt ante ac mi interdum dignissim. Quisque vestibulum leo in
          nisl fringilla ultricies. Ut quis semper risus. Morbi eu viverra nunc.
          He is living off his own product called{' '}
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          .
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
          <BioYear>1997</BioYear>
          Born in Strzelce Opolskie, Poland.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed a placement year at Siemens (Reyrolle) as a Junior Software
          Engineer.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Received a First Class Honours Bachelor of Science (Hons) Award in
          Computer Games Programming at Teesside University.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Works as a Graduate Software Engineer at Siemens (Reyrolle).
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
