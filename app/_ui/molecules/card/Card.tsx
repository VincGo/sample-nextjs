import Image from "@/atoms/image/Image";
import Link from "next/link";
import {ReactElement} from "react";
import {CardInterface} from "@/molecules/card/cardInterface";
import './card.scss';

const Card = ({id, image, title, url, ...otherProps}: CardInterface): ReactElement => {

  return (
    <Link href={url} className={'card'} {...otherProps}>
      <div className={'card__image_container'}>
        <Image image={image} alt={title} fill={true} sizes={'100%'}/>
      </div>
      <p className={'card_text'}>{title}</p>
    </Link>
  )
}

export default Card;
