import Link from "next/link";
import React from "react";
import { StyledMenu } from "./styles";

type MenuMobileProps = {
  open: boolean;
  id: string;
};

export const Menu = ({ open, ...props }: MenuMobileProps) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link href="/#about">About</Link>

      <Link href="/#jobs">Experience</Link>

      <Link href="/#projects">Work</Link>

      <Link href="/#contact">Contact</Link>
    </StyledMenu>
  );
};
