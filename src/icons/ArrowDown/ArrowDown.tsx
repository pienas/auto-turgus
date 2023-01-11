import { Icon } from "@chakra-ui/react";
import type { IconProps } from "../../types/icon";

export const ArrowDown = (props: IconProps) => (
  <Icon viewBox="0 0 18 18" {...props}>
    <path
      d="M9 17.063c2.842 0 4.263 0 5.332-.546a5 5 0 0 0 2.185-2.184c.546-1.07.546-2.491.546-5.333s0-4.263-.546-5.332a5 5 0 0 0-2.184-2.186C13.262.938 11.841.938 9 .937c-2.842 0-4.263 0-5.332.545a5 5 0 0 0-2.186 2.186C.938 4.738.938 6.158.938 9c0 2.842 0 4.263.544 5.332a5 5 0 0 0 2.186 2.185c1.07.546 2.49.546 5.332.546Z"
      fill="currentColor"
      opacity=".32"
    />
    <path
      d="M9.53 13.28a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V5.25a.75.75 0 1 1 1.5 0v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Icon>
);
