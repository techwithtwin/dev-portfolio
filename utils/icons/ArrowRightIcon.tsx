"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

const ArrowRightIcon = (props: ChakraProps) => {
  return <Icon as={LuArrowRight} {...props} />;
};

export default ArrowRightIcon;
