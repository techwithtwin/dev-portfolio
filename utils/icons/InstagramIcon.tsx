"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { SiInstagram } from "react-icons/si";

const InstagramIcon = (props: ChakraProps) => {
  return <Icon as={SiInstagram} {...props} />;
};

export default InstagramIcon;
