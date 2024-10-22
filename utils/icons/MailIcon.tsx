"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

const MailIcon = (props: ChakraProps) => {
  return <Icon as={IoMail} {...props} />;
};

export default MailIcon;
