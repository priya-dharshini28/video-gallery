import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";

export default function HeaderNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Center>
          <Box p={6}>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Video Gallery
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
}
