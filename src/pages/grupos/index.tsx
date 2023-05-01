import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr,TableCaption, TableContainer  } from "@chakra-ui/react"
import { RiAddLine, RiDeleteBack2Line, RiDeleteBin2Line, RiPencilLine } from "react-icons/ri"
import { Pagination } from "@/components/Pagination"
import Link from "next/link"
import { GetServerSideProps } from "next"
import { FormEvent, useState } from "react"

type Group = {
  id: string;
  description: string;
}

type GroupProps = {
  groups: Group[];
}

export default function GroupList({ groups }: GroupProps) {
  const [newGroups, setNewGroups] = useState<Group[]>(groups);

  async function handleDeleteGroup(group: Group) {
    await fetch(`http://localhost:3333/group/${group.id}`, {
      method: 'DELETE',
    });
  
    const result = await fetch('http://localhost:3333/group');
    const groups = await result.json();
  
    setNewGroups(groups);
  }
  
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="md" fontWeight="normal">Grupos</Heading>
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

          <TableContainer>
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
                {newGroups.map(group => (
                  <Tr key={group.id}>
                    <Td px="6">
                      <Checkbox colorScheme="green" />
                    </Td>
                    <Td>
                      {group.description}
                    </Td>
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        color="white"
                        bgColor="red.400"
                        leftIcon={<Icon as={RiDeleteBin2Line} />}
                        onClick={() =>                  handleDeleteGroup(group)
                        }
                      >
                        Excluir
                      </Button>
                      </Td>
                      <Td>
                        <Link href={`/grupos/editar/${group.id}`} passHref>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} />}
                          >
                            Editar
                          </Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                  </Tbody>
                </Table>
              </TableContainer>
      
            <Pagination />
          </Box>
        </Flex>
      </Box>
      
      )
    }
    
    export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('http://localhost:3333/group');
    const groups = await response.json();
    
    return {
      props: {
        groups,
      }
    }
  }