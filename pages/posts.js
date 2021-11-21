import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          // TODO
        </SimpleGrid>
      </Heading>
    </Container>
  </Layout>
)

export default Posts
