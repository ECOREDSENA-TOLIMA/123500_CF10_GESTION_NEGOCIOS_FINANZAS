export default {
  global: {
    componenteFormativo: 'Modelos de negocio y sistema de gestión del riesgo',
    descripcionCurso:
      'Estabilizar el negocio en sus inicios, durante y después del equilibrio financiero significa resguardar las oportunidades de crecimiento de amenazas y riesgos que afecten la interoperabilidad de las actividades y perjudiquen las estrategias y la implementación de modelos de negocios que favorecen la fundamentación de la columna vertebral de la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Etapas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Marcos de referencia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Procesos organizacionales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tercerización de servicios',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Indicadores',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Normativa',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Construcción del modelo de negocio',
      referencia:
        'Matiz, F. & Quintero, I. (2019). Pensamiento estratégico: concepto, impulsores y práctica. Editorial Alfaomega.',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/pensamiento-estrategico-concepto-impulsores-y-practica?location=21',
    },
    {
      tema: 'Gestión del riesgo',
      referencia:
        'Tamayo Saborit, M. & González Capote, D. (2020). La gestión de riesgos: herramienta estratégica de gestión empresarial. Editorial Universo Sur.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/131885?prev=as&as_all=GESTION__DEL__RIESGO&as_all_op=unaccent__icontains',
    },
  ],
  glosario: [
    {
      termino: 'Coste de producción',
      significado:
        'Conjunto de gastos realizados en el proceso productivo de una cosa o servicio.',
    },
    {
      termino: 'Incertidumbre',
      significado:
        'Situación que se da cuando hay dos o más salidas para una acción en curso, sin que se conozca con exactitud cuál es la posibilidad de ninguna de ella. En ese sentido la planificación en economía actúa como reductora de incertidumbre.',
    },
    {
      termino: 'Métrica',
      significado:
        'Múltiples medidas. una métrica establece un contexto para la comprensión de las tendencias en los datos en el tiempo. Es una medida cuantitativa que un sistema, componente o proceso tiene un atributo dado.',
    },
    {
      termino: 'Negocio',
      significado:
        'Es una operación de cierta complejidad, relacionada con los procesos de producción, distribución y venta de servicios y bienes, con el objetivo de satisfacer las diferentes necesidades de los compradores y beneficiando, a su vez, a los vendedores.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'Cualquier característica de una empresa que la distingue del resto y la sitúa en una posición superior para competir. Las ventajas competitivas son el liderazgo en costes y la diferenciación de productos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Organización Internacional de Normalización (2018). Norma ISO 31000. Directrices de la gestión de riesgos.',
      link:
        'https://www.globalstd.com/blog/la-nueva-iso-31000-2018/#:~:text=La%20norma%20ISO%2031000%3A2018,y%20la%20mejora%20del%20desempe%C3%B1o.',
    },
    {
      referencia:
        'Pardo, J. (2019). Configuración y usos de un mapa de procesos. Editorial Alfaomega. AENOR.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/configuracion-y-usos-de-un-mapa-de-procesos?location=10',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Fabiola Sierra Sarmiento',
          cargo: 'Experta Temática',
          centro: 'Regional Norte de Santander - CIES',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseño Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría Metodológica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Lizcano',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluación Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez  ',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
