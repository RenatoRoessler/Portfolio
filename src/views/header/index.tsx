import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useScrollDir } from "../../hooks/useScrollDir";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Burguer } from "./menuMobile.ts/Burguer";
import { Menu } from "./menuMobile.ts/Menu/Menu";
import { ContainerDiv, ConteudoHeader, StyledNav } from "./styles";

export const Header = () => {
  const { scrollDir } = useScrollDir();
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  if (width && width > 762) {
    return (
      <ContainerDiv showHeader={scrollDir == "scrolling up"}>
        <ConteudoHeader>
          Renato Roessler
          <StyledNav>
            <ol>
              <li>
                <Link href="/#about">Sobre</Link>
              </li>
              <li>
                <Link href="/#jobs">Experience</Link>
              </li>
              <li>
                <Link href="/#conhecimento">Conhecimentos</Link>
              </li>
              <li>
                <Link href="/#projects">Work</Link>
              </li>
              <li>
                <Link href="/#contact">Contato</Link>
              </li>
            </ol>
            <div>
              <Link
                className="resume-button"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Cv
              </Link>
            </div>
          </StyledNav>
        </ConteudoHeader>
      </ContainerDiv>
    );
  }

  return (
    <>
      <Menu open={open} id={menuId} />
      <Burguer open={open} setOpen={setOpen} id={menuId} />
    </>
  );
};
