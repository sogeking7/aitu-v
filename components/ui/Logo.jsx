import { createStyles, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/Logo.png';

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export function Logo() {
  const { classes } = useStyles();
  return (
    <Link href="/" passHref className={classes.link}>
      <Flex align="center" className="cursor-pointer">
        <Image width={50} src={logo} alt="google_ico" />
        <Text>AITU Volunteers</Text>
      </Flex>
    </Link>
  );
}
