import { InjectionToken } from '@angular/core';

const urls: readonly string[] = Object.freeze(['animals', 'family']);

export const FIGURES = new InjectionToken<Promise<any>>('figures list', {
  factory: () => Promise.all(urls.map((url) => fetch(`assets/data/${url}.json`).then((resp) => ({ [url]: resp.json() })))),
});

export const FAMILY = new InjectionToken<Promise<any>>('figures list', {
  factory: () => Promise.all(urls.map((url) => fetch(`assets/data/${url}.json`).then((resp) => ({ [url]: resp.json() })))),
});
