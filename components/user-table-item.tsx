import { User } from ".prisma/client";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import { Td, Tr } from "@chakra-ui/table";

export interface UserTableItemProps {
	user: User;
	onDelete?: (user: User) => void;
}

function UserTableItem({ user, onDelete }: UserTableItemProps) {
	return (
		<Tr>
			<Td>
				<Flex align="center">
					<Image
						src={user.avatar}
						alt={user.avatar}
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
						>{`${user.firstName} ${user.lastName}`}</Box>
						<Box as="p">{user.role}</Box>
					</Box>
				</Flex>
			</Td>
			<Td>
				<Box as="p">{user.email}</Box>
			</Td>
			<Td>
				<Button onClick={() => onDelete(user)}>Delete This User</Button>
			</Td>
		</Tr>
	);
}

export default UserTableItem;
