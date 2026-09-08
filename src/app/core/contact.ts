/** Reemplaza con el número real (código país + número, sin + ni espacios). */
export const WHATSAPP_NUMBER = '57XXXXXXXXXX';

export const COMPANY_NAME = 'Transportadora J&L';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hola, quiero cotizar un envío con Transportadora J&L';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
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
