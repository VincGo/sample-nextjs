'use client'

import NextImage from "next/image";
import useIsMobile from "@/_hooks/responsive/useIsMobile";
import {useEffect, useState} from "react";
import {ImageInterface} from "@/atoms/image/imageInterface";

const Image = ({
    sizes = '100vw',
    loading = 'eager',
    quality = 100,
    height,
    width,
    image,
    mobile,
    alt,
    fill,
    priority = true,
    loader,
  }: ImageInterface
) => {
  const [url, setUrl] = useState<string>('')
  const isMobile: boolean = useIsMobile();

  useEffect((): void => {
    if (isMobile && mobile && mobile !== url) {
      setUrl(mobile)
    } else if (image !== url) {
      setUrl(image)
    }
  }, [isMobile]);

  return (
    <>
      {url && <NextImage
          src={url}
          alt={alt}
          height={height}
          width={width}
          quality={quality}
          loading={loading}
          fill={fill}
          priority={priority}
          loader={loader}
          sizes={sizes}
      />}
    </>
  )
}

export default Image;
