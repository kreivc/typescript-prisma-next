import { User } from '@prisma/client';
import { Divider, Center } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import prisma from '../lib/prisma';
import UserForm from '../components/user-form';
import UserTable from '../components/user-table';

export async function getServerSideProps() {
    const users = await prisma.user.findMany();
    return {
        props: { initialUsers: users },
    };
}

export interface HomeProps {
    initialUsers: User[];
}

export default function Home({ initialUsers }: HomeProps) {
    const [users, setUsers] = useState<User[]>(initialUsers);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Testing stack prisma" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <UserForm
                onCreateSuccess={(newUser) => setUsers([...users, newUser])}
            />

            <Center>
                <Divider orientation="horizontal" w="95%" />
            </Center>

            <UserTable
                users={users}
                onDeleteSuccess={(user) =>
                    setUsers(users.filter((u) => u.id !== user.id))
                }
            />
        </>
    );
}
