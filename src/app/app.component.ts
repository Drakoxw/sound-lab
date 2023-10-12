import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { WHATSAPP_PHONE } from '@constants/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sound-lab';

  schema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: "SoundLab",
    description:
      'Servicio técnico, repuestos y accesorios para DJs Alquiler, venta y programación Pixel Led, Pantallas Led, Cabezas móviles',
    openingHours: 'Mo-Fr 07:00-23:00',
    telephone: `+57 ${WHATSAPP_PHONE}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Cr 52 #74-5 Barrio Santamaría-El Carmelo, Itagüi, Antioquia',
      addressLocality: 'Itagüi',
      addressRegion: 'ANT',
      addressCountry: 'CO',
    }
  };

  static isBrowser = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }
}
