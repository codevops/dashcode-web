import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { Box, Button, Checkbox, Divider, Flex, FormControl, Grid, GridItem, HStack, Heading, Icon, Select, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { RiAddLine, RiDeleteBack2Line, RiPencilLine, RiSave2Line } from "react-icons/ri"
import { Pagination } from "@/components/Pagination"
import { Input } from "@/components/Form/Input"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from "react"

type Product = {
  codigo: number
  descricao: string
  quantidade: number
  preco: number
  total_venda: number
  perc_total_Preço: number
  total_custo: number
  custo_kilo: number
  lucro_sobre_custo: number
  lucro_sobre_venda: number
  preco_sugerido: number
}

const defaultData: Product[] = [
  {
    codigo: 1,
    descricao: 'Alcatra kg',
    quantidade: 7.500,
    preco: 20.49,
    total_venda: 400.00,
    perc_total_Preço: 30,
    total_custo: 3000.00,
    custo_kilo: 15.50,
    lucro_sobre_custo: 19,
    lucro_sobre_venda: 15,
    preco_sugerido: 39.90
  },
  {
    codigo: 2,
    descricao: 'Coxao Mole Bovino KG',
    quantidade: '7.500',
    preco: '20.49',
    total_venda: '400.00',
    perc_total_Preço: '30%',
    total_custo: 3000.00,
    custo_kilo: 15.50,
    lucro_sobre_custo: '19%',
    lucro_sobre_venda: '15',
    preco_sugerido: '39.90'
  },
  {
    codigo: 3,
    descricao: 'Picanha Bovina KG',
    quantidade: '7.500',
    preco: '20.49',
    total_venda: '400.00',
    perc_total_Preço: '30%',
    total_custo: 3000.00,
    custo_kilo: 15.50,
    lucro_sobre_custo: '19%',
    lucro_sobre_venda: '15',
    preco_sugerido: '39.90'
  },
]

const columnHelper = createColumnHelper<Product>()

const columns = [
  columnHelper.accessor('codigo', {
    header: () => <span>Código</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.descricao, {
    id: 'descricao',
    header: () => <span>Descrição</span>,
    cell: info => <span>{info.getValue()}</span>,
    footer: 'Total'
  }),
  columnHelper.accessor('quantidade', {
    header: () => <span>Quantidade</span>,
    cell: info => <span>{info.renderValue()}</span>,
  }),
  columnHelper.accessor('preco', {
    header: () => <span>Preço</span>,
    footer: props => props.column.id,

  }),
  columnHelper.accessor('total_venda', {
    header: () => <span>Total venda</span>,
    footer: props => props.column.id,
  }),
  columnHelper.accessor('total_venda', {
    header: () => <span>% Total Preço</span>,
    footer: props => props.column.id,
  }),
  columnHelper.accessor('total_custo', {
    header: () => <span>Total Custo</span>,
    footer: props => props.column.id,
  }),
  columnHelper.accessor('custo_kilo', {
    header: () => <span>Custo KG</span>,
    footer: props => props.column.id,
  }),
  columnHelper.accessor('lucro_sobre_custo', {
    header: () => <span>% Lucro Custo</span>,
    footer: props => props.column.id,
  }),
  columnHelper.accessor('lucro_sobre_venda', {
    header: () => <span>% Lucro Venda</span>,
    footer: props => props.column.id,
  }),
]

export default function CreateFracionamento() {
  const [data, setData] = useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="md" fontWeight="medium">Francionamento</Heading>
          <FormControl>
            <Flex mt="2">
              <Select placeholder='Selecione um grupo' ml="2" bg="gray.800">
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

          <Divider my="6" borderColor="gray.700" />

          <TableContainer>
            <Table variant='simple' width="full" align="left">
              <Thead bgColor="green.600" color="whitesmoke" >
                {table.getHeaderGroups().map(headeGroup => (
                  <tr key={headeGroup.id}>
                    {headeGroup.headers.map(header => (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        align="right"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </th>
                    ))}
                  </tr>
                ))}
              </Thead>
              <Tbody style={{ alignItems: 'center', justifyContent: 'center' }}>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td
                        key={cell.id}
                        align="right"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </Tbody>
              {/* <tfoot>
                {table.getFooterGroups().map(footerGroup => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map(header => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot> */}
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
