import { marginX } from "@/utils/constants";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Services = () => {
  return (
    <Stack align="center" my="4rem" mx={marginX} gap="1rem">
      <Heading>My Services</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {servicesData.map((service, i) => (
          <Stack
            key={i}
            align="center"
            textAlign="center"
            gap={4}
            bg="brand.black"
            color="brand.white"
            p="2.5rem"
            borderRadius="md"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={70}
              height={70}
            />
            <Heading color="primary" fontSize="2xl">
              {service.title}
            </Heading>
            <Text fontSize="lg">{service.description}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Services;

const servicesData = [
  {
    title: "UI/UX Design",
    description:
      "I design beautiful user interfaces for your web and mobile applications",
    icon: "/ui-ux.webp",
  },
  {
    title: "Web Development",
    description:
      "I design beautiful user interfaces for your web and mobile applications",
    icon: "/development.webp",
  },
  {
    title: "Illustration",
    description:
      "I design beautiful user interfaces for your web and mobile applications",
    icon: "/illustration.webp",
  },
];