export interface Robot {
  id: string;
  nombre: string;
  industria: string;
  descripcionCorta: string;
  descripcionLarga: string;
  capacidades: string[];
  imagen: string;
  demoTelegram?: string;
  demoWhatsApp?: string;
  demoLocal: string;
  colorAccent: string;
}

export const robots: Robot[] = [
  {
    id: 'luis-vendedor-bots',
    nombre: 'Luis el Vendedor de Bots',
    industria: 'Meta / Tecnología',
    descripcionCorta: 'Vende bots como si fueran choripanes en la cancha. Sabe de IA más que ChatGPT de asado.',
    descripcionLarga: `Luis es el vendedor de bots más piola que vas a conocer. No te va a aburrir con tecnicismos, te explica todo en criollo y te ayuda a elegir el bot perfecto para tu negocio.

Tiene más aguante que el Diego defendiendo la 10. Si te dice que un bot te va a servir, es porque te va a servir. No vende buzones.

Perfecta para empresas que quieren automatizar pero no entienden ni jota de IA. Luis te explica todo como si le estuvieras comprando una empanada.`,
    capacidades: [
      'Explica qué bot necesitás para tu negocio',
      'Te cuenta casos de éxito de otros clientes',
      'Te hace una demo en vivo de cualquier bot',
      'Te arma un presupuesto sin vueltas',
      'Agenda reuniones con el equipo técnico',
    ],
    imagen: '/robots/luis.jpg',
    demoTelegram: 'https://t.me/luis_bot',
    demoWhatsApp: 'https://wa.me/549XXXXXXXXX?text=Hola%20Luis',
    demoLocal: 'http://localhost:7878/luis/usuariodemo',
    colorAccent: 'blue',
  },
  {
    id: 'javier-muebles',
    nombre: 'Javier - Muebles e Instalaciones',
    industria: 'Retail / Mueblería',
    descripcionCorta: 'Nunca pierde la paciencia aunque le preguntes 50 veces por el mismo sillón. Como un vendedor real, pero sin mal humor.',
    descripcionLarga: `Javier atiende tu mueblería 24/7 sin quejarse, sin tomarse franco y sin cobrar horas extras. Es el vendedor perfecto que siempre soñaste tener.

¿El cliente pregunta por el precio del sillón de 3 cuerpos? Javier le contesta. ¿Vuelve a preguntar lo mismo a las 3 de la mañana? Javier le vuelve a contestar con la misma onda.

Conoce todo tu catálogo de memoria, sabe qué hay en stock, qué colores disponibles y hasta puede agendar entregas. Es como tener un vendedor que se tomó 47 cafés pero sin los nervios.`,
    capacidades: [
      'Muestra catálogo completo de muebles',
      'Consulta stock y disponibilidad en tiempo real',
      'Informa precios y promociones vigentes',
      'Agenda visitas al local o entregas',
      'Responde consultas técnicas (medidas, materiales, colores)',
    ],
    imagen: '/robots/javier.jpg',
    demoTelegram: 'https://t.me/javier_muebles_bot',
    demoWhatsApp: 'https://wa.me/549XXXXXXXXX?text=Hola%20Javier',
    demoLocal: 'http://localhost:7878/javier/usuariodemo',
    colorAccent: 'amber',
  },
  {
    id: 'martin-ropa-industrial',
    nombre: 'Martín - Ropa Industrial',
    industria: 'Wholesale / Indumentaria',
    descripcionCorta: 'Siempre tiene stock, aunque sean las 3 AM. Compra y vende ropa de trabajo sin descanso.',
    descripcionLarga: `Martín es el mayorista de ropa industrial que nunca duerme. Literal. A las 3 AM te dice si tiene 500 camisas de grafa en talle XL.

Compra y vende ropa de trabajo, uniformes, indumentaria de seguridad. Sabe perfectamente qué tiene en stock, qué está por llegar, y qué puede conseguir en 48 horas.

Es el típico que en la vida real te atiende mientras está al teléfono con otros 3 clientes. Pero en versión bot, así que te atiende a vos y a 300 clientes más sin confundirse ni una vez.`,
    capacidades: [
      'Catálogo completo de ropa industrial y seguridad',
      'Gestión de compra/venta mayorista',
      'Consulta de stock por talle, color y modelo',
      'Presupuestos automáticos para empresas',
      'Tracking de pedidos y entregas',
    ],
    imagen: '/robots/martin.jpg',
    demoTelegram: 'https://t.me/martin_ropa_bot',
    demoWhatsApp: 'https://wa.me/549XXXXXXXXX?text=Hola%20Martin',
    demoLocal: 'http://localhost:7878/martin/usuariodemo',
    colorAccent: 'green',
  },
  {
    id: 'carlos-cabanas',
    nombre: 'Carlos - Cabañas San Rafael',
    industria: 'Turismo / Hotelería',
    descripcionCorta: 'Con onda de mendocino tomando vino. Te va a convencer de ir aunque no tengas vacaciones.',
    descripcionLarga: `Carlos maneja las reservas de cabañas en San Rafael, Mendoza. Tiene el estilo relajado del mendocino que está tomando un vinito en la galería, pero labura como si le pagaras en dólares.

Te cuenta de las cabañas, te muestra fotos, te dice qué fechas están disponibles y hasta te recomienda bodegas para visitar. Es como hablar con el dueño de las cabañas, pero este no se va de pesca los fines de semana.

Atiende consultas, reservas, te manda info de turismo local y hasta te sugiere qué hacer en San Rafael según el clima. Un capo total.`,
    capacidades: [
      'Consulta de disponibilidad de cabañas',
      'Gestión de reservas y pagos',
      'Información turística de San Rafael y alrededores',
      'Recomendaciones de bodegas y actividades',
      'Check-in/check-out automático',
    ],
    imagen: '/robots/carlos.jpg',
    demoTelegram: 'https://t.me/carlos_cabanas_bot',
    demoWhatsApp: 'https://wa.me/549XXXXXXXXX?text=Hola%20Carlos',
    demoLocal: 'http://localhost:7878/carlos/usuariodemo',
    colorAccent: 'purple',
  },
  {
    id: 'maria-moza',
    nombre: 'María la Moza',
    industria: 'Gastronomía / Restaurantes',
    descripcionCorta: 'No se cansa aunque sea sábado a la noche. Toma pedidos y reserva mesas sin olvidarse ni confundirse.',
    descripcionLarga: `María es la moza que todo restaurante necesita. No se olvida de ningún pedido, no se confunde con las mesas, no se queja del cansancio y atiende con la misma onda a la mesa 1 que a la mesa 50.

Toma pedidos por WhatsApp, reserva mesas, te dice el menú del día, te avisa si algo no hay. Es como tener una moza con memoria fotográfica y paciencia infinita.

El sábado a la noche cuando el restaurante está explotado, María atiende 200 mensajes de WhatsApp sin transpirar. Los lunes también, pero sin el drama del fin de semana.`,
    capacidades: [
      'Toma de pedidos por WhatsApp/Telegram',
      'Reservas de mesas con confirmación',
      'Menú digital con fotos y descripciones',
      'Consulta de alérgenos e ingredientes',
      'Notificaciones de estado de pedidos',
    ],
    imagen: '/robots/maria-moza.jpg',
    demoTelegram: 'https://t.me/maria_restaurant_bot',
    demoWhatsApp: 'https://wa.me/549XXXXXXXXX?text=Hola%20Maria',
    demoLocal: 'http://localhost:7878/maria-moza/usuariodemo',
    colorAccent: 'pink',
  },
  {
    id: 'eva-webon',
    nombre: 'Eva Webon',
    industria: 'Política / Redes Sociales',
    descripcionCorta: 'Milita las ideas del peronismo con más aguante que el Diego. Dale que dale con la doctrina en la web.',
    descripcionLarga: `Eva Webon es la militante digital que nunca se cansa. Está en Twitter/X las 24 horas defendiendo la doctrina peronista con datos, con historia y con aguante.

No se enoja, no bardea (bueno, un poquito), pero siempre con argumentos. Conoce la historia del peronismo mejor que muchos dirigentes actuales.

Es perfecta para organizaciones políticas que quieren tener presencia digital constante sin quemar militantes. Eva responde consultas, comparte contenido histórico y mantiene vivo el debate sin descanso.`,
    capacidades: [
      'Responde consultas sobre doctrina peronista',
      'Comparte contenido histórico y actualidad',
      'Debate con argumentos sólidos (sin bardear de más)',
      'Modera comunidades de Telegram',
      'Organiza eventos y convocatorias digitales',
    ],
    imagen: '/robots/eva.jpg',
    demoTelegram: 'https://t.me/eva_webon_bot',
    demoWhatsApp: 'https://wa.me/549XXXXXXXXX?text=Hola%20Eva',
    demoLocal: 'http://localhost:7878/eva/usuariodemo',
    colorAccent: 'cyan',
  },
  {
    id: 'maria-verduleria',
    nombre: 'María Verdulera',
    industria: 'Comercio de Proximidad / Verdulerías',
    descripcionCorta: 'Nunca se equivoca con los kilos ni te cobra de más. Registra pedidos de frutas y verduras.',
    descripcionLarga: `María atiende tu verdulería por WhatsApp como si estuviera atrás del mostrador, pero sin la espalda dolorida de levantar cajones todo el día.

Toma pedidos de frutas y verduras, te dice qué está fresco, qué llegó hoy, qué está en oferta. Nunca se equivoca con las cuentas ni con los kilos. Es matemáticamente perfecta.

Los clientes le mandan la lista del super por WhatsApp, María les arma el pedido, les dice el precio total y coordina la entrega o el retiro. Más fácil imposible.`,
    capacidades: [
      'Toma de pedidos por WhatsApp',
      'Catálogo de productos frescos con precios actualizados',
      'Cálculo automático de totales',
      'Gestión de entregas a domicilio',
      'Alertas de ofertas y productos del día',
    ],
    imagen: '/robots/maria-verdulera.jpg',
    demoTelegram: 'https://t.me/maria_verduleria_bot',
    demoWhatsApp: 'https://wa.me/549XXXXXXXXX?text=Hola%20Maria',
    demoLocal: 'http://localhost:7878/maria-verduleria/usuariodemo',
    colorAccent: 'lime',
  },
];
