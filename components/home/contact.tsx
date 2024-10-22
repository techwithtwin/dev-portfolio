import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box id="contact" bg="brand.black" color="brand.white" py="3rem">
      <Stack align="center" mx={marginX} gap={4}>
        <Heading>Contact Me</Heading>
        <Stack gap={6} align="center" mx="auto" minW="70%">
          <Text>Have a project in Mind? Reach out</Text>

          <Flex gap={2} w="100%">
            <FormControl>
              <Input bg="gray.700" placeholder="Name" />
            </FormControl>
            <FormControl>
              <Input bg="gray.700" placeholder="Email" type="email" />
            </FormControl>
          </Flex>
          <Flex gap={2} w="100%">
            <FormControl>
              <Input bg="gray.700" placeholder="Phone" type="tel" />
            </FormControl>
            <FormControl>
              <Input bg="gray.700" placeholder="Subject" />
            </FormControl>
          </Flex>
          <Textarea bg="gray.700" placeholder="Comment" />

          <Button w="fit-content" colorScheme="primary">
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
