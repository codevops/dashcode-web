import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

type Group = {
  id: string;
  description: string;
};

type GroupListProps = {
  groups: Group[];
};

export default function GroupList({ groups }: GroupListProps) {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState('');

  async function handleDeleteGroup(id: string) {
    try {
      const response = await fetch(`http://localhost:3333/group/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Group removido com sucesso');
        setSuccessMessage('Group removido com sucesso!');
        setTimeout(() => setSuccessMessage(''), 3000); // Limpa a mensagem após 3 segundos
        router.push('/grupos');
      } else {
        console.error('Failed to delete Group');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="md" fontWeight="normal">
              Grupos
            </Heading>
            <Link href="/grupos/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          {successMessage && (
            <Box mb="4" color="green.500">
              {successMessage}
            </Box>
          )}

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="green" />
                </Th>
                <Th>Descrição</Th>
                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {groups.map((group) => (
                <Tr key={group.id}>
                  <Td px="6">
                    <Checkbox colorScheme="green" />
                  </Td>
                  <Td>{group.description}</Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      color="gray.500"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      color="white"
                      bgColor="red.400"
                      leftIcon={<Icon as={RiPencilLine} />}
                      onClick={() => handleDeleteGroup(group.id)}
                    >
                      Excluir
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch('http://localhost:3333/group');
  let groups: Group[] = await result.json();
  console.log(groups);

  return {
    props: {
      groups,
    },
  };
};
