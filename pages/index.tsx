import { Container } from '@mantine/core';
import { MainHeader } from '../components/layouts/MainHeader';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <Container size="lg">
        Main
      </Container>
    </>
  );
}
