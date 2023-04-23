import { Container, Text } from '@mantine/core';
import { getServerSession } from 'next-auth';
import { getProviders, useSession } from 'next-auth/react';
import { MainHeader } from '../../components/layouts/MainHeader';
import { authOptions } from '../api/auth/[...nextauth]';

export default function TeamPage() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <MainHeader />
                <Container size="lg" className="flex justify-center" py={100}>
                    Team Page
                </Container>
            </>
        );
    }
    return <Text>Access Denied</Text>;
}

export async function getServerSideProps(context:any) {
    const session = await getServerSession(context.req, context.res, authOptions);
    if (!session) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false,
            },
        };
    }

    const providers = await getProviders();
    return {
        props: {
            providers,
            session: await getServerSession(
                context.req,
                context.res,
                authOptions
            ),
        },
    };
}
