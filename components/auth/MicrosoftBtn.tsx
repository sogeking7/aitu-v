import { Button } from '@mantine/core';
import { signIn } from 'next-auth/react';

export const MicrosoftBtn = () => (
    <Button onClick={() => signIn()} w="100%" variant="default" size="md" radius="xl">
      Sign in with Microsoft
    </Button>
);
