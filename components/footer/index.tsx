import { marginX } from "@/utils/constants";
import { InstagramIcon, MailIcon, PhoneIcon, XIcon } from "@/utils/icons";
import { Box, Flex, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box borderTop="2px solid gray" bg="brand.black">
      <Stack gap={3} mx={marginX} py="2rem" align="center">
        <Flex gap={4}>
          {socials.map((s, i) => (
            <Stack
              as="a"
              href={s.href}
              target="_black"
              key={i}
              bg="primary.600"
              p={2}
              borderRadius="xl"
              _hover={{
                bg: "gray.600",
              }}
            >
              <Box as={s.icon} boxSize={8} color="brand.white" />
            </Stack>
          ))}
        </Flex>
        <Flex color="brand.white">
          &copy; 2024 Techwithtwin. All rights reserved.
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;

const socials = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/techwithtwin",
  },
  {
    name: "Twitter",
    icon: XIcon,
    href: "https://twitter.com/techwithtwin",
  },
  {
    name: "Call",
    icon: PhoneIcon,
    href: "tel:+254797153028",
  },
  {
    name: "Email",
    icon: MailIcon,
    href: "mailto:techwithtwin@gmail.com",
  },
];
