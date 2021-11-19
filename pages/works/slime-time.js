import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Text,
  VStack
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ReactPlayer from 'react-player'
import Gallery from '../../components/gallery'

const images = [
  {
    src: '/images/works/slime-time/koth.png',
    title: 'King of the hill'
  },
  {
    src: '/images/works/slime-time/whack-a-mole.png',
    title: 'Whack a mole'
  },
  {
    src: '/images/works/slime-time/paintthefloor.png',
    title: 'Paint the floor'
  },
  {
    src: '/images/works/slime-time/tron.png',
    title: 'Tron'
  },
  {
    src: '/images/works/slime-time/mainmenu.png',
    title: 'Main menu'
  },
  {
    src: '/images/works/slime-time/hotpotato.png',
    title: 'Hot potato'
  },
  {
    src: '/images/works/slime-time/endzone.png',
    title: 'End zone'
  },
  {
    src: '/images/works/slime-time/dodgeball.png',
    title: 'Dodgeball'
  },
  {
    src: '/images/works/slime-time/bomberman.png',
    title: 'Bomberman'
  }
]

const Work = () => {
  return (
    <Layout title="Slime Time">
      <Container>
        <Title>
          Slime Time <Badge>2019</Badge>
        </Title>
        <P>
          Slime Time is a 4 player local co-op party game made in Unity for one
          of my university modules, it was made by me and a group of 9 others.
        </P>
        <Text pt="20px">
          The game features 7 game modes and the 3 I created were:
        </Text>
        <UnorderedList pl="15px">
          <ListItem>Paint the Floor</ListItem>
          <ListItem>Tron</ListItem>
          <ListItem>Whack-a-Mole</ListItem>
        </UnorderedList>
        <Text pt="20px">
          We used GitHub as our source control and met on a weekly basis to talk
          about progress and future work. Look below for some trailers, gameplay
          videos, and stills.
        </Text>
      </Container>
      <VStack flex={1} flexDir="column" mt="20px">
        <ReactPlayer url="https://youtu.be/nsUo0liR_XQ" controls={true} />
        <ReactPlayer
          url="https://youtu.be/OxQSM20mR7Q"
          controls={true}
          style={{ marginTop: '20px' }}
        />
        <Gallery images={images} />
      </VStack>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
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
