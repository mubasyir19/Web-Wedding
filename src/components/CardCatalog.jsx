import Image from "next/image";
import Link from "next/link";

export default function CardCatalog({ name, price, description }) {
  return (
    <div className="card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56">
      <Image
        src={`/images/background.jpg`}
        height={130}
        width={130}
        alt="product"
        className="h-fit w-full object-cover"
      />
      <div className="p-2">
        <Link href={`/catalog/${name.replace(/ /g, "-")}`}>
          <p className="text-sm font-bold">{name}</p>
        </Link>
        <p className="mt-4 font-bold md:text-xs lg:text-sm">{price}</p>
        <p className="mt-4 text-xs">{description}</p>
      </div>
    </div>
  );
}
