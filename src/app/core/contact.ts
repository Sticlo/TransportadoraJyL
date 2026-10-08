/** Código país + número, sin + ni espacios. */
export const WHATSAPP_NUMBER = '573208927644';

export const COMPANY_EMAIL = 'subgerencia@transportesjyl.com';

export const COMPANY_NAME = 'Transportes J&L SAS';

export const COMPANY_ADDRESS = 'Calle 18 #102-50, segundo piso';

export const COMPANY_CITY = 'Fontibón, Bogotá, Colombia';

export const COMPANY_ADDRESS_FULL = `${COMPANY_ADDRESS}, ${COMPANY_CITY}`;

/** Query específica para que Maps caiga en Fontibón y no en otra Calle 18. */
export const COMPANY_MAPS_QUERY =
  'Calle 18 #102-50, Fontibón, Bogotá, Colombia';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hola, quiero cotizar un envío con Transportes J&L SAS';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function emailUrl(subject: string = 'Cotización de transporte'): string {
  return `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function mapsEmbedUrl(address: string = COMPANY_MAPS_QUERY): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=17&output=embed`;
}

export function mapsLinkUrl(address: string = COMPANY_MAPS_QUERY): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function displayPhone(number: string = WHATSAPP_NUMBER): string {
  if (number.includes('X')) {
    return 'WhatsApp J&L';
  }
  const digits = number.replace(/\D/g, '');
  if (digits.startsWith('57') && digits.length === 12) {
    return `+57 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return `+${digits}`;
}
