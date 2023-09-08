import {get} from "@/_lib/api/fetchData";
import {Photo} from "@/_interface/api/photo";
import {ReactElement} from "react";
import './photo.scss';
import Image from "@/atoms/image/Image";
import {Params} from "@/_interface/page/params";

const Photo = async ({params}: Params): Promise<ReactElement>  => {
  const photo: Photo = await get(`/photos/${params.id}`);

  return (
    <div className={'photo__container'}>
      <h1 className={'photo__title'}>{photo.title}</h1>
      <div className={'photo__image_container'}>
        <Image
          image={photo.url}
          mobile={photo.thumbnailUrl}
          alt={photo.title}
          fill={true}
          sizes={'100%'}
        />
      </div>
    </div>
  )
}

export default Photo;
