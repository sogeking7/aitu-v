import { Flex, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/Logo.png';

export function Logo() {
  return (
    <Link href="/">
      <Flex align="center" className="cursor-pointer">
        <Image width={50} src={logo} alt="google_ico" />
        <Text>AITU Volunteers</Text>
      </Flex>
    </Link>
  );
}
