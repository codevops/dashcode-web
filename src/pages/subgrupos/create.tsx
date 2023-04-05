import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Checkbox, Divider, Flex, FormControl, FormLabel, HStack, Heading, Icon, Select, SelectField, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { RiAddLine, RiDeleteBack2Line, RiPencilLine, RiSave2Line } from "react-icons/ri"
import { Pagination } from "@/components/Pagination"
import { Input } from "@/components/Form/Input"
import Link from "next/link"

export default function CreateGroup() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">Cadastrar Grupo</Heading>

          <Divider my="6" borderColor="gray.700" />

          <FormControl>
            <Input mb="4" name="descricao" type="text" label="Descrição" />
            <Flex mt="2">
              <Select placeholder='Selecione um grupo' ml="2" bg="gray.800">
                <option value='option1'>Carne Bovina</option>
                <option value='option2'>Carne Suína</option>
              </Select>
            </Flex>
          </FormControl>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/subgrupos">
                <Button
                  colorScheme="whiteAlpha"
                  width="150px"
                  leftIcon={<Icon as={RiDeleteBack2Line} />}
                >
                  Cancelar
                </Button>
              </Link>
              <Link href="/subgrupos">
                <Button colorScheme="teal" width="150px" leftIcon={<Icon as={RiSave2Line} />}>
                  Salvar
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex >
    </Box >
  )
}
