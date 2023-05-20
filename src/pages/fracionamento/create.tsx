import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Box, Button, Divider, Flex, FormControl, Grid, GridItem, HStack, Heading, Icon, Select, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { RiAddLine, RiDeleteBack2Line, RiPencilLine, RiSave2Line } from "react-icons/ri";
import { Pagination } from "@/components/Pagination";
import { Input } from "@/components/Form/Input";
import { useState, useEffect } from "react";

type SubGroup = {
  id: string;
  description: string;
};

type Product = {
  codigo: number;
  descricao: string;
  quantidade: number;
  preco: number;
  total_venda: number;
  perc_total_preco: number;
  total_custo: number;
  custo_kilo: number;
  lucro_sobre_custo: number;
  lucro_sobre_venda: number;
  preco_sugerido: number;
};

const defaultData: Product[] = [
  {
    codigo: 1,
    descricao: 'Alcatra kg',
    quantidade: 7.500,
    preco: 20.49,
    total_venda: 400.00,
    perc_total_preco: 30,
    total_custo: 3000.00,
    custo_kilo: 15.50,
    lucro_sobre_custo: 19,
    lucro_sobre_venda: 15,
    preco_sugerido: 39.90
  },
  // ... rest of the data
];

export default function CreateFracionamento() {
  const [subGroups, setSubGroups] = useState<SubGroup[]>([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [data, setData] = useState<Product[]>(defaultData);
  const [fractioningData, setFractioningData] = useState<any>(null);

  useEffect(() => {
    // Fetch subgroups from API
    fetch("http://localhost:3333/subgroup")
      .then((response) => response.json())
      .then((data) => setSubGroups(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Fetch products from API based on selected group
    if (selectedGroup) {
      fetch(`http://localhost:3333/product?subgroup=${selectedGroup}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }
  }, [selectedGroup]);

  useEffect(() => {
    // Fetch fractioning data from API
    fetch("http://localhost:3333/Fractioning")
      .then((response) => response.json())
      .then((data) => setFractioningData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">
            Francionamento
          </Heading>
          <FormControl>
            <Flex mt="2">
              <Select
                placeholder="Selecione um grupo"
                ml="2"
                bg="gray.800"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
              >
                {subGroups.map((subGroup) => (
                  <option key={subGroup.id} value={subGroup.id}>
                    {subGroup.description}
                  </option>
                ))}
              </Select>
            </Flex>
            <HStack spacing="6" mt="4" className="dados_fractioning">
              <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
                <Input
                  name="quantidade"
                  type="text"
                  label="Quantidade"
                  value={fractioningData?.quantidade}
                />
                <Input
                  name="custo"
                  type="text"
                  label="Custo"
                  value={fractioningData?.custo}
                />
                <Input
                  name="total_custo"
                  type="text"
                  label="Total de Custo"
                  value={fractioningData?.total_custo}
                />
                <Input
                  name="margem_desejada"
                  type="text"
                  label="% Margem Desejada"
                  value={fractioningData?.margem_desejada}
                />
              </SimpleGrid>
            </HStack>
          </FormControl>

          <Divider my="6" borderColor="gray.700" />

          <TableContainer>
            <Table variant="simple" width="full" align="left">
              <Thead bgColor="green.600" color="whitesmoke">
                <Tr>
                  <Th>Descrição</Th>
                  <Th>Quantidade</Th>
                  <Th>Preço</Th>
                  <Th>Total venda</Th>
                  <Th>% Total Preço</Th>
                  <Th>Total Custo</Th>
                  <Th>Custo KG</Th>
                  <Th>% Lucro Custo</Th>
                  <Th>% Lucro Venda</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((product) => (
                  <Tr key={product.id}>
                    <Td>{product.description}</Td>
                    <Td>{product.quantidade}</Td>
                    <Td>{product.preco}</Td>
                    <Td>{product.total_venda}</Td>
                    <Td>{product.perc_total_preco}</Td>
                    <Td>{product.total_custo}</Td>
                    <Td>{product.custo_kilo}</Td>
                    <Td>{product.perc_lucro_custo}</Td>
                    <Td>{product.perc_lucro_venda}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
            <Button
               width="100px"
               color="gray.600"
               leftIcon={<Icon as={RiPencilLine} />}
               >Editar
              </Button>

              <Button
                colorScheme="red"
                width="100px"
                leftIcon={<Icon as={RiDeleteBack2Line} />}
              >
                Cancelar
              </Button>

              <Button
                colorScheme="teal"
                width="100px"
                leftIcon={<Icon as={RiSave2Line} />}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
