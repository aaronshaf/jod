// Structured data (schema.org JSON-LD) builders. One <script type="application/ld+json"> per page holding a single @graph.
// Every entity has a stable @id that is identical wherever it appears, so crawlers can merge the pages into one graph.
const SITE = "https://jod.mrm.org";
const PDM = "https://creativecommons.org/publicdomain/mark/1.0/";
const MRM = "https://www.mrm.org/";
const ID = {
  publisher: MRM + "#organization",
  website: SITE + "/#website",
  periodical: SITE + "/#periodical",
  dataset: SITE + "/data/#dataset",
  volume: v => `${SITE}/${v}/#volume`,
  article: (v, p) => `${SITE}/${v}/${p}/#article`,
  quotation: n => `${SITE}/quotes/${n}/#quotation`,
  person: slug => `${SITE}/speakers/#${slug}`,
  portrait: slug => `${SITE}/about-portraits/#${slug}`,
  webpage: url => url + "#webpage",
  breadcrumb: url => url + "#breadcrumb",
  list: url => url + "#list",
};
const ref = id => ({ "@id": id });
const strip = o => { for (const k of Object.keys(o)) if (o[k] === undefined || o[k] === null || o[k] === "") delete o[k]; return o; };

const publisher = () => ({ "@type": "Organization", "@id": ID.publisher, name: "Mormonism Research Ministry", url: MRM });
const website = () => ({
  "@type": "WebSite", "@id": ID.website, url: SITE + "/", name: "Journal of Discourses", inLanguage: "en", publisher: ref(ID.publisher),
  potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: SITE + "/search/?q={search_term_string}" }, "query-input": "required name=search_term_string" },
});
const periodical = extra => Object.assign({
  "@type": "Periodical", "@id": ID.periodical, name: "Journal of Discourses", alternateName: "JD", url: SITE + "/", inLanguage: "en",
  startDate: "1854", endDate: "1886", isAccessibleForFree: true, license: PDM,
}, extra || {});
const volumeNode = (v, extra) => Object.assign({ "@type": "PublicationVolume", "@id": ID.volume(v), volumeNumber: String(v), name: `Journal of Discourses, volume ${v}`, url: `${SITE}/${v}/`, inLanguage: "en", isPartOf: ref(ID.periodical) }, extra || {});
const base = () => [publisher(), website(), periodical()];

// Portrait credit as an ImageObject (public-domain Wikimedia Commons image; details on /about-portraits/).
const imageNode = (port, siteSrc) => strip({
  "@type": "ImageObject", "@id": ID.portrait(port.slug), contentUrl: SITE + port.src320, thumbnailUrl: SITE + port.src160, url: SITE + port.src320, width: { "@type": "QuantitativeValue", value: 320, unitCode: "E37" }, height: { "@type": "QuantitativeValue", value: 320, unitCode: "E37" },
  encodingFormat: "image/webp", caption: port.alt, creditText: `${port.author}; ${port.date}. Public domain. Via Wikimedia Commons`, license: PDM, acquireLicensePage: port.commons_url,
  copyrightNotice: "Public domain", isAccessibleForFree: true,
});
const personNode = (speaker, slug, port) => strip({
  "@type": "Person", "@id": ID.person(slug), name: speaker.replace(/, Jr$/, " Jr."), image: port ? ref(ID.portrait(port.slug)) : undefined,
  sameAs: port && (port.wikipedia || port.wikidata) ? [port.wikipedia && "https://en.wikipedia.org/wiki/" + encodeURIComponent(port.wikipedia.replace(/ /g, "_")).replace(/%28/g, "(").replace(/%29/g, ")"), port.wikidata && "https://www.wikidata.org/wiki/" + port.wikidata].filter(Boolean) : undefined,
});
const crumbs = (url, items) => ({ "@type": "BreadcrumbList", "@id": ID.breadcrumb(url), itemListElement: items.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })) });
const webpage = (url, type, name, extra) => strip(Object.assign({ "@type": type, "@id": ID.webpage(url), url, name, inLanguage: "en", isPartOf: ref(ID.website), publisher: ref(ID.publisher), breadcrumb: ref(ID.breadcrumb(url)) }, extra || {}));
const graph = nodes => ({ "@context": "https://schema.org", "@graph": nodes });
const script = g => `<script type="application/ld+json">${JSON.stringify(g).replace(/</g, "\\u003c")}</script>`;

module.exports = { SITE, PDM, MRM, ID, ref, strip, publisher, website, periodical, volumeNode, base, imageNode, personNode, crumbs, webpage, graph, script };
