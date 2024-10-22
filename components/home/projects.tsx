import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./project-card";
import { marginX } from "@/utils/constants";

const Projects = () => {
  return (
    <Stack align="center" mx={marginX} my="4rem" gap="1rem">
      <Heading> My Projects</Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {projectsData.map((p, i) => (
          <ProjectCard
            name={p.name}
            key={i}
            image={p.image}
            tech={["nextjs"]}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Projects;

const projectsData = [
  {
    name: "Techwithtwin Home",
    image: "/portfolio1.webp",
    href: "https://techwithtwin.com",
    tech: ["nextjs"],
  },
  {
    name: "About Techwithtwin",
    image: "/portfolio2.webp",
    tech: ["nextjs"],
    href: "https://techwithtwin.com/about",
  },
  {
    name: "Techwithtwin Tools",
    image: "/portfolio3.webp",
    tech: ["nextjs"],
    href: "https://techwithtwin.com/tools",
  },
];
