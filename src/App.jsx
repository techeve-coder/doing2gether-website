import React, { useState, useMemo, createContext, useContext } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  Menu,
  X,
  MapPin,
  ShieldCheck,
  Globe2,
  Building2,
  TrendingUp,
  FileCheck2,
  Handshake,
  Star,
  Check,
  Users,
  Scale,
  Landmark,
  ClipboardCheck,
  Plane,
} from "lucide-react";

/* ================================================================== */
/*  DESIGN TOKENS (inline)                                             */
/* ================================================================== */
/* ================================================================== */
/*  LANGUAGE (EN / ES)                                                 */
/* ================================================================== */

const LangContext = createContext(null);
function useLang() {
  return useContext(LangContext);
}

const T = {
  en: {
    utility: { line: "Confidential inquiries handled within one business day" },
    nav: {
      buy: ["Buy a", "Business"], sell: ["Sell a", "Business"], e2: ["E-2 Visa", "Center"],
      international: ["International", "Buyers"], services: "Services", resources: "Resources",
      about: "About Us", contact: "Contact", schedule: "Schedule a consultation",
    },
    hero: {
      eyebrow: "South Florida M&A Advisory & E-2 Visa Acquisitions",
      title: "Acquire a profitable business in South Florida with confidence.",
      copy: "Business brokerage for local entrepreneurs and international E-2 visa investors. Doing2Gether — we do the work together.",
      browse: "Browse businesses for sale", valuation: "Free business valuation",
      schedule: "Schedule a consultation", e2buyers: "E-2 visa buyers",
      license: "Licensed business brokers · Florida DBPR",
    },
    howWeWork: {
      eyebrow: "How We Do Business", title: "Doing2Gether — the name is the method.",
      copy: "We do the work together with you, from the first call to closing, built around what you need and structured for the most value.",
      cards: [
        { title: "Together, not transactional", copy: "One advisor stays on your file, start to finish — no hand-offs." },
        { title: "Your needs set the brief", copy: "We build the search or the sale around your budget, timeline, and goals." },
        { title: "Maximizing your value", copy: "The best price for sellers. The strongest business for buyers. That's how we measure success." },
      ],
    },
    whyChoose: {
      eyebrow: "Why Choose Us", title: "Every client sits on one side of the table.",
      buyerTitle: "For Buyers",
      buyerCopy: "We help you acquire the right business, analyzed from an investment perspective.",
      buyerItems: ["Cash Flow", "Owner Earnings", "ROI", "Risk", "Growth Potential", "Financing Options", "Exit Strategy"],
      buyerCta: "Browse businesses for sale",
      sellerTitle: "For Sellers",
      sellerCopy: "We maximize your company's value before it ever reaches the market.",
      sellerItems: ["Confidential process", "Higher valuation", "Qualified buyers only", "Shorter selling cycle"],
      sellerCta: "Get a free valuation",
    },
    industries: {
      eyebrow: "Featured Industries", title: "Businesses we specialize in.",
      copy: "The most active industries in South Florida.",
      tiers: {
        "Most Active": ["Restaurants", "Cafés", "Coffee Shops", "Pizzerias", "Beauty Salons", "Barber Shops", "Nail Salons", "Med Spas", "Fitness Centers", "Car Washes"],
        "Service & Trade": ["HVAC Companies", "Plumbing Companies", "Electrical Contractors", "Roofing", "Landscaping", "Pest Control", "Cleaning Companies", "Pool Services", "Auto Repair", "Auto Body Shops"],
        "Retail & Specialty": ["Pet Grooming", "Childcare Centers", "Senior Care", "Laundromats", "Smoke Shops", "Convenience Stores", "Liquor Stores", "Bakeries", "Ice Cream Shops", "Franchises"],
      },
    },
    ctaHome: { title: "Thinking about selling?", copy: "A free valuation takes twenty minutes with no obligation.", button: "Request a free valuation" },
    buy: {
      eyebrow: "Buy a Business", title: "More information than competing brokerages, on every listing.",
      copy: "Investment summary, financing terms, and risk metrics on every opportunity.",
      requestMemo: "Request the confidential info memo", reasonForSale: "Reason for sale",
      growth: "Growth",
      analysisEyebrow: "Financial Analysis", analysisTitle: "What we underwrite on every listing.",
      analysisBlocks: [
        { title: "Revenue", items: ["5-Year Revenue Trend", "Monthly Revenue", "Seasonality", "Revenue Concentration", "Recurring Revenue %"] },
        { title: "Profitability", items: ["Gross Margin", "Operating Margin", "Net Margin", "EBITDA Margin", "SDE Margin"] },
        { title: "Financial Ratios", items: ["Current Ratio", "Quick Ratio", "Debt-to-Equity", "Interest Coverage", "Inventory Turnover", "Revenue per Employee"] },
        { title: "Risk Analysis", items: ["Owner Dependence", "Customer Concentration", "Supplier Risk", "Lease Risk", "Regulatory Risk", "Market Saturation"] },
      ],
      ctaTitle: "Not seeing the right fit?", ctaCopy: "Tell us your budget and industry — we'll run a custom search.", ctaButton: "Start a buyer consultation",
      noListingsTitle: "New listings added regularly.",
      noListingsCopy: "We don't publish every opportunity — many are off-market. Tell us what you're looking for and we'll run a custom search, including businesses not listed here.",
      externalSearchTitle: "In the meantime, browse active listings",
      externalSearchCopy: "See what's currently for sale on BizBuySell, filtered to our service area.",
      labels: { asking: "Asking", downPmt: "Down Pmt.", financing: "Financing", grossRev: "Gross Rev.", sde: "SDE", ebitda: "EBITDA", years: "Years", employees: "Employees", leaseLeft: "Lease Left", roi: "ROI", payback: "Payback", cashOnCash: "Cash-on-Cash", dscr: "DSCR", profitability: "Profitability", risk: "Risk (lower is better)", scalability: "Scalability", ownerDependence: "Owner Dependence" },
    },
    sell: {
      eyebrow: "Sell a Business", title: "Selling is more than finding a buyer.",
      copy: "We maximize your company's value before it reaches the market.",
      cta: "Get a free business valuation",
      valuationEyebrow: "Business Valuation", valuationTitle: "What goes into your number.",
      valuationCopy: "A defensible valuation based on comparable South Florida sales.",
      valuationItems: ["Free Estimate", "Market Value", "SDE Multiple", "EBITDA Multiple", "Industry Comparison", "Comparable Sales", "Expected Selling Price"],
      enhanceEyebrow: "Value Enhancement", enhanceTitle: "Increase value before you list.",
      enhanceCopy: "Simple steps that raise your company's value before it goes to market.",
      enhanceItems: ["Improve financial record-keeping", "Reduce owner dependence", "Increase recurring revenue", "Improve Google review profile", "Negotiate a lease renewal", "Document operating procedures", "Diversify the customer base", "Increase EBITDA margin"],
      processEyebrow: "Our Selling Process", processTitle: "Ten steps, run in order, every time.",
      processSteps: ["Business Valuation", "Listing Preparation", "Marketing", "Buyer Qualification", "NDA", "Financial Review", "Letter of Intent (LOI)", "Due Diligence", "Purchase Agreement", "Closing"],
      servicesEyebrow: "Seller Services", servicesTitle: "What's included, start to finish.",
      servicesItems: ["Business Valuation", "Exit Planning", "Confidential Marketing", "Buyer Screening", "Negotiation", "Deal Structuring", "Closing Coordination", "Transition Assistance", "Post-Sale Support"],
      ctaTitle: "Ready to see what it's worth?", ctaCopy: "A free valuation takes twenty minutes with no obligation.", ctaButton: "Request a confidential valuation",
    },
    e2: {
      eyebrow: "E-2 Visa Center", title: "Buying a business for an E-2 visa? Start here.",
      copy: "Requirements, investment minimums, and realistic timelines — everything before you start looking.",
      disclaimer: "We're brokers, not immigration attorneys. Every E-2 deal is reviewed by your own treaty counsel before closing.",
      reqEyebrow: "Requirements", reqTitle: "What USCIS is actually looking for.",
      requirements: [
        { title: "Treaty Country Nationality", copy: "Citizenship in a country with a qualifying U.S. treaty of commerce." },
        { title: "Substantial Investment", copy: "Most deals we structure fall between $150K and $2M." },
        { title: "Active, Operating Business", copy: "A real, operating business — not passive holdings." },
        { title: "Marginality Test", copy: "The business must support more than a minimal living." },
        { title: "Job Creation", copy: "A credible hiring plan strengthens your case." },
        { title: "Source of Funds", copy: "Capital must be traceable to a lawful source." },
      ],
      roadmapEyebrow: "E-2 Acquisition Roadmap", roadmapTitle: "From choosing a business to moving to the U.S.",
      roadmap: ["Choose Business", "Sign NDA", "Financial Review", "Letter of Intent (LOI)", "Due Diligence", "Purchase Agreement", "Visa Application", "Business Closing", "Move to the United States"],
      idealEyebrow: "Businesses Ideal for E-2 Investors", idealTitle: "Industries that consistently clear USCIS review.",
      industries: ["Restaurants", "Coffee Shops", "Cleaning Companies", "HVAC", "Landscaping", "Beauty Salons", "Franchises", "Pet Services", "Retail Stores", "Medical Practices"],
      ctaTitle: "Discuss your investment profile.", ctaCopy: "Tell us your treaty country and budget — we'll outline your options.", ctaButton: "Schedule an E-2 investor consultation",
    },
    international: {
      eyebrow: "International Buyers", title: "Buy a business in Florida from anywhere in the world.",
      copy: "Coordinated end to end, so you don't need a local network to close.",
      servicesEyebrow: "Services", servicesTitle: "Everything coordinated in one place.",
      services: ["Business Selection", "Investment Analysis", "E-2 Visa Coordination", "Attorney Referrals", "CPA Referrals", "Company Formation", "Bank Account Setup", "Insurance", "Commercial Leasing", "Closing Coordination", "Relocation Guidance"],
      countriesEyebrow: "Countries We Frequently Serve",
      countries: ["Argentina", "Brazil", "Mexico", "Colombia", "Chile", "Spain", "Italy", "Canada", "France", "United Kingdom"],
      ctaTitle: "Searching from abroad?", ctaCopy: "We'll build a shortlist and coordinate every referral, attorney to bank.", ctaButton: "Schedule an international buyer call",
    },
    services: {
      eyebrow: "Services", title: "Support for both sides of the transaction.",
      buyerTitle: "Buyer Services",
      buyerServices: [
        { title: "Business Search", copy: "A custom search built around your budget and timeline." },
        { title: "Financial Analysis", copy: "ROI, cash flow, and risk assessment on every opportunity." },
        { title: "Due Diligence Coordination", copy: "Financial, legal, and operational diligence, run in parallel." },
        { title: "Financing Assistance", copy: "SBA lenders, seller financing, and equipment financing." },
        { title: "Immigration Coordination", copy: "Warm handoff to E-2 attorneys, CPAs, and tax advisors." },
        { title: "Negotiation", copy: "Price, terms, and transition, negotiated on your behalf." },
      ],
      sellerTitle: "Seller Services",
      sellerServices: ["Business Valuation", "Exit Planning", "Confidential Marketing", "Buyer Screening", "Negotiation", "Deal Structuring", "Closing Coordination", "Transition Assistance", "Post-Sale Support"],
      ctaTitle: "Not sure where to start?", ctaCopy: "Tell us if you're buying or selling — we'll point you to the right advisor.", ctaButton: "Schedule a consultation",
    },
    resources: {
      eyebrow: "Resources", title: "Tools and guides for buyers, sellers, and investors.",
      copy: "An instant valuation, plus answers to the questions we hear most.",
      toolTitle: "Business Valuation Tool",
      toolCopy: "A directional range based on industry SDE multiples. A formal valuation refines this further.",
      revenueLabel: "Estimated annual revenue", cashFlowLabel: "Estimated annual cash flow (SDE)", industryLabel: "Industry",
      yearsLabel: "Years in business", growthLabel: "YoY growth rate", years: "years",
      rangeEyebrow: "Estimated Valuation Range", midpoint: "Midpoint estimate:", multipleLabel: "Applied SDE multiple", industryLabel2: "Industry",
      formalCta: "Get a formal valuation",
      disclaimer: "Directional estimate only, not an appraisal.",
      knowledgeTitle: "Knowledge Center", readArticle: "Read article",
      articles: [
        { slug: "business-worth", tag: "Valuation", title: "How Much Is My Business Worth?" },
        { slug: "understanding-sde", tag: "Valuation", title: "Understanding SDE" },
        { slug: "ebitda-vs-sde", tag: "Valuation", title: "EBITDA vs. SDE" },
        { slug: "seller-financing", tag: "Financing", title: "How Seller Financing Works" },
        { slug: "sba-loans", tag: "Financing", title: "How SBA 7(a) Loans Work" },
        { slug: "buying-vs-starting", tag: "Buyer Guide", title: "Buying a Business vs. Starting One" },
        { slug: "e2-best-businesses", tag: "E-2 Visa", title: "Best Businesses for E-2 Investors" },
        { slug: "due-diligence-checklist", tag: "Due Diligence", title: "Our Due Diligence Checklist" },
        { slug: "buying-a-restaurant", tag: "Industry Guide", title: "Buying a Restaurant" },
        { slug: "market-trends-2026", tag: "Market", title: "Florida Business Market Trends, 2026" },
      ],
    },
    about: {
      eyebrow: "About Us", title: "Fifteen years, together with our clients.",
      copy: "A licensed brokerage serving Miami-Dade, Broward, and Palm Beach counties, with a dedicated E-2 investor practice.",
      cards: [
        { title: "Experience", copy: "286 closed transactions since 2011, across 30+ industries." },
        { title: "Markets Served", copy: "Miami-Dade County, Broward County, and Palm Beach County." },
        { title: "Industries", copy: "Restaurants, home services, health & wellness, retail, and logistics." },
        { title: "Success Stories", copy: "Most new clients come from referrals and repeat sellers." },
      ],
      networkEyebrow: "Professional Network", networkTitle: "Referrals we stand behind.",
      networkItems: ["Immigration Attorneys", "CPAs & Tax Advisors", "SBA Lenders", "Commercial Real Estate Advisors", "Insurance Brokers", "Banking Partners"],
      ctaTitle: "Want to talk first?", ctaCopy: "A short call, no pressure, no obligation.", ctaButton: "Schedule a consultation",
    },
    contact: {
      eyebrow: "Contact", title: "Book a consultation.",
      copy: "Routed to an advisor on your side of the table. Expect a reply within one business day.",
      advisorRole: "Principal Advisor, Doing2Gether",
      advisor2Role: "Associate Advisor, Doing2Gether",
      counties: "Miami-Dade County · Broward County · Palm Beach County",
      iAm: "I am a", roles: ["Buyer", "Seller", "E-2 Investor"],
      fullName: "Full name", email: "Email", phone: "Phone", howHelp: "How can we help?",
      send: "Send request", received: "Request received.", receivedCopy: "An advisor will follow up within one business day.",
    },
    footer: {
      blurb: "Business brokerage serving Miami-Dade, Broward, and Palm Beach counties, with a dedicated E-2 investor practice.",
      buyers: "Buyers", sellers: "Sellers", resources: "Resources", company: "Company",
      buyABusiness: "Buy a Business", e2visa: "E-2 Visa Center", intlBuyers: "International Buyers",
      sellABusiness: "Sell a Business", services: "Services", resourcesLink: "Resources",
      aboutUs: "About Us", contact: "Contact",
      copyright: "© 2026 Doing2Gether Advisory LLC. Licensed business broker, State of Florida.",
      legal: "Not a law firm. E-2 eligibility is determined solely by USCIS and the U.S. Department of State.",
    },
  },
  es: {
    utility: { line: "Consultas confidenciales atendidas dentro de un día hábil" },
    nav: {
      buy: ["Comprar un", "Negocio"], sell: ["Vender un", "Negocio"], e2: ["Centro de", "Visa E-2"],
      international: ["Compradores", "Internacionales"], services: "Servicios", resources: "Recursos",
      about: "Nosotros", contact: "Contacto", schedule: "Agendar una consulta",
    },
    hero: {
      eyebrow: "Asesoría de Fusiones y Adquisiciones y Visa E-2 en el Sur de Florida",
      title: "Adquiera un negocio rentable en el sur de Florida con confianza.",
      copy: "Correduría de negocios para emprendedores locales e inversionistas E-2. Doing2Gether — hacemos el trabajo juntos.",
      browse: "Ver negocios en venta", valuation: "Valoración gratuita del negocio",
      schedule: "Agendar una consulta", e2buyers: "Compradores con visa E-2",
      license: "Corredores de negocios con licencia · DBPR de Florida",
    },
    howWeWork: {
      eyebrow: "Cómo Hacemos Negocios", title: "Doing2Gether — el nombre es el método.",
      copy: "Hacemos el trabajo junto a usted, desde la primera llamada hasta el cierre, a la medida de sus necesidades.",
      cards: [
        { title: "Juntos, no transaccional", copy: "Un asesor permanece en su expediente de principio a fin, sin transferencias." },
        { title: "Sus necesidades definen el plan", copy: "Construimos la búsqueda o la venta según su presupuesto y metas." },
        { title: "Maximizando su valor", copy: "El mejor precio para vendedores. El negocio más sólido para compradores." },
      ],
    },
    whyChoose: {
      eyebrow: "Por Qué Elegirnos", title: "Cada cliente se sienta de un lado de la mesa.",
      buyerTitle: "Para Compradores",
      buyerCopy: "Le ayudamos a adquirir el negocio correcto, analizado desde una perspectiva de inversión.",
      buyerItems: ["Flujo de Caja", "Ingresos del Propietario", "ROI", "Riesgo", "Potencial de Crecimiento", "Opciones de Financiamiento", "Estrategia de Salida"],
      buyerCta: "Ver negocios en venta",
      sellerTitle: "Para Vendedores",
      sellerCopy: "Maximizamos el valor de su empresa antes de que llegue al mercado.",
      sellerItems: ["Proceso confidencial", "Mayor valoración", "Solo compradores calificados", "Ciclo de venta más corto"],
      sellerCta: "Obtener una valoración gratuita",
    },
    industries: {
      eyebrow: "Industrias Destacadas", title: "Negocios en los que nos especializamos.",
      copy: "Las industrias más activas del sur de Florida.",
      tiers: {
        "Most Active": ["Restaurantes", "Cafés", "Cafeterías", "Pizzerías", "Salones de Belleza", "Barberías", "Salones de Uñas", "Spas Médicos", "Centros de Fitness", "Autolavados"],
        "Service & Trade": ["Empresas de HVAC", "Empresas de Plomería", "Contratistas Eléctricos", "Techado", "Jardinería", "Control de Plagas", "Empresas de Limpieza", "Servicios de Piscinas", "Reparación de Autos", "Talleres de Carrocería"],
        "Retail & Specialty": ["Peluquería para Mascotas", "Guarderías Infantiles", "Cuidado de Ancianos", "Lavanderías", "Tiendas de Tabaco", "Tiendas de Conveniencia", "Licorerías", "Panaderías", "Heladerías", "Franquicias"],
      },
    },
    ctaHome: { title: "¿Piensa vender?", copy: "Una valoración gratuita toma veinte minutos, sin obligación.", button: "Solicitar una valoración gratuita" },
    buy: {
      eyebrow: "Comprar un Negocio", title: "Más información que la competencia, en cada listado.",
      copy: "Resumen de inversión, financiamiento y métricas de riesgo en cada oportunidad.",
      requestMemo: "Solicitar el memorando confidencial", reasonForSale: "Motivo de venta",
      growth: "Crecimiento",
      analysisEyebrow: "Análisis Financiero", analysisTitle: "Lo que evaluamos en cada listado.",
      analysisBlocks: [
        { title: "Ingresos", items: ["Tendencia de Ingresos a 5 Años", "Ingresos Mensuales", "Estacionalidad", "Concentración de Ingresos", "% de Ingresos Recurrentes"] },
        { title: "Rentabilidad", items: ["Margen Bruto", "Margen Operativo", "Margen Neto", "Margen EBITDA", "Margen SDE"] },
        { title: "Razones Financieras", items: ["Razón Corriente", "Prueba Ácida", "Deuda-Capital", "Cobertura de Intereses", "Rotación de Inventario", "Ingresos por Empleado"] },
        { title: "Análisis de Riesgo", items: ["Dependencia del Propietario", "Concentración de Clientes", "Riesgo de Proveedores", "Riesgo de Arrendamiento", "Riesgo Regulatorio", "Saturación del Mercado"] },
      ],
      ctaTitle: "¿Aún no encuentra su negocio?", ctaCopy: "Cuéntenos su presupuesto e industria — haremos una búsqueda personalizada.", ctaButton: "Iniciar una consulta para compradores",
      noListingsTitle: "Agregamos nuevos listados regularmente.",
      noListingsCopy: "No publicamos cada oportunidad — muchas están fuera del mercado. Cuéntenos qué busca y haremos una búsqueda personalizada, incluyendo negocios que no aparecen aquí.",
      externalSearchTitle: "Mientras tanto, vea listados activos",
      externalSearchCopy: "Vea lo que está actualmente en venta en BizBuySell, filtrado a nuestra área de servicio.",
      labels: { asking: "Precio", downPmt: "Pago Inicial", financing: "Financiamiento", grossRev: "Ingresos Brutos", sde: "SDE", ebitda: "EBITDA", years: "Años", employees: "Empleados", leaseLeft: "Arrendamiento Restante", roi: "ROI", payback: "Recuperación", cashOnCash: "Retorno sobre Efectivo", dscr: "DSCR", profitability: "Rentabilidad", risk: "Riesgo (menor es mejor)", scalability: "Escalabilidad", ownerDependence: "Dependencia del Propietario" },
    },
    sell: {
      eyebrow: "Vender un Negocio", title: "Vender es más que encontrar un comprador.",
      copy: "Maximizamos el valor de su empresa antes de que llegue al mercado.",
      cta: "Obtener una valoración gratuita del negocio",
      valuationEyebrow: "Valoración del Negocio", valuationTitle: "Qué compone su cifra.",
      valuationCopy: "Una valoración defendible basada en ventas comparables del sur de Florida.",
      valuationItems: ["Estimación Gratuita", "Valor de Mercado", "Múltiplo de SDE", "Múltiplo de EBITDA", "Comparación por Industria", "Ventas Comparables", "Precio de Venta Esperado"],
      enhanceEyebrow: "Aumento de Valor", enhanceTitle: "Aumente el valor antes de listar.",
      enhanceCopy: "Pasos simples que aumentan el valor antes de salir al mercado.",
      enhanceItems: ["Mejorar los registros financieros", "Reducir la dependencia del propietario", "Aumentar los ingresos recurrentes", "Mejorar el perfil de reseñas de Google", "Negociar la renovación del arrendamiento", "Documentar los procedimientos operativos", "Diversificar la base de clientes", "Aumentar el margen EBITDA"],
      processEyebrow: "Nuestro Proceso de Venta", processTitle: "Diez pasos, en orden, siempre.",
      processSteps: ["Valoración del Negocio", "Preparación del Listado", "Marketing", "Calificación de Compradores", "Acuerdo de Confidencialidad", "Revisión Financiera", "Carta de Intención (LOI)", "Debida Diligencia", "Contrato de Compraventa", "Cierre"],
      servicesEyebrow: "Servicios para Vendedores", servicesTitle: "Qué está incluido, de principio a fin.",
      servicesItems: ["Valoración del Negocio", "Planificación de Salida", "Marketing Confidencial", "Selección de Compradores", "Negociación", "Estructuración del Trato", "Coordinación del Cierre", "Asistencia en la Transición", "Soporte Posventa"],
      ctaTitle: "¿Listo para saber cuánto vale?", ctaCopy: "Una valoración gratuita toma veinte minutos, sin obligación.", ctaButton: "Solicitar una valoración confidencial",
    },
    e2: {
      eyebrow: "Centro de Visa E-2", title: "¿Va a comprar un negocio para una visa E-2? Comience aquí.",
      copy: "Requisitos, inversión mínima y plazos realistas — todo antes de empezar a buscar.",
      disclaimer: "Somos corredores, no abogados de inmigración. Cada trato E-2 lo revisa su propio abogado de tratados antes del cierre.",
      reqEyebrow: "Requisitos", reqTitle: "Lo que realmente busca USCIS.",
      requirements: [
        { title: "Nacionalidad de País con Tratado", copy: "Ciudadanía de un país con tratado de comercio calificado con EE. UU." },
        { title: "Inversión Sustancial", copy: "La mayoría de los tratos que estructuramos están entre $150,000 y $2,000,000." },
        { title: "Negocio Activo y Operativo", copy: "Un negocio real y operativo, no una tenencia pasiva." },
        { title: "Prueba de Marginalidad", copy: "El negocio debe sostener más que un ingreso mínimo." },
        { title: "Creación de Empleo", copy: "Un plan de contratación creíble fortalece su caso." },
        { title: "Origen de los Fondos", copy: "El capital debe poder rastrearse hasta una fuente lícita." },
      ],
      roadmapEyebrow: "Ruta de Adquisición E-2", roadmapTitle: "Desde elegir un negocio hasta mudarse a Estados Unidos.",
      roadmap: ["Elegir el Negocio", "Firmar Acuerdo de Confidencialidad", "Revisión Financiera", "Carta de Intención (LOI)", "Debida Diligencia", "Contrato de Compraventa", "Solicitud de Visa", "Cierre del Negocio", "Mudanza a Estados Unidos"],
      idealEyebrow: "Negocios Ideales para Inversionistas E-2", idealTitle: "Industrias que consistentemente superan la revisión de USCIS.",
      industries: ["Restaurantes", "Cafeterías", "Empresas de Limpieza", "HVAC", "Jardinería", "Salones de Belleza", "Franquicias", "Servicios para Mascotas", "Tiendas Minoristas", "Consultorios Médicos"],
      ctaTitle: "Analice su perfil de inversión.", ctaCopy: "Cuéntenos su país de tratado y presupuesto — le explicaremos sus opciones.", ctaButton: "Agendar una consulta para inversionistas E-2",
    },
    international: {
      eyebrow: "Compradores Internacionales", title: "Compre un negocio en Florida desde cualquier parte del mundo.",
      copy: "Coordinado de principio a fin, sin necesitar una red de contactos local.",
      servicesEyebrow: "Servicios", servicesTitle: "Todo coordinado en un solo lugar.",
      services: ["Selección del Negocio", "Análisis de Inversión", "Coordinación de Visa E-2", "Referencias de Abogados", "Referencias de Contadores", "Constitución de Empresa", "Apertura de Cuenta Bancaria", "Seguros", "Arrendamiento Comercial", "Coordinación del Cierre", "Orientación para la Reubicación"],
      countriesEyebrow: "Países que Atendemos con Frecuencia",
      countries: ["Argentina", "Brasil", "México", "Colombia", "Chile", "España", "Italia", "Canadá", "Francia", "Reino Unido"],
      ctaTitle: "¿Buscando desde el extranjero?", ctaCopy: "Elaboraremos una lista corta y coordinaremos cada referencia, del abogado al banco.", ctaButton: "Agendar una llamada para compradores internacionales",
    },
    services: {
      eyebrow: "Servicios", title: "Soporte para ambos lados de la transacción.",
      buyerTitle: "Servicios para Compradores",
      buyerServices: [
        { title: "Búsqueda de Negocios", copy: "Una búsqueda personalizada según su presupuesto y plazo." },
        { title: "Análisis Financiero", copy: "ROI, flujo de caja y evaluación de riesgo en cada oportunidad." },
        { title: "Coordinación de Debida Diligencia", copy: "Diligencia financiera, legal y operativa, en paralelo." },
        { title: "Asistencia de Financiamiento", copy: "Prestamistas SBA, financiamiento del vendedor y de equipos." },
        { title: "Coordinación Migratoria", copy: "Presentación con abogados de visa E-2, contadores y asesores." },
        { title: "Negociación", copy: "Precio, condiciones y transición, negociados en su nombre." },
      ],
      sellerTitle: "Servicios para Vendedores",
      sellerServices: ["Valoración del Negocio", "Planificación de Salida", "Marketing Confidencial", "Selección de Compradores", "Negociación", "Estructuración del Trato", "Coordinación del Cierre", "Asistencia en la Transición", "Soporte Posventa"],
      ctaTitle: "¿No sabe por dónde empezar?", ctaCopy: "Díganos si compra o vende — lo dirigiremos al asesor correcto.", ctaButton: "Agendar una consulta",
    },
    resources: {
      eyebrow: "Recursos", title: "Herramientas y guías para compradores, vendedores e inversionistas.",
      copy: "Una valoración instantánea, y respuestas a las preguntas más comunes.",
      toolTitle: "Herramienta de Valoración de Negocios",
      toolCopy: "Un rango orientativo según múltiplos de SDE. Una valoración formal lo refina.",
      revenueLabel: "Ingresos anuales estimados", cashFlowLabel: "Flujo de caja anual estimado (SDE)", industryLabel: "Industria",
      yearsLabel: "Años en operación", growthLabel: "Tasa de crecimiento interanual", years: "años",
      rangeEyebrow: "Rango de Valoración Estimado", midpoint: "Estimación media:", multipleLabel: "Múltiplo de SDE aplicado", industryLabel2: "Industria",
      formalCta: "Obtener una valoración formal",
      disclaimer: "Estimación orientativa únicamente, no es una tasación.",
      knowledgeTitle: "Centro de Conocimiento", readArticle: "Leer artículo",
      articles: [
        { slug: "business-worth", tag: "Valoración", title: "¿Cuánto Vale Mi Negocio?" },
        { slug: "understanding-sde", tag: "Valoración", title: "Entendiendo el SDE" },
        { slug: "ebitda-vs-sde", tag: "Valoración", title: "EBITDA vs. SDE" },
        { slug: "seller-financing", tag: "Financiamiento", title: "Cómo Funciona el Financiamiento del Vendedor" },
        { slug: "sba-loans", tag: "Financiamiento", title: "Cómo Funcionan los Préstamos SBA 7(a)" },
        { slug: "buying-vs-starting", tag: "Guía del Comprador", title: "Comprar un Negocio vs. Comenzar Uno" },
        { slug: "e2-best-businesses", tag: "Visa E-2", title: "Los Mejores Negocios para Inversionistas E-2" },
        { slug: "due-diligence-checklist", tag: "Debida Diligencia", title: "Nuestra Lista de Verificación" },
        { slug: "buying-a-restaurant", tag: "Guía de Industria", title: "Comprar un Restaurante" },
        { slug: "market-trends-2026", tag: "Mercado", title: "Tendencias del Mercado en Florida, 2026" },
      ],
    },
    about: {
      eyebrow: "Nosotros", title: "Quince años, junto a nuestros clientes.",
      copy: "Correduría con licencia en Miami-Dade, Broward y Palm Beach, con práctica dedicada a inversionistas E-2.",
      cards: [
        { title: "Experiencia", copy: "286 transacciones cerradas desde 2011, en más de 30 industrias." },
        { title: "Mercados Atendidos", copy: "Condado de Miami-Dade, Condado de Broward y Condado de Palm Beach." },
        { title: "Industrias", copy: "Restaurantes, servicios para el hogar, salud, comercio minorista y logística." },
        { title: "Casos de Éxito", copy: "La mayoría de nuestros clientes llegan por referencia." },
      ],
      networkEyebrow: "Red Profesional", networkTitle: "Referencias en las que confiamos.",
      networkItems: ["Abogados de Inmigración", "Contadores y Asesores Fiscales", "Prestamistas SBA", "Asesores de Bienes Raíces Comerciales", "Corredores de Seguros", "Socios Bancarios"],
      ctaTitle: "¿Quiere conversar primero?", ctaCopy: "Una breve llamada, sin presión, sin obligación.", ctaButton: "Agendar una consulta",
    },
    contact: {
      eyebrow: "Contacto", title: "Agende una consulta.",
      copy: "Se dirige a un asesor de su lado de la mesa. Espere respuesta en un día hábil.",
      advisorRole: "Asesor Principal, Doing2Gether",
      advisor2Role: "Asesora Asociada, Doing2Gether",
      counties: "Condado de Miami-Dade · Condado de Broward · Condado de Palm Beach",
      iAm: "Soy", roles: ["Comprador", "Vendedor", "Inversionista E-2"],
      fullName: "Nombre completo", email: "Correo electrónico", phone: "Teléfono", howHelp: "¿Cómo podemos ayudarle?",
      send: "Enviar solicitud", received: "Solicitud recibida.", receivedCopy: "Un asesor le dará seguimiento dentro de un día hábil.",
    },
    footer: {
      blurb: "Correduría de negocios en Miami-Dade, Broward y Palm Beach, con práctica dedicada a inversionistas E-2.",
      buyers: "Compradores", sellers: "Vendedores", resources: "Recursos", company: "Empresa",
      buyABusiness: "Comprar un Negocio", e2visa: "Centro de Visa E-2", intlBuyers: "Compradores Internacionales",
      sellABusiness: "Vender un Negocio", services: "Servicios", resourcesLink: "Recursos",
      aboutUs: "Nosotros", contact: "Contacto",
      copyright: "© 2026 Doing2Gether Advisory LLC. Corredor de negocios con licencia, Estado de Florida.",
      legal: "No somos un bufete de abogados. La elegibilidad E-2 la determina exclusivamente USCIS y el Departamento de Estado de EE. UU.",
    },
  },
};



/* ================================================================== */
/*  KNOWLEDGE CENTER ARTICLE CONTENT (EN / ES)                         */
/* ================================================================== */

const ARTICLE_CONTENT = {
  "business-worth": {
    en: {
      tag: "Valuation", title: "How Much Is My Business Worth?",
      body: [
        "Most owners have a number in mind for what their business is worth. Most of those numbers are wrong — usually too high, sometimes too low, almost always based on what the owner needs the sale to cover rather than what the market will actually pay.",
        "A real valuation starts with your Seller's Discretionary Earnings, or SDE: your net profit, plus your own salary, plus one-time or personal expenses run through the business. That number, not your revenue, is what buyers and lenders actually price against.",
        "From there, a multiple is applied based on your industry, size, growth trend, and how dependent the business is on you personally. A restaurant might sell for 2 to 2.5 times SDE. A home services company with recurring contracts might fetch 3 to 3.5 times. The gap between those numbers is almost entirely about risk.",
        "Two businesses with identical revenue can have very different values. The one with diversified customers, documented systems, and a manager who isn't the owner will outsell the one that's entirely dependent on the founder showing up every day.",
        "A free estimate — using our valuation tool or a quick call — takes twenty minutes and gives you a realistic range grounded in actual South Florida transactions, not a generic rule of thumb pulled from the internet.",
      ],
    },
    es: {
      tag: "Valoración", title: "¿Cuánto Vale Mi Negocio?",
      body: [
        "La mayoría de los propietarios tiene una cifra en mente para lo que vale su negocio. La mayoría de esas cifras están equivocadas — casi siempre demasiado altas, a veces demasiado bajas, y casi siempre basadas en lo que el propietario necesita cubrir con la venta, no en lo que el mercado realmente pagará.",
        "Una valoración real comienza con sus Ganancias Discrecionales del Vendedor, o SDE: su utilidad neta, más su propio salario, más gastos personales o únicos que pasan por el negocio. Esa cifra, no sus ingresos, es lo que realmente usan compradores y prestamistas.",
        "A partir de ahí se aplica un múltiplo según su industria, tamaño, tendencia de crecimiento y qué tan dependiente es el negocio de usted. Un restaurante puede venderse entre 2 y 2.5 veces el SDE. Una empresa de servicios para el hogar con contratos recurrentes puede alcanzar entre 3 y 3.5 veces. La diferencia entre esas cifras es casi enteramente sobre riesgo.",
        "Dos negocios con ingresos idénticos pueden tener valores muy distintos. El que tiene clientes diversificados, sistemas documentados y un gerente que no es el propietario se venderá mejor que el que depende por completo de que el fundador se presente todos los días.",
        "Una estimación gratuita — usando nuestra herramienta de valoración o una llamada breve — toma veinte minutos y le da un rango realista basado en transacciones reales del sur de Florida, no en una regla genérica sacada de internet.",
      ],
    },
  },
  "understanding-sde": {
    en: {
      tag: "Valuation", title: "Understanding SDE",
      body: [
        "Seller's Discretionary Earnings is the single most important number in a small business sale, and the most misunderstood. It answers one question: if you bought this business and ran it yourself, how much would it actually put in your pocket each year?",
        "Start with net profit from the tax return. Add back the owner's salary and payroll taxes on that salary — a buyer isn't paying the current owner's salary, they're the one who'll be working. Add back interest, depreciation, and amortization, since those are financing and accounting choices, not operating costs.",
        "Then add back the gray area: the owner's personal cell phone, a family member on payroll who doesn't really work there, a truck used half for business and half for weekend trips, a one-time legal settlement. Done honestly, this is normal. Done aggressively, it's the fastest way to lose a buyer's trust mid-negotiation.",
        "SDE typically applies to smaller businesses, generally under $1-2M in earnings, where the owner is still hands-on. Larger, more institutional businesses shift to EBITDA instead, which does not add back the owner's compensation.",
        "Buyers and their lenders will rebuild this number from your actual financials regardless of what you present. The businesses that sell fastest are the ones where the seller's SDE calculation and the buyer's due diligence land in the same place.",
      ],
    },
    es: {
      tag: "Valoración", title: "Entendiendo el SDE",
      body: [
        "Las Ganancias Discrecionales del Vendedor son la cifra más importante en la venta de un negocio pequeño, y la más malentendida. Responde una pregunta: si usted comprara este negocio y lo operara personalmente, ¿cuánto pondría realmente en su bolsillo cada año?",
        "Comience con la utilidad neta de la declaración de impuestos. Sume de nuevo el salario del propietario y los impuestos de nómina sobre ese salario — un comprador no paga el salario del propietario actual, es él quien trabajará. Sume intereses, depreciación y amortización, ya que son decisiones de financiamiento y contabilidad, no costos operativos.",
        "Luego está la zona gris: el celular personal del propietario, un familiar en nómina que no trabaja realmente ahí, una camioneta usada mitad para el negocio y mitad para paseos de fin de semana, un acuerdo legal único. Hecho con honestidad, esto es normal. Hecho de forma agresiva, es la manera más rápida de perder la confianza de un comprador a mitad de la negociación.",
        "El SDE se aplica normalmente a negocios más pequeños, generalmente con ganancias por debajo de $1 a $2 millones, donde el propietario sigue involucrado directamente. Los negocios más grandes e institucionales usan EBITDA en su lugar, que no suma de nuevo la compensación del propietario.",
        "Los compradores y sus prestamistas reconstruirán esta cifra a partir de sus estados financieros reales, sin importar lo que usted presente. Los negocios que se venden más rápido son aquellos donde el cálculo del SDE del vendedor y la debida diligencia del comprador coinciden.",
      ],
    },
  },
  "ebitda-vs-sde": {
    en: {
      tag: "Valuation", title: "EBITDA vs. SDE",
      body: [
        "Buyers and sellers throw both terms around like they're interchangeable. They're not, and using the wrong one can make your business look either underpriced or wildly overpriced to the person reviewing it.",
        "SDE — Seller's Discretionary Earnings — adds back the owner's full salary and benefits, because it assumes a single owner-operator is stepping in to replace the seller and do that job themselves. It's the standard for most Main Street businesses under a few million in revenue.",
        "EBITDA — Earnings Before Interest, Taxes, Depreciation, and Amortization — does not add back owner compensation. It assumes a management team is already in place, or will be hired, and the buyer is purchasing cash flow rather than a job.",
        "The practical effect: the same business can show a meaningfully higher SDE than EBITDA, because SDE credits back the value of the owner's own labor. A business with $200K in profit and a $150K owner salary might show $350K in SDE, but closer to $200K in EBITDA.",
        "Which one applies to your business usually comes down to size and whether it can run without you in the room. If you're not sure which applies, that's exactly the kind of question a real valuation should answer before you set a price.",
      ],
    },
    es: {
      tag: "Valoración", title: "EBITDA vs. SDE",
      body: [
        "Compradores y vendedores usan ambos términos como si fueran intercambiables. No lo son, y usar el equivocado puede hacer que su negocio parezca subvalorado o exageradamente caro ante quien lo revisa.",
        "El SDE — Ganancias Discrecionales del Vendedor — suma de nuevo el salario y beneficios completos del propietario, porque asume que un solo propietario-operador entrará a reemplazar al vendedor y hacer ese trabajo él mismo. Es el estándar para la mayoría de los negocios pequeños con ingresos de pocos millones o menos.",
        "El EBITDA — Ganancias Antes de Intereses, Impuestos, Depreciación y Amortización — no suma de nuevo la compensación del propietario. Asume que ya existe un equipo de gestión, o que se contratará uno, y que el comprador adquiere flujo de caja, no un empleo.",
        "El efecto práctico: el mismo negocio puede mostrar un SDE considerablemente más alto que el EBITDA, porque el SDE reconoce el valor del trabajo del propietario. Un negocio con $200,000 de utilidad y un salario del propietario de $150,000 podría mostrar $350,000 de SDE, pero cerca de $200,000 de EBITDA.",
        "Cuál de los dos aplica a su negocio generalmente depende del tamaño y de si puede operar sin usted presente. Si no está seguro cuál aplica, esa es exactamente la pregunta que una valoración real debe responder antes de fijar un precio.",
      ],
    },
  },
  "seller-financing": {
    en: {
      tag: "Financing", title: "How Seller Financing Works",
      body: [
        "Seller financing means part of the purchase price is paid over time, directly to you, instead of all at once at closing. It's common in Main Street deals, and often the difference between a business selling and a business sitting on the market for a year.",
        "A typical structure: the buyer pays 70-85% of the price at closing — often through an SBA loan, savings, or investor capital — and the remaining 15-30% is financed by the seller over three to five years, at an agreed interest rate.",
        "For sellers, it usually means a slightly higher total sale price and a wider pool of qualified buyers, since fewer buyers need 100% outside financing. It also signals to the buyer's lender that you believe in the business enough to have skin in the outcome.",
        "For buyers, it lowers the amount of outside capital or debt needed upfront, and it's a practical vote of confidence from the person who knows the business best.",
        "The terms — interest rate, payment schedule, what happens if the business underperforms, whether it's secured against business assets — all get negotiated and documented in the purchase agreement, with your attorney and the buyer's reviewing every line before signing.",
      ],
    },
    es: {
      tag: "Financiamiento", title: "Cómo Funciona el Financiamiento del Vendedor",
      body: [
        "El financiamiento del vendedor significa que parte del precio de compra se paga con el tiempo, directamente a usted, en lugar de todo de una vez en el cierre. Es común en negocios pequeños y medianos, y muchas veces marca la diferencia entre vender el negocio o dejarlo un año en el mercado.",
        "Una estructura típica: el comprador paga entre el 70% y 85% del precio en el cierre — a menudo mediante un préstamo SBA, ahorros o capital de inversionistas — y el 15% a 30% restante lo financia el vendedor durante tres a cinco años, a una tasa de interés acordada.",
        "Para los vendedores, generalmente significa un precio total de venta ligeramente más alto y un grupo más amplio de compradores calificados, ya que menos compradores necesitan financiamiento externo al 100%. También le indica al prestamista del comprador que usted confía lo suficiente en el negocio como para tener algo en juego.",
        "Para los compradores, reduce el capital externo o la deuda necesaria por adelantado, y es un voto de confianza práctico de parte de quien mejor conoce el negocio.",
        "Los términos — tasa de interés, calendario de pagos, qué ocurre si el negocio no rinde lo esperado, si está garantizado contra los activos del negocio — se negocian y documentan en el contrato de compraventa, con su abogado y el del comprador revisando cada línea antes de firmar.",
      ],
    },
  },
  "sba-loans": {
    en: {
      tag: "Financing", title: "How SBA 7(a) Loans Work",
      body: [
        "The SBA 7(a) loan is the most common way buyers finance a Main Street business acquisition in the U.S. It's not a loan from the government — it's a conventional bank loan where the Small Business Administration guarantees a portion, which makes banks willing to lend on terms buyers couldn't get otherwise.",
        "Typical structure: 10-15% down from the buyer, sometimes partly covered by seller financing, with the SBA-backed loan covering the rest — usually amortized over 10 years for a business acquisition, occasionally longer if real estate is included.",
        "Approval depends more on the business's cash flow than the buyer's personal wealth. Lenders want to see the business can comfortably cover its own loan payments, which is one reason clean, well-documented financials matter so much when you're preparing to sell.",
        "For non-U.S. citizens, SBA loans generally require lawful permanent residency or an approved visa status — E-2 investors typically don't qualify for SBA financing on the same acquisition that supports their visa, since SBA loans require personal guarantees tied to U.S. status. This is exactly the kind of detail worth confirming with a lender and an attorney early, not after you've found a business.",
        "The process from application to funding usually takes 60-90 days, which is why financing gets lined up in parallel with due diligence rather than after it.",
      ],
    },
    es: {
      tag: "Financiamiento", title: "Cómo Funcionan los Préstamos SBA 7(a)",
      body: [
        "El préstamo SBA 7(a) es la forma más común en que los compradores financian la adquisición de un negocio pequeño o mediano en EE. UU. No es un préstamo del gobierno — es un préstamo bancario convencional donde la Administración de Pequeños Negocios garantiza una parte, lo que hace que los bancos estén dispuestos a prestar en condiciones que los compradores no obtendrían de otra forma.",
        "Estructura típica: 10% a 15% de pago inicial del comprador, a veces cubierto parcialmente con financiamiento del vendedor, y el préstamo respaldado por la SBA cubre el resto — generalmente amortizado a 10 años para una adquisición de negocio, en ocasiones más si se incluye bienes raíces.",
        "La aprobación depende más del flujo de caja del negocio que de la riqueza personal del comprador. Los prestamistas quieren ver que el negocio puede cubrir cómodamente los pagos de su propio préstamo, una razón por la que unos estados financieros limpios y bien documentados importan tanto al preparar la venta.",
        "Para quienes no son ciudadanos estadounidenses, los préstamos SBA generalmente requieren residencia permanente legal o un estatus de visa aprobado — los inversionistas E-2 típicamente no califican para financiamiento SBA en la misma adquisición que respalda su visa, ya que los préstamos SBA requieren garantías personales ligadas al estatus migratorio en EE. UU. Este es exactamente el tipo de detalle que vale la pena confirmar con un prestamista y un abogado desde el principio, no después de haber encontrado el negocio.",
        "El proceso desde la solicitud hasta el desembolso generalmente toma de 60 a 90 días, por lo que el financiamiento se organiza en paralelo con la debida diligencia, no después de ella.",
      ],
    },
  },
  "buying-vs-starting": {
    en: {
      tag: "Buyer Guide", title: "Buying a Business vs. Starting One",
      body: [
        "Starting a business from scratch means building revenue, customers, staff, and systems from zero, with no guarantee any of it works. Buying an existing business means acquiring all of that already in motion — at a price, and with its existing problems included.",
        "The numbers usually favor buying. An established business with three-plus years of financials, a customer base, and trained staff is a known quantity a lender can underwrite. A startup is a bet on a plan, which is exactly why startup lending is so much harder to secure than acquisition financing.",
        "Cash flow is the other big difference. A profitable acquisition can pay you from day one. A startup typically loses money before it turns a corner, sometimes for years, and that gap has to come from somewhere.",
        "What you give up by buying is the ability to build something entirely your own from the ground up, and you inherit whatever the previous owner left behind — good or bad. Due diligence exists specifically to find out which one you're getting before you sign anything.",
        "Neither path is objectively better. But if steady income, a lower failure rate, and a faster path to profitability matter more to you than building something from a blank page, acquisition is usually the stronger financial decision.",
      ],
    },
    es: {
      tag: "Guía del Comprador", title: "Comprar un Negocio vs. Comenzar Uno",
      body: [
        "Comenzar un negocio desde cero significa construir ingresos, clientes, personal y sistemas desde el inicio, sin garantía de que algo de eso funcione. Comprar un negocio existente significa adquirir todo eso ya en marcha — a un precio, e incluyendo sus problemas actuales.",
        "Las cifras generalmente favorecen la compra. Un negocio establecido con tres años o más de estados financieros, una base de clientes y personal capacitado es una cantidad conocida que un prestamista puede evaluar. Una empresa nueva es una apuesta sobre un plan, precisamente por eso el financiamiento para startups es mucho más difícil de conseguir que el de adquisición.",
        "El flujo de caja es la otra gran diferencia. Una adquisición rentable puede pagarle desde el primer día. Una empresa nueva típicamente pierde dinero antes de estabilizarse, a veces durante años, y ese vacío tiene que cubrirse de algún lado.",
        "Lo que se pierde al comprar es la posibilidad de construir algo completamente propio desde cero, y se hereda lo que el propietario anterior dejó — bueno o malo. La debida diligencia existe precisamente para descubrir cuál de las dos cosas está recibiendo antes de firmar algo.",
        "Ningún camino es objetivamente mejor. Pero si un ingreso estable, una menor tasa de fracaso y un camino más rápido hacia la rentabilidad le importan más que construir algo desde una hoja en blanco, la adquisición suele ser la decisión financiera más sólida.",
      ],
    },
  },
  "e2-best-businesses": {
    en: {
      tag: "E-2 Visa", title: "Best Businesses for E-2 Investors",
      body: [
        "USCIS doesn't publish a list of approved industries for the E-2 visa. What it looks for is a real, active, operating business — one that produces income, employs people or has a credible plan to, and isn't a passive holding of real estate or securities.",
        "In practice, service businesses tend to be strong candidates: HVAC, plumbing, cleaning companies, landscaping, pest control. They have clear operating histories, straightforward financials, and a natural path to hiring, all of which make for a cleaner petition.",
        "Restaurants and cafés are popular with investors but come with more scrutiny — food service has thinner margins and higher failure rates, so the business needs to clearly clear the marginality test on its own financials, not just the investment amount.",
        "Franchises are worth a specific mention: many come with an established operating model and training, which can actually strengthen an E-2 case by demonstrating the business is more than a shell — but the franchise agreement itself needs review by your attorney for E-2 compatibility.",
        "The honest answer is that the right business for your E-2 case depends on your investment amount, your background, and what your attorney believes will hold up under adjudication — which is exactly why we work alongside your immigration counsel from the search stage forward, not after you've already picked something.",
      ],
    },
    es: {
      tag: "Visa E-2", title: "Los Mejores Negocios para Inversionistas E-2",
      body: [
        "USCIS no publica una lista de industrias aprobadas para la visa E-2. Lo que busca es un negocio real, activo y operativo — uno que genere ingresos, emplee personas o tenga un plan creíble para hacerlo, y que no sea una tenencia pasiva de bienes raíces o valores.",
        "En la práctica, los negocios de servicios suelen ser candidatos sólidos: HVAC, plomería, empresas de limpieza, jardinería, control de plagas. Tienen historiales operativos claros, finanzas sencillas y un camino natural hacia la contratación, todo lo cual facilita una petición más limpia.",
        "Los restaurantes y cafés son populares entre los inversionistas pero reciben más escrutinio — el servicio de alimentos tiene márgenes más ajustados y mayores tasas de fracaso, por lo que el negocio debe superar claramente la prueba de marginalidad con sus propios estados financieros, no solo con el monto invertido.",
        "Las franquicias merecen una mención especial: muchas vienen con un modelo operativo establecido y capacitación, lo cual puede fortalecer un caso E-2 al demostrar que el negocio es más que una fachada — pero el propio contrato de franquicia necesita revisión de su abogado para verificar la compatibilidad con E-2.",
        "La respuesta honesta es que el negocio correcto para su caso E-2 depende de su monto de inversión, su trayectoria y lo que su abogado crea que resistirá la evaluación — precisamente por eso trabajamos junto a su asesor migratorio desde la etapa de búsqueda, no después de que ya eligió algo.",
      ],
    },
  },
  "due-diligence-checklist": {
    en: {
      tag: "Due Diligence", title: "Our Due Diligence Checklist",
      body: [
        "Due diligence is the period after a signed Letter of Intent where you verify everything the seller has told you, before you're contractually committed to close. It's the single most important stretch of any acquisition, and the most commonly rushed.",
        "Financial diligence comes first: three years of tax returns and financial statements, bank statements matched against reported revenue, accounts receivable and payable aging, and a clear picture of any debt attached to the business.",
        "Operational diligence looks at the business itself: customer concentration (is 40% of revenue tied to one client who could walk?), lease terms and remaining years, key employee dependence, equipment condition, and any pending litigation or regulatory issues.",
        "Legal and commercial diligence covers licenses and permits, vendor contracts, any franchise agreements, insurance coverage, and whether the entity being sold is clean — no undisclosed liens or judgments attached to the business.",
        "A missing document isn't automatically a red flag — small businesses are often run informally. But a pattern of missing or inconsistent records is. Our role is coordinating this entire process with your CPA and attorney so nothing gets missed under deadline pressure.",
      ],
    },
    es: {
      tag: "Debida Diligencia", title: "Nuestra Lista de Verificación",
      body: [
        "La debida diligencia es el período después de firmar una Carta de Intención en el que usted verifica todo lo que el vendedor le ha dicho, antes de comprometerse contractualmente a cerrar. Es el tramo más importante de cualquier adquisición, y el que más se apresura.",
        "La diligencia financiera va primero: tres años de declaraciones de impuestos y estados financieros, estados de cuenta bancarios comparados con los ingresos reportados, antigüedad de cuentas por cobrar y por pagar, y una imagen clara de cualquier deuda asociada al negocio.",
        "La diligencia operativa examina el negocio en sí: concentración de clientes (¿el 40% de los ingresos depende de un solo cliente que podría irse?), términos del arrendamiento y años restantes, dependencia de empleados clave, condición del equipo, y cualquier litigio o problema regulatorio pendiente.",
        "La diligencia legal y comercial cubre licencias y permisos, contratos con proveedores, cualquier acuerdo de franquicia, cobertura de seguros, y si la entidad que se vende está limpia — sin gravámenes o sentencias no revelados sobre el negocio.",
        "Un documento faltante no es automáticamente una señal de alerta — los negocios pequeños suelen operar de forma informal. Pero un patrón de registros faltantes o inconsistentes sí lo es. Nuestro papel es coordinar todo este proceso con su contador y abogado para que nada se pase por alto bajo presión de plazos.",
      ],
    },
  },
  "buying-a-restaurant": {
    en: {
      tag: "Industry Guide", title: "Buying a Restaurant",
      body: [
        "Restaurants are among the most emotionally appealing businesses to buy and among the least forgiving financially. Margins typically run 3-9% net, meaning small mistakes in food cost or labor scheduling show up fast on the bottom line.",
        "The lease is often more important than the P&L. Confirm the remaining term, renewal options, and whether rent is scheduled to jump — a great restaurant with two years left on a lease and no renewal option is a very different purchase than one with ten years locked in.",
        "Look closely at whether the numbers depend on the current owner's personal relationships — a chef whose name is on the door, a following built on one person's Instagram, a deal with a supplier that won't transfer. Revenue tied to the seller personally is revenue at risk after closing.",
        "Equipment condition matters more here than in most industries — a walk-in cooler or hood system failure can be a five-figure surprise in week one. A pre-purchase equipment inspection is worth the cost every time.",
        "For E-2 investors specifically: restaurants can work well, but the business needs to clearly stand on its own financials for the marginality test, and licensing (liquor license transfer, health permits) can add real time to the closing timeline — worth planning for from day one.",
      ],
    },
    es: {
      tag: "Guía de Industria", title: "Comprar un Restaurante",
      body: [
        "Los restaurantes están entre los negocios más atractivos emocionalmente para comprar y entre los menos indulgentes financieramente. Los márgenes suelen ser de 3% a 9% neto, lo que significa que pequeños errores en el costo de alimentos o la programación de personal se reflejan rápido en el resultado final.",
        "El arrendamiento suele ser más importante que el estado de resultados. Confirme el plazo restante, las opciones de renovación y si la renta tiene aumentos programados — un excelente restaurante con dos años restantes de arrendamiento y sin opción de renovación es una compra muy distinta a una con diez años asegurados.",
        "Observe con atención si las cifras dependen de las relaciones personales del propietario actual — un chef cuyo nombre está en la puerta, una clientela construida sobre el Instagram de una persona, un acuerdo con un proveedor que no se transferirá. Los ingresos ligados personalmente al vendedor son ingresos en riesgo después del cierre.",
        "La condición del equipo importa más aquí que en la mayoría de las industrias — una falla en el cuarto frío o en el sistema de extracción puede ser una sorpresa de cinco cifras en la primera semana. Una inspección de equipo previa a la compra vale la pena siempre.",
        "Para inversionistas E-2 específicamente: los restaurantes pueden funcionar bien, pero el negocio debe sostenerse claramente por sí solo en sus finanzas para la prueba de marginalidad, y las licencias (transferencia de licencia de licores, permisos sanitarios) pueden añadir tiempo real al cierre — vale la pena planearlo desde el primer día.",
      ],
    },
  },
  "market-trends-2026": {
    en: {
      tag: "Market", title: "Florida Business Market Trends, 2026",
      body: [
        "South Florida's business-for-sale market has stayed active across Miami-Dade, Broward, and Palm Beach counties, driven by steady population growth, no state income tax, and continued interest from both domestic relocations and international buyers.",
        "Service-based businesses — home services, cleaning, healthcare-adjacent, and specialty retail — continue to see the strongest buyer demand, largely because they're less exposed to tariff and supply chain volatility than product-heavy businesses.",
        "Financing conditions have a direct effect on multiples: as SBA lending terms shift, buyer purchasing power moves with them, which is part of why valuation multiples vary year to year even for similar businesses.",
        "International buyer activity, particularly from Latin America, remains a meaningful share of the market, tied closely to E-2 visa demand and the relative stability of U.S. business ownership compared to alternatives elsewhere.",
        "None of this changes the fundamentals of any single deal — a well-run business with clean records sells on its own merits regardless of the broader market. But knowing the climate helps set realistic expectations on both price and time to close.",
      ],
    },
    es: {
      tag: "Mercado", title: "Tendencias del Mercado en Florida, 2026",
      body: [
        "El mercado de negocios en venta del sur de Florida se ha mantenido activo en los condados de Miami-Dade, Broward y Palm Beach, impulsado por el crecimiento constante de la población, la ausencia de impuesto estatal sobre la renta, y el interés continuo tanto de reubicaciones nacionales como de compradores internacionales.",
        "Los negocios basados en servicios — servicios para el hogar, limpieza, afines a la salud y comercio minorista especializado — siguen viendo la mayor demanda de compradores, en gran parte porque están menos expuestos a la volatilidad de aranceles y cadenas de suministro que los negocios centrados en productos.",
        "Las condiciones de financiamiento tienen un efecto directo en los múltiplos: a medida que cambian los términos de los préstamos SBA, el poder adquisitivo de los compradores cambia con ellos, lo cual es parte de la razón por la que los múltiplos de valoración varían de un año a otro incluso para negocios similares.",
        "La actividad de compradores internacionales, particularmente de América Latina, sigue siendo una parte importante del mercado, ligada de cerca a la demanda de visas E-2 y a la estabilidad relativa de la propiedad de negocios en EE. UU. comparada con otras alternativas.",
        "Nada de esto cambia los fundamentos de ningún trato individual — un negocio bien administrado con registros limpios se vende por sus propios méritos sin importar el mercado en general. Pero conocer el panorama ayuda a fijar expectativas realistas tanto de precio como de tiempo para cerrar.",
      ],
    },
  },
};

const TOMAS_PHOTO = "data:image/jpeg;base64,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";
const MARIA_PHOTO = "data:image/jpeg;base64,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";

const NAVY = "#1F3A2E";
const NAVY_LIGHT = "#26473A";
const PAPER = "#F6F3E9";
const PAPER_DIM = "#EFEAD9";
const BRASS = "#B8963E";
const BRASS_LIGHT = "#C9AC5C";
const INK = "#232922";
const SLATE = "#59635A";
const MIST = "#8FA093";
const SAND = "#D4C98A";
const GOOD = "#4C8B6D";
const GOOD_LIGHT = "#7FC29D";
const RISK = "#B23A2E";

/* ================================================================== */
/*  DATA                                                                */
/* ================================================================== */

const STATS = [
  { value: "$412M", label: "Aggregate transaction value" },
  { value: "286", label: "Businesses closed since 2011" },
  { value: "61", label: "Countries represented by buyers" },
  { value: "94 days", label: "Median days to close" },
];

const INDUSTRY_TIERS = {
  "Most Active": [
    "Restaurants", "Cafés", "Coffee Shops", "Pizzerias", "Beauty Salons",
    "Barber Shops", "Nail Salons", "Med Spas", "Fitness Centers", "Car Washes",
  ],
  "Service & Trade": [
    "HVAC Companies", "Plumbing Companies", "Electrical Contractors", "Roofing",
    "Landscaping", "Pest Control", "Cleaning Companies", "Pool Services",
    "Auto Repair", "Auto Body Shops",
  ],
  "Retail & Specialty": [
    "Pet Grooming", "Childcare Centers", "Senior Care", "Laundromats",
    "Smoke Shops", "Convenience Stores", "Liquor Stores", "Bakeries",
    "Ice Cream Shops", "Franchises",
  ],
};

// No active listings are currently loaded. Add real, current listings here as they
// become available -- each item follows the same shape used by ListingCard below.
const LISTINGS = [];

const E2_REQUIREMENTS = [
  { title: "Treaty Country Nationality", copy: "You must hold citizenship in a country that maintains a qualifying treaty of commerce with the United States." },
  { title: "Substantial Investment", copy: "Capital at risk must be substantial relative to total enterprise cost — most acquisitions we structure fall between $150K and $2M." },
  { title: "Active, Operating Business", copy: "The enterprise must be a real, operating business, not passive holdings of stock, real estate, or idle funds." },
  { title: "Marginality Test", copy: "The business must generate more than a minimal living for you and your family, or show clear capacity to." },
  { title: "Job Creation", copy: "While not a hard minimum, a credible hiring plan strengthens a marginal-enterprise argument and future extensions." },
  { title: "Source of Funds", copy: "Investment capital must be traceable to a lawful source — documentation here is often the difference in adjudication." },
];

const E2_ROADMAP = [
  "Choose Business", "Sign NDA", "Financial Review", "Letter of Intent (LOI)",
  "Due Diligence", "Purchase Agreement", "Visa Application", "Business Closing",
  "Move to the United States",
];

const E2_INDUSTRIES = [
  "Restaurants", "Coffee Shops", "Cleaning Companies", "HVAC", "Landscaping",
  "Beauty Salons", "Franchises", "Pet Services", "Retail Stores", "Medical Practices",
];

const SELLING_PROCESS = [
  "Business Valuation", "Listing Preparation", "Marketing", "Buyer Qualification",
  "NDA", "Financial Review", "Letter of Intent (LOI)", "Due Diligence",
  "Purchase Agreement", "Closing",
];

const VALUE_ENHANCEMENTS = [
  "Improve financial record-keeping", "Reduce owner dependence", "Increase recurring revenue",
  "Improve Google review profile", "Negotiate a lease renewal", "Document operating procedures",
  "Diversify the customer base", "Increase EBITDA margin",
];

const BUYER_SERVICES = [
  { icon: Building2, title: "Business Search", copy: "A customized acquisition search built around your budget, industry preference, and timeline." },
  { icon: TrendingUp, title: "Financial Analysis", copy: "Investment analysis, ROI calculations, cash flow modeling, and risk assessment on every opportunity." },
  { icon: ClipboardCheck, title: "Due Diligence Coordination", copy: "Financial, legal, operational, and commercial diligence, plus lease review, run in parallel." },
  { icon: Landmark, title: "Financing Assistance", copy: "Introductions to SBA lenders, seller-financing structures, private lenders, and equipment financing." },
  { icon: Plane, title: "Immigration Coordination", copy: "Warm handoff to E-2 visa attorneys, CPAs, tax advisors, and business formation counsel." },
  { icon: Scale, title: "Negotiation", copy: "Price, terms, working capital, inventory, and transition planning, negotiated on your behalf." },
];

const SELLER_SERVICES = [
  "Business Valuation", "Exit Planning", "Confidential Marketing", "Buyer Screening",
  "Negotiation", "Deal Structuring", "Closing Coordination", "Transition Assistance", "Post-Sale Support",
];

const COUNTRIES = ["Argentina", "Brazil", "Mexico", "Colombia", "Chile", "Spain", "Italy", "Canada", "France", "United Kingdom"];

const INTERNATIONAL_SERVICES = [
  "Business Selection", "Investment Analysis", "E-2 Visa Coordination", "Attorney Referrals",
  "CPA Referrals", "Company Formation", "Bank Account Setup", "Insurance",
  "Commercial Leasing", "Closing Coordination", "Relocation Guidance",
];

const KNOWLEDGE_ARTICLES = [
  { tag: "Valuation", title: "How Much Is My Business Worth?" },
  { tag: "Valuation", title: "Understanding Seller's Discretionary Earnings (SDE)" },
  { tag: "Valuation", title: "EBITDA vs. SDE — What Buyers Should Know" },
  { tag: "Valuation", title: "Business Valuation Multiples by Industry" },
  { tag: "Financing", title: "How Seller Financing Works" },
  { tag: "Financing", title: "How SBA 7(a) Loans Work for Acquisitions" },
  { tag: "Buyer Guide", title: "Buying a Business vs. Starting One" },
  { tag: "E-2 Visa", title: "Best Businesses for E-2 Visa Investors" },
  { tag: "Buyer Guide", title: "How to Analyze a Business Before Buying" },
  { tag: "Buyer Guide", title: "Common Mistakes First-Time Buyers Make" },
  { tag: "Due Diligence", title: "The Due Diligence Checklist We Use on Every Deal" },
  { tag: "Industry Guide", title: "Buying a Restaurant in South Florida" },
  { tag: "Industry Guide", title: "Buying a Med Spa: What to Underwrite" },
  { tag: "Industry Guide", title: "Buying a Car Wash: Equipment & Throughput" },
  { tag: "Industry Guide", title: "Buying a Cleaning Company: Route Density" },
  { tag: "Market", title: "Florida Business Market Trends, 2026" },
];

const INDUSTRY_MULTIPLES = {
  "Restaurant / Café": 2.2,
  "Beauty / Salon / Med Spa": 2.8,
  "Home Services (HVAC, Plumbing, Landscaping)": 3.2,
  "Cleaning / Pest Control": 3.4,
  "Auto Repair / Car Wash": 2.9,
  "Retail / Convenience": 2.1,
  "Logistics / Distribution": 3.6,
  "Childcare / Senior Care": 2.6,
};

const TESTIMONIALS = [
  { quote: "We reviewed three brokerages before engaging. This was the only one that presented a valuation we could defend to our own board, and a buyer list we could actually verify.", name: "Former owner, commercial landscaping company", location: "Palm Beach County" },
  { quote: "I was searching from São Paulo with no local network. Within eleven weeks I had a signed LOI on a business that met every E-2 threshold my attorney flagged.", name: "Investor, hospitality acquisition", location: "Relocated from Brazil" },
  { quote: "The process was run with more discipline than the sale of my last company, and that one had an investment bank on it.", name: "Former owner, specialty distribution business", location: "Miami-Dade County" },
];

/* ================================================================== */
/*  SMALL SHARED COMPONENTS                                            */
/* ================================================================== */

function LogoMark({ size = 32, variant = "light" }) {
  const colorA = variant === "dark" ? PAPER : NAVY;
  const colorB = BRASS;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M13 18 L30 32 L13 46" fill="none" stroke={colorA} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M51 18 L34 32 L51 46" fill="none" stroke={colorB} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Wordmark({ color = INK, size = "text-2xl" }) {
  return (
    <span className={`font-display ${size} tracking-tight`} style={{ color }}>
      Doing<span style={{ color: BRASS }}>2</span>Gether
    </span>
  );
}

function PageArt({ variant }) {
  const art = {
    home: (
      <svg viewBox="0 0 320 240" width="100%" role="img" aria-label="Illustration of a South Florida skyline with a palm tree, representing business acquisition in the region">
        <rect x="40" y="150" width="46" height="72" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <rect x="100" y="86" width="46" height="136" fill={BRASS} />
        <rect x="160" y="110" width="46" height="112" fill="none" stroke={PAPER} strokeWidth="2.5" />
        {[0, 1].map((r) =>
          [0, 1].map((c) => (
            <rect key={`${r}-${c}`} x={116 + c * 20} y={104 + r * 24} width="9" height="12" fill={NAVY} />
          ))
        )}
        <circle cx="66" cy="60" r="16" fill={SAND} />
        <path d="M256 222 L256 176" fill="none" stroke={PAPER} strokeWidth="3" strokeLinecap="round" />
        <path d="M256 182 C 236 176, 230 160, 234 150 C 248 156, 256 166, 256 182 Z" fill={BRASS} />
        <path d="M256 182 C 276 176, 282 160, 278 150 C 264 156, 256 166, 256 182 Z" fill={BRASS} />
        <path d="M256 178 C 242 168, 238 154, 244 144 C 256 152, 260 164, 256 178 Z" fill={SAND} />
      </svg>
    ),
    buy: (
      <svg viewBox="0 0 320 240" width="100%" role="img" aria-label="Illustration of buildings representing businesses available to acquire">
        <rect x="40" y="150" width="56" height="72" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <rect x="132" y="86" width="56" height="136" fill={BRASS} />
        <rect x="224" y="118" width="56" height="104" fill="none" stroke={PAPER} strokeWidth="2.5" />
        {[0, 1].map((r) =>
          [0, 1].map((c) => (
            <rect key={`${r}-${c}`} x={148 + c * 22} y={104 + r * 26} width="10" height="14" fill={NAVY} />
          ))
        )}
        <path d="M224 70 L260 70 L260 106" fill="none" stroke={SAND} strokeWidth="2.5" />
        <path d="M260 70 L200 130" fill="none" stroke={SAND} strokeWidth="2.5" />
      </svg>
    ),
    sell: (
      <svg viewBox="0 0 320 240" width="100%" role="img" aria-label="Illustration of two forms clasping together with a rising growth line">
        <path d="M96 150 L146 100 Q156 90 166 100 L182 116" fill="none" stroke={PAPER} strokeWidth="11" strokeLinecap="round" />
        <path d="M236 150 L186 100 Q176 90 166 100 L150 116" fill="none" stroke={BRASS} strokeWidth="11" strokeLinecap="round" />
        <path d="M70 200 L120 170 L160 188 L210 140 L250 152" fill="none" stroke={SAND} strokeWidth="3" strokeLinecap="round" />
        <circle cx="250" cy="152" r="5" fill={SAND} />
      </svg>
    ),
    e2: (
      <svg viewBox="0 0 320 240" width="100%" role="img" aria-label="Illustration of a passport document with a visa stamp">
        <rect x="70" y="52" width="120" height="150" rx="6" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <line x1="90" y1="90" x2="170" y2="90" stroke={PAPER} strokeWidth="2.5" />
        <line x1="90" y1="108" x2="170" y2="108" stroke={PAPER} strokeWidth="2.5" />
        <line x1="90" y1="126" x2="150" y2="126" stroke={PAPER} strokeWidth="2.5" />
        <circle cx="212" cy="150" r="42" fill="none" stroke={BRASS} strokeWidth="4" />
        <path d="M195 150 L207 162 L230 136" fill="none" stroke={BRASS} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    international: (
      <svg viewBox="0 0 320 240" width="100%" role="img" aria-label="Illustration of a globe with a location marker over South Florida">
        <circle cx="150" cy="120" r="70" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <ellipse cx="150" cy="120" rx="30" ry="70" fill="none" stroke={PAPER} strokeWidth="1.5" />
        <ellipse cx="150" cy="120" rx="70" ry="26" fill="none" stroke={PAPER} strokeWidth="1.5" />
        <line x1="80" y1="120" x2="220" y2="120" stroke={PAPER} strokeWidth="1.5" />
        <path d="M228 96 C228 118, 208 128, 208 148 C208 130, 190 118, 190 96 A19 19 0 0 1 228 96 Z" fill={BRASS} />
        <circle cx="208" cy="104" r="6" fill={NAVY} />
      </svg>
    ),
    services: (
      <svg viewBox="0 0 320 240" width="100%" role="img" aria-label="Illustration of three connected nodes representing coordinated services">
        <line x1="150" y1="70" x2="90" y2="170" stroke={SAND} strokeWidth="2.5" />
        <line x1="150" y1="70" x2="210" y2="170" stroke={SAND} strokeWidth="2.5" />
        <line x1="90" y1="170" x2="210" y2="170" stroke={SAND} strokeWidth="2.5" />
        <circle cx="150" cy="70" r="20" fill={BRASS} />
        <circle cx="90" cy="170" r="20" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <circle cx="210" cy="170" r="20" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <path d="M142 70 L148 76 L160 62" fill="none" stroke={NAVY} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    about: (
      <svg viewBox="0 0 320 240" width="100%" role="img" aria-label="Illustration of a timeline marking years of experience">
        <line x1="50" y1="140" x2="270" y2="140" stroke={PAPER} strokeWidth="2.5" />
        <circle cx="80" cy="140" r="7" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <circle cx="140" cy="140" r="7" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <circle cx="200" cy="140" r="7" fill="none" stroke={PAPER} strokeWidth="2.5" />
        <circle cx="252" cy="140" r="12" fill={BRASS} />
        <line x1="252" y1="118" x2="252" y2="92" stroke={SAND} strokeWidth="2.5" />
        <path d="M252 92 L262 100 L252 108 L242 100 Z" fill={SAND} />
      </svg>
    ),
  };
  return (
    <div className="rounded-sm border border-white/10 p-8 flex items-center justify-center" style={{ background: NAVY_LIGHT }}>
      <div className="w-full max-w-xs">{art[variant]}</div>
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="font-mono2 text-sm tracking-[0.2em] uppercase" style={{ color: BRASS }}>
      {children}
    </span>
  );
}

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 rating`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          strokeWidth={1.5}
          style={{ color: BRASS, fill: i <= count ? BRASS : "transparent" }}
        />
      ))}
    </div>
  );
}

function ScoreBar({ label, value, invert }) {
  const good = invert ? value <= 40 : value >= 60;
  const color = good ? GOOD_LIGHT : value > 40 && value < 60 ? SAND : RISK;
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono2 text-[12px] uppercase tracking-wide" style={{ color: MIST }}>{label}</span>
        <span className="font-mono2 text-[12px]" style={{ color: "#F6F3E9" }}>{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}

function PageHeader({ eyebrow, title, copy, dark }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: dark ? PAPER : NAVY }}>{title}</h1>
      {copy && <p className="mt-4 leading-relaxed" style={{ color: dark ? "#B9C4B7" : SLATE }}>{copy}</p>}
    </div>
  );
}

function CardShell({ children, className = "" }) {
  return (
    <div
      className={`rounded-sm border p-7 bg-white transition-colors ${className}`}
      style={{ borderColor: "rgba(31,58,46,0.1)" }}
    >
      {children}
    </div>
  );
}

function ChecklistGrid({ items, columns = 2 }) {
  const colClass = columns === 1 ? "sm:grid-cols-1" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <ul className={`grid ${colClass} gap-x-8 gap-y-3`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: SLATE }}>
          <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: BRASS }} strokeWidth={2} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CTABand({ title, copy, buttonLabel, onNavigate, to }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div className="rounded-sm px-8 py-14 lg:px-16 lg:py-16 text-center" style={{ background: NAVY }}>
        <Handshake className="w-8 h-8 mx-auto" style={{ color: BRASS }} strokeWidth={1.5} />
        <h2 className="font-display text-4xl lg:text-5xl text-white mt-6 max-w-2xl mx-auto">{title}</h2>
        <p className="mt-4 max-w-lg mx-auto" style={{ color: "#B9C4B7" }}>{copy}</p>
        <button
          onClick={() => onNavigate(to)}
          className="inline-flex items-center gap-2 font-medium text-base px-7 py-3.5 rounded-sm mt-8 transition-colors"
          style={{ background: BRASS, color: NAVY }}
        >
          {buttonLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  HEADER / FOOTER                                                    */
/* ================================================================== */

function Header({ page, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const go = (key) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  const navPrimary = [
    { key: "buy", label: t.nav.buy },
    { key: "sell", label: t.nav.sell },
    { key: "e2", label: t.nav.e2 },
    { key: "international", label: t.nav.international },
    { key: "services", label: t.nav.services },
    { key: "resources", label: t.nav.resources },
  ];
  const navSecondary = [
    { key: "about", label: t.nav.about },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b" style={{ background: "rgba(246,243,233,0.95)", borderColor: "rgba(31,58,46,0.1)" }}>
      <div style={{ background: NAVY, color: SAND }} className="text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-between font-mono2 tracking-wide">
          <span className="hidden sm:inline">{t.utility.line}</span>
          <div className="flex items-center gap-5 ml-auto">
            <a href="tel:+19548813999" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" /> 954.881.3999
            </a>
            <a href="tel:+17863266302" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              786.326.6302
            </a>
            <span className="hidden md:flex items-center gap-3" style={{ color: MIST }}>
              <button onClick={() => setLang("en")} className="hover:text-white transition-colors" style={{ color: lang === "en" ? "#FFFFFF" : MIST, fontWeight: lang === "en" ? 700 : 400 }}>EN</button>
              <span aria-hidden="true">/</span>
              <button onClick={() => setLang("es")} className="hover:text-white transition-colors" style={{ color: lang === "es" ? "#FFFFFF" : MIST, fontWeight: lang === "es" ? 700 : 400 }}>ES</button>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2.5">
          <LogoMark size={44} variant="light" />
          <Wordmark color={INK} size="text-3xl" />
        </button>

        <nav className="hidden lg:flex items-center gap-4" aria-label="Primary">
          {navPrimary.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className="text-base leading-tight text-center transition-colors"
              style={{ color: page === item.key ? NAVY : SLATE, fontWeight: page === item.key ? 600 : 400 }}
            >
              {Array.isArray(item.label)
                ? item.label.map((line, i) => <span key={i} className="block">{line}</span>)
                : item.label}
            </button>
          ))}
          <button onClick={() => go("about")} className="text-base transition-colors" style={{ color: page === "about" ? NAVY : SLATE }}>
            {t.nav.about}
          </button>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => go("contact")}
            className="inline-flex items-center gap-2 text-white text-base px-5 py-2.5 rounded-sm transition-colors"
            style={{ background: NAVY }}
          >
            {t.nav.schedule} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button className="lg:hidden p-2 -mr-2" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t px-6 py-5 flex flex-col gap-1 max-h-[75vh] overflow-y-auto" style={{ borderColor: "rgba(31,58,46,0.1)", background: PAPER }}>
          {[...navPrimary, ...navSecondary].map((item) => (
            <button key={item.key} onClick={() => go(item.key)} className="text-left text-base py-2.5" style={{ color: INK }}>
              {Array.isArray(item.label) ? item.label.join(" ") : item.label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="inline-flex items-center justify-center gap-2 text-white text-base px-5 py-3 rounded-sm mt-3"
            style={{ background: NAVY }}
          >
            Schedule a consultation <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/19548813999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#FFFFFF" aria-hidden="true">
        <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.687 4.68 1.879 6.6L3 29l7.09-2.34a12.44 12.44 0 0 0 5.911 1.508c6.905 0 12.5-5.596 12.5-12.5S22.906 3 16.001 3zm0 22.75c-1.933 0-3.75-.52-5.312-1.43l-.381-.226-4.207 1.388 1.38-4.1-.248-.395a10.19 10.19 0 0 1-1.58-5.487c0-5.663 4.605-10.268 10.35-10.268 5.744 0 10.349 4.605 10.349 10.268 0 5.664-4.605 10.25-10.351 10.25zm5.663-7.688c-.31-.155-1.834-.905-2.118-1.008-.284-.104-.491-.155-.698.155-.207.31-.802 1.008-.984 1.216-.181.207-.362.233-.673.078-.31-.155-1.31-.483-2.495-1.539-.923-.823-1.546-1.84-1.727-2.15-.181-.31-.02-.478.136-.633.14-.14.31-.362.465-.543.155-.181.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.698-1.682-.957-2.303-.252-.605-.508-.523-.698-.533-.181-.008-.388-.01-.595-.01-.207 0-.543.078-.828.388-.284.31-1.086 1.062-1.086 2.589 0 1.527 1.112 3.003 1.267 3.21.155.207 2.19 3.343 5.306 4.688.741.32 1.319.511 1.77.654.744.237 1.42.204 1.955.124.596-.089 1.834-.75 2.093-1.474.259-.724.259-1.345.181-1.474-.077-.129-.284-.207-.594-.362z" />
      </svg>
    </a>
  );
}

function FooterCol({ title, items, onNavigate }) {
  return (
    <div>
      <p className="font-mono2 text-[12px] tracking-[0.15em] uppercase mb-4" style={{ color: SAND }}>{title}</p>
      <ul className="space-y-2.5 text-base">
        {items.map(([label, key]) => (
          <li key={key}>
            <button onClick={() => onNavigate(key)} className="hover:text-white transition-colors text-left">{label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer({ onNavigate }) {
  const { t } = useLang();
  return (
    <footer className="pt-16 pb-10 border-t border-white/10" style={{ background: NAVY, color: MIST }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <LogoMark size={32} variant="dark" />
              <Wordmark color="#FFFFFF" />
            </div>
            <p className="text-base leading-relaxed mt-4 max-w-xs">
              {t.footer.blurb}
            </p>
            <p className="flex items-center gap-1.5 text-sm mt-5">
              <Mail className="w-3.5 h-3.5" /> info@doing2gether.com
            </p>
            <p className="text-sm mt-2" style={{ color: MIST }}>www.doing2gether.com</p>
          </div>
          <FooterCol title={t.footer.buyers} items={[[t.footer.buyABusiness, "buy"], [t.footer.e2visa, "e2"], [t.footer.intlBuyers, "international"]]} onNavigate={onNavigate} />
          <FooterCol title={t.footer.sellers} items={[[t.footer.sellABusiness, "sell"], [t.footer.services, "services"]]} onNavigate={onNavigate} />
          <FooterCol title={t.footer.resources} items={[[t.footer.resourcesLink, "resources"]]} onNavigate={onNavigate} />
          <FooterCol title={t.footer.company} items={[[t.footer.aboutUs, "about"], [t.footer.contact, "contact"]]} onNavigate={onNavigate} />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-14 pt-8 border-t border-white/10 text-sm">
          <p>{t.footer.copyright}</p>
          <p className="max-w-2xl leading-relaxed">
            {t.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================== */
/*  PAGE: HOME                                                         */
/* ================================================================== */

function HomePage({ onNavigate }) {
  const { t } = useLang();
  return (
    <>
      <section style={{ background: NAVY, color: PAPER }} className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mt-5 max-w-xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-xl max-w-lg leading-relaxed" style={{ color: "#B9C4B7" }}>
              {t.hero.copy}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => onNavigate("buy")} className="inline-flex items-center gap-2 font-medium text-base px-6 py-3.5 rounded-sm transition-colors" style={{ background: BRASS, color: NAVY }}>
                {t.hero.browse} <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => onNavigate("resources")} className="inline-flex items-center gap-2 border text-base px-6 py-3.5 rounded-sm transition-colors" style={{ borderColor: "rgba(246,243,233,0.3)", color: PAPER }}>
                {t.hero.valuation}
              </button>
            </div>
            <div className="mt-5 flex flex-wrap gap-4">
              <button onClick={() => onNavigate("contact")} className="text-base underline underline-offset-4" style={{ color: SAND }}>{t.hero.schedule}</button>
              <button onClick={() => onNavigate("e2")} className="text-base underline underline-offset-4" style={{ color: SAND }}>{t.hero.e2buyers}</button>
            </div>
            <p className="mt-8 text-sm font-mono2" style={{ color: MIST }}>
              {t.hero.license}
            </p>
          </div>

          <PageArt variant="home" />
        </div>
      </section>

      {/* How We Do Business */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>{t.howWeWork.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>
            {t.howWeWork.title}
          </h2>
          <p className="mt-4 leading-relaxed" style={{ color: SLATE }}>
            {t.howWeWork.copy}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[Handshake, Users, TrendingUp].map((Icon, i) => (
            <CardShell key={i}>
              <Icon className="w-6 h-6" style={{ color: BRASS }} strokeWidth={1.5} />
              <h3 className="font-display text-2xl mt-5" style={{ color: NAVY }}>{t.howWeWork.cards[i].title}</h3>
              <p className="text-base leading-relaxed mt-2" style={{ color: SLATE }}>
                {t.howWeWork.cards[i].copy}
              </p>
            </CardShell>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28" style={{ borderTop: "1px solid rgba(31,58,46,0.1)" }}>
        <Eyebrow>{t.whyChoose.eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>{t.whyChoose.title}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <CardShell className="hover:border-[#B8963E]/60">
            <Building2 className="w-6 h-6" style={{ color: BRASS }} strokeWidth={1.5} />
            <h3 className="font-display text-2xl mt-5" style={{ color: NAVY }}>{t.whyChoose.buyerTitle}</h3>
            <p className="text-base leading-relaxed mt-2" style={{ color: SLATE }}>
              {t.whyChoose.buyerCopy}
            </p>
            <div className="mt-5">
              <ChecklistGrid items={t.whyChoose.buyerItems} />
            </div>
            <button onClick={() => onNavigate("buy")} className="inline-flex items-center gap-1.5 text-base font-medium mt-6" style={{ color: NAVY }}>
              {t.whyChoose.buyerCta} <ArrowUpRight className="w-4 h-4" />
            </button>
          </CardShell>
          <CardShell className="hover:border-[#B8963E]/60">
            <TrendingUp className="w-6 h-6" style={{ color: BRASS }} strokeWidth={1.5} />
            <h3 className="font-display text-2xl mt-5" style={{ color: NAVY }}>{t.whyChoose.sellerTitle}</h3>
            <p className="text-base leading-relaxed mt-2" style={{ color: SLATE }}>
              {t.whyChoose.sellerCopy}
            </p>
            <div className="mt-5">
              <ChecklistGrid items={t.whyChoose.sellerItems} />
            </div>
            <button onClick={() => onNavigate("sell")} className="inline-flex items-center gap-1.5 text-base font-medium mt-6" style={{ color: NAVY }}>
              {t.whyChoose.sellerCta} <ArrowUpRight className="w-4 h-4" />
            </button>
          </CardShell>
        </div>
      </section>

      {/* Featured Industries */}
      <section style={{ background: NAVY, color: PAPER }} className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>{t.industries.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4">{t.industries.title}</h2>
          <p className="mt-3 max-w-xl" style={{ color: MIST }}>{t.industries.copy}</p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {Object.entries(INDUSTRY_TIERS).map(([tier]) => (
              <div key={tier} className="border border-white/10 rounded-sm p-7" style={{ background: NAVY_LIGHT }}>
                <p className="font-mono2 text-[12px] tracking-[0.15em] uppercase" style={{ color: BRASS }}>{tier}</p>
                <ul className="mt-4 space-y-2">
                  {t.industries.tiers[tier].map((item) => (
                    <li key={item} className="text-base" style={{ color: "#C3CDBF" }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={t.ctaHome.title}
        copy={t.ctaHome.copy}
        buttonLabel={t.ctaHome.button}
        onNavigate={onNavigate}
        to="resources"
      />
    </>
  );
}

/* ================================================================== */
/*  PAGE: BUY A BUSINESS                                                */
/* ================================================================== */

function ListingCard({ l }) {
  const { t } = useLang();
  const lb = t.buy.labels;
  return (
    <div className="border border-white/10 rounded-sm p-7 hover:border-[#B8963E]/50 transition-colors" style={{ background: NAVY_LIGHT }}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="font-mono2 text-[12px] tracking-[0.15em] uppercase" style={{ color: MIST }}>{l.industry}</span>
        <span className="font-mono2 text-[12px] tracking-[0.1em] uppercase px-2 py-1 rounded-sm" style={{ background: BRASS, color: NAVY }}>{l.tag}</span>
      </div>
      <h3 className="font-display text-2xl mt-4" style={{ color: PAPER }}>{l.title}</h3>
      <div className="flex items-center justify-between mt-1.5">
        <p className="flex items-center gap-1.5 text-base" style={{ color: MIST }}><MapPin className="w-3.5 h-3.5" /> {l.location}</p>
        <Stars count={l.rating} />
      </div>

      {/* Investment Summary */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
        {[
          [lb.asking, l.askingPrice], [lb.downPmt, l.downPayment], [lb.financing, l.sellerFinancing],
          [lb.grossRev, l.grossRevenue], [lb.sde, l.sde], [lb.ebitda, l.ebitda],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="font-mono2 text-[12px] uppercase" style={{ color: MIST }}>{label}</p>
            <p className="font-mono2 text-base mt-1" style={{ color: PAPER }}>{value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/5 text-sm">
        {[[lb.years, l.years], [lb.employees, l.employees], [lb.leaseLeft, l.leaseRemaining]].map(([label, value]) => (
          <div key={label}>
            <p className="font-mono2 text-[12px] uppercase" style={{ color: MIST }}>{label}</p>
            <p className="font-mono2 mt-1" style={{ color: "#C3CDBF" }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Investment Metrics */}
      <div className="grid grid-cols-4 gap-3 mt-5 pt-5 border-t border-white/10">
        {[[lb.roi, l.roi], [lb.payback, l.payback], [lb.cashOnCash, l.cashOnCash], [lb.dscr, l.dscr]].map(([label, value]) => (
          <div key={label} className="text-center border border-white/10 rounded-sm py-2.5">
            <p className="font-mono2 text-[11px] uppercase" style={{ color: MIST }}>{label}</p>
            <p className="font-mono2 text-sm mt-1" style={{ color: BRASS }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Investment Score */}
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6 pt-6 border-t border-white/10">
        <ScoreBar label={lb.profitability} value={l.scores.profitability} />
        <ScoreBar label={lb.risk} value={l.scores.risk} invert />
        <ScoreBar label={lb.scalability} value={l.scores.scalability} />
        <ScoreBar label={lb.ownerDependence} value={l.scores.ownerInvolvement} invert />
      </div>
      <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
        <span className="text-sm" style={{ color: MIST }}>{t.buy.reasonForSale}: {l.reason}</span>
        <span className="font-mono2 text-[12px]" style={{ color: GOOD_LIGHT }}>{t.buy.growth} {l.growth}</span>
      </div>

      <button className="inline-flex items-center gap-1.5 text-base mt-6 hover:text-white transition-colors" style={{ color: SAND }}>
        {t.buy.requestMemo} <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

function BuyPage({ onNavigate }) {
  const { t } = useLang();
  return (
    <>
      <section style={{ background: NAVY }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <PageHeader
            eyebrow={t.buy.eyebrow}
            title={t.buy.title}
            copy={t.buy.copy}
            dark
          />
          <PageArt variant="buy" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {LISTINGS.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {LISTINGS.map((l) => <ListingCard key={l.title} l={l} />)}
            </div>
          ) : (
            <div className="rounded-sm border p-12 text-center max-w-xl mx-auto" style={{ borderColor: "rgba(31,58,46,0.15)" }}>
              <Building2 className="w-6 h-6 mx-auto" style={{ color: BRASS }} strokeWidth={1.5} />
              <h3 className="font-display text-2xl mt-4" style={{ color: NAVY }}>{t.buy.noListingsTitle}</h3>
              <p className="mt-3 leading-relaxed" style={{ color: SLATE }}>{t.buy.noListingsCopy}</p>
              <button onClick={() => onNavigate("contact")} className="inline-flex items-center gap-2 font-medium text-base px-6 py-3.5 rounded-sm mt-6 transition-colors" style={{ background: BRASS, color: NAVY }}>
                {t.buy.ctaButton} <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(31,58,46,0.12)" }}>
                <h4 className="font-display text-lg" style={{ color: NAVY }}>{t.buy.externalSearchTitle}</h4>
                <p className="text-sm mt-2" style={{ color: SLATE }}>{t.buy.externalSearchCopy}</p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                  <a href="https://www.bizbuysell.com/florida/miami-dade-county-businesses-for-sale/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-sm border transition-colors hover:border-[#B8963E]" style={{ borderColor: "rgba(31,58,46,0.2)", color: NAVY }}>
                    Miami-Dade County <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://www.bizbuysell.com/florida/broward-county-businesses-for-sale/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-sm border transition-colors hover:border-[#B8963E]" style={{ borderColor: "rgba(31,58,46,0.2)", color: NAVY }}>
                    Broward County <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://www.bizbuysell.com/florida/palm-beach-county-businesses-for-sale/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-sm border transition-colors hover:border-[#B8963E]" style={{ borderColor: "rgba(31,58,46,0.2)", color: NAVY }}>
                    Palm Beach County <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Financial analysis explainer */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Eyebrow>{t.buy.analysisEyebrow}</Eyebrow>
        <h2 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>{t.buy.analysisTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {t.buy.analysisBlocks.map((block) => (
            <CardShell key={block.title}>
              <h3 className="font-display text-xl" style={{ color: NAVY }}>{block.title}</h3>
              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="text-sm" style={{ color: SLATE }}>{item}</li>
                ))}
              </ul>
            </CardShell>
          ))}
        </div>
      </section>

      <CTABand
        title={t.buy.ctaTitle}
        copy={t.buy.ctaCopy}
        buttonLabel={t.buy.ctaButton}
        onNavigate={onNavigate}
        to="contact"
      />
    </>
  );
}

/* ================================================================== */
/*  PAGE: SELL A BUSINESS                                               */
/* ================================================================== */

function SellPage({ onNavigate }) {
  const { t } = useLang();
  return (
    <>
      <section style={{ background: NAVY, color: PAPER }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <Eyebrow>{t.sell.eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl mt-4 max-w-2xl">
              {t.sell.title}
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "#B9C4B7" }}>
              {t.sell.copy}
            </p>
            <button onClick={() => onNavigate("resources")} className="inline-flex items-center gap-2 font-medium text-base px-6 py-3.5 rounded-sm mt-8 transition-colors" style={{ background: BRASS, color: NAVY }}>
              {t.sell.cta} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <PageArt variant="sell" />
        </div>
      </section>

      {/* Valuation */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-16">
        <div>
          <Eyebrow>{t.sell.valuationEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl mt-4" style={{ color: NAVY }}>{t.sell.valuationTitle}</h2>
          <p className="mt-4 leading-relaxed" style={{ color: SLATE }}>
            {t.sell.valuationCopy}
          </p>
          <div className="mt-5">
            <ChecklistGrid columns={1} items={t.sell.valuationItems} />
          </div>
        </div>
        <div>
          <Eyebrow>{t.sell.enhanceEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl mt-4" style={{ color: NAVY }}>{t.sell.enhanceTitle}</h2>
          <p className="mt-4 leading-relaxed" style={{ color: SLATE }}>
            {t.sell.enhanceCopy}
          </p>
          <div className="mt-5">
            <ChecklistGrid columns={1} items={t.sell.enhanceItems} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: PAPER_DIM, borderColor: "rgba(31,58,46,0.1)" }} className="py-20 lg:py-28 border-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>{t.sell.processEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>{t.sell.processTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px mt-12 rounded-sm overflow-hidden" style={{ background: "rgba(31,58,46,0.1)" }}>
            {t.sell.processSteps.map((step, i) => (
              <div key={step} className="bg-white p-6">
                <span className="font-mono2 text-base" style={{ color: BRASS }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-base font-medium mt-3" style={{ color: NAVY }}>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller services */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Eyebrow>{t.sell.servicesEyebrow}</Eyebrow>
        <h2 className="font-display text-4xl mt-4" style={{ color: NAVY }}>{t.sell.servicesTitle}</h2>
        <div className="mt-8">
          <ChecklistGrid columns={3} items={t.sell.servicesItems} />
        </div>
      </section>

      <CTABand
        title={t.sell.ctaTitle}
        copy={t.sell.ctaCopy}
        buttonLabel={t.sell.ctaButton}
        onNavigate={onNavigate}
        to="resources"
      />
    </>
  );
}

/* ================================================================== */
/*  PAGE: E-2 VISA CENTER                                               */
/* ================================================================== */

function E2Page({ onNavigate }) {
  const { t } = useLang();
  return (
    <>
      <section style={{ background: NAVY, color: PAPER }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <Eyebrow>{t.e2.eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl mt-4 max-w-2xl">
              {t.e2.title}
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "#B9C4B7" }}>
              {t.e2.copy}
            </p>
            <div className="flex items-center gap-3 mt-8 p-4 border border-white/10 rounded-sm max-w-xl" style={{ background: NAVY_LIGHT }}>
              <ShieldCheck className="w-5 h-5 shrink-0" style={{ color: BRASS }} strokeWidth={1.5} />
              <p className="text-sm leading-relaxed" style={{ color: MIST }}>
                {t.e2.disclaimer}
              </p>
            </div>
          </div>
          <PageArt variant="e2" />
        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Eyebrow>{t.e2.reqEyebrow}</Eyebrow>
        <h2 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>{t.e2.reqTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {t.e2.requirements.map((c) => (
            <CardShell key={c.title}>
              <FileCheck2 className="w-5 h-5" style={{ color: BRASS }} strokeWidth={1.5} />
              <h3 className="font-display text-xl mt-4" style={{ color: NAVY }}>{c.title}</h3>
              <p className="text-base leading-relaxed mt-2" style={{ color: SLATE }}>{c.copy}</p>
            </CardShell>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ background: PAPER_DIM, borderColor: "rgba(31,58,46,0.1)" }} className="py-20 lg:py-28 border-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>{t.e2.roadmapEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>{t.e2.roadmapTitle}</h2>
          <div className="mt-12 flex flex-col">
            {t.e2.roadmap.map((step, i) => (
              <div key={step} className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center font-mono2 text-sm shrink-0" style={{ background: NAVY, color: BRASS }}>
                    {i + 1}
                  </span>
                  {i < t.e2.roadmap.length - 1 && <span className="w-px h-8" style={{ background: "rgba(31,58,46,0.25)" }} />}
                </div>
                <p className="py-2 text-base sm:text-lg" style={{ color: NAVY }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal industries */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Eyebrow>{t.e2.idealEyebrow}</Eyebrow>
        <h2 className="font-display text-4xl mt-4" style={{ color: NAVY }}>{t.e2.idealTitle}</h2>
        <div className="flex flex-wrap gap-3 mt-8">
          {t.e2.industries.map((i) => (
            <span key={i} className="text-base px-4 py-2 rounded-full border" style={{ borderColor: "rgba(31,58,46,0.15)", color: NAVY }}>{i}</span>
          ))}
        </div>
      </section>

      <CTABand
        title={t.e2.ctaTitle}
        copy={t.e2.ctaCopy}
        buttonLabel={t.e2.ctaButton}
        onNavigate={onNavigate}
        to="contact"
      />
    </>
  );
}

/* ================================================================== */
/*  PAGE: INTERNATIONAL BUYERS                                         */
/* ================================================================== */

function InternationalPage({ onNavigate }) {
  const { t } = useLang();
  return (
    <>
      <section style={{ background: NAVY, color: PAPER }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <Eyebrow>{t.international.eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl mt-4 max-w-2xl">
              {t.international.title}
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "#B9C4B7" }}>
              {t.international.copy}
            </p>
          </div>
          <PageArt variant="international" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[1fr_0.8fr] gap-16">
        <div>
          <Eyebrow>{t.international.servicesEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl mt-4" style={{ color: NAVY }}>{t.international.servicesTitle}</h2>
          <div className="mt-6">
            <ChecklistGrid columns={2} items={t.international.services} />
          </div>
        </div>
        <div>
          <Eyebrow>{t.international.countriesEyebrow}</Eyebrow>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {t.international.countries.map((c) => (
              <div key={c} className="flex items-center gap-2.5 text-base border rounded-sm px-4 py-3" style={{ borderColor: "rgba(31,58,46,0.12)", color: NAVY }}>
                <Globe2 className="w-4 h-4" style={{ color: BRASS }} strokeWidth={1.5} />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={t.international.ctaTitle}
        copy={t.international.ctaCopy}
        buttonLabel={t.international.ctaButton}
        onNavigate={onNavigate}
        to="contact"
      />
    </>
  );
}

/* ================================================================== */
/*  PAGE: SERVICES                                                     */
/* ================================================================== */

function ServicesPage({ onNavigate }) {
  const { t } = useLang();
  const buyerIcons = [Building2, TrendingUp, ClipboardCheck, Landmark, Plane, Scale];
  return (
    <>
      <section style={{ background: NAVY }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} dark />
          <PageArt variant="services" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="font-display text-3xl" style={{ color: NAVY }}>{t.services.buyerTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {t.services.buyerServices.map((s, i) => {
            const Icon = buyerIcons[i];
            return (
              <CardShell key={s.title}>
                <Icon className="w-5 h-5" style={{ color: BRASS }} strokeWidth={1.5} />
                <h3 className="font-display text-xl mt-4" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-base leading-relaxed mt-2" style={{ color: SLATE }}>{s.copy}</p>
              </CardShell>
            );
          })}
        </div>
      </section>

      <section style={{ background: PAPER_DIM, borderColor: "rgba(31,58,46,0.1)" }} className="py-16 border-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl" style={{ color: NAVY }}>{t.services.sellerTitle}</h2>
          <div className="mt-8">
            <ChecklistGrid columns={3} items={t.services.sellerServices} />
          </div>
        </div>
      </section>

      <CTABand title={t.services.ctaTitle} copy={t.services.ctaCopy} buttonLabel={t.services.ctaButton} onNavigate={onNavigate} to="contact" />
    </>
  );
}

/* ================================================================== */
/*  PAGE: RESOURCES (valuation tool + knowledge center)                */
/* ================================================================== */

function ResourcesPage({ onNavigate }) {
  const { t } = useLang();
  const [revenue, setRevenue] = useState(1200000);
  const [cashFlow, setCashFlow] = useState(320000);
  const [industry, setIndustry] = useState(Object.keys(INDUSTRY_MULTIPLES)[0]);
  const [years, setYears] = useState(8);
  const [growth, setGrowth] = useState(6);

  const { low, high, mid, multiple } = useMemo(() => {
    const m = INDUSTRY_MULTIPLES[industry];
    const yearsAdj = years >= 10 ? 1.08 : years >= 5 ? 1.0 : 0.9;
    const growthAdj = growth >= 10 ? 1.1 : growth >= 5 ? 1.03 : 0.95;
    const lo = Math.round((cashFlow * m * 0.85 * yearsAdj * growthAdj) / 1000) * 1000;
    const hi = Math.round((cashFlow * m * 1.15 * yearsAdj * growthAdj) / 1000) * 1000;
    return { low: lo, high: hi, mid: Math.round((lo + hi) / 2 / 1000) * 1000, multiple: m };
  }, [cashFlow, industry, years, growth]);

  const fmt = (n) => `$${n.toLocaleString("en-US")}`;
  const r = t.resources;

  return (
    <>
      <section style={{ background: NAVY }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PageHeader
            eyebrow={r.eyebrow}
            title={r.title}
            copy={r.copy}
            dark
          />
        </div>
      </section>

      {/* Valuation tool */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <h2 className="font-display text-2xl mb-2" style={{ color: NAVY }}>{r.toolTitle}</h2>
        <p className="text-base mb-8" style={{ color: SLATE }}>
          {r.toolCopy}
        </p>
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12">
          <div className="space-y-7">
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{r.revenueLabel}</label>
              <input type="range" min="200000" max="10000000" step="50000" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full mt-3 accent-[#B8963E]" />
              <p className="font-mono2 text-base mt-1" style={{ color: SLATE }}>{fmt(revenue)}</p>
            </div>
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{r.cashFlowLabel}</label>
              <input type="range" min="50000" max="2000000" step="10000" value={cashFlow} onChange={(e) => setCashFlow(Number(e.target.value))} className="w-full mt-3 accent-[#B8963E]" />
              <p className="font-mono2 text-base mt-1" style={{ color: SLATE }}>{fmt(cashFlow)}</p>
            </div>
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{r.industryLabel}</label>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full mt-3 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(31,58,46,0.2)", color: NAVY }}>
                {Object.keys(INDUSTRY_MULTIPLES).map((i) => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-base font-medium" style={{ color: NAVY }}>{r.yearsLabel}</label>
                <input type="range" min="0" max="30" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full mt-3 accent-[#B8963E]" />
                <p className="font-mono2 text-base mt-1" style={{ color: SLATE }}>{years} {r.years}</p>
              </div>
              <div>
                <label className="text-base font-medium" style={{ color: NAVY }}>{r.growthLabel}</label>
                <input type="range" min="-10" max="30" value={growth} onChange={(e) => setGrowth(Number(e.target.value))} className="w-full mt-3 accent-[#B8963E]" />
                <p className="font-mono2 text-base mt-1" style={{ color: SLATE }}>{growth}%</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm p-8 h-fit" style={{ background: NAVY, color: PAPER }}>
            <Eyebrow>{r.rangeEyebrow}</Eyebrow>
            <p className="font-display text-5xl mt-4" style={{ color: BRASS }}>{fmt(low)} – {fmt(high)}</p>
            <p className="text-base mt-2" style={{ color: MIST }}>{r.midpoint} {fmt(mid)}</p>
            <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-base">
              <div className="flex justify-between"><span style={{ color: MIST }}>{r.multipleLabel}</span><span className="font-mono2">{multiple}x</span></div>
              <div className="flex justify-between gap-4"><span style={{ color: MIST }}>{r.industryLabel2}</span><span className="font-mono2 text-right">{industry}</span></div>
            </div>
            <button onClick={() => onNavigate("contact")} className="w-full inline-flex items-center justify-center gap-2 font-medium text-base px-6 py-3.5 rounded-sm mt-8 transition-colors" style={{ background: BRASS, color: NAVY }}>
              {r.formalCta} <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: MIST }}>
              {r.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge center */}
      <section style={{ background: PAPER_DIM, borderColor: "rgba(31,58,46,0.1)" }} className="py-16 border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-2xl mb-8" style={{ color: NAVY }}>{r.knowledgeTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {r.articles.map((a) => (
              <button key={a.slug} onClick={() => onNavigate("article", a.slug)} className="text-left">
                <CardShell className="hover:border-[#B8963E]/50 h-full">
                  <span className="font-mono2 text-[12px] tracking-[0.15em] uppercase" style={{ color: BRASS }}>{a.tag}</span>
                  <h3 className="font-display text-xl mt-3 leading-snug" style={{ color: NAVY }}>{a.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm mt-4" style={{ color: SLATE }}>{r.readArticle} <ArrowUpRight className="w-3.5 h-3.5" /></span>
                </CardShell>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ================================================================== */
/*  PAGE: SINGLE ARTICLE                                               */
/* ================================================================== */

function ArticlePage({ slug, onNavigate }) {
  const { lang, t } = useLang();
  const entry = ARTICLE_CONTENT[slug];

  if (!entry) {
    return (
      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-24 text-center">
        <p style={{ color: SLATE }}>Article not found.</p>
        <button onClick={() => onNavigate("resources")} className="mt-4 text-base underline" style={{ color: NAVY }}>
          {t.resources.knowledgeTitle}
        </button>
      </section>
    );
  }

  const a = entry[lang];

  return (
    <>
      <section style={{ background: NAVY }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <button onClick={() => onNavigate("resources")} className="inline-flex items-center gap-1.5 text-sm mb-6" style={{ color: "#B9C4B7" }}>
            ← {t.resources.knowledgeTitle}
          </button>
          <Eyebrow>{a.tag}</Eyebrow>
          <h1 className="font-display text-4xl mt-4" style={{ color: PAPER }}>{a.title}</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
        {a.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed mb-5" style={{ color: INK }}>{paragraph}</p>
        ))}
      </section>

      <CTABand
        title={t.ctaHome.title}
        copy={t.ctaHome.copy}
        buttonLabel={t.ctaHome.button}
        onNavigate={onNavigate}
        to="contact"
      />
    </>
  );
}

/* ================================================================== */
/*  PAGE: ABOUT US                                                     */
/* ================================================================== */

function AboutPage({ onNavigate }) {
  const { t } = useLang();
  const cardIcons = [Landmark, MapPin, Building2, Users];
  return (
    <>
      <section style={{ background: NAVY, color: PAPER }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <LogoMark size={44} variant="dark" />
              <Wordmark color="#FFFFFF" size="text-4xl" />
            </div>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl mt-4 max-w-2xl">
              {t.about.title}
            </h1>
            <p className="mt-4 max-w-xl" style={{ color: "#B9C4B7" }}>
              {t.about.copy}
            </p>
          </div>
          <PageArt variant="about" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid md:grid-cols-2 gap-6">
        {t.about.cards.map((c, i) => {
          const Icon = cardIcons[i];
          return (
            <CardShell key={c.title}>
              <Icon className="w-5 h-5" style={{ color: BRASS }} strokeWidth={1.5} />
              <h3 className="font-display text-xl mt-4" style={{ color: NAVY }}>{c.title}</h3>
              <p className="text-base leading-relaxed mt-2" style={{ color: SLATE }}>{c.copy}</p>
            </CardShell>
          );
        })}
      </section>

      <section style={{ background: PAPER_DIM, borderColor: "rgba(31,58,46,0.1)" }} className="py-16 border-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>{t.about.networkEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl mt-4" style={{ color: NAVY }}>{t.about.networkTitle}</h2>
          <div className="mt-8">
            <ChecklistGrid columns={3} items={t.about.networkItems} />
          </div>
        </div>
      </section>

      <CTABand title={t.about.ctaTitle} copy={t.about.ctaCopy} buttonLabel={t.about.ctaButton} onNavigate={onNavigate} to="contact" />
    </>
  );
}

/* ================================================================== */
/*  PAGE: CONTACT                                                      */
/* ================================================================== */

function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  const [roleIndex, setRoleIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgqzrbz";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const form = e.target;
    const formData = new FormData(form);
    formData.set("role", c.roles[roleIndex]);
    formData.set("_subject", `New Doing2Gether inquiry — ${c.roles[roleIndex]}`);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
      <div>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>
          {c.title}
        </h1>
        <p className="mt-4 leading-relaxed" style={{ color: SLATE }}>
          {c.copy}
        </p>
        <div className="mt-6 flex items-center gap-3 p-4 rounded-sm border" style={{ borderColor: "rgba(31,58,46,0.12)", background: "white" }}>
          <img src={TOMAS_PHOTO} alt="Tomas Echeverria" className="w-11 h-11 rounded-full object-cover shrink-0" />
          <div>
            <p className="text-base font-medium" style={{ color: NAVY }}>Tomas Echeverria</p>
            <p className="text-sm" style={{ color: SLATE }}>{c.advisorRole}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 p-4 rounded-sm border" style={{ borderColor: "rgba(31,58,46,0.12)", background: "white" }}>
          <img src={MARIA_PHOTO} alt="Maria Saad" className="w-11 h-11 rounded-full object-cover shrink-0" />
          <div>
            <p className="text-base font-medium" style={{ color: NAVY }}>Maria Saad</p>
            <p className="text-sm" style={{ color: SLATE }}>{c.advisor2Role}</p>
          </div>
        </div>
        <div className="mt-8 space-y-4 text-base" style={{ color: NAVY }}>
          <p className="flex items-center gap-2.5"><Phone className="w-4 h-4" style={{ color: BRASS }} /> 954.881.3999 <span style={{ color: SLATE }}>·</span> 786.326.6302</p>
          <p className="flex items-center gap-2.5"><Mail className="w-4 h-4" style={{ color: BRASS }} /> info@doing2gether.com</p>
          <p className="flex items-center gap-2.5"><Globe2 className="w-4 h-4" style={{ color: BRASS }} /> www.doing2gether.com</p>
          <p className="flex items-center gap-2.5"><MapPin className="w-4 h-4" style={{ color: BRASS }} /> {c.counties}</p>
        </div>
      </div>

      <div className="rounded-sm p-8 border" style={{ borderColor: "rgba(31,58,46,0.1)", background: "white" }}>
        {submitted ? (
          <div className="py-10 text-center">
            <ShieldCheck className="w-8 h-8 mx-auto" style={{ color: GOOD }} strokeWidth={1.5} />
            <h3 className="font-display text-2xl mt-4" style={{ color: NAVY }}>{c.received}</h3>
            <p className="text-base mt-2" style={{ color: SLATE }}>{c.receivedCopy}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{c.iAm}</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {c.roles.map((r, i) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setRoleIndex(i)}
                    className="text-sm py-2.5 rounded-sm border transition-colors"
                    style={{
                      borderColor: roleIndex === i ? BRASS : "rgba(31,58,46,0.15)",
                      background: roleIndex === i ? BRASS : "transparent",
                      color: roleIndex === i ? NAVY : SLATE,
                      fontWeight: roleIndex === i ? 600 : 400,
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-base font-medium" style={{ color: NAVY }}>{c.fullName}</label>
                <input required name="name" type="text" className="w-full mt-2 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(31,58,46,0.2)" }} />
              </div>
              <div>
                <label className="text-base font-medium" style={{ color: NAVY }}>{c.email}</label>
                <input required name="email" type="email" className="w-full mt-2 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(31,58,46,0.2)" }} />
              </div>
            </div>
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{c.phone}</label>
              <input name="phone" type="tel" className="w-full mt-2 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(31,58,46,0.2)" }} />
            </div>
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{c.howHelp}</label>
              <textarea name="message" rows={4} className="w-full mt-2 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(31,58,46,0.2)" }} />
            </div>
            {error && (
              <p className="text-sm" style={{ color: "#B23A2E" }}>
                Something went wrong sending your request. Please try again, or reach us directly at info@doing2gether.com.
              </p>
            )}
            <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 font-medium text-base px-6 py-3.5 rounded-sm transition-colors" style={{ background: NAVY, color: "white", opacity: sending ? 0.7 : 1 }}>
              {sending ? "Sending…" : c.send} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ================================================================== */
/*  APP SHELL                                                          */
/* ================================================================== */

const PAGES = {
  home: HomePage,
  buy: BuyPage,
  sell: SellPage,
  e2: E2Page,
  international: InternationalPage,
  services: ServicesPage,
  resources: ResourcesPage,
  about: AboutPage,
  contact: ContactPage,
};

export default function Doing2Gether() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("en");
  const [articleSlug, setArticleSlug] = useState(null);

  const navigate = (key, slug) => {
    setPage(key);
    setArticleSlug(slug || null);
    window.scrollTo?.({ top: 0, behavior: "instant" });
  };

  const Page = PAGES[page] || HomePage;

  return (
    <LangContext.Provider value={{ lang, setLang, t: T[lang] }}>
    <div className="font-body antialiased" style={{ background: PAPER, color: INK }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono2 { font-family: 'IBM Plex Mono', monospace; }
        @keyframes ledgerScroll { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        .ledger-track { animation: ledgerScroll 26s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .ledger-track { animation: none; } }
        input[type="range"] { height: 4px; border-radius: 999px; background: rgba(31,58,46,0.12); }
      `}</style>

      <Header page={page} onNavigate={navigate} />
      <main>
        {page === "article" && articleSlug ? (
          <ArticlePage slug={articleSlug} onNavigate={navigate} />
        ) : (
          <Page onNavigate={navigate} />
        )}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
    </LangContext.Provider>
  );
}
