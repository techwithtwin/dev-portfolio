"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";

const XIcon = (props: ChakraProps) => {
  return <Icon as={FaXTwitter} {...props} />;
};

export default XIcon;
