import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Checkbox, Divider, Flex, HStack, Heading, Icon, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, VStack, FormControl, Select } from "@chakra-ui/react"
import { RiAddLine, RiDeleteBack2Line, RiPencilLine, RiSave2Line } from "react-icons/ri"
import { Pagination } from "@/components/Pagination"
import { Input } from "@/components/Form/Input"

export default function CreateProduct() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">Cadastrar Produto</Heading>

          <Divider my="6" borderColor="gray.700" />

          <FormControl>
            <Flex mt="2">
              <Select placeholder='Selecione um Subgrupo' ml="2" bg="gray.800">
                <option value='option1'>Traseiro Bovino</option>
                <option value='option2'>Dianteiro Bovino</option>
              </Select>
            </Flex>
            <HStack spacing="6" mt="4">
              <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
                <Input name="quantidade" type="text" label="Quantidade" />
                <Input name="custo" type="text" label="Custo" />
                <Input name="total_custo" type="text" label="Total de Custo" />
                <Input name="margem" type="text" label="% Margem Desejada" />
              </SimpleGrid>
            </HStack>
          </FormControl>

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
