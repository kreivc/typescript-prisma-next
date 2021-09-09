import { Prisma } from "@prisma/client";
import {
	Box,
	Heading,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Select,
	Button,
	Divider,
	Center,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Image,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import prisma from "../lib/prisma";
import { fetcher } from "../utils/fetcher";

export async function getServerSideProps() {
	const users: Prisma.UserUncheckedCreateInput[] =
		await prisma.user.findMany();
	return {
		props: { initialUsers: users },
	};
}

export default function Home({ initialUsers }) {
	const [users, setUsers] =
		useState<Prisma.UserUncheckedCreateInput[]>(initialUsers);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");
	const [role, setRole] = useState("USER");

	const handleSubmit = async () => {
		const body: Prisma.UserCreateInput = {
			firstName,
			lastName,
			role,
			email,
			avatar,
		};

		console.log(body);

		await fetcher("/api/create", { user: body });
		await setUsers([...users, body]);
		setFirstName("");
		setLastName("");
		setAvatar("");
		setRole("USER");
		setEmail("");
	};

	const handleDelete = async (u) => {
		await fetcher("/api/delete", { id: u.id });
		await setUsers(users.filter((usr) => usr !== u));
	};

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Testing stack prisma" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box mt="20px" p="2%" w="100%">
				<Heading as="h3">
					This app is powered by NextJS, Chakra UI
				</Heading>
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
					Test!
				</Button>
			</Box>

			<Center>
				<Divider orientation="horizontal" w="95%" />
			</Center>

			<Box p="10">
				<Center>
					<Box as="h1" fontSize="2xl" fontWeight="bold">
						User List
					</Box>
				</Center>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Email</Th>
							<Th>Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						{users.map((u, index) => (
							<Tr key={index}>
								<Td>
									<Flex align="center">
										<Image
											src={u.avatar}
											alt={u.avatar}
											rounded="full"
											bg="gray.600"
											w="8"
											h="8"
											mr="5"
										/>
										<Box>
											<Box
												as="h2"
												fontWeight="bold"
											>{`${u.firstName} ${u.lastName}`}</Box>
											<Box as="p">{u.role}</Box>
										</Box>
									</Flex>
								</Td>
								<Td>
									<Box as="p">{u.email}</Box>
								</Td>
								<Td>
									<Button onClick={() => handleDelete(u)}>
										Delete This user
									</Button>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</>
	);
}
