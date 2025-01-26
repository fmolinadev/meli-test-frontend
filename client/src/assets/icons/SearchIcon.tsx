import { SVGProps } from "react";
import { IconBaseInterface } from "../../interface";

const SearchIcon = ({
  color = "#fff",
  ...props
}: SVGProps<SVGSVGElement> & IconBaseInterface) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M4.75 11a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0ZM11 3.25a7.75 7.75 0 1 0 4.924 13.735l3.546 3.545a.75.75 0 1 0 1.06-1.06l-3.545-3.546A7.75 7.75 0 0 0 11 3.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export { SearchIcon };
