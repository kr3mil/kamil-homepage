import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDiscordBot from '../public/images/works/discord-bot-eyecatch.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="discord-bot"
              title="Discord Bot"
              thumbnail={thumbDiscordBot}
            >
              Constantly evolving discord bot hosted on heroku. Used by 20+
              servers and 1000+ members, supports large scale expansion.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        {/* <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="modetokyo"
              thumbnail={thumbModeTokyo}
              title="mode.tokyo"
            >
              The mode magazine for understanding to personally enjoy Japan
            </WorkGridItem>
          </Section>
        </SimpleGrid> */}

        {/* <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="pichu2"
              thumbnail={thumbPichu2}
              title="Pichu*Pichu"
            >
              Twitter client app for iPhone Safari
            </WorkGridItem>
          </Section>
        </SimpleGrid> */}
      </Container>
    </Layout>
  )
}

export default Works
