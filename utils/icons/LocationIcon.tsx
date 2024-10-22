"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

const LocationIcon = (props: ChakraProps) => {
  return <Icon as={MdLocationPin} {...props} />;
};

export default LocationIcon;
