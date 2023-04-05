import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ederson Silva</Text>
          <Text color="gray.300" fontSize="small">
            ederson@codevops.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Ederson Silva" src="https://github.com/edersonsilva.png" />
    </Flex>
  )
}
