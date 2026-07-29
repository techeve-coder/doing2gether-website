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
      about: "About Us", contact: "Contact", schedule: "Schedule a consultation", whatsapp: "Chat with us",
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
      about: "Nosotros", contact: "Contacto", schedule: "Agendar una consulta", whatsapp: "Chatea con nosotros",
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
  const { t } = useLang();
  return (
    <a
      href="https://wa.me/19548813999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.nav.whatsapp}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-3.5 pr-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" width="24" height="24" fill="#FFFFFF" aria-hidden="true" className="shrink-0">
        <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.687 4.68 1.879 6.6L3 29l7.09-2.34a12.44 12.44 0 0 0 5.911 1.508c6.905 0 12.5-5.596 12.5-12.5S22.906 3 16.001 3zm0 22.75c-1.933 0-3.75-.52-5.312-1.43l-.381-.226-4.207 1.388 1.38-4.1-.248-.395a10.19 10.19 0 0 1-1.58-5.487c0-5.663 4.605-10.268 10.35-10.268 5.744 0 10.349 4.605 10.349 10.268 0 5.664-4.605 10.25-10.351 10.25zm5.663-7.688c-.31-.155-1.834-.905-2.118-1.008-.284-.104-.491-.155-.698.155-.207.31-.802 1.008-.984 1.216-.181.207-.362.233-.673.078-.31-.155-1.31-.483-2.495-1.539-.923-.823-1.546-1.84-1.727-2.15-.181-.31-.02-.478.136-.633.14-.14.31-.362.465-.543.155-.181.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.698-1.682-.957-2.303-.252-.605-.508-.523-.698-.533-.181-.008-.388-.01-.595-.01-.207 0-.543.078-.828.388-.284.31-1.086 1.062-1.086 2.589 0 1.527 1.112 3.003 1.267 3.21.155.207 2.19 3.343 5.306 4.688.741.32 1.319.511 1.77.654.744.237 1.42.204 1.955.124.596-.089 1.834-.75 2.093-1.474.259-.724.259-1.345.181-1.474-.077-.129-.284-.207-.594-.362z" />
      </svg>
      <span className="text-sm font-medium text-white whitespace-nowrap">{t.nav.whatsapp}</span>
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
          <img src={TOMAS_PHOTO} alt="Tomas Echeverria" className="w-14 h-14 rounded-full object-cover shrink-0" />
          <div>
            <p className="text-base font-medium" style={{ color: NAVY }}>Tomas Echeverria</p>
            <p className="text-sm" style={{ color: SLATE }}>{c.advisorRole}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 p-4 rounded-sm border" style={{ borderColor: "rgba(31,58,46,0.12)", background: "white" }}>
          <img src={MARIA_PHOTO} alt="Maria Saad" className="w-14 h-14 rounded-full object-cover shrink-0" />
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
      {page !== "contact" && <WhatsAppButton />}
    </div>
    </LangContext.Provider>
  );
}
