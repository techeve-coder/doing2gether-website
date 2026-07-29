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
