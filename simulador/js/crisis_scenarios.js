/**
 * WORLD CHAOS - BANCO DE ESCENARIOS DE WORLD CRISIS
 * 15 Escenarios Prospectivos de Crisis Geopolíticas y Logísticas Globales.
 * Cada escenario incluye contexto geoestratégico, 3 decisiones doctrinales,
 * cálculo de impacto en 4 variables macro (Comercio, Energía, Inflación, Logística),
 * y balance prospectivo educativo.
 * 
 * NOTA EDUCATIVA: Simulaciones didácticas de análisis estratégico, no predicciones reales.
 */

window.CRISIS_SCENARIOS = [
  {
    id: 'suez-bab-el-mandeb',
    titulo: 'Bloqueo Crítico del Canal de Suez & Bab el-Mandeb',
    region: 'Mar Rojo • Cuerno de África',
    teatro: 'ORIENTE MEDIO / ÁFRICA',
    nivelAlerta: 'DEFCON 1 • ALERTA ROJA',
    icono: '⚓',
    badgeColor: 'border-red-500/60 text-red-400 bg-red-950/40',
    contexto: 'Una escalada asimétrica de milicias costeras mediante drones suicidas de bajo coste y misiles balísticos antibuque inutiliza el tránsito comercial por el estrecho de Bab el-Mandeb. Las mayores navieras del mundo (Maersk, MSC, CMA CGM) suspenden de inmediato el paso por el Canal de Suez, paralizando el 12% del comercio global y el 30% del volumen mundial de contenedores. Barcos portacontenedores de 20.000 TEU se ven forzados a bordear toda África por el Cabo de Buena Esperanza, añadiendo 14 días de travesía y absorbiendo 1.000 toneladas de combustible extra por buque.',
    estadoInicial: {
      comercio: 45,
      energia: 55,
      inflacion: 65,
      logistica: 30
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Operación Militar de Escolta Naval & Represalia Costera',
        doctrina: 'Disuasión Bélica Tradicional',
        descripcion: 'Desplegar una fuerza combinada naval de portaaviones y destructores occidentales para derribar proyectiles y bombardear radares y lanzaderas en tierra.',
        impactos: {
          comercio: +15,
          energia: -10,
          inflacion: +8,
          logistica: +20
        },
        estabilidad: 68,
        calificacion: 'CONTENCIÓN COSTOSA',
        consecuencias: 'Los convoyes armados logran restablecer parcialmente un 40% del tráfico por Suez. Sin embargo, el riesgo de bajas colaterales dispara las primas de seguro marítimo bélico (War Risk) a niveles récord y los ataques con drones continúan de forma esporádica. El gasto operativo militar desborda presupuestos, pero se evita el corte total de cadenas de suministro europeas.',
        resumenInforme: 'El canal reabre al 40% de capacidad con escoltas continuas. Primas de seguro del 1% del valor del buque.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Ruta Permanente por Cabo de Buena Esperanza & Subsidios al Flete',
        doctrina: 'Resiliencia y Redireccionamiento Logístico',
        descripcion: 'Aceptar el desvío estructural rodeando África, habilitar subsidios extraordinarios de combustible a navieras y flexibilizar horarios portuarios en el Mediterráneo.',
        impactos: {
          comercio: -5,
          energia: -15,
          inflacion: +18,
          logistica: -25
        },
        estabilidad: 60,
        calificacion: 'ESTABILIDAD COMPENSADA CON INFLACIÓN',
        consecuencias: 'Cero buques hundidos y nula pérdida de vidas en combate, pero la cadena logística sufre un estrés brutal por desincronización de contenedores vacíos en Asia. Los fletes marítimos Shanghái-Róterdam se triplican hasta superar los 7.500 $/FEU. La inflación en bienes de consumo importados en la Eurozona sube 1,4 puntos porcentuales en 6 meses.',
        resumenInforme: 'Seguridad física absoluta de las tripulaciones a expensas de un repunte inflacionario severo.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Acuerdo Diplomático de Desescalada & Garantías Regionales de Neutralidad',
        doctrina: 'Diplomacia Multilateral & Mediación Geopolítica',
        descripcion: 'Negociar a través de Omán y potencias regionales un cese de hostilidades a cambio de concesiones diplomáticas e inmunidad verificada para buques comerciales neutrales.',
        impactos: {
          comercio: +25,
          energia: +10,
          inflacion: -12,
          logistica: +35
        },
        estabilidad: 84,
        calificacion: 'RESOLUCIÓN ESTRATÉGICA ÓPTIMA',
        consecuencias: 'El cese el fuego permite a las aseguradoras del Lloyd’s de Londres rebajar los recargos extraordinarios. En 6 semanas el tráfico por Suez se normaliza al 85%. Aunque genera críticas de debilidad geopolítica en ciertos cuarteles generales, salva billones de dólares en distorsiones logísticas.',
        resumenInforme: 'Restablecimiento del 85% del tráfico marítimo pacífico y deflación en tarifas de flete.'
      }
    ]
  },
  {
    id: 'ormuz-cierre',
    titulo: 'Cierre Táctico del Estrecho de Ormuz',
    region: 'Golfo Pérsico • Eje Irán-Omán',
    teatro: 'ORIENTE MEDIO',
    nivelAlerta: 'DEFCON 1 • MÁXIMA GRAVEDAD',
    icono: '🛢️',
    badgeColor: 'border-red-600/70 text-red-500 bg-red-950/50',
    contexto: 'Tras una crisis bélica regional, se despliegan minas marinas de contacto y lanchas rápidas armadas en las 21 millas náuticas navegables del Estrecho de Ormuz. Queda bloqueado el paso de 20,5 millones de barriles diarios de crudo (el 20% del consumo mundial de hidrocarburos) y un tercio de las exportaciones mundiales de Gas Natural Licuado (GNL), con Catar y los países del Golfo imposibilitados de exportar por mar.',
    estadoInicial: {
      comercio: 35,
      energia: 15,
      inflacion: 85,
      logistica: 40
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Operación Dragaminas Internacional & Ataques Quirúrgicos a Bases Costeras',
        doctrina: 'Guerra Antisubmarina y Dragado Bélico',
        descripcion: 'Desplegar buques cazaminas y submarinos para barrer el estrecho, respaldados por bombardeos selectivos sobre polvorines y lanzadores de misiles costeros.',
        impactos: {
          comercio: +10,
          energia: +20,
          inflacion: -15,
          logistica: +15
        },
        estabilidad: 62,
        calificacion: 'ALTO RIESGO BÉLICO',
        consecuencias: 'Se tarda 25 días en declarar un canal dragado seguro de 2 millas. Aunque el petróleo baja de los 140 $ iniciales a 105 $/barril, se sufren ataques de represalia contra refinerías del Golfo, prolongando la volatilidad energética durante 18 meses.',
        resumenInforme: 'Canal dragado con éxito pero con daños a la infraestructura petrolera regional.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Liberación Masiva de Reservas Estratégicas (AIE/SPR) & Racionamiento',
        doctrina: 'Economía de Guerra y Contención de Shock',
        descripcion: 'Liberar 3 millones de barriles diarios de la Reserva Estratégica de Petróleo de EE.UU. y Europa, imponiendo techos de consumo industrial y acelerando carbón y nuclear.',
        impactos: {
          comercio: -10,
          energia: +10,
          inflacion: -5,
          logistica: -10
        },
        estabilidad: 55,
        calificacion: 'CONTENCIÓN DE EMERGENCIA LIMITADA',
        consecuencias: 'Evita el colapso inmediato de las redes eléctricas occidentales, pero agota en 90 días las reservas soberanas construidas durante décadas. Los mercados anticipan escasez extrema una vez vacíos los tanques.',
        resumenInforme: 'Amortiguación temporal del shock; vulnerabilidad extrema a medio plazo.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Reactivación Máxima de Oleoductos By-Pass (Petroline y Habshan-Fujairah)',
        doctrina: 'Redireccionamiento Terrestre de Infraestructuras Críticas',
        descripcion: 'Conectar toda la producción saudí y emiratí a los oleoductos transcontinentales que desembocan en el Mar Rojo y el Océano Índico, puenteando Ormuz por completo.',
        impactos: {
          comercio: +20,
          energia: +30,
          inflacion: -22,
          logistica: +20
        },
        estabilidad: 78,
        calificacion: 'RESPUESTA LOGÍSTICA INTELIGENTE',
        consecuencias: 'Se rescatan 7,5 millones de barriles diarios de capacidad fuera de peligro. El GNL catarí sigue varado, pero el flujo petrolero restablecido tranquiliza a las refinerías en Japón, Corea e India.',
        resumenInforme: 'Los oleoductos terrestres alivian el 45% del shock sin librar un combate en el estrecho.'
      }
    ]
  },
  {
    id: 'taiwan-bloqueo',
    titulo: 'Bloqueo Marítimo y Cuarentena Naval de Taiwán',
    region: 'Estrecho de Taiwán • Mar de China Oriental',
    teatro: 'INDO-PACÍFICO',
    nivelAlerta: 'DEFCON 1 • AMENAZA SISTÉMICA GLOBAL',
    icono: '💻',
    badgeColor: 'border-red-500/80 text-red-400 bg-red-950/60',
    contexto: 'La guardia costera y la armada de una superpotencia asiática imponen una zona de exclusión y cuarentena aduanera total alrededor de Taiwán, inspeccionando o desviando todo buque mercante. Queda suspendida la exportación de TSMC, que fabrica el 90% de los chips de vanguardia (<5 nanómetros) del mundo. La automoción, la telefonía móvil, los centros de datos de inteligencia artificial y la industria militar global se quedan sin chips a 60 días del colapso de inventarios.',
    estadoInicial: {
      comercio: 30,
      energia: 50,
      inflacion: 80,
      logistica: 25
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Ruptura Naval con Operación Libertad de Navegación (FONOP)',
        doctrina: 'Contención Militar Frontal',
        descripcion: 'Despachar grupos de combate aeronavales con destructores Aegis para escoltar buques cargueros hasta el puerto de Kaohsiung desafiando el cerco.',
        impactos: {
          comercio: +10,
          energia: -20,
          inflacion: +20,
          logistica: -10
        },
        estabilidad: 50,
        calificacion: 'AL BORDE DE LA TERCERA GUERRA MUNDIAL',
        consecuencias: 'Se producen incidentes armados con buques de guerra dañados. Aunque 4 cargueros con chips logran salir, el estrecho se convierte en teatro bélico activo, paralizando el 50% de la flota mercante mundial de contenedores que cruza la región.',
        resumenInforme: 'Escalada nuclear evitada por milímetros; el pánico financiero hunde las bolsas globales.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Sanciones Financieras Masivas & Activación del Tratado CHIPS Act de Emergencia',
        doctrina: 'Guerra Geoeconómica & Autosuficiencia Forzada',
        descripcion: 'Congelar activos soberanos exteriores de la potencia bloqueadora e inyectar billones en fábricas de obleas en Arizona, Sajonia y Japón con jornadas 24/7.',
        impactos: {
          comercio: -25,
          energia: -10,
          inflacion: +35,
          logistica: -20
        },
        estabilidad: 45,
        calificacion: 'INVIERNO TECNOLÓGICO Y ESTANFLACIÓN',
        consecuencias: 'Levantar nuevas fábricas de silicio punteras requiere un mínimo de 3 a 5 años. Las plantas de coches en Occidente paran en seco por falta de microcontroladores. Inflación desatada en bienes duraderos.',
        resumenInforme: 'Parón masivo en industrias de automoción e IA por falta física de chips insustituibles.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Pacto de Puente Aéreo Protegido & Salida Segura de Silicio Vía Puertos Neutrales',
        doctrina: 'Diplomacia Comercial Técnica & Pasillo Humanitario/Industrial',
        descripcion: 'Negociar un corredor aéreo certificado por la OACI y Naciones Unidas exclusivamente para semiconductores civiles a cambio de garantías comerciales específicas.',
        impactos: {
          comercio: +20,
          energia: +5,
          inflacion: -15,
          logistica: +25
        },
        estabilidad: 76,
        calificacion: 'SALVACIÓN TECNOLÓGICA TÁCTICA',
        consecuencias: 'El transporte por avión es un 400% más caro por kilo que el barco, pero para chips de 3nm con precio por gramo astronómico es totalmente rentable. La cadena tecnológica global retiene el 70% de su suministro crítico.',
        resumenInforme: 'Los cargueros Boeing 777F y Antonov logran evacuar obleas críticas salvando a las tecnológicas.'
      }
    ]
  },
  {
    id: 'crisis-energetica-europea',
    titulo: 'Crisis Energética Europea: Estrés de Red y Corte de Gasoductos',
    region: 'Unión Europea • Mar del Norte • Báltico',
    teatro: 'EUROPA CONTINENTAL',
    nivelAlerta: 'DEFCON 2 • CRISIS SECTORIAL',
    icono: '⚡',
    badgeColor: 'border-amber-500/60 text-amber-400 bg-amber-950/40',
    contexto: 'Una ola polar extrema sin precedentes coincide con averías técnicas sincronizadas y sospecha de sabotaje submarino en gasoductos procedentes de Noruega y Argelia. Los almacenes subterráneos de gas de la UE se encuentran al 18% de capacidad en pleno enero. El megavatio-hora eléctrico salta de 70 € a más de 550 €, amenazando con la paralización total de la industria química de BASF, siderúrgicas y plantas de fertilizantes de Alemania, Francia y España.',
    estadoInicial: {
      comercio: 50,
      energia: 20,
      inflacion: 75,
      logistica: 50
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Puente Naval Máximo de Metaneros GNL desde EE.UU. y Catar',
        doctrina: 'Suministro Transatlántico Ultrarrápido',
        descripcion: 'Pagar primas de desvío para redirigir 60 buques metaneros que navegaban hacia Asia, saturando las plantas regasificadoras de España, Países Bajos y Alemania.',
        impactos: {
          comercio: +10,
          energia: +35,
          inflacion: -10,
          logistica: +10
        },
        estabilidad: 79,
        calificacion: 'ÉXITO LOGÍSTICO DE GNL',
        consecuencias: 'El flujo ininterrumpido de metaneros mantiene la red viva y evita apagones rodantes en ciudades. Sin embargo, arrebatar cargamentos a Asia eleva el precio mundial del GNL, encareciendo la energía para economías vulnerables.',
        resumenInforme: 'Las regasificadoras operan al 100% y estabilizan la red eléctrica en 15 días.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Racionamiento Industrial Obligatorio & Desconexión de Grandes Consumidores',
        doctrina: 'Priorización Civil de Emergencia',
        descripcion: 'Ordenar a fundiciones de aluminio, acerías y fábricas químicas detener hornos para garantizar calefacción doméstica y hospitales.',
        impactos: {
          comercio: -20,
          energia: +15,
          inflacion: +15,
          logistica: -15
        },
        estabilidad: 52,
        calificacion: 'CONSECUENCIA RECESIVA',
        consecuencias: 'Se salvan los hogares del congelamiento, pero la caída de producción industrial provoca un agujero de 80.000 millones de euros en el PIB del continente y miles de ERTEs temporales.',
        resumenInforme: 'Hogares protegidos, pero el tejido manufacturero básico sufre un golpe recesivo del 4%.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Reapertura Rápida de Centrales Nucleares & Carbón Estratégico',
        doctrina: 'Pragmatismo Energético Inmediato',
        descripcion: 'Aparcar temporalmente los objetivos de emisiones de CO₂ y ordenar la reactivación urgente de reactores nucleares en parada y térmicas de carbón.',
        impactos: {
          comercio: +5,
          energia: +30,
          inflacion: -18,
          logistica: +5
        },
        estabilidad: 73,
        calificacion: 'SOLUCIÓN PRAGMÁTICA DE CHOQUE',
        consecuencias: 'Aporta carga base estable inmediata, derriba el precio spot de la electricidad y rescata a la industria pesada. Genera fuertes protestas medioambientales pero supera la tormenta.',
        resumenInforme: 'La reactivación de carga base detiene la sangría de costes energéticos de las fábricas.'
      }
    ]
  },
  {
    id: 'escasez-semiconductores',
    titulo: 'Escasez Mundial de Semiconductores Industriales',
    region: 'Global • Eje Japón - Corea del Sur - Alemania',
    teatro: 'CADENA GLOBAL DE TECNOLOGÍA',
    nivelAlerta: 'DEFCON 2 • CRISIS INDUSTRIAL',
    icono: '🔬',
    badgeColor: 'border-cyan-500/60 text-cyan-400 bg-cyan-950/40',
    contexto: 'Un terremoto de magnitud 7,6 en la costa de Kyushu (Japón) inutiliza tres refinerías clave de silicio policristalino ultra puro y dos plantas químicas de fotoresistencias de Tokyo Ohka Kogyo, las cuales abastecen al 80% de las fundiciones mundiales. Sin estos reactivos químicos de precisión, la producción de chips automotrices, controladores de trenes y tarjetas médicas se interrumpe a escala planetaria.',
    estadoInicial: {
      comercio: 45,
      energia: 60,
      inflacion: 70,
      logistica: 40
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Priorización Estratégica por Decreto: Salud, Transporte e Infraestructura Crítica',
        doctrina: 'Economía Planificada de Componentes',
        descripcion: 'Obligar a los distribuidores a vetar compras de chips para videoconsolas y electrodomésticos, canalizando el 100% a medicina, automoción y red eléctrica.',
        impactos: {
          comercio: -5,
          energia: 0,
          inflacion: +10,
          logistica: +15
        },
        estabilidad: 72,
        calificacion: 'GESTIÓN EFICAZ DEL DAÑO',
        consecuencias: 'Las ambulancias, trenes de alta velocidad y hospitales siguen recibiendo repuestos sin retrasos. El sector de electrónica de consumo sufre pérdidas millonarias pero no colapsa el Estado.',
        resumenInforme: 'La infraestructura básica permanece operativa mientras se reparan las plantas químicas.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Subastas de Libre Mercado al Mejor Postor',
        doctrina: 'Libre Asignación de Capital',
        descripcion: 'Permitir que los precios de los chips se multipliquen por 20 libremente para que los use quien tenga mayor rentabilidad económica.',
        impactos: {
          comercio: -15,
          energia: 0,
          inflacion: +30,
          logistica: -10
        },
        estabilidad: 48,
        calificacion: 'DISTORSIÓN Y ESPECULACIÓN',
        consecuencias: 'Las grandes multinacionales tecnológicas acaparan millones de chips en almacenes especulativos, dejando a pequeños fabricantes de respiradores médicos e iluminación sin suministros.',
        resumenInforme: 'Especulación salvaje en el mercado spot y desabastecimiento de sectores esenciales.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Plan Marshall Químico: Certificación Exprés de Proveedores Alternativos',
        doctrina: 'Ingeniería Química de Respuesta Rápida',
        descripcion: 'Homologar en 30 días con ensayos acelerados a productores de fotoresistencias de Alemania, Taiwán y EE.UU. que no cumplían las normas previas.',
        impactos: {
          comercio: +15,
          energia: 0,
          inflacion: -12,
          logistica: +25
        },
        estabilidad: 81,
        calificacion: 'ÉXITO DE INNOVACIÓN INDUSTRIAL',
        consecuencias: 'Aunque un 2% de los primeros lotes de prueba presenta fallos, el 98% restante devuelve la producción al 85% de capacidad en apenas 75 días, normalizando las líneas de montaje.',
        resumenInforme: 'La diversificación química rompe el cuello de botella japonés en tiempo récord.'
      }
    ]
  },
  {
    id: 'caida-petroleo',
    titulo: 'Guerra de Cuotas y Desplome Abrupto del Petróleo a 25 $/barril',
    region: 'Global • OPEP+ • Cuenca Pérmica (EE. UU.)',
    teatro: 'MERCADO PETROLERO GLOBAL',
    nivelAlerta: 'DEFCON 3 • SHOCK DEFLACIONARIO',
    icono: '📉',
    badgeColor: 'border-emerald-500/60 text-emerald-400 bg-emerald-950/40',
    contexto: 'Una ruptura abrupta de los acuerdos de cuotas de producción en la OPEP+ desata una guerra de precios. Los países exportadores abren al máximo sus pozos para expulsar del mercado a los productores de fracking de esquisto de EE.UU. El barril de crudo Brent se hunde en picado de 85 $ a 25 $ en tres semanas. Las economías importadoras festejan combustible barato, pero los países exportadores entran en quiebra fiscal y los bancos acreedores de la energía tiemblan ante defaults masivos.',
    estadoInicial: {
      comercio: 60,
      energia: 75,
      inflacion: 30,
      logistica: 65
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Llenado al 100% de Tanques Petroleros Soberanos y Flota Flotante',
        doctrina: 'Oportunismo Logístico y Almacenamiento Masivo',
        descripcion: 'Contratar toda la flota disponible de superpetroleros VLCC para acumular petróleo ultra barato en alta mar y llenar al límite las cavernas de sal estratégicas.',
        impactos: {
          comercio: +15,
          energia: +25,
          inflacion: -15,
          logistica: -10
        },
        estabilidad: 82,
        calificacion: 'MANIOBRA FINANCIERA MAGISTRAL',
        consecuencias: 'Se bloquea una reserva de crudo para 5 años a un coste mínimo histórico. Las tarifas de flete de petroleros se disparan, pero el ahorro nacional en balanza de pagos es colosal.',
        resumenInforme: 'Reserva soberana colmada con petróleo regalado; escudo contra futuros shocks.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Rescate Financiero de Emergencia a Operadores de Fracking Nacionales',
        doctrina: 'Protección de Seguridad Energética Doméstica',
        descripcion: 'Garantizar créditos puente con dinero público a los perforadores locales para evitar que quiebren durante el periodo de precios deprimidos.',
        impactos: {
          comercio: 0,
          energia: +10,
          inflacion: +5,
          logistica: +5
        },
        estabilidad: 65,
        calificacion: 'SOSTENIMIENTO ARTIFICIAL',
        consecuencias: 'Mantiene viva la autosuficiencia energética nacional frente a la OPEP, pero cuesta 60.000 millones de euros en deuda pública que genera un fuerte debate fiscal.',
        resumenInforme: 'Protección de pozos locales al coste de asumir deuda soberana.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Establecer Aranceles Verdes Compensatorios al Crudo Importado',
        doctrina: 'Fiscalidad Ecológica de Frontera',
        descripcion: 'Imponer un impuesto especial al combustible para evitar que el desplome del petróleo descarrile las inversiones en renovables, eólica y coches eléctricos.',
        impactos: {
          comercio: -10,
          energia: -5,
          inflacion: +15,
          logistica: -5
        },
        estabilidad: 58,
        calificacion: 'CONFLICTO DE POLÍTICA PÚBLICA',
        consecuencias: 'Preserva los proyectos de transición verde, pero anula para los ciudadanos el beneficio de la gasolina barata y genera fricciones diplomáticas con los socios comerciales.',
        resumenInforme: 'Las renovables sobreviven a la tentación del crudo barato, pero el coste de vida no baja.'
      }
    ]
  },
  {
    id: 'panama-sequia',
    titulo: 'Sequía Crítica en el Lago Gatún y Colapso del Canal de Panamá',
    region: 'Centroamérica • Canal de Panamá',
    teatro: 'LOGÍSTICA TRANSOCEÁNICA AMERICANA',
    nivelAlerta: 'DEFCON 2 • CRISIS HÍDRICA / LOGÍSTICA',
    icono: '🚢',
    badgeColor: 'border-amber-500/60 text-amber-400 bg-amber-950/40',
    contexto: 'Un fenómeno extremo de El Niño provoca la peor sequía registrada en la cuenca hidrográfica del Lago Gatún, fuente de agua dulce para las esclusas del Canal de Panamá. La autoridad del canal se ve forzada a recortar los tránsitos diarios de 38 a solo 18 buques, e impone restricciones de calado que obligan a los buques Neopanamax a vaciar el 40% de su carga para no encallar. Se forma una cola de más de 160 cargueros varados en ambos lados del istmo.',
    estadoInicial: {
      comercio: 45,
      energia: 55,
      inflacion: 65,
      logistica: 30
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Desvío Intermodal Vía Ferrocarril Terrestre en EE. UU. (Land Bridge)',
        doctrina: 'Multimodalidad Ferroviaria de Alta Frecuencia',
        descripcion: 'Descargar los contenedores en Long Beach y Los Ángeles y transportarlos por tren a la Costa Este a través de Union Pacific y BNSF.',
        impactos: {
          comercio: +10,
          energia: -5,
          inflacion: +12,
          logistica: +20
        },
        estabilidad: 74,
        calificacion: 'BYPASS EFICIENTE PERO CARO',
        consecuencias: 'La carga llega 6 días antes que por mar, pero la congestión en las terminales ferroviarias duplica el coste de acarreo por contenedor.',
        resumenInforme: 'El tren salva el flujo entre las costas este y oeste con primas logísticas moderadas.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Subastas Libres de Slots de Paso al Mejor Postor',
        doctrina: 'Tarificación Marginal Pura',
        descripcion: 'La administración del canal subasta los pocos turnos de paso diarios. Grandes petroleros de GNL pagan hasta 4 millones de dólares solo por saltarse la fila.',
        impactos: {
          comercio: -15,
          energia: -10,
          inflacion: +20,
          logistica: -15
        },
        estabilidad: 51,
        calificacion: 'DISCRIMINACIÓN DE PEQUEÑOS CARGADORES',
        consecuencias: 'Solo las materias primas con márgenes gigantes logran cruzar. Los cargamentos de grano, fruta y bienes manufacturados se pudren esperando en fonda.',
        resumenInforme: 'Los ricos cruzan el canal; el comercio agrícola y pyme sufre pérdidas astronómicas.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Megaproyecto de Bombeo y Recirculación de Agua Salina con Desalinizadoras',
        doctrina: 'Ingeniería Hídrica de Resiliencia',
        descripcion: 'Instalar sistemas de recirculación con tinas de ahorro de agua al 100% para operar esclusas sin depender de lluvia dulce.',
        impactos: {
          comercio: +20,
          energia: -5,
          inflacion: -10,
          logistica: +30
        },
        estabilidad: 83,
        calificacion: 'SOLUCIÓN ESTRUCTURAL DEFINITIVA',
        consecuencias: 'Inversión costosa de amortización a 10 años, pero que garantiza la operatividad del canal frente a futuros cambios climáticos sin depender del monzón.',
        resumenInforme: 'Las nuevas tinas recuperan el 60% del agua de esclusado, devolviendo 32 tránsitos al día.'
      }
    ]
  },
  {
    id: 'sabotaje-baltico-cables',
    titulo: 'Sabotaje Coordinado a Cables Submarinos e Infraestructura en el Báltico',
    region: 'Mar Báltico • Finlandia • Suecia • Estonia',
    teatro: 'EUROPA DEL NORTE / INFRAESTRUCTURA HÍBRIDA',
    nivelAlerta: 'DEFCON 1 • GUERRA HÍBRIDA',
    icono: '🌐',
    badgeColor: 'border-red-500/70 text-red-400 bg-red-950/50',
    contexto: 'Un buque de carga sospechoso que apaga su transpondedor AIS arrastra su ancla durante 100 millas náuticas en el lecho marino del Báltico, seccionando simultáneamente dos gasoductos submarinos (Balticconnector) y cuatro cables troncales de fibra óptica que comunican a los países nórdicos con Europa continental. Se interrumpe el tráfico de datos financieros de la bolsa de Helsinki y el suministro eléctrico compartido.',
    estadoInicial: {
      comercio: 55,
      energia: 40,
      inflacion: 60,
      logistica: 45
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Redireccionamiento Satelital Masivo (Starlink/Oneweb) & Buques de Reparación OTAN',
        doctrina: 'Respaldo Orbital y Escolta Militar de Tendido',
        descripcion: 'Activar constelaciones satelitales LEO para cursar datos críticos y desplegar fragatas para proteger a los buques cableros durante la soldadura submarina.',
        impactos: {
          comercio: +15,
          energia: +10,
          inflacion: -5,
          logistica: +10
        },
        estabilidad: 80,
        calificacion: 'ÉXITO DE RESILIENCIA DIGITAL',
        consecuencias: 'La latencia de datos sube ligeramente, pero ningún banco o hospital sufre desconexión. Los cables se empalman en 18 días bajo un paraguas de seguridad naval.',
        resumenInforme: 'La redundancia satelital frustra el objetivo del sabotaje en menos de 48 horas.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Cierre del Estrecho Danés al Tráfico Mercante sin Bandera de la UE',
        doctrina: 'Bloqueo Marítimo Defensivo',
        descripcion: 'Prohibir el paso por el estrecho de Kattegat y Storebælt a buques que no cuenten con inspección previa de casco y anclas por guardacostas europeos.',
        impactos: {
          comercio: -25,
          energia: -15,
          inflacion: +20,
          logistica: -30
        },
        estabilidad: 42,
        calificacion: 'REACCIÓN EXCESIVA DISRUPTIVA',
        consecuencias: 'Genera una crisis diplomática con países neutrales y colapsa los puertos de Copenhague y Gotemburgo con colas interminables de inspección.',
        resumenInforme: 'Seguridad máxima pero con una parálisis comercial innecesaria en el norte de Europa.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Redundancia Terrestre Troncal por el Corredor Rail Baltica y Escandinavia',
        doctrina: 'Enterramiento de Redes Físicas Protegidas',
        descripcion: 'Acelerar el tendido de fibra óptica y conducciones eléctricas enterradas bajo el trazado de trenes de alta velocidad terrestres.',
        impactos: {
          comercio: +10,
          energia: +15,
          inflacion: -8,
          logistica: +15
        },
        estabilidad: 76,
        calificacion: 'BLINDAJE INFRAESTRUCTURAL',
        consecuencias: 'Menor velocidad de despliegue inicial que los cables marinos, pero inmunidad absoluta frente a anclas arrastradas o buzos militares enemigos.',
        resumenInforme: 'El eje terrestre proporciona una alternativa invulnerable a ataques marítimos híbridos.'
      }
    ]
  },
  {
    id: 'guerra-aranceles-60',
    titulo: 'Guerra Arancelaria Global Recíproca del 60%',
    region: 'Global • Eje Washington - Bruselas - Pekín',
    teatro: 'COMERCIO INTERNACIONAL • OMC',
    nivelAlerta: 'DEFCON 2 • CRISIS COMERCIAL',
    icono: '⚖️',
    badgeColor: 'border-orange-500/70 text-orange-400 bg-orange-950/40',
    contexto: 'Tras una ruptura de negociaciones multilaterales, la mayor economía del planeta decreta aranceles generales del 60% a todos los productos manufacturados procedentes de Asia y del 25% a Europa. En 48 horas, los países afectados responden con aranceles idénticos sobre la soja, el gas natural licuado, aviones y automóviles de importación. El sistema de resolución de disputas de la OMC queda formalmente pulverizado y las aduanas retienen millones de contenedores.',
    estadoInicial: {
      comercio: 20,
      energia: 55,
      inflacion: 85,
      logistica: 35
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Triangulación y Reetiquetado Masivo vía Terceros Países (Nearshoring Hubs)',
        doctrina: 'Arbitraje Comercial y Relocalización Acelerada',
        descripcion: 'Desviar flujos industriales hacia México, Vietnam, Polonia y Marruecos para ensamblaje intermedio antes del destino final.',
        impactos: {
          comercio: +20,
          energia: -5,
          inflacion: -10,
          logistica: +15
        },
        estabilidad: 70,
        calificacion: 'ADAPTACIÓN DEL MERCADO GLOBAL',
        consecuencias: 'Añade un 10-15% de coste burocrático y de transporte, pero permite a las multinacionales sortear el 80% de los aranceles directos, manteniendo vivas las fábricas.',
        resumenInforme: 'El comercio global se reinventa a través de corredores intermedios en México y el Sudeste Asiático.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Escalada Arancelaria Total al 100% y Bloqueo de Capitales',
        doctrina: 'Proteccionismo Autárquico Extremo',
        descripcion: 'Responder con prohibiciones totales de importación y prohibir a fondos soberanos comprar bonos del tesoro rivales.',
        impactos: {
          comercio: -35,
          energia: -15,
          inflacion: +40,
          logistica: -30
        },
        estabilidad: 32,
        calificacion: 'CRAC COMERCIAL Y ESTANFLACIÓN GENERALIZADA',
        consecuencias: 'La contracción del PIB global recuerda a los años 30 tras la ley Smoot-Hawley. Quiebra de decenas de navieras y desempleo masivo en regiones exportadoras.',
        resumenInforme: 'El comercio mundial se retrotrae a niveles del siglo pasado con inflación desbocada.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Pacto de Tensa Calma: Exenciones Selectivas a Bienes Críticos y Alimentación',
        doctrina: 'Geoeconomía Quirúrgica y Desescalada Bilateral',
        descripcion: 'Negociar una lista blanca mutua de 2.000 códigos arancelarios inmunes al impuesto (medicinas, procesadores, fertilizantes y grano).',
        impactos: {
          comercio: +25,
          energia: +5,
          inflacion: -20,
          logistica: +20
        },
        estabilidad: 78,
        calificacion: 'SALVACIÓN DEL NÚCLEO PRODUCTIVO',
        consecuencias: 'Protege la cesta de la compra y la supervivencia de los sectores vitales mientras se mantienen aranceles en productos de lujo o prescindibles.',
        resumenInforme: 'La lista blanca salva las cadenas de suministro esenciales para la población civil.'
      }
    ]
  },
  {
    id: 'embargo-tierras-raras',
    titulo: 'Embargo Total de Tierras Raras e Imanes de Neodimio',
    region: 'Asia Oriental • China • Cuenca Minera de Bayan Obo',
    teatro: 'MINERALES CRÍTICOS Y TRANSICIÓN ENERGÉTICA',
    nivelAlerta: 'DEFCON 1 • BLOQUEO DE MATERIAS PRIMAS',
    icono: '🧲',
    badgeColor: 'border-red-500/70 text-red-400 bg-red-950/50',
    contexto: 'El mayor refinador mundial de minerales críticos suspende de golpe todas las licencias de exportación de Neodimio, Disprosio, Galio y Germanio refinados, citando motivos de seguridad nacional. Estos elementos son el corazón indispensable de los motores de coches eléctricos, aerogeneradores marinos, radares AESA militares de cazas de combate y cables transoceánicos. Occidente solo cuenta con reservas para 45 días.',
    estadoInicial: {
      comercio: 40,
      energia: 35,
      inflacion: 75,
      logistica: 45
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Activación del Acta de Producción de Defensa en Minería & Refinado Exprés',
        doctrina: 'Movilización Industrial de Emergencia',
        descripcion: 'Conceder exenciones ambientales de choque a minas en Mountain Pass (EE. UU.), Mount Weld (Australia) y Groenlandia para procesar mineral en suelo aliado.',
        impactos: {
          comercio: +10,
          energia: +15,
          inflacion: -5,
          logistica: +10
        },
        estabilidad: 73,
        calificacion: 'CONSTRUCCIÓN DE INDEPENDENCIA GEOLÓGICA',
        consecuencias: 'El procesado de tierras raras es altamente contaminante con residuos radiactivos leves (torio). Provoca críticas verdes pero crea la primera red de refinado independiente en 20 meses.',
        resumenInforme: 'El monopolio de procesado se quiebra tras una década de hegemonía incontestada.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Reciclaje Compulsorio de Chatarra Electrónica y Desguace de Aerogeneradores Viejos',
        doctrina: 'Economía Circular de Choque',
        descripcion: 'Requisar motores industriales dados de baja y electrónica obsoleta en vertederos para extraer imanes permanentes con procesos hidrometalúrgicos.',
        impactos: {
          comercio: +5,
          energia: +10,
          inflacion: -2,
          logistica: +15
        },
        estabilidad: 66,
        calificacion: 'ALIVIO PARCIAL INTELIGENTE',
        consecuencias: 'Aporta hasta un 25% del neodimio necesario para las fábricas de defensa y turbinas eólicas mientras se abren nuevas minas.',
        resumenInforme: 'La minería urbana de imanes amortigua el 25% del shock a corto plazo.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Cesión Geopolítica y Levantamiento de Vetos a la Exportación de Tecnología',
        doctrina: 'Capitulación Táctica de Compromiso',
        descripcion: 'Levantar las sanciones al software y litografía avanzada a cambio de que se restablezca el flujo completo de minerales de grado batería.',
        impactos: {
          comercio: +25,
          energia: +20,
          inflacion: -20,
          logistica: +20
        },
        estabilidad: 75,
        calificacion: 'PAZ INDUSTRIAL A COSTA DE VENTAJA TECNOLÓGICA',
        consecuencias: 'Las fábricas de coches europeos y de EE.UU. vuelven a funcionar al día siguiente, pero la ventaja militar tecnológica occidental queda seriamente comprometida.',
        resumenInforme: 'Las líneas de montaje automotrices se salvan; la carrera de chips se iguala.'
      }
    ]
  },
  {
    id: 'mar-negro-cereal',
    titulo: 'Ruptura del Corredor del Mar Negro y Crisis Alimentaria Global',
    region: 'Mar Negro • Puertos de Odesa, Chornomorsk y Danubio',
    teatro: 'SEGURIDAD ALIMENTARIA Y AGRICULTURA GLOBAL',
    nivelAlerta: 'DEFCON 2 • EMERGENCIA HUMANITARIA Y SOCIAL',
    icono: '🌾',
    badgeColor: 'border-amber-500/70 text-amber-400 bg-amber-950/40',
    contexto: 'Tras bombardeos nocturnos sobre silos de grano e instalaciones portuarias en el delta del Danubio, se cancelan las garantías de navegación para cargueros graneleros. Veinticinco millones de toneladas de trigo, cebada y aceite de girasol quedan atrapadas. Los precios del trigo en el mercado de futuros de Chicago se disparan un 38% en 4 días, amenazando con revueltas del pan y desestabilización política en Egipto, Líbano, Túnez e Indonesia.',
    estadoInicial: {
      comercio: 40,
      energia: 50,
      inflacion: 80,
      logistica: 35
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Corredores Solidarios Terrestres por Ferrocarril y Carretera hacia Puertos Europeos',
        doctrina: 'Bypass Terrestre Hacia el Mar Báltico y Adriático',
        descripcion: 'Sacar el grano en trenes de mercancías a través de Polonia y Rumanía para embarcarlo en Gdansk y Constanza.',
        impactos: {
          comercio: +15,
          energia: -5,
          inflacion: -12,
          logistica: +10
        },
        estabilidad: 71,
        calificacion: 'LOGÍSTICA COMPLEJA PERO EFECTIVA',
        consecuencias: 'La diferencia de ancho de vía entre Ucrania y la UE genera cuellos de botella en frontera, pero se logra evacuar el 60% de la cosecha salvando los suministros.',
        resumenInforme: 'El tren intermodal rescata 15 millones de toneladas de cereal de la parálisis.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Misión Naval de Escolta de la ONU / Potencias Ribereñas Neutrales (Turquía)',
        doctrina: 'Protección Naval Humanitaria Multilateral',
        descripcion: 'Establecer convoyes armados de la armada turca para garantizar el tránsito pacífico por el Bósforo amparados en el Convenio de Montreux.',
        impactos: {
          comercio: +25,
          energia: 0,
          inflacion: -25,
          logistica: +25
        },
        estabilidad: 83,
        calificacion: 'TRIUNFO DIPLOMÁTICO RIBEREÑO',
        consecuencias: 'Ninguna de las partes beligerantes se atreve a disparar contra la marina turca en aguas internacionales. El grano fluye y los precios de los alimentos se desploman a la normalidad.',
        resumenInforme: 'La escolta diplomática turca reabre los puertos con respaldo internacional.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Sustitución de Emergencia con Cosechas del Cono Sur y Norteamérica',
        doctrina: 'Reconfiguración Agrícola Global',
        descripcion: 'Firmar compras masivas anticipadas con productores de Brasil, Argentina y EE. UU., subvencionando el flete transoceánico a África.',
        impactos: {
          comercio: +10,
          energia: -10,
          inflacion: -5,
          logistica: -10
        },
        estabilidad: 64,
        calificacion: 'SOLUCIÓN COSTOSA DE LARGA DISTANCIA',
        consecuencias: 'Evita la hambruna en los países más vulnerables, pero los costes de transporte marítimo a larga distancia encarecen el producto final un 20%.',
        resumenInforme: 'La soja y maíz sudamericano cubren el hueco, pero con mayor coste logístico.'
      }
    ]
  },
  {
    id: 'ciberataque-puertos-eeuu',
    titulo: 'Ciberataque Ransomware Coordinado a los 5 Mayores Puertos del Pacífico',
    region: 'Costa Oeste de EE. UU. • Los Ángeles • Long Beach • Seattle',
    teatro: 'CIBERGUERRA INDUSTRIAL OT/IT',
    nivelAlerta: 'DEFCON 1 • PARÁLISIS INFRAESTRUCTURAL',
    icono: '👾',
    badgeColor: 'border-red-600/70 text-red-500 bg-red-950/50',
    contexto: 'Un malware avanzado con firma de un grupo patrocinado por un Estado hostil penetra los sistemas de control operativo (OT) de grúas pórtico automatizadas, lectores de contenedores RFID y plataformas de asignación de camiones en los puertos de Los Ángeles y Long Beach. Más de 65 buques portacontenedores quedan fondeados en la bahía sin poder descargar. La Costa Oeste de EE.UU. se apaga digitalmente, paralizando el 40% de las importaciones nacionales.',
    estadoInicial: {
      comercio: 35,
      energia: 55,
      inflacion: 75,
      logistica: 15
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Transición Inmediata a Operativa Manual Analógica con Guardia Nacional',
        doctrina: 'Resiliencia Manual de Emergencia',
        descripcion: 'Desconectar todos los servidores de la red física y operar grúas y estiba mediante operarios con walkie-talkies y registros en papel.',
        impactos: {
          comercio: +10,
          energia: 0,
          inflacion: +10,
          logistica: +20
        },
        estabilidad: 68,
        calificacion: 'OPERATIVIDAD DE EMERGENCIA AL 35%',
        consecuencias: 'El ritmo de descarga cae a un tercio del habitual, pero rompe el chantaje de los atacantes y evita que el país se quede sin medicinas ni piezas críticas.',
        resumenInforme: 'El lápiz y el papel devuelven la vida a los muelles sin pagar un solo dólar de rescate.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Pago Inmediato del Rescate en Criptomonedas para Obtener Llave de Descifrado',
        doctrina: 'Capitulación Pragmática Comercial',
        descripcion: 'Pagar 40 millones de dólares en criptoactivos a través de una firma de negociación para restaurar las bases de datos en 6 horas.',
        impactos: {
          comercio: +25,
          energia: 0,
          inflacion: -5,
          logistica: +35
        },
        estabilidad: 55,
        calificacion: 'ALIVIO RÁPIDO CON PÉSIMO PRECEDENTE',
        consecuencias: 'Los sistemas vuelven a operar en 24 horas y los barcos descargan. No obstante, incentiva nuevos ataques masivos y financia a organizaciones paramilitares.',
        resumenInforme: 'Los sistemas reviven en horas pero abre la puerta a chantajes permanentes en el futuro.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Desvío Masivo de la Flota hacia Ensenada (México) y Vancouver (Canadá)',
        doctrina: 'Descentralización Logística Binacional',
        descripcion: 'Emitir orden de desvío a los buques en tránsito hacia puertos limítrofes aliados e introducir la mercancía por ferrocarril transfronterizo.',
        impactos: {
          comercio: +15,
          energia: -5,
          inflacion: -5,
          logistica: +15
        },
        estabilidad: 76,
        calificacion: 'REDIRECCIONAMIENTO INTELIGENTE',
        consecuencias: 'Satura las aduanas mexicanas y canadienses durante 10 días, pero alivia la mitad del atasco marítimo mientras los equipos forenses limpian los puertos de EE.UU.',
        resumenInforme: 'México y Canadá se convierten en los pulmones de descarga de Norteamérica.'
      }
    ]
  },
  {
    id: 'golpe-cinturon-cobalto',
    titulo: 'Inestabilidad y Golpe en el Cinturón del Cobalto y Cobre Africano',
    region: 'África Central • R. D. del Congo • Zambia',
    teatro: 'MINERÍA CRÍTICA Y CADENA DE BATERÍAS',
    nivelAlerta: 'DEFCON 2 • CRISIS EXTRACTIVA',
    icono: '⛏️',
    badgeColor: 'border-yellow-500/70 text-yellow-400 bg-yellow-950/40',
    contexto: 'Una insurrección militar armada toma el control de las provincias mineras de Katanga y Lualaba en la República Democrática del Congo, de donde procede más del 70% del cobalto mundial indispensable para baterías de litio NMC y aleaciones aeroespaciales. Las fronteras con Zambia se cierran y convoyes de camiones cargados con hidróxido de cobalto son confiscados por milicias.',
    estadoInicial: {
      comercio: 50,
      energia: 45,
      inflacion: 70,
      logistica: 40
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Aceleración Forzada de Baterías LFP y Sodio sin Cobalto',
        doctrina: 'Salto Tecnológico de Sustitución',
        descripcion: 'Conceder subsidios industriales a los fabricantes de coches para reemplazar cátodos de cobalto por química de fosfato de hierro y litio (LFP) y sodio.',
        impactos: {
          comercio: +10,
          energia: +10,
          inflacion: -15,
          logistica: +20
        },
        estabilidad: 84,
        calificacion: 'TRANSICIÓN TECNOLÓGICA DEFINITIVA',
        consecuencias: 'Los nuevos coches pierden un 10% de autonomía máxima pero se fabrican sin un solo gramo de mineral africano en conflicto, derribando el monopolio de las milicias.',
        resumenInforme: 'La sustitución química de materiales inutiliza el chantaje de los golpistas.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Despliegue de Contratistas de Seguridad Militar Privada para Escortar Convoyes',
        doctrina: 'Seguridad Armada Corporativa',
        descripcion: 'Las grandes multinacionales financian brigadas armadas de protección de convoys por el Corredor de Lobito hacia el puerto atlántico de Angola.',
        impactos: {
          comercio: +15,
          energia: 0,
          inflacion: +5,
          logistica: +10
        },
        estabilidad: 62,
        calificacion: 'MERCENARIZACIÓN COSTOSA',
        consecuencias: 'El mineral sale de las minas al precio de convertir las carreteras en zonas de guerra con incidentes armados constantes y fuertes denuncias de derechos humanos.',
        resumenInforme: 'El Corredor de Lobito saca el mineral pero con elevado coste ético y financiero.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Pago de Tasas Extraordinarias de Tránsito a los Nuevos Caudillos Locales',
        doctrina: 'Realpolitik Extractiva',
        descripcion: 'Aceptar el sobrecoste impositivo de las autoridades militares golpistas para reanudar el paso inmediato de los camiones hacia Durban.',
        impactos: {
          comercio: +5,
          energia: 0,
          inflacion: +20,
          logistica: +5
        },
        estabilidad: 49,
        calificacion: 'EXTORSIÓN PERMANENTE',
        consecuencias: 'El mineral vuelve a fluir en 7 días pero el precio del cobalto se multiplica por tres y las milicias exigen cada mes porcentajes más elevados.',
        resumenInforme: 'Suministro reanudado al coste de financiar a regímenes militares ilegítimos.'
      }
    ]
  },
  {
    id: 'corredor-transcaspiano-sequia',
    titulo: 'Bloqueo del Corredor Central Transcaspiano (Ruta de la Seda Alternativa)',
    region: 'Asia Central • Kazajistán • Azerbaiyán • Mar Caspio',
    teatro: 'LOGÍSTICA FERROVIARIA EURASIÁTICA',
    nivelAlerta: 'DEFCON 3 • CRISIS DE ENLACE CONTINENTAL',
    icono: '🚂',
    badgeColor: 'border-blue-500/70 text-blue-400 bg-blue-950/40',
    contexto: 'El retroceso histórico del nivel de agua en el Mar Caspio impide que los ferris de trenes de carga atraquen en los puertos de Aktau (Kazajistán) y Bakú (Azerbaiyán). El "Corredor Central", ruta multimodal clave que une a China con Europa esquivando territorio ruso, queda completamente saturado con más de 12.000 vagones detenidos en las estepas kazajas.',
    estadoInicial: {
      comercio: 50,
      energia: 50,
      inflacion: 65,
      logistica: 35
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Dragado de Emergencia en los Muelles de Aktau & Barcazas de Poco Calado',
        doctrina: 'Ingeniería Portuaria Inmediata',
        descripcion: 'Contratar dragas fluviales europeas para abrir canales más profundos y fletar barcazas autopropulsadas de fondo plano.',
        impactos: {
          comercio: +15,
          energia: +5,
          inflacion: -8,
          logistica: +25
        },
        estabilidad: 78,
        calificacion: 'DESCONGESTIÓN EFICAZ DEL CASPIO',
        consecuencias: 'En 3 semanas los ferris vuelven a operar con el 70% de carga, descongestionando el tráfico de trenes comerciales hacia Turquía y Europa Central.',
        resumenInforme: 'Las dragas reabren los muelles y salvan el 70% del tráfico ferroviario.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Desvío de Trenes hacia el Ferrocarril Transiberiano del Norte',
        doctrina: 'Ruta Geopolíticamente Comprometida',
        descripcion: 'Aceptar el paso por territorio de potencias bajo régimen de sanciones secundarias para no perder los plazos de entrega a clientes europeos.',
        impactos: {
          comercio: +20,
          energia: 0,
          inflacion: -10,
          logistica: +20
        },
        estabilidad: 50,
        calificacion: 'RIESGO DE SANCIONES SECUNDARIAS',
        consecuencias: 'Los trenes ruedan a toda velocidad, pero varias multinacionales europeas son multadas por infringir normativas de transporte transfronterizo.',
        resumenInforme: 'Rapidez logística al precio de enfrentarse a sanciones judiciales internacionales.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Ruta Sur por Ferrocarril a través de Turkmenistán, Irán y Turquía',
        doctrina: 'Desvío Terrestre del Sur',
        descripcion: 'Sortear el Mar Caspio por el sur cruzando la meseta iraní mediante acuerdos de tránsito aduanero sellado.',
        impactos: {
          comercio: +10,
          energia: 0,
          inflacion: 0,
          logistica: +10
        },
        estabilidad: 64,
        calificacion: 'BYPASS LENTO CON TRABAS ADUANERAS',
        consecuencias: 'Evita el agua por completo, pero las demoras en las inspecciones de frontera alargan el viaje de 14 a 28 días.',
        resumenInforme: 'La ruta meridional funciona pero pierde la ventaja de velocidad frente al barco.'
      }
    ]
  },
  {
    id: 'tormenta-solar-gnss',
    titulo: 'Tormenta Solar Extrema & Caída de Navegación Satelital GNSS/GPS',
    region: 'Órbita Terrestre • Global • Rutas Oceánicas Troncales',
    teatro: 'CIBERESPACIO Y GUERRA ELECTRÓNICA',
    nivelAlerta: 'DEFCON 1 • FALLA TECNOLÓGICA GENERAL',
    icono: '🛰️',
    badgeColor: 'border-purple-500/70 text-purple-400 bg-purple-950/40',
    contexto: 'Una eyección de masa coronal solar de clase X20 impacta la magnetosfera terrestre, dejando ciegos o con derivas kilométricas a los satélites GPS (EE. UU.), Galileo (Europa), BeiDou (China) y GLONASS (Rusia). Sin posicionamiento satelital ni sincronización temporal de microsegundos, los sistemas de pilotaje automático de 55.000 buques mercantes y el control de tráfico aéreo se ven obligados a operar a ciegas.',
    estadoInicial: {
      comercio: 25,
      energia: 45,
      inflacion: 75,
      logistica: 10
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Resurrección del Sistema Terrestre LORAN-C / eLORAN y Navegación Astronómica',
        doctrina: 'Redundancia Terrestre de Radiofrecuencia de Baja Frecuencia',
        descripcion: 'Encender antenas transmisoras de radio costera de onda larga e instruir a las tripulaciones para calcular posición con sextantes y cartas de papel.',
        impactos: {
          comercio: +15,
          energia: 0,
          inflacion: -10,
          logistica: +25
        },
        estabilidad: 82,
        calificacion: 'TRIUNFO DE LA NAVEGACIÓN ANALÓGICA CLÁSICA',
        consecuencias: 'Los barcos reducen velocidad a la mitad por seguridad, pero ningún buque colisiona en estrechos y el comercio marítimo se mantiene vivo.',
        resumenInforme: 'El viejo sistema eLORAN terrestre salva a la flota mundial cuando los satélites fallan.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Orden de Fondeo General y Parada Total de Buques en Alta Mar',
        doctrina: 'Prudencia Absoluta de Riesgo Cero',
        descripcion: 'Ordenar a todos los buques del mundo apagar motores o fondear hasta que se recupere la señal satelital en semanas.',
        impactos: {
          comercio: -30,
          energia: -20,
          inflacion: +35,
          logistica: -35
        },
        estabilidad: 38,
        calificacion: 'COLAPSO ECONÓMICO POR PARÁLISIS',
        consecuencias: 'Cero naufragios, pero la paralización total de alimentos y medicinas provoca desabastecimiento generalizado en supermercados de todos los continentes.',
        resumenInforme: 'Seguridad absoluta en el mar a cambio de un colapso humanitario en tierra firme.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Uso de Radares Costeros de Alta Definición y Navegación Visual por Balizas',
        doctrina: 'Guiado Costero Guiado por Estaciones de Prácticos',
        descripcion: 'Habilitar relevos de capitanes de puerto y prácticos para escoltar buques barco a barco a lo largo de las costas.',
        impactos: {
          comercio: +10,
          energia: 0,
          inflacion: -5,
          logistica: +15
        },
        estabilidad: 70,
        calificacion: 'OPERATIVA LOCAL EXITOSA',
        consecuencias: 'Mantiene abiertos los accesos a puertos clave como Róterdam, Singapur y Valencia, aunque las travesías en mitad del océano siguen ralentizadas.',
        resumenInforme: 'Los prácticos de puerto asumen el control visual y evitan el cierre de terminales.'
      }
    ]
  },
  {
    id: 'chancay-pacifico-sur',
    titulo: 'Disrupción Crítica en el Eje Portuario del Megapuerto de Chancay',
    region: 'Pacífico Sur • Perú • Eje Lima-Shanghái',
    teatro: 'NUEVA RUTA DE LA SEDA TRANSOCEÁNICA',
    nivelAlerta: 'DEFCON 2 • CRISIS GEOESTRATÉGICA EN SUDAMÉRICA',
    icono: '🏗️',
    badgeColor: 'border-cyan-500/70 text-cyan-400 bg-cyan-950/40',
    contexto: 'Un bloqueo de carreteras prolongado por movimientos sociales en el corredor minero andino, sumado a tensiones diplomáticas que congelan temporalmente los permisos de operación de la terminal automatizada del Megapuerto de Chancay (el mayor hub de aguas profundas del Pacífico Sudamericano con conexión directa a Shanghái), paraliza el embarque de millones de toneladas de cobre y harina de pescado. Cientos de miles de contenedores de exportación quedan varados.',
    estadoInicial: {
      comercio: 50,
      energia: 55,
      inflacion: 65,
      logistica: 35
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Cabotaje Naval Rápido hacia los Puertos del Callao y San Antonio (Chile)',
        doctrina: 'Redireccionamiento Costero de Emergencia',
        descripcion: 'Movilizar buques feeder costeros para trasladar la carga represada a muelles alternativos tradicionales de la costa pacífica.',
        impactos: {
          comercio: +15,
          energia: -5,
          inflacion: -5,
          logistica: +20
        },
        estabilidad: 75,
        calificacion: 'ALIVIO REGIONAL OPORTUNO',
        consecuencias: 'Satura las terminales del Callao pero permite que el cobre salga hacia las fundiciones asiáticas sin incumplir los contratos internacionales de entrega.',
        resumenInforme: 'El cabotaje marítimo salva el 80% de los envíos mineros del Pacífico Sur.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Militarización de los Accesos Viales y Operación Forzada de la Terminal',
        doctrina: 'Imposición de Fuerza Pública',
        descripcion: 'Desplegar fuerzas armadas para despejar carreteras y tomar el control militar de los accesos a la terminal de Chancay.',
        impactos: {
          comercio: +10,
          energia: 0,
          inflacion: +10,
          logistica: +10
        },
        estabilidad: 52,
        calificacion: 'ESCALADA DE CONFLICTIVIDAD SOCIAL',
        consecuencias: 'Los camiones entran bajo escolta, pero se desatan huelgas indefinidas en todo el país que terminan paralizando otros sectores productivos.',
        resumenInforme: 'La fuerza abre el puerto pero enciende un polvorín social en el interior del país.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Mesa de Concertación Nacional con Fondo de Canon y Desarrollo Territorial',
        doctrina: 'Pacto Socioeconómico de Estabilidad',
        descripcion: 'Crear un fideicomiso inmediato con los ingresos portuarios para financiar agua potable, hospitales y carreteras en las comunidades aledañas.',
        impactos: {
          comercio: +25,
          energia: 0,
          inflacion: -10,
          logistica: +30
        },
        estabilidad: 85,
        calificacion: 'PAZ SOCIAL Y BLINDAJE A LARGO PLAZO',
        consecuencias: 'El paro se levanta pacíficamente en 72 horas. Chancay opera a pleno rendimiento y se consolida como el nodo logístico indiscutido del Pacífico Sur.',
        resumenInforme: 'El acuerdo social garantiza la estabilidad definitiva del megapuerto para las próximas décadas.'
      }
    ]
  },
  {
    id: 'huelga-portuaria-costa-este',
    titulo: 'Huelga General Portuaria en 36 Puertos de la Costa Este de EE. UU.',
    region: 'Atlántico / Golfo de México • Maine a Texas',
    teatro: 'LOGÍSTICA TRANSATLÁNTICA NORTEAMERICANA',
    nivelAlerta: 'DEFCON 2 • CRISIS LABORAL Y CADENAS DE SUMINISTRO',
    icono: '🪧',
    badgeColor: 'border-orange-500/70 text-orange-400 bg-orange-950/40',
    contexto: 'Más de 45.000 estibadores de 36 puertos desde Boston hasta Houston van a la huelga indefinida exigiendo prohibir la automatización de grúas y aumentos salariales récord. Queda paralizado el 50% de las importaciones y exportaciones marítimas de EE. UU. (incluyendo repuestos de automoción, café, vino y productos químicos). Se calcula un coste de 5.000 millones de dólares diarios para la economía norteamericana con decenas de buques anclados.',
    estadoInicial: {
      comercio: 40,
      energia: 55,
      inflacion: 75,
      logistica: 25
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Aplicación del Acta Taft-Hartley (Obligación de Vuelta al Trabajo por 80 Días)',
        doctrina: 'Intervención Federal Coactiva',
        descripcion: 'El gobierno federal invoca poderes presidenciales de seguridad nacional para ordenar judicialmente el retorno obligatorio a los puestos de trabajo.',
        impactos: {
          comercio: +15,
          energia: 0,
          inflacion: -10,
          logistica: +15
        },
        estabilidad: 62,
        calificacion: 'ALIVIO TEMPORAL CON HUELGA DE BRAZOS CAÍDOS',
        consecuencias: 'Los puertos reabren formalmente, pero los estibadores aplican un estricto cumplimiento reglamentario que ralentiza las operaciones un 50%. El conflicto queda aplazado sin resolverse.',
        resumenInforme: 'La orden judicial evita el colapso inmediato pero deja una tensión latente en los muelles.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Acuerdo Tripartito de Automatización Compartida con Fondo de Jubilación Garantizada',
        doctrina: 'Pacto de Transición Tecnológica Justa',
        descripcion: 'Aceptar subidas salariales escalonadas a cambio de permitir grúas automatizadas que aporten un canon directo a un fondo de pensiones de los trabajadores.',
        impactos: {
          comercio: +25,
          energia: 0,
          inflacion: -15,
          logistica: +35
        },
        estabilidad: 86,
        calificacion: 'ACUERDO HISTÓRICO DE MODERNIZACIÓN',
        consecuencias: 'El paro se levanta en 48 horas. Los puertos ganan un 30% de productividad a 3 años y los trabajadores se convierten en socios del avance tecnológico.',
        resumenInforme: 'Fin de la huelga con modernización portuaria respaldada por los propios estibadores.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Desvío de Buques hacia la Costa Oeste y Cruce Ferroviario Intermodal',
        doctrina: 'Bypass Terrestre Continental',
        descripcion: 'Desviar todos los buques hacia California a través del Canal de Panamá o Cabo de Hornos y cruzar la carga en trenes intermodales hacia el Este.',
        impactos: {
          comercio: +10,
          energia: -10,
          inflacion: +15,
          logistica: +10
        },
        estabilidad: 58,
        calificacion: 'SOBRECARGA DEL SISTEMA FERROVIARIO',
        consecuencias: 'Los puertos de California se colapsan por falta de plataformas y los costes de transporte por contenedor se duplican.',
        resumenInforme: 'La alternativa intermodal alivia una parte pero desborda las vías ferroviarias.'
      }
    ]
  },
  {
    id: 'polar-ruta-artico',
    titulo: 'Bloqueo Geopolítico de la Ruta Polar Marítima del Norte',
    region: 'Océano Ártico • Estrecho de Bering • Mar de Kara',
    teatro: 'ÁRTICO Y RUTAS POLARES ESTRATÉGICAS',
    nivelAlerta: 'DEFCON 3 • DISPUTA POLAR Y NAVEGACIÓN EN HIELO',
    icono: '❄️',
    badgeColor: 'border-cyan-500/70 text-cyan-400 bg-cyan-950/40',
    contexto: 'Rusia impone una tarifa monopólica desorbitada y exige el uso obligatorio de sus rompehielos nucleares a todo buque internacional que pretenda navegar la Ruta Marítima del Norte (NSR), que acorta en 4.000 millas náuticas la travesía Shanghái-Róterdam frente a Suez. La OTAN y navieras occidentales declaran el peaje ilegal bajo la Convención del Mar (UNCLOS) y evalúan enviar convoyes sin autorización rusa.',
    estadoInicial: {
      comercio: 55,
      energia: 50,
      inflacion: 60,
      logistica: 45
    },
    decisiones: [
      {
        id: 'A',
        letra: 'OPCIÓN A',
        titulo: 'Regreso Estructural a las Rutas Tradicionales por Suez / Cabo de Buena Esperanza',
        doctrina: 'Prudencia Geopolítica y Renuncia al Corredor Ártico',
        descripcion: 'Desaconsejar formalmente la ruta polar a todas las navieras comerciales para no legitimar peajes ni alimentar tensiones militares en el Ártico.',
        impactos: {
          comercio: -5,
          energia: -5,
          inflacion: +8,
          logistica: -10
        },
        estabilidad: 70,
        calificacion: 'STATUS QUO SEGURO PERO LENTO',
        consecuencias: 'Cero incidentes militares con rompehielos rusos, pero se renuncia a un ahorro de 12 días por viaje y se sobrecarga aún más el cuello de botella de Suez y Malaca.',
        resumenInforme: 'Seguridad garantizada manteniendo la dependencia de las rutas templadas tradicionales.'
      },
      {
        id: 'B',
        letra: 'OPCIÓN B',
        titulo: 'Desarrollo de Flota Propia de Rompehielos Pesados Aliados (Pacto ICE)',
        doctrina: 'Soberanía Rompehielos Compartida',
        descripcion: 'Lanzar un consorcio industrial entre EE. UU., Canadá y Finlandia para construir 30 rompehielos polares de alta tecnología para garantizar libre tránsito.',
        impactos: {
          comercio: +15,
          energia: +10,
          inflacion: -5,
          logistica: +20
        },
        estabilidad: 81,
        calificacion: 'CONSTRUCCIÓN DE CAPACIDAD POLAR PROPIA',
        consecuencias: 'Inversión de 15.000 millones a 7 años que rompe el monopolio polar de la Federación Rusa y abre el Paso del Noroeste canadiense al comercio mundial.',
        resumenInforme: 'El pacto ICE asegura autonomía de navegación en aguas heladas sin someterse a peajes.'
      },
      {
        id: 'C',
        letra: 'OPCIÓN C',
        titulo: 'Misión Naval Militar de Libertad de Navegación en el Mar de Laptev',
        doctrina: 'Desafío Frontal en Aguas Polares',
        descripcion: 'Despachar un crucero lanzamisiles guiado escoltado por un rompehielos canadiense a través de aguas reclamadas sin pagar la tarifa.',
        impactos: {
          comercio: -10,
          energia: -15,
          inflacion: +20,
          logistica: -15
        },
        estabilidad: 45,
        calificacion: 'ALTO RIESGO DE CHOQUE EN AGUAS HELADAS',
        consecuencias: 'El buque es acosado por cazas supersónicos y rompehielos armados rusos. La región ártica se remilitariza perdiendo su estatus de cooperación científica pacífica.',
        resumenInforme: 'Escalada militar en el Polo Norte; el tráfico comercial por la ruta polar queda cancelado.'
      }
    ]
  }
];
