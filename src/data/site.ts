/**
 * Fonte única de verdade para dados factuais do site.
 * Tudo aqui foi conferido no perfil público (@diariodeumaproinclusiva),
 * no Linktree e no site do Sistema A.N.A.
 */

export const site = {
  name: 'Ana Rita Marques',
  fullName: 'Ana Rita de Mattos Marques',
  role: 'Pedagoga e psicopedagoga',
  handle: '@diariodeumaproinclusiva',
  tagline: 'Inclusão com ciência e acolhimento',
  bioShort: 'Psicopedagogia, inclusão e desenvolvimento infantil.',
} as const;

export const links = {
  instagram: 'https://www.instagram.com/diariodeumaproinclusiva/',
  instagramDM: 'https://ig.me/m/diariodeumaproinclusiva',
  linktree: 'https://linktr.ee/diariodeumaproinclusiva',
  google:
    'https://www.google.com/search?q=Ana+Rita+Marques+-+Psicopedagoga+e+Apoio+Escolar',
  ana: 'https://anasistema.com.br',
  nebula: 'https://www.nebulaaudio.com.br/',
} as const;

export const nav = [
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#pratica', label: 'Prática' },
  { href: '#sistema-ana', label: 'Sistema A.N.A.' },
  { href: '#formacao', label: 'Formação' },
] as const;
