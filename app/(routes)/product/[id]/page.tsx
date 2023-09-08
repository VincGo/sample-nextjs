import {get} from "@/_lib/api/fetchData";
import {Params} from "@/_interface/page/params";
import {Product} from "@/_interface/api/product";
import {ReactElement} from "react";
import Image from "@/atoms/image/Image";
import './product.scss';

const Product = async ({params}: Params): Promise<ReactElement> => {
  const product: Product = await get('/products/' + params.id, process.env.NEXT_PUBLIC_API_FAKESTORE);
  console.log(product)
  return (
    <main className={'product'}>
      <h1 className={'product__title'}>{product.title}</h1>
      <div className={'product__image_container'}>
        <Image image={product.image} alt={product.title} fill={true} sizes={'100%'} />
      </div>
      <p className={'product__description'}>{product.description}</p>
    </main>
  )
}

export default Product;
