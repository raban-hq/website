// Country -> a point to centre the globe on, keyed by ISO 3166-1 alpha-2.
//
// GENERATED, do not hand-edit — regenerate with scripts/gen-country-centroids.mjs
// (`node scripts/gen-country-centroids.mjs`) if world-atlas is updated.
//
// Each point is the spherical centroid of the country's LARGEST polygon in the
// same world-atlas/countries-110m shapes the globe draws, so the marker always
// lands on the country you can see. Largest polygon, not the whole shape:
// French Guiana or Alaska would otherwise drag the point out to sea. A few
// crescent-shaped countries (HT (Haiti), IL (Israel), VN (Vietnam), HR (Croatia)) had a centroid outside
// their own borders and were moved to the interior point furthest from any edge.
//
// The 110m atlas has no shape for the microstates and territories (Singapore,
// Malta, Hong Kong, Monaco...). Those are absent here on purpose: visitor-geo.ts
// falls back to the IP's own coordinates, which for a city-state is already
// country-level precision.

export const COUNTRY_CENTROIDS: Record<string, [number, number]> = {
  AE: [54.2, 23.87], // United Arab Emirates
  AF: [66, 33.84], // Afghanistan
  AL: [20.03, 41.13], // Albania
  AM: [45.01, 40.21], // Armenia
  AO: [17.5, -12.27], // Angola
  AQ: [83.15, -84.78], // Antarctica
  AR: [-64.74, -34.57], // Argentina
  AT: [14.06, 47.62], // Austria
  AU: [134.23, -25.62], // Australia
  AZ: [47.69, 40.28], // Azerbaijan
  BA: [17.82, 44.18], // Bosnia & Herzegovina
  BD: [90.28, 23.83], // Bangladesh
  BE: [4.59, 50.65], // Belgium
  BF: [-1.78, 12.31], // Burkina Faso
  BG: [25.19, 42.76], // Bulgaria
  BI: [29.91, -3.38], // Burundi
  BJ: [2.34, 9.64], // Benin
  BN: [114.92, 4.69], // Brunei
  BO: [-64.65, -16.7], // Bolivia
  BR: [-53.17, -10.66], // Brazil
  BS: [-77.91, 24.51], // Bahamas
  BT: [90.47, 27.43], // Bhutan
  BW: [23.78, -22.08], // Botswana
  BY: [27.96, 53.5], // Belarus
  BZ: [-88.7, 17.19], // Belize
  CA: [-97.86, 58.45], // Canada
  CD: [23.58, -2.84], // Congo - Kinshasa
  CF: [20.37, 6.55], // Central African Republic
  CG: [15.14, -0.84], // Congo - Brazzaville
  CH: [8.12, 46.79], // Switzerland
  CI: [-5.61, 7.55], // Côte d’Ivoire
  CL: [-71.24, -35.88], // Chile
  CM: [12.61, 5.65], // Cameroon
  CN: [103.42, 36.75], // China
  CO: [-73.07, 3.92], // Colombia
  CR: [-84.17, 9.97], // Costa Rica
  CU: [-78.93, 21.65], // Cuba
  CY: [33.04, 34.91], // Cyprus
  CZ: [15.34, 49.78], // Czechia
  DE: [10.27, 51.08], // Germany
  DJ: [42.5, 11.77], // Djibouti
  DK: [9.3, 56.21], // Denmark
  DO: [-70.46, 18.89], // Dominican Republic
  DZ: [2.61, 28.09], // Algeria
  EC: [-78.38, -1.45], // Ecuador
  EE: [25.83, 58.64], // Estonia
  EG: [29.86, 26.47], // Egypt
  EH: [-12.19, 24.28], // Western Sahara
  ER: [38.69, 15.43], // Eritrea
  ES: [-3.62, 40.32], // Spain
  ET: [39.56, 8.65], // Ethiopia
  FI: [26.14, 64.26], // Finland
  FJ: [178, -17.83], // Fiji
  FK: [-59.42, -51.72], // Falkland Islands
  FR: [2.35, 46.56], // France
  GA: [11.69, -0.65], // Gabon
  GB: [-2.57, 53.77], // United Kingdom
  GE: [43.5, 42.17], // Georgia
  GH: [-1.24, 7.92], // Ghana
  GL: [-41.96, 73.15], // Greenland
  GM: [-15.43, 13.48], // Gambia
  GN: [-11.06, 10.45], // Guinea
  GQ: [10.37, 1.65], // Equatorial Guinea
  GR: [22.55, 39.32], // Greece
  GT: [-90.37, 15.7], // Guatemala
  GW: [-15.11, 12.02], // Guinea-Bissau
  GY: [-58.97, 4.79], // Guyana
  HN: [-86.59, 14.83], // Honduras
  HR: [16.52, 45.81], // Croatia
  HT: [-72.19, 19.27], // Haiti
  HU: [19.34, 47.2], // Hungary
  ID: [114.02, -0.25], // Indonesia
  IE: [-8.02, 53.17], // Ireland
  IL: [34.87, 30.96], // Israel
  IN: [79.54, 22.82], // India
  IQ: [43.79, 33.01], // Iraq
  IR: [54.45, 32.47], // Iran
  IS: [-18.77, 65.08], // Iceland
  IT: [12.37, 43.43], // Italy
  JM: [-77.32, 18.14], // Jamaica
  JO: [36.77, 31.24], // Jordan
  JP: [136.71, 36.01], // Japan
  KE: [37.79, 0.6], // Kenya
  KG: [74.59, 41.52], // Kyrgyzstan
  KH: [104.87, 12.68], // Cambodia
  KP: [127.13, 40.13], // North Korea
  KR: [127.82, 36.42], // South Korea
  KW: [47.6, 29.31], // Kuwait
  KZ: [67.24, 48.41], // Kazakhstan
  LA: [103.79, 18.43], // Laos
  LB: [35.87, 33.91], // Lebanon
  LK: [80.67, 7.7], // Sri Lanka
  LR: [-9.41, 6.43], // Liberia
  LS: [28.17, -29.62], // Lesotho
  LT: [23.89, 55.28], // Lithuania
  LU: [5.97, 49.76], // Luxembourg
  LV: [24.84, 56.82], // Latvia
  LY: [18.03, 26.99], // Libya
  MA: [-8.69, 29.82], // Morocco
  MD: [28.42, 47.2], // Moldova
  ME: [19.29, 42.79], // Montenegro
  MG: [46.73, -19.3], // Madagascar
  MK: [21.7, 41.61], // North Macedonia
  ML: [-3.59, 17.24], // Mali
  MM: [96.51, 20.94], // Myanmar (Burma)
  MN: [103.02, 46.95], // Mongolia
  MR: [-10.35, 20.18], // Mauritania
  MW: [34.19, -13.16], // Malawi
  MX: [-102.22, 23.91], // Mexico
  MY: [114.67, 3.55], // Malaysia
  MZ: [35.54, -17.15], // Mozambique
  NA: [17.14, -22.04], // Namibia
  NC: [165.53, -21.26], // New Caledonia
  NE: [9.27, 17.34], // Niger
  NG: [7.99, 9.54], // Nigeria
  NI: [-85.02, 12.85], // Nicaragua
  NL: [5.5, 52.29], // Netherlands
  NO: [12.37, 64.09], // Norway
  NP: [84.04, 28.25], // Nepal
  NZ: [170.6, -43.96], // New Zealand
  OM: [56.07, 20.56], // Oman
  PA: [-80.11, 8.53], // Panama
  PE: [-74.43, -9.15], // Peru
  PG: [144.32, -6.64], // Papua New Guinea
  PH: [121.55, 15.74], // Philippines
  PK: [69.23, 29.91], // Pakistan
  PL: [19.34, 52.13], // Poland
  PR: [-66.48, 18.24], // Puerto Rico
  PS: [35.27, 31.94], // Palestinian Territories
  PT: [-8.06, 39.61], // Portugal
  PY: [-58.43, -23.23], // Paraguay
  QA: [51.18, 25.32], // Qatar
  RO: [24.95, 45.85], // Romania
  RS: [20.84, 44.22], // Serbia
  RU: [95.72, 65.94], // Russia
  RW: [29.92, -2.01], // Rwanda
  SA: [44.64, 24.09], // Saudi Arabia
  SB: [159.1, -7.9], // Solomon Islands
  SD: [29.83, 15.97], // Sudan
  SE: [16.11, 62.42], // Sweden
  SI: [14.93, 46.13], // Slovenia
  SK: [19.5, 48.73], // Slovakia
  SL: [-11.8, 8.53], // Sierra Leone
  SN: [-14.51, 14.35], // Senegal
  SO: [45.7, 4.74], // Somalia
  SR: [-55.91, 4.12], // Suriname
  SS: [30.2, 7.29], // South Sudan
  SV: [-88.87, 13.73], // El Salvador
  SY: [38.52, 35.01], // Syria
  SZ: [31.4, -26.49], // Eswatini
  TD: [18.57, 15.28], // Chad
  TF: [69.53, -49.31], // French Southern Territories
  TG: [1, 8.43], // Togo
  TH: [101, 14.98], // Thailand
  TJ: [71.05, 38.59], // Tajikistan
  TL: [125.97, -8.77], // Timor-Leste
  TM: [59.35, 39.1], // Turkmenistan
  TN: [9.54, 34.14], // Tunisia
  TR: [35.37, 39.06], // Türkiye
  TT: [-61.33, 10.43], // Trinidad & Tobago
  TW: [120.97, 23.74], // Taiwan
  TZ: [34.74, -6.25], // Tanzania
  UA: [31.29, 49.19], // Ukraine
  UG: [32.36, 1.3], // Uganda
  US: [-98.73, 39.87], // United States
  UY: [-56.01, -32.77], // Uruguay
  UZ: [63.37, 41.77], // Uzbekistan
  VE: [-66.15, 7.16], // Venezuela
  VN: [105.34, 21.67], // Vietnam
  VU: [166.91, -15.22], // Vanuatu
  XK: [20.9, 42.58], // Kosovo
  YE: [47.52, 15.92], // Yemen
  ZA: [25.16, -28.92], // South Africa
  ZM: [27.76, -13.39], // Zambia
  ZW: [29.79, -18.9], // Zimbabwe
};
