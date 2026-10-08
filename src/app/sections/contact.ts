import { Component, computed, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  COMPANY_ADDRESS,
  COMPANY_CITY,
  COMPANY_EMAIL,
  COMPANY_NAME,
  displayPhone,
  emailUrl,
  mapsLinkUrl,
  whatsappUrl,
} from '../core/contact';
import { COVERAGE_CITY_NAMES } from '../core/coverage';
import { COMPANY_SERVICES } from '../core/services';
import { RevealDirective } from '../shared/reveal.directive';

interface QuoteDraft {
  nombre: string;
  empresa: string;
  servicio: string;
  origen: string;
  destino: string;
  vehiculo: string;
  fecha: string;
  carga: string;
}

const EMPTY_DRAFT: QuoteDraft = {
  nombre: '',
  empresa: '',
  servicio: '',
  origen: '',
  destino: '',
  vehiculo: '',
  fecha: '',
  carga: '',
};

function formatDate(value: string): string {
  const [year, month, day] = value.split('-');
  return year && month && day ? `${day}/${month}/${year}` : value;
}

function buildMessage(draft: QuoteDraft): string {
  const lines = [`Hola, quiero cotizar un envío con ${COMPANY_NAME}.`];
  const who = [draft.nombre, draft.empresa].filter(Boolean).join(' – ');
  const route = [draft.origen || '¿?', draft.destino || '¿?'].join(' → ');

  if (who) lines.push(`• Nombre: ${who}`);
  if (draft.servicio) lines.push(`• Servicio: ${draft.servicio}`);
  if (draft.origen || draft.destino) lines.push(`• Ruta: ${route}`);
  if (draft.vehiculo) lines.push(`• Vehículo: ${draft.vehiculo}`);
  if (draft.fecha) lines.push(`• Fecha estimada: ${formatDate(draft.fecha)}`);
  if (draft.carga) lines.push(`• Carga: ${draft.carga}`);

  return lines.join('\n');
}

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, RouterLink, NgTemplateOutlet],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly company = COMPANY_NAME;
  readonly address = COMPANY_ADDRESS;
  readonly city = COMPANY_CITY;
  readonly mapsLink = mapsLinkUrl();
  readonly whatsapp = whatsappUrl();
  readonly phoneLabel = displayPhone();
  readonly email = COMPANY_EMAIL;
  readonly emailLink = emailUrl();

  readonly cities = COVERAGE_CITY_NAMES;
  readonly services = COMPANY_SERVICES.map((service) => service.title);
  readonly vehicles = ['Minimula', 'Tractomula', 'Turbo', 'No estoy seguro'];

  readonly steps = [
    {
      title: 'Cuéntanos tu carga',
      text: 'Origen, destino, tipo de mercancía y fecha. Con eso basta para empezar.',
    },
    {
      title: 'Recibe tu cotización',
      text: 'Te respondemos por WhatsApp con el precio y el vehículo indicado para tu ruta.',
    },
    {
      title: 'Programamos el viaje',
      text: 'Cargamos en la fecha acordada y te mantenemos al tanto hasta la entrega.',
    },
  ];

  readonly faqs = [
    {
      q: '¿Qué tipo de carga transportan?',
      a: 'Carga seca, carga completa y contenedores, para distribución nacional, importación y exportación.',
    },
    {
      q: '¿Manejan importación y exportación?',
      a: 'Sí. Llevamos tu exportación hasta el punto de despacho y tu importación desde el puerto hasta tu destino.',
    },
    {
      q: '¿Llegan a municipios fuera de las ciudades principales?',
      a: 'Sí, hacemos rutas intermunicipales. Escríbenos el origen y el destino exactos y te confirmamos disponibilidad.',
    },
    {
      q: '¿Qué vehículo necesito para mi carga?',
      a: 'Depende del peso, el volumen y el tipo de mercancía. Si no estás seguro, cuéntanos qué vas a mover y te recomendamos entre minimula, tractomula o turbo.',
    },
    {
      q: '¿Cómo cuidan mi carga en ruta?',
      a: 'Contamos con seguimiento por plataforma satelital y, cuando se requiere, acompañamiento con escolta o motorizado.',
    },
    {
      q: '¿Qué es el servicio de ITR?',
      a: 'Es el transporte terrestre de contenedores de importación y exportación, entre puertos, patios, zonas francas, plantas y bodegas.',
    },
  ];

  protected readonly draft = signal<QuoteDraft>(EMPTY_DRAFT);
  protected readonly message = computed(() => buildMessage(this.draft()));
  protected readonly filled = computed(() =>
    Object.values(this.draft()).some((value) => value.trim() !== ''),
  );

  protected sync(form: HTMLFormElement): void {
    const data = new FormData(form);
    const read = (key: keyof QuoteDraft) => String(data.get(key) ?? '').trim();
    this.draft.set({
      nombre: read('nombre'),
      empresa: read('empresa'),
      servicio: read('servicio'),
      origen: read('origen'),
      destino: read('destino'),
      vehiculo: read('vehiculo'),
      fecha: read('fecha'),
      carga: read('carga'),
    });
  }

  protected send(event: SubmitEvent, form: HTMLFormElement): void {
    event.preventDefault();
    this.sync(form);
    window.open(whatsappUrl(this.message()), '_blank', 'noopener');
  }
}
