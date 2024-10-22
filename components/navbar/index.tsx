import { marginX, navItems } from "@/utils/constants";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

const Navbar = () => {
  return (
    <Box bg="brand.black" py="1.2rem">
      <Flex
        mx={marginX}
        as="nav"
        color="white"
        align="center"
        justify="space-between"
      >
        <Heading fontSize="2xl" color="primary" fontFamily="mono">
          Techwithtwin.
        </Heading>

        <Flex gap={4} hideBelow="md">
          {navItems.map((item, i) => (
            <Text
              key={i}
              as="a"
              href={item.href}
              fontSize="lg"
              fontWeight="600"
              _hover={{
                color: "primary",
              }}
            >
              {item.label}
            </Text>
          ))}
        </Flex>

        <Button
          colorScheme="primary"
          borderRadius="xl"
          rightIcon={<LuArrowRight />}
        >
          Hire Me
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
