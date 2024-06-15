import CardCatalog from "@/components/CardCatalog";
import HeaderMenu from "@/components/HeaderMenu";
import listCatalog from "../../../service/dataCatalog.json";
import { formatHarga } from "@/service/formatPrice";

export default function Catalog() {
  return (
    <>
      <HeaderMenu title="List Catalog" />
      <section className="mx-auto mt-5 grid w-3/4 grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {listCatalog.map((catalog, index) => (
          <CardCatalog
            key={index}
            name={catalog.name}
            price={formatHarga(catalog.price)}
            description={catalog.description}
          />
        ))}
      </section>
    </>
  );
}
