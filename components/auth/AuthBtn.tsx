import { IconChevronDown, IconLogout, IconUser } from '@tabler/icons';
import { ActionIcon, Avatar, Flex, Loader, Menu, Text } from '@mantine/core';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

type UserType = {
  image: string;
  id: number;
  name: string;
  email: string;
};

export const AuthBtn = () => {
  // eslint-disable-next-line max-len
  const { data: { user }, status } = useSession() as unknown as { data: { user: UserType }, status: string };

  if (status === 'loading') {
    return (
      <Flex w={50} direction="column" justify="center" align="center" className="cursor-pointer">
        <Flex h={28} w={28} justify="center" align="center">
          <Loader size="xs" />
        </Flex>
        <Text size={12}>Loading</Text>
      </Flex>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Flex align="center" onClick={() => signIn} direction="column" w={50} className="cursor-pointer">
          <ActionIcon
            size="md"
            color="dark"
            variant="transparent"
          >
            <Avatar
              color="blue"
              radius="md"
            />
          </ActionIcon>
        </Flex>
      </>
    );
  }
  return (

    <Menu
      width={160}
      shadow="md"
      styles={(theme) => ({
        item: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          '&:hover': {
            color: theme.white,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[6],
          },
        },
      })}

    >
      <Menu.Target>
        <Flex align="center" gap={5} className="hover:cursor-pointer">
          <Text color="blue">
            {user.name}
          </Text>
            <Image src={user.image} alt={user.name} width={28} height={28} className="rounded-full" />
          <Text color="blue">
            <IconChevronDown size={20} />
          </Text>
        </Flex>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          icon={<IconUser size={14} />}
          component="a"
          href="https://mantine.dev"
        >
          Profile
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          icon={<IconLogout size={14} />}
          component="a"
          onClick={() => signOut}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>

  );
};
