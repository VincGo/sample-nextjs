import Heading from "@/atoms/heading/Heading";
import './home.scss';
import {get} from "@/_lib/api/fetchData";
import {Product} from "@/_interface/api/product";
import Card from "@/molecules/card/Card";

export default async function Home() {
  const cards = await get('/products', process.env.NEXT_PUBLIC_API_FAKESTORE) as Product[];

  return (
    <main>
      <Heading level="1" headingClass={'home__title'}>Sample Project Nextjs</Heading>
      <div className={'home__container'}>
        {cards?.slice(0, 12).map((card: Product) => (
          <Card
            id={card.id}
            title={card.title}
            image={card.image}
            url={'product/' + card.id}
            key={card.id}
          />
        ))}
      </div>
    </main>
  );
}
