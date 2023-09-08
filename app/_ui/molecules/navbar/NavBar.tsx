import {PropsWithChildren, ReactElement} from "react";
import {NavBarInterface} from "./navBarInterface";
import Image from "next/image";
import './navbar.scss';
import DarkModeButton from "@/_ui/atoms/darkmode/DarkMode";
import Link from "next/link";

const NavBar = ({
  image= 'images/logo-mlp.svg',
  items
}: PropsWithChildren<NavBarInterface>): ReactElement => {
  return (
    <nav className={'navbar'}>
      <div className={'navbar__logo_container'}>
        <Link href={'/'}>
          <Image src={image} alt={"hello"} fill={true} />
        </Link>
      </div>
      <div className={'navbar__items'}>
        {items.map((item, index) => (
          <a key={index} className={'navbar__link'} href={item.href}>{item.name}</a>
        ))}
      </div>
      <DarkModeButton />
    </nav>
  );
}

export default NavBar;
