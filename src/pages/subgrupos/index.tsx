import { useState, useEffect } from 'react';
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

type SubGroup = {
  id: number;
  groupid: number;
  description: string;
}

export default function SubGroupList() {
  const [subGroups, setSubGroups] = useState<SubGroup[]>([]);

  useEffect(() => {
    async function loadSubGroups() {
      const response = await fetch('http://localhost:3333/subgroup');
      const data = await response.json();
      setSubGroups(data);
    }

    loadSubGroups();
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="md" fontWeight="normal">
              SubGrupos
            </Heading>
            <Link href="/subgrupos/create">
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="green" />
                </Th>
                <Th width="8">Código</Th>
                <Th>Grupo</Th>
                <Th>Descrição</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {subGroups.map((subGroup) => (
                <Tr key={subGroup.id}>
                  <Td px="6">
                    <Checkbox colorScheme="green" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{subGroup.id}</Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{subGroup.group.description}</Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{subGroup.description}</Text>
                    </Box>
                  </Td>
                  <Td>
                    <Button
                      size="sm"
                      fontSize="sm"
                      color="gray.500"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
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
