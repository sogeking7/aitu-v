import { Container, Text, Flex, Header } from '@mantine/core';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { AuthBtn } from '../auth/AuthBtn';

export const MainHeader = () => {
  return (
    <Header height={60} pt={5}>
      <Container size="lg" className="w-full flex justify-between items-center">
        <Flex gap="lg" align="center">
          <Logo />
          <Link href="/team" passHref>
            <Text color="dimmed" className="cursor-pointer">Team</Text>
          </Link>
        </Flex>
        <Flex gap="md">
          <AuthBtn />
        </Flex>
      </Container>
    </Header>
  );
};
