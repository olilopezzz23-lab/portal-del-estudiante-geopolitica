/**
 * WORLD CHAOS - BANCO OFICIAL DE PREGUNTAS GEOQUIZ (60+ PREGUNTAS VERIFICADAS)
 * Categorías: Geopolítica, Economía Mundial, Logística, Comercio Internacional, Energía, Recursos y Transporte Marítimo.
 */

const GEOQUIZ_BANK = [
  // =========================================================================
  // NIVEL 1: FÁCIL (20 Preguntas)
  // =========================================================================
  {
    id: 'F01',
    dificultad: 'facil',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Qué canal artificial conecta el Mar Mediterráneo con el Mar Rojo?',
    opciones: [
      'Canal de Panamá',
      'Canal de Suez',
      'Canal de Corinto',
      'Canal de Kiel'
    ],
    correcta: 1,
    explicacion: 'El Canal de Suez, inaugurado en Egipto en 1869, une el Mediterráneo con el Mar Rojo, evitando bordear todo el continente africano.'
  },
  {
    id: 'F02',
    dificultad: 'facil',
    categoria: 'Logística',
    pregunta: '¿Qué unidad de medida estándar se utiliza en el transporte marítimo para cuantificar contenedores?',
    opciones: [
      'TEU (Twenty-foot Equivalent Unit)',
      'Barril Brent',
      'Nudo Náutico',
      'Tonelada Métrica Neta'
    ],
    correcta: 0,
    explicacion: 'El TEU representa el volumen estándar de un contenedor intermodal de 20 pies de largo (~6,1 metros).'
  },
  {
    id: 'F03',
    dificultad: 'facil',
    categoria: 'Recursos Naturales',
    pregunta: '¿Qué tres países sudamericanos conforman el célebre "Triángulo del Litio"?',
    opciones: [
      'Brasil, Colombia y Perú',
      'Argentina, Bolivia y Chile',
      'Venezuela, Ecuador y Guyana',
      'Chile, Uruguay y Paraguay'
    ],
    correcta: 1,
    explicacion: 'Argentina, Bolivia y Chile concentran más del 55% de las reservas mundiales de litio en sus salares andinos.'
  },
  {
    id: 'F04',
    dificultad: 'facil',
    categoria: 'Comercio Internacional',
    pregunta: '¿Qué país es actualmente el mayor exportador de mercancías del mundo?',
    opciones: [
      'Estados Unidos',
      'Alemania',
      'China',
      'Japón'
    ],
    correcta: 2,
    explicacion: 'China es la primera potencia exportadora mundial desde 2009, conocida como la fábrica del mundo y líder en manufacturas.'
  },
  {
    id: 'F05',
    dificultad: 'facil',
    categoria: 'Geopolítica',
    pregunta: '¿Qué paso marítimo une los océanos Atlántico y Pacífico en Centroamérica?',
    opciones: [
      'Canal de Panamá',
      'Estrecho de Magallanes',
      'Paso de Drake',
      'Canal de Nicaragua'
    ],
    correcta: 0,
    explicacion: 'El Canal de Panamá, operativo desde 1914, utiliza un sistema de esclusas con agua dulce del Lago Gatún para conectar ambos océanos.'
  },
  {
    id: 'F06',
    dificultad: 'facil',
    categoria: 'Energía',
    pregunta: '¿Qué organización internacional de países productores fija cuotas para regular el precio del petróleo crudo?',
    opciones: [
      'OCDE',
      'OPEP (OPEC)',
      'FMI',
      'OMC'
    ],
    correcta: 1,
    explicacion: 'La OPEP (Organización de Países Exportadores de Petróleo), fundada en 1960, coordina políticas de producción entre sus miembros.'
  },
  {
    id: 'F07',
    dificultad: 'facil',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Cuál es el puerto de mayor volumen de carga de toda Europa?',
    opciones: [
      'Puerto de Hamburgo (Alemania)',
      'Puerto de Róterdam (Países Bajos)',
      'Puerto de Amberes (Bélgica)',
      'Puerto de Valencia (España)'
    ],
    correcta: 1,
    explicacion: 'Róterdam es el puerto más grande y transitado de Europa, y la principal puerta de entrada de mercancías al continente.'
  },
  {
    id: 'F08',
    dificultad: 'facil',
    categoria: 'Economía Mundial',
    pregunta: '¿Qué divisa domina como principal moneda de reserva internacional y transacciones globales?',
    opciones: [
      'Euro (€)',
      'Dólar estadounidense ($)',
      'Yuan chino (¥)',
      'Yen japonés (¥)'
    ],
    correcta: 1,
    explicacion: 'El dólar estadounidense representa casi el 60% de las reservas oficiales mundiales y el 85% de las operaciones cambiarias.'
  },
  {
    id: 'F09',
    dificultad: 'facil',
    categoria: 'Logística',
    pregunta: '¿Cómo se denomina a la última etapa del transporte donde el producto llega finalmente al comprador?',
    opciones: [
      'Logística de Última Milla',
      'Cabotaje Marítimo',
      'Cross-docking',
      'Flete Intermodal'
    ],
    correcta: 0,
    explicacion: 'La "última milla" gestiona la entrega final desde el centro de distribución hasta el consumidor, representando hasta el 50% del coste logístico total.'
  },
  {
    id: 'F10',
    dificultad: 'facil',
    categoria: 'Recursos Naturales',
    pregunta: '¿Qué mineral es imprescindible como combustible en las centrales nucleares comerciales?',
    opciones: [
      'Cobalto',
      'Uranio',
      'Bauxita',
      'Grafito'
    ],
    correcta: 1,
    explicacion: 'El uranio (especialmente el isótopo U-235 enriquecido) es el combustible básico para generar calor mediante fisión nuclear.'
  },
  {
    id: 'F11',
    dificultad: 'facil',
    categoria: 'Geopolítica',
    pregunta: '¿Qué país sudamericano inauguró a finales de 2024 el Megapuerto de Chancay financiado por China?',
    opciones: [
      'Chile',
      'Perú',
      'Colombia',
      'Ecuador'
    ],
    correcta: 1,
    explicacion: 'El megapuerto de aguas profundas de Chancay se ubica a 80 km al norte de Lima, Perú, financiado mayoritariamente por la naviera china COSCO Shipping.'
  },
  {
    id: 'F12',
    dificultad: 'facil',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Qué estrecho separa España de Marruecos y conecta el Mar Mediterráneo con el Océano Atlántico?',
    opciones: [
      'Estrecho de Gibraltar',
      'Estrecho del Bósforo',
      'Estrecho de Dardanelos',
      'Estrecho de Mesina'
    ],
    correcta: 0,
    explicacion: 'El Estrecho de Gibraltar tiene solo 14 km en su punto más angosto y es una de las rutas de navegación más transitadas del globo.'
  },
  {
    id: 'F13',
    dificultad: 'facil',
    categoria: 'Comercio Internacional',
    pregunta: '¿Cómo se llama el impuesto o tasa que un gobierno aplica sobre los bienes importados?',
    opciones: [
      'Subsidio',
      'Arancel',
      'Bono soberano',
      'Dividendo'
    ],
    correcta: 1,
    explicacion: 'Un arancel es un tributo aduanero aplicado sobre mercancías extranjeras con el fin de proteger la industria nacional o recaudar fondos.'
  },
  {
    id: 'F14',
    dificultad: 'facil',
    categoria: 'Energía',
    pregunta: '¿Qué tipo de combustible es el Gas Natural Licuado (GNL / LNG)?',
    opciones: [
      'Gas comprimido en estado gaseoso a alta presión',
      'Gas enfriado a unos -160 °C para volverse líquido y transportarse en buques metaneros',
      'Un derivado sintético del carbón vegetal',
      'Petróleo refinado con biodiésel'
    ],
    correcta: 1,
    explicacion: 'Al licuar el gas natural a -162 °C, su volumen se reduce 600 veces, permitiendo su transporte en grandes barcos metaneros cruzando océanos.'
  },
  {
    id: 'F15',
    dificultad: 'facil',
    categoria: 'Logística',
    pregunta: '¿Qué buque portacontenedores de 400 metros bloqueó por completo el Canal de Suez en marzo de 2021?',
    opciones: [
      'Ever Given',
      'Maersk Mc-Kinney',
      'Cosco Shipping Universe',
      'MSC Gülsün'
    ],
    correcta: 0,
    explicacion: 'El buque Ever Given encalló diagonalmente en el Canal de Suez durante 6 días, deteniendo cientos de barcos y miles de millones en mercancías.'
  },
  {
    id: 'F16',
    dificultad: 'facil',
    categoria: 'Geopolítica',
    pregunta: '¿Qué bloque económico y político supranacional tiene como moneda común el Euro?',
    opciones: [
      'Tratado de Libre Comercio de América del Norte',
      'Unión Europea (Eurozona)',
      'Mercosur',
      'ASEAN'
    ],
    correcta: 1,
    explicacion: 'La Eurozona está formada por los países de la Unión Europea que han adoptado el euro como su moneda oficial única.'
  },
  {
    id: 'F17',
    dificultad: 'facil',
    categoria: 'Recursos Naturales',
    pregunta: '¿Cuál es el mayor país productor y exportador de cobre del planeta?',
    opciones: [
      'Chile',
      'Sudáfrica',
      'Canadá',
      'Australia'
    ],
    correcta: 0,
    explicacion: 'Chile produce cerca del 25% del cobre mundial, liderado por yacimientos gigantes como Escondida y Chuquicamata.'
  },
  {
    id: 'F18',
    dificultad: 'facil',
    categoria: 'Transporte Marítimo',
    pregunta: 'Cuando el Canal de Suez queda bloqueado o inseguro, ¿qué ruta alternativa deben tomar los buques entre Asia y Europa?',
    opciones: [
      'Bordear el Cabo de Buena Esperanza (extremo sur de África)',
      'Cruzar el río Danubio',
      'Navegar por el Golfo de México',
      'Atravesar el río Amazonas'
    ],
    correcta: 0,
    explicacion: 'La ruta del Cabo de Buena Esperanza añade entre 10 y 14 días adicionales de navegación y cerca de 6.000 km respecto a Suez.'
  },
  {
    id: 'F19',
    dificultad: 'facil',
    categoria: 'Economía Mundial',
    pregunta: '¿Qué institución con sede en Washington presta dinero a países con graves desequilibrios en su balanza de pagos?',
    opciones: [
      'Fondo Monetario Internacional (FMI)',
      'Organización Mundial de la Salud (OMS)',
      'Interpol',
      'Tribunal de La Haya'
    ],
    correcta: 0,
    explicacion: 'El FMI (Fondo Monetario Internacional) actúa como prestamista de última instancia para estabilizar las finanzas de países en crisis.'
  },
  {
    id: 'F20',
    dificultad: 'facil',
    categoria: 'Comercio Internacional',
    pregunta: '¿Qué porcentaje aproximado del comercio físico mundial viaja por vía marítima?',
    opciones: [
      'Alrededor del 20%',
      'Alrededor del 50%',
      'Alrededor del 80%-90%',
      'Menos del 10%'
    ],
    correcta: 2,
    explicacion: 'Entre el 80% y el 90% de todas las mercancías, alimentos, materias primas y manufacturas del mundo se trasladan a bordo de barcos.'
  },

  // =========================================================================
  // NIVEL 2: INTERMEDIO (20 Preguntas)
  // =========================================================================
  {
    id: 'M01',
    dificultad: 'medio',
    categoria: 'Geopolítica',
    pregunta: '¿Por qué estrecho marítimo transita aproximadamente el 20% del suministro mundial de petróleo crudo?',
    opciones: [
      'Estrecho de Ormuz',
      'Estrecho de Bering',
      'Estrecho de Magallanes',
      'Estrecho de Cook'
    ],
    correcta: 0,
    explicacion: 'El Estrecho de Ormuz, entre Omán e Irán, es el paso petrolero más crítico del planeta; no existe alternativa viable para los grandes superpetroleros del Golfo.'
  },
  {
    id: 'M02',
    dificultad: 'medio',
    categoria: 'Recursos Naturales',
    pregunta: '¿Qué país controla más del 70% de la extracción y más del 90% del refinado mundial de Tierras Raras?',
    opciones: [
      'Rusia',
      'China',
      'India',
      'Australia'
    ],
    correcta: 1,
    explicacion: 'China ostenta un cuasi-monopolio en la separación química y refinado de tierras raras (neodimio, disprosio), vitales para imanes de vehículos eléctricos y defensa.'
  },
  {
    id: 'M03',
    dificultad: 'medio',
    categoria: 'Comercio Internacional',
    pregunta: '¿Qué empresa taiwanesa fabrica más del 90% de los microchips semiconductores más avanzados del mundo?',
    opciones: [
      'TSMC (Taiwan Semiconductor Manufacturing Co.)',
      'Foxconn',
      'Intel',
      'Samsung Electronics'
    ],
    correcta: 0,
    explicacion: 'TSMC fabrica la inmensa mayoría de chips por debajo de 7 nanómetros para gigantes como Apple, Nvidia, AMD y Qualcomm.'
  },
  {
    id: 'M04',
    dificultad: 'medio',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Qué estrecho asiático separa la península malaya de la isla de Sumatra, canalizando el 80% del petróleo consumido por China?',
    opciones: [
      'Estrecho de Malaca',
      'Estrecho de Sonda',
      'Estrecho de Lombok',
      'Estrecho de Macasar'
    ],
    correcta: 0,
    explicacion: 'El estrecho de Malaca es el cuello de botella que dio origen al llamado "Dilema de Malaca", término acuñado por el expresidente chino Hu Jintao.'
  },
  {
    id: 'M05',
    dificultad: 'medio',
    categoria: 'Logística',
    pregunta: '¿Qué fenómeno climático reciente obligó al Canal de Panamá a reducir drásticamente el tránsito diario de buques en 2023-2024?',
    opciones: [
      'Una sequía severa agravada por El Niño que vació el Lago Gatún',
      'Un maremoto que destruyó las compuertas Neo-Panamax',
      'Un terremoto submarino en el Caribe',
      'Una invasión de algas tóxicas en el Pacífico'
    ],
    correcta: 0,
    explicacion: 'Cada paso de buque gasta 200 millones de litros de agua dulce del Lago Gatún. La sequía redujo los tránsitos de 36 a menos de 24 buques diarios.'
  },
  {
    id: 'M06',
    dificultad: 'medio',
    categoria: 'Economía Mundial',
    pregunta: '¿Qué red interbancaria internacional con sede en Bélgica fue utilizada para desconectar a los principales bancos rusos tras la invasión de Ucrania?',
    opciones: [
      'SWIFT',
      'TARGET2',
      'Fedwire',
      'SEPA'
    ],
    correcta: 0,
    explicacion: 'SWIFT (Society for Worldwide Interbank Financial Telecommunication) conecta a más de 11.000 instituciones financieras en más de 200 países.'
  },
  {
    id: 'M07',
    dificultad: 'medio',
    categoria: 'Geopolítica',
    pregunta: '¿Qué estrecho es la entrada meridional al Mar Rojo desde el Golfo de Adén, cuyo nombre en árabe significa "La Puerta de las Lágrimas"?',
    opciones: [
      'Bab el-Mandeb',
      'Ormuz',
      'Bósforo',
      'Torres'
    ],
    correcta: 0,
    explicacion: 'Bab el-Mandeb, flanqueado por Yemen, Yibuti y Eritrea, es el punto focal de los ataques con misiles y drones que forzaron el desvío de buques por África.'
  },
  {
    id: 'M08',
    dificultad: 'medio',
    categoria: 'Energía',
    pregunta: '¿Cuál es el gasoducto submarino por el Báltico entre Rusia y Alemania que sufrió sabotajes con explosivos en septiembre de 2022?',
    opciones: [
      'Nord Stream (1 y 2)',
      'TurkStream',
      'Transmed',
      'Yamal-Europa'
    ],
    correcta: 0,
    explicacion: 'Las tuberías de Nord Stream 1 y Nord Stream 2 sufrieron cuatro detonaciones submarinas cerca de la isla danesa de Bornholm.'
  },
  {
    id: 'M09',
    dificultad: 'medio',
    categoria: 'Recursos Naturales',
    pregunta: '¿Qué país africano concentra más del 70% de la extracción mundial de cobalto, esencial para cátodos de baterías ternarias?',
    opciones: [
      'República Democrática del Congo (RDC)',
      'Nigeria',
      'Ghana',
      'Kenia'
    ],
    correcta: 0,
    explicacion: 'La RDC domina la extracción de cobalto del Cinturón de Cobre centroafricano, con gran parte de las concesiones operadas por firmas chinas.'
  },
  {
    id: 'M10',
    dificultad: 'medio',
    categoria: 'Comercio Internacional',
    pregunta: '¿Qué corredor comercial transcontinental impulsado por EE.UU. e India se presentó en la cumbre del G20 de 2023 para contrarrestar la Ruta de la Seda?',
    opciones: [
      'Corredor IMEC (India-Middle East-Europe Economic Corridor)',
      'Iniciativa Global Gateway',
      'Plan Marshall 2.0',
      'Corredor Transahariano'
    ],
    correcta: 0,
    explicacion: 'IMEC planea unir puertos de India con Emiratos Árabes, Arabia Saudí, Jordania, Israel y el puerto de El Pireo (Grecia) mediante ferrocarril y barcos.'
  },
  {
    id: 'M11',
    dificultad: 'medio',
    categoria: 'Logística',
    pregunta: '¿Qué significa el término logístico "Nearshoring"?',
    opciones: [
      'Trasladar la producción a países cercanos geográficamente al mercado de consumo final',
      'Mover las fábricas exclusivamente a plataformas petrolíferas en el mar',
      'Contratar tripulaciones navales de bajo coste',
      'Comprar barcos de segunda mano cerca de los puertos'
    ],
    correcta: 0,
    explicacion: 'El Nearshoring busca reducir riesgos de rotura de stock reubicando cadenas de suministro en países vecinos (ej. fábricas de EE.UU. en México).'
  },
  {
    id: 'M12',
    dificultad: 'medio',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Qué estrechos turcos conectan el Mar Negro con el Mar Mediterráneo y están regulados por la Convención de Montreux de 1936?',
    opciones: [
      'Bósforo y Dardanelos',
      'Gibraltar y Mesina',
      'Ormuz y Bab el-Mandeb',
      'Kattegat y Skagerrak'
    ],
    correcta: 0,
    explicacion: 'La Convención de Montreux otorga a Turquía el control exclusivo sobre el Bósforo y Dardanelos y la potestad de restringir el paso de buques militares.'
  },
  {
    id: 'M13',
    dificultad: 'medio',
    categoria: 'Economía Mundial',
    pregunta: '¿Qué grupo de economías emergentes amplió su membresía en 2024 sumando a Irán, Egipto, Etiopía y Emiratos Árabes Unidos?',
    opciones: [
      'BRICS+',
      'G7',
      'TLCAN / T-MEC',
      'Comunidad Andina'
    ],
    correcta: 0,
    explicacion: 'Los BRICS originales (Brasil, Rusia, India, China, Sudáfrica) pasaron a denominarse BRICS+ tras aceptar formalmente a nuevos miembros energéticos.'
  },
  {
    id: 'M14',
    dificultad: 'medio',
    categoria: 'Geopolítica',
    pregunta: '¿Qué empresa neerlandesa ostenta el monopolio mundial en la fabricación de máquinas de litografía ultravioleta extrema (EUV) para chips?',
    opciones: [
      'ASML',
      'Philips',
      'Siemens',
      'Applied Materials'
    ],
    correcta: 0,
    explicacion: 'ASML, radicada en Veldhoven (Países Bajos), es la única compañía capaz de producir máquinas EUV capaces de trazar circuitos a nivel atómico.'
  },
  {
    id: 'M15',
    dificultad: 'medio',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Cómo se denomina a la flota no declarada de petroleros que transporta crudo sancionado (ruso, iraní o venezolano) evadiendo seguros occidentales?',
    opciones: [
      'La Flota Fantasma (Shadow Fleet)',
      'La Armada Blanca',
      'El Convoy Mercante',
      'La Flota de Cabotaje'
    ],
    correcta: 0,
    explicacion: 'La Flota Fantasma opera con buques antiguos, banderas de conveniencia opacas y apagando transpondedores AIS para burlar el tope de precio al crudo.'
  },
  {
    id: 'M16',
    dificultad: 'medio',
    categoria: 'Energía',
    pregunta: '¿Qué tres países son los mayores exportadores mundiales de Gas Natural Licuado (GNL)?',
    opciones: [
      'Estados Unidos, Qatar y Australia',
      'Alemania, Francia y España',
      'Japón, Corea del Sur e Italia',
      'Venezuela, México y Colombia'
    ],
    correcta: 0,
    explicacion: 'EE.UU., Qatar y Australia se disputan anualmente el primer puesto como mayores suministradores mundiales de GNL marítimo.'
  },
  {
    id: 'M17',
    dificultad: 'medio',
    categoria: 'Recursos Naturales',
    pregunta: '¿Para qué componente clave de los coches eléctricos es indispensable el grafito en su ánodo?',
    opciones: [
      'Para las baterías de ion de litio',
      'Para los frenos cerámicos',
      'Para los cristales parabrisas',
      'Para el líquido refrigerante'
    ],
    correcta: 0,
    explicacion: 'Cerca del 95% del grafito sintético y natural usado en los ánodos de baterías de vehículos eléctricos es procesado en China.'
  },
  {
    id: 'M18',
    dificultad: 'medio',
    categoria: 'Logística',
    pregunta: '¿Qué canal marítimo proyectado en Tailandia permitiría cruzar el istmo de Kra y esquivar el paso por Singapur?',
    opciones: [
      'Canal de Kra (Thai Canal)',
      'Canal de Malaca',
      'Canal de Bengala',
      'Canal de Mekong'
    ],
    correcta: 0,
    explicacion: 'El proyecto del Canal de Kra o Landbridge tailandés ahorraría 1.200 km de navegación pero enfrenta retos geopolíticos y financieros gigantescos.'
  },
  {
    id: 'M19',
    dificultad: 'medio',
    categoria: 'Geopolítica',
    pregunta: '¿Cómo se llama la alianza militar anglosajona entre Australia, Reino Unido y EE.UU. para proveer submarinos nucleares en el Indopacífico?',
    opciones: [
      'AUKUS',
      'QUAD',
      'Five Eyes',
      'TIAR'
    ],
    correcta: 0,
    explicacion: 'AUKUS se formó en 2021 para contrarrestar la expansión naval china dotando a la marina australiana de submarinos de propulsión nuclear.'
  },
  {
    id: 'M20',
    dificultad: 'medio',
    categoria: 'Comercio Internacional',
    pregunta: '¿Qué porcentaje del tráfico total de datos internacionales de Internet viaja a través de cables submarinos de fibra óptica?',
    opciones: [
      'Alrededor del 99%',
      'Alrededor del 45%',
      'Menos del 15%',
      'Cero, hoy todo viaja por satélites'
    ],
    correcta: 0,
    explicacion: 'Pese a la popularidad de constelaciones satelitales como Starlink, más del 98%-99% del tráfico de internet y billones diarios en transacciones viajan por cables submarinos.'
  },

  // =========================================================================
  // NIVEL 3: EXPERTO (20 Preguntas)
  // =========================================================================
  {
    id: 'E01',
    dificultad: 'experto',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Cuál es el calado máximo permitido para un buque que transita por el nuevo juego de esclusas Neo-Panamax del Canal de Panamá en condiciones óptimas?',
    opciones: [
      '50 pies (~15,24 metros)',
      '39,5 pies (~12,04 metros)',
      '65 pies (~19,81 metros)',
      '72 pies (~21,94 metros)'
    ],
    correcta: 0,
    explicacion: 'En condiciones estándar de agua dulce, el calado máximo en esclusas Neopanamax es de 50 pies (15,24 m), aunque en sequías se restringe a 44 pies.'
  },
  {
    id: 'E02',
    dificultad: 'experto',
    categoria: 'Geopolítica',
    pregunta: 'En la teoría geopolítica clásica de Halford Mackinder, ¿cómo denominó a la vasta región de Eurasia cuyo control garantizaba el dominio del mundo?',
    opciones: [
      'El Heartland (Región Pivote)',
      'El Rimland',
      'El Collar de Perlas',
      'La Primera Cadena de Islas'
    ],
    correcta: 0,
    explicacion: 'Mackinder postuló en 1904: "Quien gobierne Europa del Este domina el Heartland; quien gobierne el Heartland domina la Isla Mundial; quien gobierne la Isla Mundial domina el mundo".'
  },
  {
    id: 'E03',
    dificultad: 'experto',
    categoria: 'Energía',
    pregunta: '¿Cuál es la capacidad del rompehielos nuclear ruso "Árktika" (Proyecto 22220), líder de la flota que abre la Ruta Marítima del Norte?',
    opciones: [
      '60 MW de potencia en propulsión por reactores RITM-200',
      '15 MW diésel-eléctrico convencional',
      '120 MW con turbinas de gas aeroderivadas',
      '5 MW con batería de hidrógeno'
    ],
    correcta: 0,
    explicacion: 'Los rompehielos rusos clase LK-60Ya (como el Árktika y Sibir) cuentan con reactores RITM-200 y 60 MW de potencia en el eje, capaces de quebrar hielo de 3 metros de espesor.'
  },
  {
    id: 'E04',
    dificultad: 'experto',
    categoria: 'Recursos Naturales',
    pregunta: '¿En qué mineral de bauxita refinado se obtiene la alúmina necesaria para producir aluminio primario?',
    opciones: [
      'Bauxita mediante el proceso Bayer',
      'Hematita mediante proceso Bessemer',
      'Calcopirita mediante lixiviación ácida',
      'Espodumena por flotación espumosa'
    ],
    correcta: 0,
    explicacion: 'El proceso Bayer (inventado por Carl Josef Bayer en 1888) disuelve la bauxita con sosa cáustica a alta temperatura para obtener alúmina pura.'
  },
  {
    id: 'E05',
    dificultad: 'experto',
    categoria: 'Comercio Internacional',
    pregunta: '¿Qué agencia del Departamento del Tesoro de EE.UU. administra y ejecuta las sanciones económicas y financieras internacionales?',
    opciones: [
      'OFAC (Office of Foreign Assets Control)',
      'SEC (Securities and Exchange Commission)',
      'FinCEN',
      'DARPA'
    ],
    correcta: 0,
    explicacion: 'La OFAC impone las sanciones más temidas del planeta, incluyendo la inclusión en la lista SDN que congela activos e impide operar en dólares.'
  },
  {
    id: 'E06',
    dificultad: 'experto',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Cuál es el límite máximo de capacidad en TEUs de los mayores portacontenedores de ultra-gran porte (ULCV) construidos hasta la fecha?',
    opciones: [
      'Superan los 24.000 TEUs (ej. MSC Irina con 24.346 TEUs)',
      'Exactamente 14.000 TEUs',
      'No más de 18.000 TEUs por leyes de flotabilidad',
      '50.000 TEUs'
    ],
    correcta: 0,
    explicacion: 'Buques como el MSC Irina y MSC Loreto alcanzan los 24.346 TEUs con 400 metros de eslora y 61,3 metros de manga.'
  },
  {
    id: 'E07',
    dificultad: 'experto',
    categoria: 'Geopolítica',
    pregunta: '¿Qué concepto estratégico militar chino define la línea que va desde las islas Kuriles, pasando por Japón, Taiwán y Filipinas hasta Borneo?',
    opciones: [
      'La Primera Cadena de Islas (First Island Chain)',
      'La Línea de los Nueve Puntos',
      'El Corredor CPEC',
      'El Cinturón Euroasiático'
    ],
    correcta: 0,
    explicacion: 'La Primera Cadena de Islas es la barrera geográfica natural que Pekín busca superar para proyectar su marina hacia mar abierto en el Pacífico.'
  },
  {
    id: 'E08',
    dificultad: 'experto',
    categoria: 'Economía Mundial',
    pregunta: '¿Qué alternativa al sistema SWIFT desarrolló el Banco Popular de China para liquidar pagos transfronterizos en yuanes?',
    opciones: [
      'CIPS (Cross-Border Interbank Payment System)',
      'SPFS',
      'INSTEX',
      'mBridge'
    ],
    correcta: 0,
    explicacion: 'CIPS fue lanzado por China en 2015 para internacionalizar el renminbi y blindar sus transacciones frente a posibles sanciones de EE.UU.'
  },
  {
    id: 'E09',
    dificultad: 'experto',
    categoria: 'Recursos Naturales',
    pregunta: '¿Qué elemento de las tierras raras pesadas es crítico para que los imanes permanentes de neodimio resistan altas temperaturas en motores de misiles y cazas F-35?',
    opciones: [
      'Disprosio y Terbio',
      'Cerio y Lantano',
      'Prometio',
      'Itrio'
    ],
    correcta: 0,
    explicacion: 'Añadir pequeñas fracciones de disprosio (Dy) y terbio (Tb) eleva la coercitividad térmica de los imanes NdFeB, impidiendo su desmagnetización a más de 180 °C.'
  },
  {
    id: 'E10',
    dificultad: 'experto',
    categoria: 'Logística',
    pregunta: '¿Qué corredor multimodal de 7.200 km conecta San Petersburgo con Mumbai a través de Azerbaiyán, el Mar Caspio e Irán?',
    opciones: [
      'INSTC (International North-South Transport Corridor)',
      'Ruta Polar Ártica',
      'Corredor Lobito',
      'Gasoducto TAPI'
    ],
    correcta: 0,
    explicacion: 'El INSTC reduce el tiempo de flete entre Rusia e India de 40 días (vía Suez) a unos 20-22 días, operando completamente al margen de aguas de la OTAN.'
  },
  {
    id: 'E11',
    dificultad: 'experto',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Qué naviera estatal china controla terminales en los puertos de El Pireo (Grecia), Valencia (España), Róterdam (Países Bajos) y Chancay (Perú)?',
    opciones: [
      'COSCO Shipping Ports',
      'Evergreen Marine',
      'Hapag-Lloyd',
      'Yang Ming'
    ],
    correcta: 0,
    explicacion: 'COSCO Shipping es el brazo marítimo del estado chino y uno de los mayores operadores de terminales portuarias e infraestructuras del mundo.'
  },
  {
    id: 'E12',
    dificultad: 'experto',
    categoria: 'Energía',
    pregunta: '¿Qué yacimiento submarino de gas natural en el Golfo Pérsico es el mayor del mundo, compartido entre Qatar (North Field) e Irán (South Pars)?',
    opciones: [
      'North Field / South Pars',
      'Ghawar',
      'Leviathan',
      'Zohr'
    ],
    correcta: 0,
    explicacion: 'North Field / South Pars contiene cerca del 19% de las reservas totales de gas del planeta, cimiento de la inmensa riqueza de Qatar.'
  },
  {
    id: 'E13',
    dificultad: 'experto',
    categoria: 'Geopolítica',
    pregunta: '¿Qué estrecho de apenas 3 km de ancho en las islas danesas separa el mar Báltico del estrecho de Kattegat?',
    opciones: [
      'El Gran Belt (Storebælt) y el Sund (Øresund)',
      'El Bósforo',
      'Estrecho de Kerch',
      'Canal de Kiel'
    ],
    correcta: 0,
    explicacion: 'Los estrechos daneses (Gran Belt, Pequeño Belt y Øresund) son la única salida natural del Mar Báltico hacia el Mar del Norte y el Atlántico.'
  },
  {
    id: 'E14',
    dificultad: 'experto',
    categoria: 'Comercio Internacional',
    pregunta: '¿En qué puerto neerlandés se determina el precio de referencia del gas natural en Europa mediante contratos de futuros?',
    opciones: [
      'Title Transfer Facility (TTF)',
      'Henry Hub',
      'National Balancing Point (NBP)',
      'JKM (Japan Korea Marker)'
    ],
    correcta: 0,
    explicacion: 'El Dutch TTF (Title Transfer Facility) es el índice de precios de gas natural más líquido y referencial de todo el continente europeo.'
  },
  {
    id: 'E15',
    dificultad: 'experto',
    categoria: 'Recursos Naturales',
    pregunta: '¿Qué salar boliviano es considerado el mayor depósito continuo de sal y litio de la superficie terrestre?',
    opciones: [
      'Salar de Uyuni',
      'Salar de Atacama',
      'Salar del Hombre Muerto',
      'Salar de Arizaro'
    ],
    correcta: 0,
    explicacion: 'El Salar de Uyuni cuenta con más de 10.500 km² de extensión y concentra estimaciones de más de 21 millones de toneladas de litio.'
  },
  {
    id: 'E16',
    dificultad: 'experto',
    categoria: 'Transporte Marítimo',
    pregunta: '¿Cómo se denomina el documento legal estándar que acredita la propiedad de una carga marítima y funciona como contrato de transporte?',
    opciones: [
      'Bill of Lading (Conocimiento de Embarque / B/L)',
      'Incoterm FOB',
      'Certificado de Origen',
      'Packing List consular'
    ],
    correcta: 0,
    explicacion: 'El Bill of Lading (B/L) es el título valor más crucial en el comercio marítimo: quien posee el original posee legalmente la carga en destino.'
  },
  {
    id: 'E17',
    dificultad: 'experto',
    categoria: 'Geopolítica',
    pregunta: '¿Qué país africano alberga bases militares de EE.UU., China, Francia, Japón e Italia debido a su posición en Bab el-Mandeb?',
    opciones: [
      'Yibuti (Djibouti)',
      'Somalia',
      'Eritrea',
      'Yemen'
    ],
    correcta: 0,
    explicacion: 'Yibuti es el enclave geoestratégico por excelencia en el Cuerno de África, donde potencias antagónicas conviven a pocos kilómetros de distancia.'
  },
  {
    id: 'E18',
    dificultad: 'experto',
    categoria: 'Economía Mundial',
    pregunta: '¿Qué tipo de sanción extraterritorial de EE.UU. castiga a empresas de terceros países que no tienen relación directa con EE.UU. por negociar con una entidad sancionada?',
    opciones: [
      'Sanciones Secundarias (Secondary Sanctions)',
      'Aranceles Antidumping',
      'Cláusula de Nación Más Favorecida',
      'Cuotas de Salvaguarda'
    ],
    correcta: 0,
    explicacion: 'Las sanciones secundarias fuerzan a bancos y multinacionales de todo el mundo a elegir entre comerciar con el país castigado o perder acceso al dólar.'
  },
  {
    id: 'E19',
    dificultad: 'experto',
    categoria: 'Energía',
    pregunta: '¿Cuál es la longitud aproximada de la Ruta Marítima del Norte (NSR) a lo largo de la costa ártica de Rusia entre el estrecho de Kara y el estrecho de Bering?',
    opciones: [
      'Aproximadamente 5.600 km (~3.000 millas náuticas)',
      '1.200 km',
      '18.000 km',
      '25.000 km'
    ],
    correcta: 0,
    explicacion: 'La NSR recorre unos 5.600 km en aguas árticas rusas, acortando la travesía entre puertos de China y Europa en casi un 35% respecto a la ruta del Canal de Suez.'
  },
  {
    id: 'E20',
    dificultad: 'experto',
    categoria: 'Logística',
    pregunta: '¿Qué regla Incoterm 2020 establece que el vendedor entrega la mercancía al comprador ya despachada para la importación y asume absolutamente todos los costes y riesgos?',
    opciones: [
      'DDP (Delivered Duty Paid)',
      'EXW (Ex Works)',
      'FOB (Free On Board)',
      'CIF (Cost, Insurance and Freight)'
    ],
    correcta: 0,
    explicacion: 'Bajo DDP, el vendedor asume la máxima obligación: flete internacional, aranceles, aduanas e impuestos locales hasta la puerta del comprador.'
  }
];

if (typeof window !== 'undefined') {
  window.GEOQUIZ_BANK = GEOQUIZ_BANK;
}
