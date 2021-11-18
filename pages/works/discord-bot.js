import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Text
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Discord Bot">
      <Container>
        <Title>
          Discord Bot <Badge>2021</Badge>
        </Title>
        <P>
          Constantly evolving discord bot hosted on heroku. Used by 20+ servers
          and 1000+ members, supports large scale expansion.
        </P>
        <Text>Notable features include:</Text>
        <UnorderedList pl="15px">
          <ListItem>
            Music playing support - Youtube, Spotify, Apple music, Youtube Music
          </ListItem>
          <ListItem>
            Cloud synced favourites list - Hosted on Cloud Firestore
          </ListItem>
          <ListItem>
            Trivia - Playing live trivia games against other members in the
            server
          </ListItem>
          <ListItem>
            Link to video conversion - Automatically converts non embedded
          </ListItem>
          <ListItem>
            Automatic patch notes in specified channel when main git branch is
            updated
          </ListItem>
        </UnorderedList>
      </Container>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord (Windows / macOS / Linux / iOS / Android)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS</span>
        </ListItem>
        <ListItem>
          <Meta>NPM</Meta>
          <span>discord.js / slappey </span>
        </ListItem>
      </List>
    </Layout>
  )
}

export default Work
