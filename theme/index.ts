import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: "primary.500",
    },
  },
  fonts: {
    heading: "inherit",
  },
  colors: {
    brand: {
      black: "#1A202C",
      white: "#FFFFFF",
    },

    primary: {
      100: "#FEEFD2",
      200: "#FDDBA7",
      300: "#F9C07A",
      400: "#F3A658",
      500: "#EB7D24",
      600: "#CA5F1A",
      700: "#A94512",
      800: "#882E0B",
      900: "#701F06",
    },
  },
});
