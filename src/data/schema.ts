import { product, author } from './product';

const site = 'https://gmc.dev.br';

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: site,
    jobTitle: author.jobTitle,
    knowsAbout: [...author.knowsAbout],
  };
}

export function softwareSchema(lang: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: product.operatingSystem,
    softwareVersion: product.version,
    inLanguage: [...product.languages],
    url: lang === 'pt' ? `${site}/gmcoptimizer` : `${site}/${lang}/gmcoptimizer`,
    author: {
      '@type': 'Person',
      name: author.name,
      url: site,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.priceCurrency,
      availability: 'https://schema.org/InStock',
      url: product.storeUrl,
    },
  };
}
