"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";

const CallbackIcon = (props: ChakraProps) => {
  return <Icon as={FiPhoneCall} {...props} />;
};

export default CallbackIcon;
