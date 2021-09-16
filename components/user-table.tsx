import { User } from ".prisma/client";
import { Box, Center } from "@chakra-ui/layout";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import { fetcher } from "../utils/fetcher";
import UserTableItem from "./user-table-item";

export interface UserTableProps {
	users: User[];
	onDeleteSuccess?: (user: User) => void;
}

function UserTable({ users, onDeleteSuccess }: UserTableProps) {
	const handleDelete = async (u: User) => {
		await fetcher("/api/delete", { id: u.id });
		onDeleteSuccess?.(u);
	};

	return (
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
					{users.map((u) => (
						<UserTableItem key={u.id} user={u} onDelete={handleDelete} />
					))}
				</Tbody>
			</Table>
		</Box>
	);
}

export default UserTable;
