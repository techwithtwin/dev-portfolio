import { Box, Flex, Image, Skeleton, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
  href?: string;
  tech?: string[];
  height?: string;
  transitionDuration?: number;
  slide?: boolean;
}

const ProjectCard = async ({
  image,
  name,
  href,
  transitionDuration = 4,
  slide = true,
  height = "25rem",
  tech = [],
}: Props) => {
  return (
    <Link href={href || ""} target="_blank">
      <Box overflow="hidden" borderRadius="xl" border="1px solid">
        <Stack height="fit-content" boxShadow="md" align="center">
          <Box
            overflow="hidden"
            cursor="pointer"
            h={slide ? height : "fit-content"}
          >
            <Image
              _hover={{
                transform: slide
                  ? `translateY(calc(-100% + 20rem))`
                  : "scale(1.05)",
              }}
              transition={`all ${transitionDuration}s ease-out`}
              src={image}
              w="100%"
              objectFit="cover"
              objectPosition="top center"
              alt={name}
              fallback={<Skeleton h="20rem" w="100%" />}
            />
          </Box>
          <Text
            textAlign="center"
            fontWeight="600"
            fontSize="1.4rem"
            color="primary"
            py=".5rem"
            opacity={1}
          >
            {name}
          </Text>
          <Flex mb=".5rem">
            {tech.map((t) => (
              <Tag key={t} colorScheme="teal" mx=".5rem">
                {t}
              </Tag>
            ))}
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
};

export default ProjectCard;
