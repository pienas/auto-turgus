import { Icon } from "@chakra-ui/react";
import type { IconProps } from "../../types/icon";

export const CheckIcon = (props: IconProps) => (
  <Icon viewBox="0 0 14 11" {...props}>
    <path
      d="M1 6.25 4.75 10 13 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
);
