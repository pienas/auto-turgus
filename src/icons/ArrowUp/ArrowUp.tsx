import { Icon } from "@chakra-ui/react";
import type { IconProps } from "../../types/icon";

export const ArrowUp = (props: IconProps) => (
  <Icon viewBox="0 0 18 18" {...props}>
    <path
      d="M9 .938c-2.842 0-4.263 0-5.332.544a5 5 0 0 0-2.186 2.186C.938 4.738.938 6.158.938 9c0 2.842 0 4.263.544 5.332a5 5 0 0 0 2.186 2.185c1.07.546 2.49.546 5.332.546 2.842 0 4.263 0 5.332-.546a5 5 0 0 0 2.185-2.184c.546-1.07.546-2.491.546-5.333s0-4.263-.546-5.332a5 5 0 0 0-2.184-2.186C13.262.938 11.841.938 9 .938Z"
      fill="currentColor"
      opacity=".32"
    />
    <path
      d="M8.47 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L9.75 7.06v5.69a.75.75 0 0 1-1.5 0V7.06L6.53 8.78a.75.75 0 1 1-1.06-1.06l3-3Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Icon>
);
