/**
 * WORLD CHAOS - BANCO DE PAÍSES PARA GEOBATTLE (15 POTENCIAS GLOBALES)
 * Fuentes oficiales: Fondo Monetario Internacional (FMI, 2024), Banco Mundial (2023), 
 * Organización Mundial del Comercio (OMC, 2023), UNCTAD Maritime Transport (2023), 
 * Energy Institute Statistical Review (2024) y USGS (2024).
 */

const GEOBATTLE_COUNTRIES = [
  {
    id: 'usa',
    nombre: 'Estados Unidos',
    codigo: 'USA',
    bandera: '🇺🇸',
    bloque: 'OTAN / G7',
    lema: 'Hegemonía del Dólar y Proyección Global',
    stats: {
      pib: { valor: 28780, display: '$28,78 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 341.0, display: '341,0 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 3053, display: '$3.053 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 3826, display: '$3.826 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 2900, display: '$2.900 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 94.3, display: '94,3 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 6879, display: '$6.879 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 55.4, display: '55,4 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 92, display: 'Mayor prod. de crudo y gas', fuente: 'EIA / USGS (2024)' }
    },
    resumen_tactico: 'Superpotencia financiera y tecnológica líder. Mayor productor mundial de petróleo y gas de esquisto (shale), emisor de la divisa de reserva global y dominante en gasto de defensa.'
  },
  {
    id: 'china',
    nombre: 'China',
    codigo: 'CHN',
    bandera: '🇨🇳',
    bloque: 'BRICS+ / OCS',
    lema: 'Fábrica del Mundo y Rutas Transoceánicas',
    stats: {
      pib: { valor: 18530, display: '$18,53 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 1410.0, display: '1.410 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 3380, display: '$3.380 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 2556, display: '$2.556 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 4980, display: '$4.980 B (30% mundial)', fuente: 'UNIDO / Banco Mundial (2023)' },
      energia: { valor: 170.8, display: '170,8 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 5936, display: '$5.936 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 275.3, display: '275,3 M TEUs (Nº 1)', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 96, display: 'Monopolio Tierras Raras', fuente: 'USGS (2024)' }
    },
    resumen_tactico: 'Líder absoluto en manufacturas globales y transporte marítimo de contenedores. Monopolio en refinado de tierras raras y minerales para baterías, pero con vulnerabilidad energética en el Estrecho de Malaca.'
  },
  {
    id: 'alemania',
    nombre: 'Alemania',
    codigo: 'DEU',
    bandera: '🇩🇪',
    bloque: 'Unión Europea / G7',
    lema: 'Motor Industrial y Tecnológico Europeo',
    stats: {
      pib: { valor: 4590, display: '$4,59 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 84.4, display: '84,4 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 1688, display: '$1.688 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 1463, display: '$1.463 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 810, display: '$810 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 10.7, display: '10,7 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 3151, display: '$3.151 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 14.8, display: '14,8 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 28, display: 'Alta dependencia externa', fuente: 'BDI / USGS (2024)' }
    },
    resumen_tactico: 'Tercera economía mundial y potencia en ingeniería pesada, química y automoción. Gran dependencia de importaciones de gas natural y materias primas críticas tras el corte de gasoductos rusos.'
  },
  {
    id: 'japon',
    nombre: 'Japón',
    codigo: 'JPN',
    bandera: '🇯🇵',
    bloque: 'G7 / QUAD',
    lema: 'Poderío Robótico y Alta Precisión',
    stats: {
      pib: { valor: 4110, display: '$4,11 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 124.5, display: '124,5 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 717, display: '$717 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 785, display: '$785 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 980, display: '$980 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 17.1, display: '17,1 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 1502, display: '$1.502 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 22.1, display: '22,1 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 15, display: 'Isla con 90% importado', fuente: 'METI (2024)' }
    },
    resumen_tactico: 'Pionero en robótica, electrónica de precisión y flotas navieras de alta tecnología. Su talón de Aquiles es la carencia casi total de combustibles fósiles propios, importando más del 90% de su energía.'
  },
  {
    id: 'india',
    nombre: 'India',
    codigo: 'IND',
    bandera: '🇮🇳',
    bloque: 'BRICS+ / QUAD',
    lema: 'Gigante Demográfico y Auge del Sur Global',
    stats: {
      pib: { valor: 3940, display: '$3,94 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 1428.0, display: '1.428 Millones (Nº 1)', fuente: 'ONU (2023)' },
      exportaciones: { valor: 432, display: '$432 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 673, display: '$673 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 510, display: '$510 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 39.0, display: '39,0 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 1105, display: '$1.105 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 20.3, display: '20,3 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 62, display: 'Carbón, hierro y bauxita', fuente: 'Ministry of Mines (2024)' }
    },
    resumen_tactico: 'El país más poblado de la Tierra y la gran economía de más rápido crecimiento. Pivote clave entre Occidente y Oriente, con enorme demanda energética y papel central en el corredor marítimo del Índico.'
  },
  {
    id: 'reino_unido',
    nombre: 'Reino Unido',
    codigo: 'GBR',
    bandera: '🇬🇧',
    bloque: 'OTAN / G7 / AUKUS',
    lema: 'Corazón Financiero de la City y Poder Naval',
    stats: {
      pib: { valor: 3500, display: '$3,50 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 68.3, display: '68,3 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 521, display: '$521 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 791, display: '$791 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 275, display: '$275 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 6.8, display: '6,8 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 1312, display: '$1.312 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 10.4, display: '10,4 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 35, display: 'Gas Mar del Norte / Eólica', fuente: 'OEUK (2024)' }
    },
    resumen_tactico: 'Capital global de seguros marítimos (Lloyd\'s of London), derecho mercantil y arbitraje naval. Fuerte sector servicios y aeroespacial, pero con déficit comercial persistente en manufacturas.'
  },
  {
    id: 'francia',
    nombre: 'Francia',
    codigo: 'FRA',
    bandera: '🇫🇷',
    bloque: 'Unión Europea / OTAN',
    lema: 'Autonomía Nuclear y Logística Mediterránea',
    stats: {
      pib: { valor: 3130, display: '$3,13 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 68.2, display: '68,2 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 648, display: '$648 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 779, display: '$779 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 310, display: '$310 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 8.9, display: '8,9 Exajulios (70% Nuclear)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 1427, display: '$1.427 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 7.2, display: '7,2 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 30, display: 'Potencia nuclear y agro', fuente: 'Insee (2024)' }
    },
    resumen_tactico: 'Líder en generación nuclear civil (más del 70% de su electricidad) y sede de gigantes logísticos como la naviera CMA CGM. Puerta comercial clave en el Atlántico y el Mediterráneo (Marsella/Le Havre).'
  },
  {
    id: 'brasil',
    nombre: 'Brasil',
    codigo: 'BRA',
    bandera: '🇧🇷',
    bloque: 'BRICS+ / Mercosur',
    lema: 'Granero del Mundo y Minerales Estratégicos',
    stats: {
      pib: { valor: 2330, display: '$2,33 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 216.4, display: '216,4 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 340, display: '$340 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 241, display: '$241 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 260, display: '$260 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 14.1, display: '14,1 Exajulios (65% Hidro)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 581, display: '$581 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 12.6, display: '12,6 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 88, display: 'Soja, hierro y niobio', fuente: 'ANM / USGS (2024)' }
    },
    resumen_tactico: 'Mayor exportador mundial de soja, carne y mineral de hierro (Vale). Monopolio casi total del niobio y masivas reservas de petróleo en aguas ultraprofundas (Presal de Petrobras).'
  },
  {
    id: 'rusia',
    nombre: 'Rusia',
    codigo: 'RUS',
    bandera: '🇷🇺',
    bloque: 'BRICS+ / OTSC',
    lema: 'Fortaleza Energética y Ruta Polar Ártica',
    stats: {
      pib: { valor: 2060, display: '$2,06 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 143.8, display: '143,8 Millones', fuente: 'Rosstat / BM (2023)' },
      exportaciones: { valor: 425, display: '$425 B / año', fuente: 'FMI / OMC (2023)' },
      importaciones: { valor: 304, display: '$304 B / año', fuente: 'FMI / OMC (2023)' },
      produccion_industrial: { valor: 380, display: '$380 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 31.8, display: '31,8 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 729, display: '$729 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 5.6, display: '5,6 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 98, display: 'Mayor despensa mineral', fuente: 'USGS / IEA (2024)' }
    },
    resumen_tactico: 'Mayor extensión territorial del planeta con reservas masivas de gas, petróleo, uranio enriquecido, níquel y trigo. Controla con su flota de rompehielos nucleares el paso de la Ruta Marítima del Norte.'
  },
  {
    id: 'arabia_saudi',
    nombre: 'Arabia Saudí',
    codigo: 'SAU',
    bandera: '🇸🇦',
    bloque: 'OPEP+ / BRICS+',
    lema: 'Guardián del Petróleo y Capital Financiero',
    stats: {
      pib: { valor: 1110, display: '$1,11 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 36.9, display: '36,9 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 322, display: '$322 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 206, display: '$206 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 195, display: '$195 B (Petroquímica)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 11.9, display: '11,9 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 528, display: '$528 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 10.9, display: '10,9 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 95, display: '17% reservas crudo mundial', fuente: 'OPEP / Aramco (2024)' }
    },
    resumen_tactico: 'Líder de facto de la OPEP. Sede de Saudi Aramco, la petrolera más rentable de la historia. Posición geográfica bisagra entre el Mar Rojo y el Golfo Pérsico con fondos soberanos milmillonarios (PIF).'
  },
  {
    id: 'singapur',
    nombre: 'Singapur',
    codigo: 'SGP',
    bandera: '🇸🇬',
    bloque: 'ASEAN / Hub Global',
    lema: 'El Peaje de Oro del Estrecho de Malaca',
    stats: {
      pib: { valor: 525, display: '$525.000 Millones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 5.9, display: '5,9 Millones', fuente: 'SingStat (2023)' },
      exportaciones: { valor: 476, display: '$476 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 423, display: '$423 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 105, display: '$105 B (Chips y Química)', fuente: 'SingStat (2023)' },
      energia: { valor: 4.1, display: '4,1 Exajulios (Bunkering)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 899, display: '$899 B (170% del PIB)', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 39.0, display: '39,0 M TEUs (Nº 2 mundial)', fuente: 'MPA Singapur (2023)' },
      recursos_naturales: { valor: 5, display: 'Sin recursos naturales', fuente: 'SingStat (2024)' }
    },
    resumen_tactico: 'La mayor densidad de comercio marítimo por habitante. Segundo puerto con mayor tráfico de transbordo del mundo y principal estación de repostaje naval (bunkering). Todo su valor es su ubicación estratégica.'
  },
  {
    id: 'corea_del_sur',
    nombre: 'Corea del Sur',
    codigo: 'KOR',
    bandera: '🇰🇷',
    bloque: 'OCDE / Hub Tecnológico',
    lema: 'Astillero Naval del Mundo y Memorias RAM',
    stats: {
      pib: { valor: 1760, display: '$1,76 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 51.7, display: '51,7 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 632, display: '$632 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 643, display: '$643 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 470, display: '$470 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 12.6, display: '12,6 Exajulios (EJ)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 1275, display: '$1.275 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 23.3, display: '23,3 M TEUs (Busan)', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 12, display: 'Casi 100% importado', fuente: 'KEEI (2024)' }
    },
    resumen_tactico: 'Monopolio en construcción de buques gaseros de GNL (HD Hyundai, Hanwha Ocean, Samsung Heavy) y dominio en chips de memoria (Samsung y SK Hynix). Puerto de Busan como enlace del Pacífico.'
  },
  {
    id: 'australia',
    nombre: 'Australia',
    codigo: 'AUS',
    bandera: '🇦🇺',
    bloque: 'AUKUS / QUAD',
    lema: 'La Cantera Minera del Indopacífico',
    stats: {
      pib: { valor: 1720, display: '$1,72 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 26.6, display: '26,6 Millones', fuente: 'Banco Mundial (2023)' },
      exportaciones: { valor: 371, display: '$371 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 289, display: '$289 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 115, display: '$115 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 5.7, display: '5,7 Exajulios (Top GNL)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 660, display: '$660 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 8.8, display: '8,8 M TEUs', fuente: 'UNCTAD (2023)' },
      recursos_naturales: { valor: 97, display: 'Nº 1 en Litio y Hierro', fuente: 'Geoscience Australia (2024)' }
    },
    resumen_tactico: 'Primer extractor de litio en roca dura (espodumena), hierro y bauxita del planeta, y uno de los tres gigantes de exportación de GNL. Aliado militar indispensable de EE.UU. en el Indopacífico.'
  },
  {
    id: 'espana',
    nombre: 'España',
    codigo: 'ESP',
    bandera: '🇪🇸',
    bloque: 'Unión Europea / OTAN',
    lema: 'Llave del Estrecho de Gibraltar y Regasificación',
    stats: {
      pib: { valor: 1650, display: '$1,65 Billones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 48.6, display: '48,6 Millones', fuente: 'INE / BM (2023)' },
      exportaciones: { valor: 420, display: '$420 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 470, display: '$470 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 180, display: '$180 B (VAB)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 5.4, display: '5,4 Exajulios (50% Renovable)', fuente: 'Energy Institute (2024)' },
      comercio_total: { valor: 890, display: '$890 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 17.5, display: '17,5 M TEUs (Algeciras/Val)', fuente: 'Puertos del Estado (2023)' },
      recursos_naturales: { valor: 22, display: 'Hub de regasificación de GNL', fuente: 'MITECO (2024)' }
    },
    resumen_tactico: 'Controla el acceso al Estrecho de Gibraltar con el megapuerto de Algeciras y Valencia. Posee un tercio de toda la capacidad de regasificación de GNL de la Unión Europea y liderazgo en energías renovables.'
  },
  {
    id: 'peru',
    nombre: 'Perú',
    codigo: 'PER',
    bandera: '🇵🇪',
    bloque: 'APEC / Alianza del Pacífico',
    lema: 'Pivote Minero Andino y Puerta de Chancay',
    stats: {
      pib: { valor: 280, display: '$280.000 Millones', fuente: 'FMI (WEO 2024)' },
      poblacion: { valor: 34.3, display: '34,3 Millones', fuente: 'INEI / BM (2023)' },
      exportaciones: { valor: 65, display: '$65 B / año', fuente: 'OMC (2023)' },
      importaciones: { valor: 52, display: '$52 B / año', fuente: 'OMC (2023)' },
      produccion_industrial: { valor: 38, display: '$38 B (Minerometalurgia)', fuente: 'Banco Mundial (2023)' },
      energia: { valor: 1.1, display: '1,1 Exajulios (Gas Camisea)', fuente: 'MINEM (2024)' },
      comercio_total: { valor: 117, display: '$117 B total', fuente: 'OMC (2023)' },
      transporte_maritimo: { valor: 3.8, display: '3,8 M TEUs (+ Chancay)', fuente: 'APN Perú (2023)' },
      recursos_naturales: { valor: 84, display: 'Segundo productor de cobre', fuente: 'USGS / MINEM (2024)' }
    },
    resumen_tactico: 'Segundo extractor mundial de cobre y zinc. Con la inauguración del Megapuerto de aguas profundas de Chancay por COSCO Shipping, se convierte en el hub logístico directo entre Sudamérica y el mercado asiático.'
  }
];

if (typeof window !== 'undefined') {
  window.GEOBATTLE_COUNTRIES = GEOBATTLE_COUNTRIES;
}
