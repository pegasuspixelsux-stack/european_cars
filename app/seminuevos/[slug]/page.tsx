import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarDetailView } from "../../car-detail-view";
import { PREOWNED, formatKm, formatUsd, getCar } from "../../data/preowned";

export function generateStaticParams() {
  return PREOWNED.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/seminuevos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return {};
  return {
    title: `${car.name} ${car.year} — Seminuevos`,
    description: `${car.name} ${car.year}, ${formatKm(car.km)}. ${car.description}`,
  };
}

export default async function PreownedDetail({ params }: PageProps<"/seminuevos/[slug]">) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  return (
    <CarDetailView
      name={car.name}
      eyebrow="Seminuevo certificado"
      meta={`${car.year} · ${formatKm(car.km)} · ${car.fuel}`}
      price={formatUsd(car.price)}
      note="Precio de referencia. Consulta por financiación y por la permuta de tu auto actual."
      photo={car.photo}
      description={car.description}
      features={car.features}
      specs={[
        ["Año", String(car.year)],
        ["Kilometraje", formatKm(car.km)],
        ["Combustible", car.fuel],
        ["Transmisión", car.transmission],
        ["Motor", car.engine],
        ["Potencia", car.power],
        ["Tracción", car.drive],
        ["Color", car.color],
        ["Puertas", String(car.doors)],
        ["Dueños anteriores", String(car.owners)],
      ]}
      backHref="/#seminuevos"
      backLabel="Volver a seminuevos"
    />
  );
}
