import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDiscordBot from '../public/images/works/discord-bot-eyecatch.png'
import thumbBugops from '../public/images/works/bugops_eyecatch.png'
import thumbFyp from '../public/images/works/fyp_eyecatch.gif'
import thumbUniGameJam from '../public/images/works/uni-game-jam_eyecatch.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Current Works
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
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

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            University Works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section>
            <WorkGridItem
              id="fyp"
              title="Final Year Project"
              thumbnail={thumbFyp}
            >
              Modding tool and 2D game used to showcase how modding can affect
              the variation and longevity of a game
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="uni-game-jam"
              title="University Game Jam Module"
              thumbnail={thumbUniGameJam}
            >
              4 player local co-op party game made in Unity
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Game Jams
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section>
            <WorkGridItem
              id="wowie-jam"
              title="Wowie Jam 2.0!"
              thumbnail={thumbBugops}
            >
              2D top down shooter created in under 72h for a game jam with a
              theme of &apos;Intentional Bugs&apos;
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
