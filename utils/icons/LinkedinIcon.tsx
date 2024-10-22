"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa6";

const LinkedinIcon = (props: ChakraProps) => {
  return <Icon as={FaLinkedinIn} {...props} />;
};

export default LinkedinIcon;
