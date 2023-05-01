import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
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
  const [newGroups, setNewGroups] = useState('');

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
              {groups.map(group => (
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
      </Flex >
    </Box >
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch('http://localhost:3333/group');

  let groups: Group[] = await result.json();

  console.log(groups);

  return {
    props: {
      groups,
    }
  }
}
