"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa6";
const FacebookIcon = (props: ChakraProps) => {
  return <Icon as={FaFacebookF} {...props} />;
};

export default FacebookIcon;
