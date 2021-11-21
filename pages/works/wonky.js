import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Text,
  Link
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Wonky">
      <Container>
        <Title>
          Wonky <Badge>2019</Badge>
        </Title>
        <P>
          2D platformer using only one key (space), hold to build up more power.
          Play as a one legged man trying to overcome obstacles with his wonky
          leg. Made for GMTK. Can be played in browser or on windows{' '}
          <Link href="https://kr3mil.itch.io/wonky" target="_blank">
            here
          </Link>
          .
        </P>
        <Text mt="20px">Thanks to:</Text>
        <UnorderedList pl="15px">
          <ListItem>Assets - Sophie</ListItem>
          <ListItem>General manager and pun creator - Andrew</ListItem>
          <ListItem>Assistant to the regional manager - Alex</ListItem>
        </UnorderedList>
      </Container>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web / Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <span>
            <Link href="https://kr3mil.itch.io/wonky" target="_blank">
              https://kr3mil.itch.io/wonky
            </Link>
          </span>
        </ListItem>
      </List>
    </Layout>
  )
}

export default Work
