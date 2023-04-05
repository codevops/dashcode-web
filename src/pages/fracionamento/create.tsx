import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Checkbox, Divider, Flex, FormControl, Grid, GridItem, HStack, Heading, Icon, Select, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { RiAddLine, RiDeleteBack2Line, RiPencilLine, RiSave2Line } from "react-icons/ri"
import { Pagination } from "@/components/Pagination"
import { Input } from "@/components/Form/Input"

export default function CreateFracionamento() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">Francionamento</Heading>
          <FormControl>
            <Input mb="4" name="descricao" type="text" label="Descrição" />
            <Flex mt="2">
              <Select placeholder='Selecione um grupo' ml="2" bg="gray.800">
                <option value='option1'>Traseiro Bovino</option>
                <option value='option2'>Dianteiro Bovino</option>
              </Select>
            </Flex>
          </FormControl>

          <Divider my="6" borderColor="gray.700" />

          <TableContainer>
            <Table variant='unstyled'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead bgColor="green.100" color="gray.900" >
                <Tr>
                  <Th width="5">Código</Th>
                  <Th width="50">Descrição</Th>
                  <Th isNumeric>Quantidade</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                  <Th isNumeric>Preço</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td width={5}>1</Td>
                  <Td>Alcatra Bovina KG</Td>
                  <Td isNumeric><Input name="quantidade" /></Td>
                  <Td isNumeric><Input name="preco" /></Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha" width="100px" leftIcon={<Icon as={RiDeleteBack2Line} />}
              >
                Cancelar
              </Button>
              <Button colorScheme="teal" width="100px" leftIcon={<Icon as={RiSave2Line} />}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex >
    </Box >
  )
}
