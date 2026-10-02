export interface CoverageCity {
  name: string;
  lat: number;
  lon: number;
  km: number;
  labelSide?: 'left' | 'right';
  port?: boolean;
}

export interface CoverageRegion {
  name: string;
  cities: readonly CoverageCity[];
}

export const COVERAGE_HUB = { name: 'Bogotá', lat: 4.711, lon: -74.072, hub: true } as const;

export const COVERAGE_REGIONS: readonly CoverageRegion[] = [
  {
    name: 'Costa Atlántica',
    cities: [
      { name: 'Barranquilla', lat: 10.964, lon: -74.796, km: 995, port: true, labelSide: 'left' },
      { name: 'Cartagena', lat: 10.391, lon: -75.479, km: 1045, port: true, labelSide: 'left' },
      { name: 'Santa Marta', lat: 11.241, lon: -74.199, km: 955, port: true },
    ],
  },
  {
    name: 'Región Andina',
    cities: [
      { name: 'Medellín', lat: 6.244, lon: -75.581, km: 415, labelSide: 'left' },
      { name: 'Bucaramanga', lat: 7.119, lon: -73.122, km: 395 },
      { name: 'Cúcuta', lat: 7.893, lon: -72.508, km: 555 },
    ],
  },
  {
    name: 'Occidente',
    cities: [
      { name: 'Pereira', lat: 4.813, lon: -75.696, km: 320, labelSide: 'left' },
      { name: 'Cali', lat: 3.452, lon: -76.532, km: 460 },
      { name: 'Buenaventura', lat: 3.88, lon: -77.031, km: 515, port: true, labelSide: 'left' },
    ],
  },
  {
    name: 'Sur y Llanos',
    cities: [
      { name: 'Villavicencio', lat: 4.142, lon: -73.627, km: 90 },
      { name: 'Neiva', lat: 2.927, lon: -75.282, km: 305 },
      { name: 'Pasto', lat: 1.214, lon: -77.281, km: 795 },
    ],
  },
];

export const COVERAGE_CITY_NAMES: readonly string[] = [
  COVERAGE_HUB.name,
  ...COVERAGE_REGIONS.flatMap((region) => region.cities.map((city) => city.name)),
];
