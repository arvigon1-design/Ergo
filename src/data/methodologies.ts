import { Methodology } from "../types";

export const methodologies: Methodology[] = [
  // Módulos para Condiciones de Persona
  {
    id: "ergocheck",
    name: "ErgoCheck - Evaluación inicial cualitativa",
    description: "Herramienta de evaluación inicial rápida que permite identificar los principales factores de riesgo ergonómico del puesto de trabajo antes de aplicar métodos específicos más detallados.",
    bodyArea: ["wholebody"],
    workType: ["static", "dynamic", "repetitive", "manual"],
    riskLevel: "low",
    link: "https://www.ergoibv.com/herramientas/ergocheck/"
  },
  {
    id: "ergo50",
    name: "Ergo+50 - Trabajadores senior",
    description: "Herramienta específica para la evaluación ergonómica de puestos ocupados por trabajadores de 50 años o más, considerando las características del envejecimiento activo y la capacidad funcional.",
    bodyArea: ["wholebody", "back", "handArms", "lowerLimbs"],
    workType: ["static", "dynamic", "repetitive", "manual"],
    riskLevel: "high",
    link: "https://www.ergoibv.com/herramientas/ergo50/"
  },
  {
    id: "ergomater",
    name: "ErgoMater - Embarazo (PRIORITARIO)",
    description: "Evaluación específica y prioritaria para trabajadoras embarazadas o en periodo de lactancia. Analiza la adecuación del puesto según normativa de prevención de riesgos laborales.",
    bodyArea: ["wholebody", "back"],
    workType: ["static", "dynamic", "manual"],
    riskLevel: "high",
    link: "https://www.ergoibv.com/herramientas/ergomater/"
  },
  {
    id: "teletrabajo",
    name: "Evaluación de Teletrabajo",
    description: "Herramienta para evaluar las condiciones ergonómicas del teletrabajo, incluyendo aspectos de espacio, mobiliario, equipamiento y organización del trabajo en remoto.",
    bodyArea: ["back", "handArms"],
    workType: ["static"],
    riskLevel: "medium",
    link: "https://www.ergoibv.com/herramientas/teletrabajo/"
  },
  {
    id: "pvd",
    name: "Oficina/PVD - Pantallas de Visualización",
    description: "Evaluación ergonómica de puestos de trabajo con pantallas de visualización de datos (ordenador, portátil, tablet) según el Real Decreto 488/1997.",
    bodyArea: ["back", "handArms"],
    workType: ["static"],
    riskLevel: "medium",
    link: "https://www.ergoibv.com/herramientas/pvd/"
  },

  // Módulos para Carga Física
  {
    id: "mmc",
    name: "MMC - Manipulación Manual de Cargas",
    description: "Evaluación completa de la manipulación manual de cargas (levantamiento, descenso, transporte) según ISO 11228. Incluye tareas simples, variables, secuenciales y múltiples.",
    bodyArea: ["back", "wholebody"],
    workType: ["manual"],
    riskLevel: "high",
    link: "https://www.ergoibv.com/herramientas/mmc/"
  },
  {
    id: "empuje",
    name: "Empujes y Arrastres",
    description: "Evaluación de tareas de empuje y arrastre de cargas sobre ruedas (carros, contenedores, etc.) según ISO 11228-2. Analiza las fuerzas inicial y sostenida.",
    bodyArea: ["back", "wholebody", "handArms"],
    workType: ["manual", "dynamic"],
    riskLevel: "high",
    link: "https://www.ergoibv.com/herramientas/empuje-arrastre/"
  },
  {
    id: "ocra",
    name: "Check-List OCRA",
    description: "Evaluación de movimientos repetitivos de miembros superiores según ISO 11228-3. Analiza frecuencia, fuerza, posturas, tiempos de recuperación y factores adicionales.",
    bodyArea: ["handArms"],
    workType: ["repetitive"],
    riskLevel: "high",
    link: "https://www.ergoibv.com/herramientas/ocra/"
  },
  {
    id: "owas",
    name: "OWAS - Análisis de Posturas",
    description: "Análisis de posturas de trabajo forzadas. Evalúa la posición de espalda, brazos y piernas, y la carga manejada durante tareas prolongadas.",
    bodyArea: ["back", "lowerLimbs", "wholebody"],
    workType: ["static", "dynamic"],
    riskLevel: "medium",
    link: "https://www.ergoibv.com/herramientas/owas/"
  },
  {
    id: "reba",
    name: "REBA - Evaluación Postural Cuerpo Completo",
    description: "Método para evaluar posturas forzadas de todo el cuerpo. Especialmente útil en tareas impredecibles, asimétricas y con cambios rápidos de postura.",
    bodyArea: ["wholebody", "back", "handArms", "lowerLimbs"],
    workType: ["static", "dynamic", "manual"],
    riskLevel: "medium",
    link: "https://www.ergoibv.com/herramientas/reba/"
  },
  {
    id: "rula",
    name: "RULA - Evaluación Extremidades Superiores",
    description: "Evaluación rápida de extremidades superiores. Ideal para trabajos sedentarios y tareas con posturas mantenidas o repetitivas de cuello, tronco y brazos.",
    bodyArea: ["handArms", "back"],
    workType: ["static", "repetitive"],
    riskLevel: "medium",
    link: "https://www.ergoibv.com/herramientas/rula/"
  },
  {
    id: "fuerza-vibracion",
    name: "Fuerza y Vibraciones",
    description: "Evaluación de la exposición a vibraciones mano-brazo y cuerpo completo, y análisis de herramientas que requieren aplicación de fuerza elevada.",
    bodyArea: ["handArms", "wholebody"],
    workType: ["manual", "dynamic"],
    riskLevel: "high",
    link: "https://www.ergoibv.com/herramientas/vibraciones/"
  }
];
