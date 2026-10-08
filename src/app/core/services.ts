export type ServiceIcon = 'export' | 'import' | 'truck' | 'route' | 'fleet' | 'itr' | 'policy';

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
    title: 'Póliza de cobertura',
    short: 'Respaldo asegurador en cada operación de transporte.',
    text: 'Contamos con poliza de respaldo para brindar mayor seguridad a nuestros clientes en cada operación de transporte.',
    icon: 'policy',
    flipLabel: 'Carga asegurada',
    image: '/images/flota/intl-azul-naranja-sm.webp',
    cutout: '/images/flota/cut/intl-azul-naranja.webp',
    imageAlt: 'Tractomula International azul y naranja con contenedor frente a una bodega',
  },
  {
    title: 'Exportación',
    short: 'Entregas eficientes en puerto e inspectores certificados que revisan cada unidad.',
    text: 'Le garantizamos entregas eficientes en puerto para sus exportaciones. Además, contamos con inspectores certificados que revisan las unidades antes de su embarque hacia el destino final.',
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
    short: 'Carga seca y contenedores entre ciudades, con seguimiento satelital.',
    text: 'Movemos carga seca, paletizada y contenedores en rutas urbanas e intermunicipales, con seguimiento satelital de cada viaje y escolta o motorizado cuando se requiere.',
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
    short: 'Minimulas, tractomulas, turbos y contenedores para cada tipo de carga.',
    text: 'Contamos con una flota propia de Minimulas, tractomulas, turbos y contenedores para cada tipo de carga. Conoce el detalle en la sección Flota.',
    icon: 'fleet',
    flipLabel: 'Flota propia',
    image: '/images/flota/intl-blanco-rojo-sm.webp',
    cutout: '/images/flota/cut/intl-blanco-rojo.webp',
    imageAlt: 'Tractomula International blanca y roja con contenedor',
  },
  {
    title: 'Servicios de ITR',
    short: 'Desembalaje en los patios de Buenaventura y Cartagena con aliados de confianza.',
    text: 'Con aliados en los patios de Buenaventura y Cartagena hacemos el desembalaje de tu mercancía en puerto y la llevamos en nuestros vehículos hasta el cliente final, en buen estado. Devolvemos el contenedor de inmediato para reducir costos.',
    icon: 'itr',
    flipLabel: 'Desembalaje en puerto',
    image: '/images/flota/intl-morada-bodega-sm.webp',
    cutout: '/images/flota/cut/intl-morada.webp',
    imageAlt: 'Tractomula con contenedor en el muelle de cargue de una bodega',
  },
];
