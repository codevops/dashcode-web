import React, { FormEvent } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Heading, Icon, SimpleGrid, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { Input } from "@/components/Form/Input"
import api from "@/services/api"

export default function CreateGroup() {
  const [description, setDescription] = React.useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      description,
    };

    console.log(data);

    await api.post("/group", data);

    setDescription("");

  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">Cadastrar Grupo</Heading>

          <Divider my="6" borderColor="gray.700" />

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Input
                placeholder="Digite a descrição do grupo"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                label="Descrição"
              />
            </Stack>
            <Button alignContent="right"
              mt={2}
              colorScheme="green"
              type="submit"
            >
              Salvar
            </Button>
          </form>
        </Box>

      </Flex >
    </Box >
  )
}
