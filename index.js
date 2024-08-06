// pages/index.js
import { Container, Grid, Card, Image, Text, Button } from '@mantine/core';
import UpvoteButton from '../components/UpvoteButton';

export default function HomePage() {
  const product = {
    name: "Product Name",
    description: "This is a short description of the product.",
    image: "https://via.placeholder.com/150",
    upvotes: 123,
  };

  return (
    <Container>
      <Grid gutter="md">
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" withBorder>
            <Grid>
              <Grid.Col span={3}>
                <Image src={product.image} alt={product.name} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Text weight={500} size="lg">{product.name}</Text>
                <Text color="dimmed">{product.description}</Text>
              </Grid.Col>
              <Grid.Col span={3} className="flex flex-col items-end">
                <UpvoteButton />
                <Text size="sm" className="mt-2">{product.upvotes} upvotes</Text>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
