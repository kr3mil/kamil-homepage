import { Container, Badge, List, Link, ListItem, Text } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Final Year Project">
      <Container>
        <Title>
          Final Year Project <Badge>2020</Badge>
        </Title>
        <P>
          This was the submission for my final year project at University. I
          received a First in this and it was worth the majority of my Credits
          in the final year. The idea for this project was to prove how modding
          tools can affect the variation and longevity in a game hopefully
          showcasing the positive impact of them and getting more people
          familiar with how easy modding can be.
        </P>
        <Text mt="20px">
          I developed both the modding tools and the game itself for this
          project. You can see the progress over time on the{' '}
          <Link href="/posts/fyp">posts</Link> page.
        </Text>
      </Container>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity</span>
        </ListItem>
        <ListItem>
          <Meta>Blog</Meta>
          <span>
            <Link href="/posts">Posts</Link>
          </span>
        </ListItem>
      </List>
    </Layout>
  )
}

export default Work
