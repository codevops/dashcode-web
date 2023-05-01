import React, { FormEvent, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Input } from "@/components/Form/Input";
import api from "@/services/api";
import axios from "axios";
import { RiDeleteBack2Line, RiSave2Line } from "react-icons/ri";
import type { IconType } from "react-icons";
import { useRouter } from "next/router";

export default function CreateGroup() {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3333/group", {
        description,
      });
  
      console.log("Registro criado com sucesso:", response.data);
      router.push("/grupos");
      alert("Cadastro realizado com sucesso!"); 
    } catch (error) {
      console.error("Erro ao criar registro:", error);
      alert("Erro ao inserir Grupo!"); 
    }
  };
  
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">
            Cadastrar Grupo
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <form onSubmit={handleSubmit}>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input
                  name="descricao"
                  type="text"
                  label="Descrição"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </SimpleGrid>

              <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                  <Button
                    colorScheme="whiteAlpha"
                    width="100px"
                    leftIcon={<Icon as={RiDeleteBack2Line} />}
                  >
                    Cancelar
                  </Button>
                  <Button
                    colorScheme="teal"
                    width="100px"
                    type="submit"
                    leftIcon={<Icon as={RiSave2Line} />}
                  >
                    Salvar
                  </Button>
                </HStack>
              </Flex>
            </form>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
