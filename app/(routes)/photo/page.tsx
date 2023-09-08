import Heading from "@/atoms/heading/Heading";
import {Photo} from "@/_interface/api/photo";
import './photo.scss';
import {get} from "@/_lib/api/fetchData";
import Card from "@/molecules/card/Card";

export default async function Home() {
  const cards = await get('/photos') as Photo[];

  return (
    <main>
      <Heading level="1" headingClass={'home__title'}>Photos</Heading>
      <div className={'home__container'}>
        {cards?.slice(0, 12).map((card: Photo) => (
          <Card
            id={card.id}
            image={card.thumbnailUrl}
            url={'/photo/' + card.id}
            title={card.title}
            key={card.id}
          />
        ))}
      </div>
    </main>
  );
}
