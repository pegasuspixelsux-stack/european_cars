// SAMPLE DATA: replace with real inventory. Photos are temporary Unsplash stand-ins.
export type PreownedCar = {
  slug: string;
  name: string;
  year: number;
  km: number;
  price: number; // USD
  photo: string; // Unsplash photo id
  fuel: string;
  transmission: string;
  color: string;
  engine: string;
  power: string;
  drive: string;
  doors: number;
  owners: number;
  description: string;
  features: string[];
};

const COMMON_FEATURES = [
  "Control de crucero adaptativo",
  "Cámara de estacionamiento",
  "Sensores de estacionamiento delanteros y traseros",
  "Pantalla BMW Live Cockpit",
  "Apple CarPlay y Android Auto",
  "Faros LED",
  "Climatizador automático bicona",
  "Asientos con calefacción",
];

export const PREOWNED: PreownedCar[] = [
  {
    slug: "bmw-m3-competition-2021", name: "BMW M3 Competition", year: 2021, km: 28400, price: 78900,
    photo: "1615908397724-6dc711db34a7", fuel: "Nafta", transmission: "Automática de 8 velocidades", color: "Negro Zafiro",
    engine: "3.0 L biturbo, 6 cilindros en línea", power: "510 cv", drive: "Trasera", doors: 4, owners: 1,
    description: "Un M3 Competition en excelente estado, con historial de mantenimiento completo en la red oficial. Combina el rendimiento de una berlina deportiva con el confort para el uso diario.",
    features: [...COMMON_FEATURES, "Frenos M Compound", "Asientos M Sport", "Escape deportivo M"],
  },
  {
    slug: "bmw-m4-coupe-2022", name: "BMW M4 Coupé", year: 2022, km: 19200, price: 82500,
    photo: "1741889823656-c056b0c43749", fuel: "Nafta", transmission: "Automática de 8 velocidades", color: "Blanco Alpino",
    engine: "3.0 L biturbo, 6 cilindros en línea", power: "480 cv", drive: "Trasera", doors: 2, owners: 1,
    description: "Coupé de gran carácter con bajo kilometraje y mantenimiento al día. Una combinación de diseño, sonido y dinámica de conducción inconfundible.",
    features: [...COMMON_FEATURES, "Asientos deportivos M", "Head-up display", "Diferencial M activo"],
  },
  {
    slug: "bmw-m3-sedan-2020", name: "BMW M3 Sedán", year: 2020, km: 41000, price: 64900,
    photo: "1612603810075-b714656621d6", fuel: "Nafta", transmission: "Automática de 7 velocidades", color: "Gris Frozen",
    engine: "3.0 L biturbo, 6 cilindros en línea", power: "431 cv", drive: "Trasera", doors: 4, owners: 2,
    description: "Sedán deportivo con prestaciones de pista y comodidad para toda la familia. Revisado y listo para entregar.",
    features: [...COMMON_FEATURES, "Llantas M de 19\"", "Techo solar"],
  },
  {
    slug: "bmw-serie-5-2021", name: "BMW Serie 5", year: 2021, km: 36700, price: 49800,
    photo: "1717082842911-9e55aeaf80cb", fuel: "Nafta", transmission: "Automática de 8 velocidades", color: "Gris Mineral",
    engine: "2.0 L turbo, 4 cilindros", power: "252 cv", drive: "Trasera", doors: 4, owners: 1,
    description: "Elegancia ejecutiva con tecnología de asistencia a la conducción. Un único dueño y servicios oficiales al día.",
    features: [...COMMON_FEATURES, "Asistente de mantenimiento de carril", "Techo solar panorámico"],
  },
  {
    slug: "bmw-serie-3-2022", name: "BMW Serie 3", year: 2022, km: 22300, price: 41500,
    photo: "1739545884078-9cb18fd7fa33", fuel: "Nafta", transmission: "Automática de 8 velocidades", color: "Plata Glaciar",
    engine: "2.0 L turbo, 4 cilindros", power: "184 cv", drive: "Trasera", doors: 4, owners: 1,
    description: "El equilibrio ideal entre deportividad y eficiencia, con bajo kilometraje y garantía vigente.",
    features: [...COMMON_FEATURES, "Paquete M Sport", "Acceso confort sin llave"],
  },
  {
    slug: "bmw-x5-xdrive-2020", name: "BMW X5 xDrive", year: 2020, km: 52100, price: 57900,
    photo: "1736771676155-fd112cf57afe", fuel: "Diésel", transmission: "Automática de 8 velocidades", color: "Negro Carbono",
    engine: "3.0 L turbo diésel, 6 cilindros en línea", power: "265 cv", drive: "Integral xDrive", doors: 5, owners: 2,
    description: "SAV amplio y versátil con tracción integral, ideal para viajes largos y uso familiar.",
    features: [...COMMON_FEATURES, "Suspensión neumática", "Techo solar panorámico", "Portón trasero eléctrico"],
  },
  {
    slug: "bmw-serie-7-2019", name: "BMW Serie 7", year: 2019, km: 61500, price: 52400,
    photo: "1643793019410-b6ff1112da9b", fuel: "Nafta", transmission: "Automática de 8 velocidades", color: "Gris Bernina",
    engine: "3.0 L turbo, 6 cilindros en línea", power: "340 cv", drive: "Trasera", doors: 4, owners: 2,
    description: "La berlina de lujo de la marca, con acabados premium y el máximo confort de marcha.",
    features: [...COMMON_FEATURES, "Asientos con masaje", "Sistema de sonido premium", "Cierre suave de puertas"],
  },
  {
    slug: "bmw-x1-sdrive-2022", name: "BMW X1 sDrive", year: 2022, km: 15800, price: 36900,
    photo: "1635770311293-b09d08a522fc", fuel: "Nafta", transmission: "Automática de 7 velocidades", color: "Blanco Mineral",
    engine: "1.5 L turbo, 3 cilindros", power: "136 cv", drive: "Delantera", doors: 5, owners: 1,
    description: "SAV compacto y ágil, perfecto para la ciudad, con bajo kilometraje y garantía vigente.",
    features: [...COMMON_FEATURES, "Portón trasero eléctrico", "Cargador inalámbrico"],
  },
  {
    slug: "bmw-ix-xdrive40-2023", name: "BMW iX xDrive40", year: 2023, km: 9600, price: 79500,
    photo: "1657553839385-6c25d074d781", fuel: "Eléctrico", transmission: "Automática (1 velocidad)", color: "Blanco Mineral",
    engine: "Dos motores eléctricos", power: "326 cv", drive: "Integral xDrive", doors: 5, owners: 1,
    description: "SAV 100 % eléctrico de nueva generación, con casi nuevo estado y toda la tecnología de la marca.",
    features: [...COMMON_FEATURES, "Cargador CCS", "Techo panorámico Sky Lounge", "Sistema de sonido Harman Kardon"],
  },
];

export const getCar = (slug: string) => PREOWNED.find((c) => c.slug === slug);

const nf = new Intl.NumberFormat("es-UY");
export const formatKm = (km: number) => `${nf.format(km)} km`;
export const formatUsd = (n: number) => `USD ${nf.format(n)}`;
