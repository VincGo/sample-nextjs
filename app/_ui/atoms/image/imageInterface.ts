import {ImageProps} from "next/image";

export interface ImageInterface {
  image: string,
  mobile?: string,
  alt: string,
  sizes?: string,
  loading?: 'eager' | 'lazy',
  quality?: number,
  height?: number,
  width?: number,
  fill?: boolean,
  priority?: boolean,
  loader?: ImageProps['loader']
}
