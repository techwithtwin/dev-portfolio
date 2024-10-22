"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";

const PhoneIcon = (props: ChakraProps) => {
  return <Icon as={FaPhone} {...props} />;
};

export default PhoneIcon;
