export type ServiceIcon = 'export' | 'import' | 'truck' | 'route' | 'fleet' | 'itr';

export interface CompanyService {
  title: string;
  short: string;
  text: string;
  more?: string;
  icon: ServiceIcon;
  flipLabel: string;
  image: string;
  cutout: string;
  imageAlt: string;
}

export const COMPANY_SERVICES: readonly CompanyService[] = [
  {
    title: 'Exportación',
    short: 'Desde tu planta, bodega o centro de distribución hasta su despacho internacional.',
    text: 'Llevamos tu mercancía de exportación desde plantas, bodegas o centros de distribución hasta el punto de despacho internacional.',
    icon: 'export',
    flipLabel: 'Al puerto a tiempo',
    image: '/images/flota/kw-yangming-sm.webp',
    cutout: '/images/flota/cut/kw-yangming.webp',
    imageAlt: 'Tractomula Kenworth turquesa con contenedor Yang Ming',
  },
  {
    title: 'Importación',
    short: 'Desde el punto de ingreso al país hasta tus instalaciones o el destino que definas.',
    text: 'Recogemos tu mercancía en el punto de ingreso al país y la llevamos hasta tus instalaciones o el destino que definas.',
    icon: 'import',
    flipLabel: 'Del puerto a tu bodega',
    image: '/images/flota/intl-azul-rojo-sm.webp',
    cutout: '/images/flota/cut/intl-azul-rojo.webp',
    imageAlt: 'Tractomula International con contenedor marítimo',
  },
  {
    title: 'Transportes',
    short: 'Carga seca y contenedores entre ciudades, con seguimiento.',
    text: 'Movemos carga seca, paletizada y contenedores en rutas urbanas e intermunicipales, con seguimiento de cada viaje y trato directo por WhatsApp.',
    icon: 'truck',
    flipLabel: 'Carga segura',
    image: '/images/flota/kw-tubos-sm.webp',
    cutout: '/images/flota/cut/kw-tubos.webp',
    imageAlt: 'Tractomula con plataforma cargada de tubería asegurada',
  },
  {
    title: 'Distribución nacional',
    short: 'Llevamos tus productos a ciudades y regiones de todo el país.',
    text: 'Llevamos tus productos desde plantas, bodegas y centros de distribución hasta ciudades y regiones de todo el país, con el vehículo adecuado para cada tamaño de operación.',
    icon: 'route',
    flipLabel: 'Todo Colombia',
    image: '/images/flota/kw-carpado-sm.webp',
    cutout: '/images/flota/cut/kw-carpado.webp',
    imageAlt: 'Tractomula Kenworth encarrozada en carretera',
  },
  {
    title: 'Flotas',
    short: '46 vehículos propios: minimulas, tractomulas y turbos, más contenedores propios.',
    text: '46 vehículos propios —40 minimulas, 4 tractomulas y 2 turbos— y contenedores propios. Si tu operación necesita más capacidad, sumamos vehículos aliados.',
    icon: 'fleet',
    flipLabel: '46 vehículos propios',
    image: '/images/flota/intl-blanco-rojo-sm.webp',
    cutout: '/images/flota/cut/intl-blanco-rojo.webp',
    imageAlt: 'Tractomula International blanca y roja con contenedor',
  },
  {
    title: 'Servicios de ITR',
    short: 'Transporte terrestre de contenedores de importación y exportación.',
    text: 'Movemos contenedores de importación y exportación entre puertos, terminales, patios, zonas francas, plantas y bodegas.',
    icon: 'itr',
    flipLabel: 'Contenedores ITR',
    image: '/images/flota/intl-morada-bodega-sm.webp',
    cutout: '/images/flota/cut/intl-morada.webp',
    imageAlt: 'Tractomula con contenedor en el muelle de cargue de una bodega',
  },
];
