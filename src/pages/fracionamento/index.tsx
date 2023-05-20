import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "@/components/Pagination";
import Link from "next/link";

interface Fractioning {
  id: number;
  description: string;
}

export default function FracionamentoList() {
  const [fractionings, setFractionings] = useState<Fractioning[]>([]);

  useEffect(() => {
    // Fetch fractionings from API
    fetch("http://localhost:3333/fractioning")
      .then((response) => response.json())
      .then((data) => setFractionings(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="md" fontWeight="normal">
              Fracionamento
            </Heading>
            <Link href="/fracionamento/create">
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
              </Tr>
            </Thead>
            <Tbody>
              {fractionings.map((fractioning) => (
                <Tr key={fractioning.id}>
                  <Td px="6">
                    <Checkbox colorScheme="green" />
                  </Td>
                  
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{fractioning.SubGroup.description}</Text>
                    </Box>
                  </Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      color="gray.500"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
