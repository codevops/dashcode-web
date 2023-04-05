import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Checkbox, Divider, Flex, HStack, Heading, Icon, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { RiAddLine, RiDeleteBack2Line, RiPencilLine, RiSave2Line } from "react-icons/ri"
import { Input } from "@/components/Form/Input"
import Link from "next/link"

export default function CreateAssociante() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">Associar Produto</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="descricao" type="text" label="Descrição" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/associacao" passHref>
                <Button as="a" colorScheme="whiteAlpha" width="100px" leftIcon={<Icon as={RiDeleteBack2Line} />}
                >
                  Cancelar
                </Button>
              </Link>
              <Link href="/associacao" passHref>
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
