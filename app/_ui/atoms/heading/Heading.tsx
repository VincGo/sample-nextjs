import type { PropsWithChildren, ReactElement } from 'react'
import {HeadingInterface} from './headingInterface';
import './heading.scss';

const Heading = ({
  level = '1',
  headingClass = '',
  children,
  ...otherProps
}: PropsWithChildren<HeadingInterface>): ReactElement => {
  const HeadingTag= `h${level}` as keyof JSX.IntrinsicElements
  return (
    <HeadingTag
      className={`title level-${level} ${headingClass}`.replace(/  +/g, ' ')}
      {...otherProps}
    >
      {children}
    </HeadingTag>
  )
}

export default Heading;
