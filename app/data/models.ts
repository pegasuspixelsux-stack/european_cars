// SAMPLE DATA: replace with real model information. Photos are temporary Unsplash stand-ins.
export type NewModel = {
  slug: string;
  name: string;
  photo: string; // Unsplash photo id
  copy: string; // short card text
  description: string;
  features: string[];
  specs: [string, string][];
};

const COMMON = [
  "Pantalla BMW Curved Display",
  "Asistente de conducción con control de crucero adaptativo",
  "Cámara de estacionamiento y sensores",
  "Faros LED",
  "Apple CarPlay y Android Auto",
  "Climatizador automático",
];

export const MODELS: NewModel[] = [
  {
    slug: "bmw-ix3", name: "BMW iX3", photo: "1764588061773-6200f626c290",
    copy: "Vehículo deportivo 100 % eléctrico con hasta 460 km de autonomía.",
    description: "El BMW iX3 combina dinámica de conducción 100 % eléctrica con el confort y la tecnología de la nueva generación de la marca. Consulta por las versiones y la disponibilidad en Uruguay.",
    features: [...COMMON, "Carga rápida en corriente continua", "Techo panorámico"],
    specs: [["Carrocería", "SAV"], ["Propulsión", "100 % eléctrica"], ["Tracción", "Según versión (xDrive o sDrive)"], ["Estado", "Nuevo, 0 km"], ["Garantía", "Garantía oficial de fábrica"]],
  },
  {
    slug: "bmw-ix", name: "BMW iX", photo: "1666005334804-9f80fb0bc594",
    copy: "La referencia moderna del lujo eléctrico y la arquitectura minimalista.",
    description: "Un SAV eléctrico de lujo con interior minimalista, materiales sostenibles y la máxima tecnología de conectividad y asistencia a la conducción.",
    features: [...COMMON, "Techo panorámico Sky Lounge", "Sistema de sonido premium", "Suspensión neumática"],
    specs: [["Carrocería", "SAV"], ["Propulsión", "100 % eléctrica"], ["Tracción", "Integral xDrive"], ["Estado", "Nuevo, 0 km"], ["Garantía", "Garantía oficial de fábrica"]],
  },
  {
    slug: "bmw-serie-5-sedan", name: "BMW Serie 5 Sedán", photo: "1717082842911-9e55aeaf80cb",
    copy: "Elegancia ejecutiva con sistemas inteligentes de asistencia digital.",
    description: "La berlina ejecutiva de BMW: confort de marcha, diseño atemporal y asistentes digitales pensados para acompañarte en cada viaje.",
    features: [...COMMON, "Asientos con calefacción", "Techo solar", "Cargador inalámbrico"],
    specs: [["Carrocería", "Sedán"], ["Puertas", "4"], ["Transmisión", "Automática de 8 velocidades"], ["Estado", "Nuevo, 0 km"], ["Garantía", "Garantía oficial de fábrica"]],
  },
  {
    slug: "bmw-serie-8-coupe", name: "BMW Serie 8 Coupé", photo: "1615908397724-6dc711db34a7",
    copy: "Rendimiento sin concesiones y una estética de gran turismo que impresiona.",
    description: "Un gran turismo de dos puertas que une prestaciones deportivas, lujo y un diseño que no pasa desapercibido.",
    features: [...COMMON, "Sistema de sonido Bowers & Wilkins", "Paquete M Sport"],
    specs: [["Carrocería", "Coupé"], ["Puertas", "2"], ["Transmisión", "Automática de 8 velocidades"], ["Estado", "Nuevo, 0 km"], ["Garantía", "Garantía oficial de fábrica"]],
  },
];

export const getModel = (slug: string) => MODELS.find((m) => m.slug === slug);
