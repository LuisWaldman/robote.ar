import robotsData from './robots.json';

export interface Robot {
  id: string;
  nombre: string;
  industria: string;
  descripcionCorta: string;
  descripcionLarga: string;
  capacidades: string[];
  imagen: string;
  demoTelegram?: string;
  demoWhatsApp?: string;
  demoLocal: string;
  colorAccent: string;
}

export const robots: Robot[] = robotsData as Robot[];
