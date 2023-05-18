import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { RiAddLine, RiDeleteBack2Line, RiPencilLine, RiSave2Line } from 'react-icons/ri';
import { Pagination } from '@/components/Pagination';
import { Input } from '@/components/Form/Input';
import Link from 'next/link';
import { useRouter } from "next/router";

interface GroupOption {
  id: string;
  description: string;
}

export default function CreateGroup() {
  const [groupOptions, setGroupOptions] = useState<GroupOption[]>([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function loadGroupOptions() {
      const response = await fetch('http://localhost:3333/group');
      const data = await response.json();
      setGroupOptions(data as GroupOption[]);
    }

    loadGroupOptions();
  }, []);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/subgroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          groupId: selectedGroup,
          description: description,
        }),
      });

      if (response.ok) {
        // Subgroup created successfully
        console.log('Subgroup created successfully');
        window.alert("Subgrupo cadastrado com sucesso!"); // exibir mensagem de sucesso
        router.push("/subgrupos");
      } else {
        // Handle error case
        console.error('Failed to create subgroup');
      }
    } catch (error) {
      console.error('An error occurred:', error);
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

          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                mb="4"
                name="descricao"
                type="text"
                label="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Flex mt="2">
                <Select
                  placeholder="Selecione um grupo"
                  ml="2"
                  bg="gray.800"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                >
                  {groupOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.description}
                    </option>
                  ))}
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
                <Button colorScheme="teal" width="150px" leftIcon={<Icon as={RiSave2Line} />} type="submit">
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
