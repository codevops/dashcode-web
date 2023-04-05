import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Divider, Flex, HStack, Heading, Icon, SimpleGrid, VStack } from "@chakra-ui/react"
import { RiDeleteBack2Line, RiSave2Line } from "react-icons/ri"
import { Input } from "@/components/Form/Input"
import Link from "next/link"

export default function CreateFornecedor() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">Cadastrar Fornecedor</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="100%">
              <Input name="descricao" type="text" label="Razão Social" />
              <Input name="descricao" type="text" label="Nome" />
            </SimpleGrid>
            <SimpleGrid columns={3} columnGap={3} rowGap={6} w="100%">
              <Input name="descricao" type="text" label="Cep" />
              <Input name="descricao" type="text" label="Endereço" />
              <Input name="descricao" type="text" label="Numero" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
              <Input name="descricao" type="text" label="Bairro" />
              <Input name="descricao" type="text" label="Cidade" />
              <Input name="descricao" type="text" label="UF" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
              <Input name="descricao" type="text" label="Fone" />
              <Input name="descricao" type="text" label="Email" />
            </SimpleGrid>

          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/fornecedores" passHref>
                <Button as="a" colorScheme="whiteAlpha" width="100px" leftIcon={<Icon as={RiDeleteBack2Line} />}
                >
                  Cancelar
                </Button>
              </Link>
              <Link href="/fornecedores" passHref>
                <Button as="a" colorScheme="teal" width="100px" leftIcon={<Icon as={RiSave2Line} />}
                >
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
