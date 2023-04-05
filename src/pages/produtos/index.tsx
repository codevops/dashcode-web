import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Pagination } from "@/components/Pagination"
import Link from "next/link"

export default function ProductList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="md" fontWeight="normal">Produtos</Heading>
            <Link href="/produtos/create" passHref>
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
                <Th width="8">Código</Th>
                <Th>Descrição</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="green" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">1</Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Carne Bovina</Text>
                  </Box>
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    color="gray.800"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex >
    </Box >
  )
}
