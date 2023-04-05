import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          color="gray.800"
          disabled
          _disabled={{
            bg: "gray.800",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.500"
          _hover={{
            bg: "gray.800",
            cursor: "default",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.500"
          _hover={{
            bg: "gray.800",
            cursor: "default",
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.500"
          _hover={{
            bg: "gray.800",
            cursor: "default",
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  )
}
