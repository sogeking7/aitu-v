import { Container, Text, Flex, Header, createStyles } from '@mantine/core';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { AuthBtn } from '../auth/AuthBtn';

const useStyles = createStyles(() => ({
  link: {
    textDecoration: 'none',
  },
}));

export const MainHeader = () => {
  const { classes } = useStyles();
  return (
    <Header height={60} pt={5}>
      <Container size="lg" className="w-full flex justify-between items-center">
        <Flex gap="lg" align="center">
          <Logo />
          <Link href="/team" passHref className={classes.link}>
            <Text color="dimmed">Team</Text>
          </Link>
        </Flex>
        <Flex gap="md">
          <AuthBtn />
        </Flex>
      </Container>
    </Header>
  );
};
