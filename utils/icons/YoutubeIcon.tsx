"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

const YoutubeIcon = (props: ChakraProps) => {
  return <Icon as={FaYoutube} {...props} />;
};

export default YoutubeIcon;
