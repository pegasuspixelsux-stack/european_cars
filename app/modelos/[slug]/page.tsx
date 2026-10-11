import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarDetailView } from "../../car-detail-view";
import { MODELS, getModel } from "../../data/models";

export function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/modelos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) return {};
  return { title: `${model.name} — Modelos`, description: `${model.name}. ${model.copy}` };
}

export default async function ModelDetail({ params }: PageProps<"/modelos/[slug]">) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  return (
    <CarDetailView
      name={model.name}
      eyebrow="Modelo nuevo"
      meta={model.copy}
      price="Consultar precio"
      note="Consulta por versiones, disponibilidad, financiación y la permuta de tu auto actual."
      photo={model.photo}
      description={model.description}
      features={model.features}
      specs={model.specs}
      backHref="/#modelos"
      backLabel="Volver a modelos"
    />
  );
}
