import { Prisma, User } from '.prisma/client';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { useState } from 'react';
import { fetcher } from '../utils/fetcher';

export interface UserFormProps {
    onCreateSuccess?: (newUser: User) => void;
}

function UserForm({ onCreateSuccess }: UserFormProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [role, setRole] = useState('USER');

    const handleSubmit = async () => {
        const body: Prisma.UserCreateInput = {
            firstName,
            lastName,
            role,
            email,
            avatar,
        };

        console.log(body);

        const newUser = await fetcher<{ user: Prisma.UserCreateInput }, User>(
            '/api/create',
            { user: body }
        );
        onCreateSuccess?.(newUser);
        setFirstName('');
        setLastName('');
        setAvatar('');
        setRole('USER');
        setEmail('');
    };

    return (
        <Box mt="20px" p="2%" w="100%">
            <Heading as="h3">This app is powered by NextJS, Chakra UI</Heading>
            <Flex as="form" gridGap={3} mt="30px">
                <FormControl id="first-name" isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="last-name" isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl id="avatar" isRequired>
                    <FormLabel>Avatar</FormLabel>
                    <Input
                        placeholder="Avatar"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                </FormControl>
                <FormControl id="eole" isRequired>
                    <FormLabel>Role</FormLabel>
                    <Select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="DEVELOPER">DEVELOPER</option>
                    </Select>
                </FormControl>
            </Flex>
            <Button onClick={handleSubmit} mt="20px">
                Add User
            </Button>
        </Box>
    );
}

export default UserForm;
