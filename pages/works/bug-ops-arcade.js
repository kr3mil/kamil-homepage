import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Text,
  HStack,
  Link,
  Divider
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ReactPlayer from 'react-player'

const Work = () => {
  return (
    <Layout title="Wowie Jam">
      <Container>
        <Title>
          Bug Ops Arcade<Badge>2020</Badge>
        </Title>
        <P>
          This 2D top down shooter was developed by me and{' '}
          <Link href="https://edwarddobson.co.uk/" target="_blank">
            Edward Dobson
          </Link>{' '}
          in under 72h for the Wowie Jam 2.0 game jam. Our initial idea was to
          create a game like the ‘Dead Ops Arcade’ featured in Call of Duty:
          Black Ops as we were both big fans of that minigame.
        </P>
        <Text pt="20px">This game was created in Unity and features:</Text>
        <UnorderedList pl="15px">
          <ListItem>Weapon switching using an inventory system</ListItem>
          <ListItem>Multiple enemy types</ListItem>
          <ListItem>Multiple weapon types</ListItem>
          <ListItem>Multiple levels</ListItem>
          <ListItem>Player model customisation</ListItem>
          <ListItem>Crosshair customisation</ListItem>
        </UnorderedList>

        <Text pt="20px">
          This was really fun to make and it gave me a chance of overcoming new
          challenges and make me more familiar with 2D programming ready for my
          final year project. A gameplay video can be seen below.
        </Text>
        <ReactPlayer
          width="100%"
          style={{ marginTop: '20px' }}
          url="https://youtu.be/8YkTf20QNLM"
          controls={true}
        />
      </Container>

      <Container mt="20px">
        <Text>
          The game can be played and downloaded from{' '}
          <Link href="https://kr3mil.itch.io/bug-ops-arcade" target="_blank">
            here
          </Link>
          .
        </Text>
        <Text mt="20px">
          <Link href="https://kr3mil.itch.io/bug-ops-arcade" target="_blank">
            https://kr3mil.itch.io/bug-ops-arcade
          </Link>
        </Text>
      </Container>
      <Divider mt="20px" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows / Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity</span>
        </ListItem>
      </List>
    </Layout>
  )
}

export default Work
