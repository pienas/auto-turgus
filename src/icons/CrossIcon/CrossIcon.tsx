import { Icon } from "@chakra-ui/react";
import type { IconProps } from "../../types/icon";

export const CrossIcon = (props: IconProps) => (
  <Icon viewBox="0 0 14 14" {...props}>
    <path
      d="M1 13 13 1M1 1l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
);
