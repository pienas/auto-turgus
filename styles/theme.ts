import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'JetBrains Mono', monospace`,
    body: `'JetBrains Mono', monospace`,
  },
  styles: {
    global: {
      heading: {
        color: "black",
      },
      body: {
        color: "black",
        padding: "0",
        margin: "0",
      },
    },
  },
});
