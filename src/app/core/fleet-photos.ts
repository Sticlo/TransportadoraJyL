export interface FleetPhoto {
  src: string;
  srcSm: string;
  width: number;
  height: number;
  alt: string;
  label: string;
}

const photo = (name: string, width: number, height: number, alt: string, label: string): FleetPhoto => ({
  src: `/images/flota/${name}.webp`,
  srcSm: `/images/flota/${name}-sm.webp`,
  width,
  height,
  alt,
  label,
});

export const FLEET_PHOTOS = {
  azul: photo('intl-azul', 1024, 768, 'Tractomula International azul con contenedor', 'Contenedor'),
  azulRojo: photo('intl-azul-rojo', 738, 522, 'Tractomula International azul y roja con contenedor marítimo', 'Importación'),
  blancoRojo: photo('intl-blanco-rojo', 1024, 576, 'Tractomula International blanca y roja con contenedor', 'Carga seca'),
  tubos: photo('kw-tubos', 1024, 768, 'Tractomula Kenworth con plataforma cargada de tubería', 'Plataforma'),
  moradaBodega: photo('intl-morada-bodega', 1024, 575, 'Tractomula en el muelle de cargue de una bodega', 'Cargue en bodega'),
  yangMing: photo('kw-yangming', 768, 1024, 'Tractomula Kenworth turquesa con contenedor Yang Ming', 'Exportación'),
  morada: photo('intl-morada', 1024, 768, 'Tractomula International morada con contenedor', 'Contenedor'),
  azulNaranja: photo('intl-azul-naranja', 522, 547, 'Tractomula International azul y naranja con contenedor frente a una bodega', 'Contenedor'),
  carpado: photo('kw-carpado', 944, 708, 'Tractomula Kenworth encarrozada en carretera', 'Encarrozada'),
  turbo: photo('turbo-forland', 1280, 720, 'Camión turbo Forland L5 con furgón de aluminio', 'Turbo'),
} as const;

export const FLEET_GALLERY: readonly FleetPhoto[] = [
  FLEET_PHOTOS.yangMing,
  FLEET_PHOTOS.azulNaranja,
  FLEET_PHOTOS.tubos,
  FLEET_PHOTOS.azul,
  FLEET_PHOTOS.carpado,
  FLEET_PHOTOS.blancoRojo,
  FLEET_PHOTOS.turbo,
  FLEET_PHOTOS.azulRojo,
  FLEET_PHOTOS.moradaBodega,
];
