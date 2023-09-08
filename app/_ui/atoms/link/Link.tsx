import { PropsWithChildren } from 'react';
import Link from 'next/link';
import {LinkInterface} from "./linkInterface";

const DefaultLink = ({
 href,
 children,
 isUnderline,
 isUppercase,
 onClick,
 rel,
 target,
 download,
 prefetch,
 ...props
}: PropsWithChildren<LinkInterface>) => (
  <>
    {target !== '_blank' ? (
      <Link
        href={href}
        data-uppercase={isUppercase}
        data-underline={isUnderline}
        onClick={onClick}
        rel={rel}
        download={download}
        {...(!prefetch && {prefetch: prefetch})}
        {...props}
      >
        {children}
      </Link>
    ) : (
      <a
        href={href}
        data-uppercase={isUppercase}
        data-underline={isUnderline}
        onClick={onClick}
        rel={rel}
        target={target}
        download={download}
        {...props}
      >
        {children}
      </a>
    )}
  </>
)

export default DefaultLink
