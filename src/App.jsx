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
  Quote,
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
      buy: ["Buy a", "Business"], sell: ["Sell a", "Business"], e2: "E-2 Visa Center",
      international: ["International", "Buyers"], services: "Services", resources: "Resources",
      about: "About Us", contact: "Contact", schedule: "Schedule a consultation",
    },
    hero: {
      eyebrow: "South Florida M&A Advisory & E-2 Visa Acquisitions",
      title: "Acquire a profitable business in South Florida with confidence.",
      copy: "Business brokerage specializing in profitable small and medium businesses, serving local entrepreneurs and international investors seeking U.S. residency through the E-2 Investor Visa. Doing2Gether — we do the work together, built around what you need.",
      browse: "Browse businesses for sale", valuation: "Free business valuation",
      schedule: "Schedule a consultation", e2buyers: "E-2 visa buyers",
      license: "Licensed business brokers · Florida DBPR · Member, Florida Business Brokers Association",
      ledgerTitle: "The Ledger — Recent Activity",
      ledgerNote: "Illustrative deal activity. Figures rounded; details withheld under NDA.",
    },
    stats: [
      { value: "$412M", label: "Aggregate transaction value" },
      { value: "286", label: "Businesses closed since 2011" },
      { value: "61", label: "Countries represented by buyers" },
      { value: "94 days", label: "Median days to close" },
    ],
    howWeWork: {
      eyebrow: "How We Do Business", title: "Doing2Gether — the name is the method.",
      copy: "Two people do a deal at a time: a buyer and a seller, an investor and an opportunity. We built this brokerage around that fact. We don't work for a side and around the other — we do the work together with you, from the first call to the closing table, built around what you actually need and structured to get you the most value for it.",
      cards: [
        { title: "Together, not transactional", copy: "An advisor stays on your file end to end. No hand-offs to a call center once the contract is signed — the person who took your first call is the one at the closing table." },
        { title: "Your needs set the brief", copy: "We start by listening — budget, timeline, risk tolerance, visa requirements, what \"sold\" needs to look like for you — and build the search or the sale around that, not around what's easiest to move." },
        { title: "Maximizing your value", copy: "For sellers, that means a higher defensible price and cleaner terms. For buyers, it means the strongest business for the capital you're putting at risk. We measure our work by that outcome, not by how fast a file closes." },
      ],
    },
    whyChoose: {
      eyebrow: "Why Choose Us", title: "Every client sits on one side of the table.",
      buyerTitle: "For Buyers",
      buyerCopy: "We don't simply send listings — we help you acquire the right business. Our advisors analyze every opportunity from an investment perspective.",
      buyerItems: ["Cash Flow", "Owner Earnings", "ROI", "Risk", "Growth Potential", "Financing Options", "Exit Strategy"],
      buyerCta: "Browse businesses for sale",
      sellerTitle: "For Sellers",
      sellerCopy: "Selling your business is much more than finding a buyer. We maximize your company's value before it ever reaches the market.",
      sellerItems: ["Confidential process", "Higher valuation", "Qualified buyers only", "Shorter selling cycle"],
      sellerCta: "Get a free valuation",
    },
    industries: {
      eyebrow: "Featured Industries", title: "Businesses we specialize in.",
      copy: "Among the most active and attractive industries in South Florida.",
      tiers: {
        "Most Active": ["Restaurants", "Cafés", "Coffee Shops", "Pizzerias", "Beauty Salons", "Barber Shops", "Nail Salons", "Med Spas", "Fitness Centers", "Car Washes"],
        "Service & Trade": ["HVAC Companies", "Plumbing Companies", "Electrical Contractors", "Roofing", "Landscaping", "Pest Control", "Cleaning Companies", "Pool Services", "Auto Repair", "Auto Body Shops"],
        "Retail & Specialty": ["Pet Grooming", "Childcare Centers", "Senior Care", "Laundromats", "Smoke Shops", "Convenience Stores", "Liquor Stores", "Bakeries", "Ice Cream Shops", "Franchises"],
      },
    },
    testimonialsEyebrow: "From the closing table",
    testimonials: [
      { quote: "We reviewed three brokerages before engaging. This was the only one that presented a valuation we could defend to our own board, and a buyer list we could actually verify.", name: "Former owner, commercial landscaping company", location: "Palm Beach County" },
      { quote: "I was searching from São Paulo with no local network. Within eleven weeks I had a signed LOI on a business that met every E-2 threshold my attorney flagged.", name: "Investor, hospitality acquisition", location: "Relocated from Brazil" },
      { quote: "The process was run with more discipline than the sale of my last company, and that one had an investment bank on it.", name: "Former owner, specialty distribution business", location: "Miami-Dade County" },
    ],
    ctaHome: { title: "Thinking about selling? Find out what your business is worth first.", copy: "A confidential valuation takes about twenty minutes and comes with no obligation to list.", button: "Request a free valuation" },
    buy: {
      eyebrow: "Buy a Business", title: "Every listing includes significantly more information than competing brokerages.",
      copy: "Investment summary, financing terms, ROI and risk metrics, and an investment score, on every opportunity we bring to market.",
      requestMemo: "Request the confidential info memo", reasonForSale: "Reason for sale",
      growth: "Growth",
      analysisEyebrow: "Financial Analysis", analysisTitle: "What we underwrite on every listing.",
      analysisBlocks: [
        { title: "Revenue", items: ["5-Year Revenue Trend", "Monthly Revenue", "Seasonality", "Revenue Concentration", "Recurring Revenue %"] },
        { title: "Profitability", items: ["Gross Margin", "Operating Margin", "Net Margin", "EBITDA Margin", "SDE Margin"] },
        { title: "Financial Ratios", items: ["Current Ratio", "Quick Ratio", "Debt-to-Equity", "Interest Coverage", "Inventory Turnover", "Revenue per Employee"] },
        { title: "Risk Analysis", items: ["Owner Dependence", "Customer Concentration", "Supplier Risk", "Lease Risk", "Regulatory Risk", "Market Saturation"] },
      ],
      ctaTitle: "Not seeing the right fit yet?", ctaCopy: "Tell us your budget, industry, and timeline — we'll run a customized acquisition search, including off-market opportunities.", ctaButton: "Start a buyer consultation",
      labels: { asking: "Asking", downPmt: "Down Pmt.", financing: "Financing", grossRev: "Gross Rev.", sde: "SDE", ebitda: "EBITDA", years: "Years", employees: "Employees", leaseLeft: "Lease Left", roi: "ROI", payback: "Payback", cashOnCash: "Cash-on-Cash", dscr: "DSCR", profitability: "Profitability", risk: "Risk (lower is better)", scalability: "Scalability", ownerDependence: "Owner Dependence" },
    },
    sell: {
      eyebrow: "Sell a Business", title: "Selling your business is much more than finding a buyer.",
      copy: "We maximize your company's value before it reaches the market. Our confidential sales process increases valuation, attracts qualified buyers, and shortens the selling cycle.",
      cta: "Get a free business valuation",
      valuationEyebrow: "Business Valuation", valuationTitle: "What goes into your number.",
      valuationCopy: "A defensible valuation grounded in comparable South Florida transactions, not a rule of thumb.",
      valuationItems: ["Free Estimate", "Market Value", "SDE Multiple", "EBITDA Multiple", "Industry Comparison", "Comparable Sales", "Expected Selling Price"],
      enhanceEyebrow: "Value Enhancement", enhanceTitle: "Increase value before you list.",
      enhanceCopy: "How to increase your company's value before it goes to market.",
      enhanceItems: ["Improve financial record-keeping", "Reduce owner dependence", "Increase recurring revenue", "Improve Google review profile", "Negotiate a lease renewal", "Document operating procedures", "Diversify the customer base", "Increase EBITDA margin"],
      processEyebrow: "Our Selling Process", processTitle: "Ten steps, run in order, every time.",
      processSteps: ["Business Valuation", "Listing Preparation", "Marketing", "Buyer Qualification", "NDA", "Financial Review", "Letter of Intent (LOI)", "Due Diligence", "Purchase Agreement", "Closing"],
      servicesEyebrow: "Seller Services", servicesTitle: "What's included, start to finish.",
      servicesItems: ["Business Valuation", "Exit Planning", "Confidential Marketing", "Buyer Screening", "Negotiation", "Deal Structuring", "Closing Coordination", "Transition Assistance", "Post-Sale Support"],
      ctaTitle: "Ready to see what your business is worth?", ctaCopy: "A confidential valuation takes about twenty minutes of your time and comes with no obligation to list.", ctaButton: "Request a confidential valuation",
    },
    e2: {
      eyebrow: "E-2 Visa Center", title: "Buying a business for an E-2 visa? Start here.",
      copy: "Requirements, minimum investment, active vs. passive businesses, job creation, family benefits, renewals, and realistic timelines — everything you need before you start looking.",
      disclaimer: "We are business brokers, not immigration attorneys, and we don't file petitions. Every E-2 acquisition we structure is reviewed by your independent treaty counsel before closing.",
      reqEyebrow: "Requirements", reqTitle: "What USCIS is actually looking for.",
      requirements: [
        { title: "Treaty Country Nationality", copy: "You must hold citizenship in a country that maintains a qualifying treaty of commerce with the United States." },
        { title: "Substantial Investment", copy: "Capital at risk must be substantial relative to total enterprise cost — most acquisitions we structure fall between $150K and $2M." },
        { title: "Active, Operating Business", copy: "The enterprise must be a real, operating business, not passive holdings of stock, real estate, or idle funds." },
        { title: "Marginality Test", copy: "The business must generate more than a minimal living for you and your family, or show clear capacity to." },
        { title: "Job Creation", copy: "While not a hard minimum, a credible hiring plan strengthens a marginal-enterprise argument and future extensions." },
        { title: "Source of Funds", copy: "Investment capital must be traceable to a lawful source — documentation here is often the difference in adjudication." },
      ],
      roadmapEyebrow: "E-2 Acquisition Roadmap", roadmapTitle: "From choosing a business to moving to the U.S.",
      roadmap: ["Choose Business", "Sign NDA", "Financial Review", "Letter of Intent (LOI)", "Due Diligence", "Purchase Agreement", "Visa Application", "Business Closing", "Move to the United States"],
      idealEyebrow: "Businesses Ideal for E-2 Investors", idealTitle: "Industries that consistently clear USCIS review.",
      industries: ["Restaurants", "Coffee Shops", "Cleaning Companies", "HVAC", "Landscaping", "Beauty Salons", "Franchises", "Pet Services", "Retail Stores", "Medical Practices"],
      ctaTitle: "Discuss your investment profile.", ctaCopy: "Tell us your treaty country, budget, and target industry — we'll outline realistic options and timeline.", ctaButton: "Schedule an E-2 investor consultation",
    },
    international: {
      eyebrow: "International Buyers", title: "Buy a business in Florida from anywhere in the world.",
      copy: "We help international entrepreneurs purchase profitable businesses throughout South Florida, coordinated end to end so you don't need a local network to close.",
      servicesEyebrow: "Services", servicesTitle: "Everything coordinated in one place.",
      services: ["Business Selection", "Investment Analysis", "E-2 Visa Coordination", "Attorney Referrals", "CPA Referrals", "Company Formation", "Bank Account Setup", "Insurance", "Commercial Leasing", "Closing Coordination", "Relocation Guidance"],
      countriesEyebrow: "Countries We Frequently Serve",
      countries: ["Argentina", "Brazil", "Mexico", "Colombia", "Chile", "Spain", "Italy", "Canada", "France", "United Kingdom"],
      ctaTitle: "Searching from abroad?", ctaCopy: "We'll build a shortlist against your budget and treaty country, and coordinate every referral from attorney to bank.", ctaButton: "Schedule an international buyer call",
    },
    services: {
      eyebrow: "Services", title: "Full-service support for both sides of the transaction.",
      buyerTitle: "Buyer Services",
      buyerServices: [
        { title: "Business Search", copy: "A customized acquisition search built around your budget, industry preference, and timeline." },
        { title: "Financial Analysis", copy: "Investment analysis, ROI calculations, cash flow modeling, and risk assessment on every opportunity." },
        { title: "Due Diligence Coordination", copy: "Financial, legal, operational, and commercial diligence, plus lease review, run in parallel." },
        { title: "Financing Assistance", copy: "Introductions to SBA lenders, seller-financing structures, private lenders, and equipment financing." },
        { title: "Immigration Coordination", copy: "Warm handoff to E-2 visa attorneys, CPAs, tax advisors, and business formation counsel." },
        { title: "Negotiation", copy: "Price, terms, working capital, inventory, and transition planning, negotiated on your behalf." },
      ],
      sellerTitle: "Seller Services",
      sellerServices: ["Business Valuation", "Exit Planning", "Confidential Marketing", "Buyer Screening", "Negotiation", "Deal Structuring", "Closing Coordination", "Transition Assistance", "Post-Sale Support"],
      ctaTitle: "Not sure where to start?", ctaCopy: "Tell us whether you're buying or selling, and we'll point you to the right advisor.", ctaButton: "Schedule a consultation",
    },
    resources: {
      eyebrow: "Resources", title: "Tools and guides for buyers, sellers, and investors.",
      copy: "An instant valuation estimate, plus straight answers on the questions we hear most often.",
      toolTitle: "Business Valuation Tool",
      toolCopy: "This calculator gives a directional range based on industry multiples of Seller's Discretionary Earnings (SDE). A formal valuation refines this using comparable sales and full financials.",
      revenueLabel: "Estimated annual revenue", cashFlowLabel: "Estimated annual cash flow (SDE)", industryLabel: "Industry",
      yearsLabel: "Years in business", growthLabel: "YoY growth rate", years: "years",
      rangeEyebrow: "Estimated Valuation Range", midpoint: "Midpoint estimate:", multipleLabel: "Applied SDE multiple", industryLabel2: "Industry",
      formalCta: "Get a formal valuation",
      disclaimer: "Directional estimate only, not an appraisal. Actual valuation depends on verified financials, lease terms, customer concentration, and comparable closed transactions.",
      knowledgeTitle: "Knowledge Center", readArticle: "Read article",
      articles: [
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
      ],
    },
    about: {
      eyebrow: "About Us", title: "Doing2Gether: fifteen years closing South Florida transactions, together with our clients.",
      copy: "Doing2Gether is a licensed business brokerage serving Miami-Dade, Broward, and Palm Beach counties, with a dedicated practice advising E-2 treaty investors. The name is the method: we do the work together with you, not around you.",
      cards: [
        { title: "Experience", copy: "286 closed transactions since 2011, across 30+ industries." },
        { title: "Markets Served", copy: "Miami-Dade County, Broward County, and Palm Beach County." },
        { title: "Industries", copy: "Restaurants, home services, health & wellness, retail, and logistics, among others." },
        { title: "Success Stories", copy: "Repeat sellers and referred buyers make up the majority of our new engagements." },
      ],
      networkEyebrow: "Professional Network", networkTitle: "Referrals we stand behind.",
      networkItems: ["Immigration Attorneys", "CPAs & Tax Advisors", "SBA Lenders", "Commercial Real Estate Advisors", "Insurance Brokers", "Banking Partners"],
      ctaTitle: "Want to talk before you decide?", ctaCopy: "A short call with an advisor, no pressure, no obligation.", ctaButton: "Schedule a consultation",
    },
    contact: {
      eyebrow: "Contact", title: "Book a consultation.",
      copy: "Every inquiry is routed to an advisor who works your side of the table — buyer, seller, or E-2 investor. Expect a reply within one business day.",
      advisorRole: "Principal Advisor, Doing2Gether",
      advisor2Role: "Associate Advisor, Doing2Gether",
      counties: "Miami-Dade County · Broward County · Palm Beach County",
      iAm: "I am a", roles: ["Buyer", "Seller", "E-2 Investor"],
      fullName: "Full name", email: "Email", phone: "Phone", howHelp: "How can we help?",
      send: "Send request", received: "Request received.", receivedCopy: "An advisor will follow up within one business day.",
    },
    footer: {
      blurb: "Business brokerage and M&A advisory serving Miami-Dade, Broward, and Palm Beach counties, with a dedicated practice for E-2 treaty investor acquisitions. We do the work together with you, from search or valuation through closing.",
      buyers: "Buyers", sellers: "Sellers", resources: "Resources", company: "Company",
      buyABusiness: "Buy a Business", e2visa: "E-2 Visa Center", intlBuyers: "International Buyers",
      sellABusiness: "Sell a Business", services: "Services", resourcesLink: "Resources",
      aboutUs: "About Us", contact: "Contact",
      copyright: "© 2026 Doing2Gether Advisory LLC. Licensed business broker, State of Florida.",
      legal: "Not a law firm and does not provide immigration or legal advice. E-2 visa eligibility is determined solely by U.S. Citizenship and Immigration Services and the U.S. Department of State.",
    },
  },
  es: {
    utility: { line: "Consultas confidenciales atendidas dentro de un día hábil" },
    nav: {
      buy: ["Comprar un", "Negocio"], sell: ["Vender un", "Negocio"], e2: "Centro de Visa E-2",
      international: ["Compradores", "Internacionales"], services: "Servicios", resources: "Recursos",
      about: "Nosotros", contact: "Contacto", schedule: "Agendar una consulta",
    },
    hero: {
      eyebrow: "Asesoría de Fusiones y Adquisiciones y Visa E-2 en el Sur de Florida",
      title: "Adquiera un negocio rentable en el sur de Florida con confianza.",
      copy: "Correduría de negocios especializada en pequeñas y medianas empresas rentables, al servicio de emprendedores locales e inversionistas internacionales que buscan la residencia en EE. UU. a través de la Visa de Inversionista E-2. Doing2Gether — hacemos el trabajo juntos, a la medida de lo que usted necesita.",
      browse: "Ver negocios en venta", valuation: "Valoración gratuita del negocio",
      schedule: "Agendar una consulta", e2buyers: "Compradores con visa E-2",
      license: "Corredores de negocios con licencia · DBPR de Florida · Miembro de la Asociación de Corredores de Negocios de Florida",
      ledgerTitle: "El Libro Mayor — Actividad Reciente",
      ledgerNote: "Actividad de operaciones ilustrativa. Cifras redondeadas; detalles reservados bajo acuerdo de confidencialidad.",
    },
    stats: [
      { value: "$412M", label: "Valor total de transacciones" },
      { value: "286", label: "Negocios cerrados desde 2011" },
      { value: "61", label: "Países representados por compradores" },
      { value: "94 días", label: "Mediana de días para cerrar" },
    ],
    howWeWork: {
      eyebrow: "Cómo Hacemos Negocios", title: "Doing2Gether — el nombre es el método.",
      copy: "Dos personas hacen un trato a la vez: un comprador y un vendedor, un inversionista y una oportunidad. Construimos esta correduría en torno a ese hecho. No trabajamos para un lado dejando al otro fuera — hacemos el trabajo junto a usted, desde la primera llamada hasta el cierre, a la medida de lo que realmente necesita y estructurado para obtener el mayor valor posible.",
      cards: [
        { title: "Juntos, no transaccional", copy: "Un asesor permanece en su expediente de principio a fin. Sin transferencias a un centro de llamadas una vez firmado el contrato — la persona que atendió su primera llamada es la misma en la mesa de cierre." },
        { title: "Sus necesidades definen el plan", copy: "Comenzamos escuchando — presupuesto, plazos, tolerancia al riesgo, requisitos de visa, cómo debe verse \"vendido\" para usted — y construimos la búsqueda o la venta en torno a eso, no en torno a lo que sea más fácil de mover." },
        { title: "Maximizando su valor", copy: "Para los vendedores, eso significa un precio más alto y defendible, y términos más limpios. Para los compradores, significa el negocio más sólido por el capital que está arriesgando. Medimos nuestro trabajo por ese resultado, no por la rapidez con que se cierra un expediente." },
      ],
    },
    whyChoose: {
      eyebrow: "Por Qué Elegirnos", title: "Cada cliente se sienta de un lado de la mesa.",
      buyerTitle: "Para Compradores",
      buyerCopy: "No simplemente enviamos listados — le ayudamos a adquirir el negocio correcto. Nuestros asesores analizan cada oportunidad desde una perspectiva de inversión.",
      buyerItems: ["Flujo de Caja", "Ingresos del Propietario", "ROI", "Riesgo", "Potencial de Crecimiento", "Opciones de Financiamiento", "Estrategia de Salida"],
      buyerCta: "Ver negocios en venta",
      sellerTitle: "Para Vendedores",
      sellerCopy: "Vender su negocio es mucho más que encontrar un comprador. Maximizamos el valor de su empresa antes de que llegue al mercado.",
      sellerItems: ["Proceso confidencial", "Mayor valoración", "Solo compradores calificados", "Ciclo de venta más corto"],
      sellerCta: "Obtener una valoración gratuita",
    },
    industries: {
      eyebrow: "Industrias Destacadas", title: "Negocios en los que nos especializamos.",
      copy: "Entre las industrias más activas y atractivas del sur de Florida.",
      tiers: {
        "Most Active": ["Restaurantes", "Cafés", "Cafeterías", "Pizzerías", "Salones de Belleza", "Barberías", "Salones de Uñas", "Spas Médicos", "Centros de Fitness", "Autolavados"],
        "Service & Trade": ["Empresas de HVAC", "Empresas de Plomería", "Contratistas Eléctricos", "Techado", "Jardinería", "Control de Plagas", "Empresas de Limpieza", "Servicios de Piscinas", "Reparación de Autos", "Talleres de Carrocería"],
        "Retail & Specialty": ["Peluquería para Mascotas", "Guarderías Infantiles", "Cuidado de Ancianos", "Lavanderías", "Tiendas de Tabaco", "Tiendas de Conveniencia", "Licorerías", "Panaderías", "Heladerías", "Franquicias"],
      },
    },
    testimonialsEyebrow: "Desde la mesa de cierre",
    testimonials: [
      { quote: "Evaluamos tres correduría antes de contratar. Esta fue la única que presentó una valoración que pudimos defender ante nuestra propia junta, y una lista de compradores que realmente pudimos verificar.", name: "Ex propietario, empresa de jardinería comercial", location: "Condado de Palm Beach" },
      { quote: "Estaba buscando desde São Paulo sin ninguna red local. En once semanas tenía una carta de intención firmada sobre un negocio que cumplía con todos los requisitos de la visa E-2 que señaló mi abogado.", name: "Inversionista, adquisición hotelera", location: "Reubicado desde Brasil" },
      { quote: "El proceso se manejó con más disciplina que la venta de mi empresa anterior, y en esa había un banco de inversión involucrado.", name: "Ex propietario, empresa de distribución especializada", location: "Condado de Miami-Dade" },
    ],
    ctaHome: { title: "¿Está pensando en vender? Primero averigüe cuánto vale su negocio.", copy: "Una valoración confidencial toma unos veinte minutos y no genera ninguna obligación de listar su negocio.", button: "Solicitar una valoración gratuita" },
    buy: {
      eyebrow: "Comprar un Negocio", title: "Cada listado incluye considerablemente más información que las correduría de la competencia.",
      copy: "Resumen de inversión, condiciones de financiamiento, métricas de ROI y riesgo, y una puntuación de inversión, en cada oportunidad que llevamos al mercado.",
      requestMemo: "Solicitar el memorando confidencial", reasonForSale: "Motivo de venta",
      growth: "Crecimiento",
      analysisEyebrow: "Análisis Financiero", analysisTitle: "Lo que evaluamos en cada listado.",
      analysisBlocks: [
        { title: "Ingresos", items: ["Tendencia de Ingresos a 5 Años", "Ingresos Mensuales", "Estacionalidad", "Concentración de Ingresos", "% de Ingresos Recurrentes"] },
        { title: "Rentabilidad", items: ["Margen Bruto", "Margen Operativo", "Margen Neto", "Margen EBITDA", "Margen SDE"] },
        { title: "Razones Financieras", items: ["Razón Corriente", "Prueba Ácida", "Deuda-Capital", "Cobertura de Intereses", "Rotación de Inventario", "Ingresos por Empleado"] },
        { title: "Análisis de Riesgo", items: ["Dependencia del Propietario", "Concentración de Clientes", "Riesgo de Proveedores", "Riesgo de Arrendamiento", "Riesgo Regulatorio", "Saturación del Mercado"] },
      ],
      ctaTitle: "¿Aún no encuentra el negocio ideal?", ctaCopy: "Cuéntenos su presupuesto, industria y plazo — realizaremos una búsqueda de adquisición personalizada, incluyendo oportunidades fuera del mercado.", ctaButton: "Iniciar una consulta para compradores",
      labels: { asking: "Precio", downPmt: "Pago Inicial", financing: "Financiamiento", grossRev: "Ingresos Brutos", sde: "SDE", ebitda: "EBITDA", years: "Años", employees: "Empleados", leaseLeft: "Arrendamiento Restante", roi: "ROI", payback: "Recuperación", cashOnCash: "Retorno sobre Efectivo", dscr: "DSCR", profitability: "Rentabilidad", risk: "Riesgo (menor es mejor)", scalability: "Escalabilidad", ownerDependence: "Dependencia del Propietario" },
    },
    sell: {
      eyebrow: "Vender un Negocio", title: "Vender su negocio es mucho más que encontrar un comprador.",
      copy: "Maximizamos el valor de su empresa antes de que llegue al mercado. Nuestro proceso de venta confidencial aumenta la valoración, atrae compradores calificados y acorta el ciclo de venta.",
      cta: "Obtener una valoración gratuita del negocio",
      valuationEyebrow: "Valoración del Negocio", valuationTitle: "Qué compone su cifra.",
      valuationCopy: "Una valoración defendible basada en transacciones comparables del sur de Florida, no en una regla general.",
      valuationItems: ["Estimación Gratuita", "Valor de Mercado", "Múltiplo de SDE", "Múltiplo de EBITDA", "Comparación por Industria", "Ventas Comparables", "Precio de Venta Esperado"],
      enhanceEyebrow: "Aumento de Valor", enhanceTitle: "Aumente el valor antes de listar.",
      enhanceCopy: "Cómo aumentar el valor de su empresa antes de salir al mercado.",
      enhanceItems: ["Mejorar los registros financieros", "Reducir la dependencia del propietario", "Aumentar los ingresos recurrentes", "Mejorar el perfil de reseñas de Google", "Negociar la renovación del arrendamiento", "Documentar los procedimientos operativos", "Diversificar la base de clientes", "Aumentar el margen EBITDA"],
      processEyebrow: "Nuestro Proceso de Venta", processTitle: "Diez pasos, en orden, siempre.",
      processSteps: ["Valoración del Negocio", "Preparación del Listado", "Marketing", "Calificación de Compradores", "Acuerdo de Confidencialidad", "Revisión Financiera", "Carta de Intención (LOI)", "Debida Diligencia", "Contrato de Compraventa", "Cierre"],
      servicesEyebrow: "Servicios para Vendedores", servicesTitle: "Qué está incluido, de principio a fin.",
      servicesItems: ["Valoración del Negocio", "Planificación de Salida", "Marketing Confidencial", "Selección de Compradores", "Negociación", "Estructuración del Trato", "Coordinación del Cierre", "Asistencia en la Transición", "Soporte Posventa"],
      ctaTitle: "¿Listo para saber cuánto vale su negocio?", ctaCopy: "Una valoración confidencial toma unos veinte minutos de su tiempo y no genera ninguna obligación de listar.", ctaButton: "Solicitar una valoración confidencial",
    },
    e2: {
      eyebrow: "Centro de Visa E-2", title: "¿Va a comprar un negocio para una visa E-2? Comience aquí.",
      copy: "Requisitos, inversión mínima, negocios activos frente a pasivos, creación de empleo, beneficios familiares, renovaciones y plazos realistas — todo lo que necesita antes de empezar a buscar.",
      disclaimer: "Somos corredores de negocios, no abogados de inmigración, y no presentamos peticiones. Cada adquisición E-2 que estructuramos es revisada por su propio abogado de tratados antes del cierre.",
      reqEyebrow: "Requisitos", reqTitle: "Lo que realmente busca USCIS.",
      requirements: [
        { title: "Nacionalidad de País con Tratado", copy: "Debe tener la ciudadanía de un país que mantenga un tratado de comercio calificado con los Estados Unidos." },
        { title: "Inversión Sustancial", copy: "El capital en riesgo debe ser sustancial en relación con el costo total de la empresa — la mayoría de las adquisiciones que estructuramos están entre $150,000 y $2,000,000." },
        { title: "Negocio Activo y Operativo", copy: "La empresa debe ser un negocio real y operativo, no una tenencia pasiva de acciones, bienes raíces o fondos inactivos." },
        { title: "Prueba de Marginalidad", copy: "El negocio debe generar más que un ingreso mínimo para usted y su familia, o demostrar una capacidad clara de hacerlo." },
        { title: "Creación de Empleo", copy: "Aunque no es un mínimo estricto, un plan de contratación creíble fortalece el argumento frente a una empresa marginal y futuras extensiones." },
        { title: "Origen de los Fondos", copy: "El capital de inversión debe poder rastrearse hasta una fuente lícita — la documentación aquí suele marcar la diferencia en la resolución del caso." },
      ],
      roadmapEyebrow: "Ruta de Adquisición E-2", roadmapTitle: "Desde elegir un negocio hasta mudarse a Estados Unidos.",
      roadmap: ["Elegir el Negocio", "Firmar Acuerdo de Confidencialidad", "Revisión Financiera", "Carta de Intención (LOI)", "Debida Diligencia", "Contrato de Compraventa", "Solicitud de Visa", "Cierre del Negocio", "Mudanza a Estados Unidos"],
      idealEyebrow: "Negocios Ideales para Inversionistas E-2", idealTitle: "Industrias que consistentemente superan la revisión de USCIS.",
      industries: ["Restaurantes", "Cafeterías", "Empresas de Limpieza", "HVAC", "Jardinería", "Salones de Belleza", "Franquicias", "Servicios para Mascotas", "Tiendas Minoristas", "Consultorios Médicos"],
      ctaTitle: "Analice su perfil de inversión.", ctaCopy: "Cuéntenos su país de tratado, presupuesto e industria objetivo — le explicaremos opciones realistas y el plazo estimado.", ctaButton: "Agendar una consulta para inversionistas E-2",
    },
    international: {
      eyebrow: "Compradores Internacionales", title: "Compre un negocio en Florida desde cualquier parte del mundo.",
      copy: "Ayudamos a emprendedores internacionales a comprar negocios rentables en todo el sur de Florida, coordinado de principio a fin para que no necesite una red de contactos local para cerrar.",
      servicesEyebrow: "Servicios", servicesTitle: "Todo coordinado en un solo lugar.",
      services: ["Selección del Negocio", "Análisis de Inversión", "Coordinación de Visa E-2", "Referencias de Abogados", "Referencias de Contadores", "Constitución de Empresa", "Apertura de Cuenta Bancaria", "Seguros", "Arrendamiento Comercial", "Coordinación del Cierre", "Orientación para la Reubicación"],
      countriesEyebrow: "Países que Atendemos con Frecuencia",
      countries: ["Argentina", "Brasil", "México", "Colombia", "Chile", "España", "Italia", "Canadá", "Francia", "Reino Unido"],
      ctaTitle: "¿Está buscando desde el extranjero?", ctaCopy: "Elaboraremos una lista corta según su presupuesto y país de tratado, y coordinaremos cada referencia, desde el abogado hasta el banco.", ctaButton: "Agendar una llamada para compradores internacionales",
    },
    services: {
      eyebrow: "Servicios", title: "Soporte integral para ambos lados de la transacción.",
      buyerTitle: "Servicios para Compradores",
      buyerServices: [
        { title: "Búsqueda de Negocios", copy: "Una búsqueda de adquisición personalizada según su presupuesto, industria preferida y plazo." },
        { title: "Análisis Financiero", copy: "Análisis de inversión, cálculos de ROI, modelado de flujo de caja y evaluación de riesgo en cada oportunidad." },
        { title: "Coordinación de Debida Diligencia", copy: "Diligencia financiera, legal, operativa y comercial, además de revisión de arrendamiento, todo en paralelo." },
        { title: "Asistencia de Financiamiento", copy: "Presentaciones con prestamistas SBA, estructuras de financiamiento del vendedor, prestamistas privados y financiamiento de equipos." },
        { title: "Coordinación Migratoria", copy: "Presentación directa con abogados de visa E-2, contadores, asesores fiscales y asesoría en constitución de empresas." },
        { title: "Negociación", copy: "Precio, condiciones, capital de trabajo, inventario y planificación de la transición, negociados en su nombre." },
      ],
      sellerTitle: "Servicios para Vendedores",
      sellerServices: ["Valoración del Negocio", "Planificación de Salida", "Marketing Confidencial", "Selección de Compradores", "Negociación", "Estructuración del Trato", "Coordinación del Cierre", "Asistencia en la Transición", "Soporte Posventa"],
      ctaTitle: "¿No está seguro por dónde empezar?", ctaCopy: "Cuéntenos si está comprando o vendiendo, y lo dirigiremos al asesor correcto.", ctaButton: "Agendar una consulta",
    },
    resources: {
      eyebrow: "Recursos", title: "Herramientas y guías para compradores, vendedores e inversionistas.",
      copy: "Una estimación de valoración instantánea, además de respuestas claras a las preguntas que más escuchamos.",
      toolTitle: "Herramienta de Valoración de Negocios",
      toolCopy: "Esta calculadora ofrece un rango orientativo basado en múltiplos de la industria sobre las Ganancias Discrecionales del Vendedor (SDE). Una valoración formal refina esto usando ventas comparables y estados financieros completos.",
      revenueLabel: "Ingresos anuales estimados", cashFlowLabel: "Flujo de caja anual estimado (SDE)", industryLabel: "Industria",
      yearsLabel: "Años en operación", growthLabel: "Tasa de crecimiento interanual", years: "años",
      rangeEyebrow: "Rango de Valoración Estimado", midpoint: "Estimación media:", multipleLabel: "Múltiplo de SDE aplicado", industryLabel2: "Industria",
      formalCta: "Obtener una valoración formal",
      disclaimer: "Estimación orientativa únicamente, no es una tasación. La valoración real depende de los estados financieros verificados, condiciones de arrendamiento, concentración de clientes y transacciones comparables cerradas.",
      knowledgeTitle: "Centro de Conocimiento", readArticle: "Leer artículo",
      articles: [
        { tag: "Valoración", title: "¿Cuánto Vale Mi Negocio?" },
        { tag: "Valoración", title: "Entendiendo las Ganancias Discrecionales del Vendedor (SDE)" },
        { tag: "Valoración", title: "EBITDA vs. SDE — Lo Que Deben Saber los Compradores" },
        { tag: "Valoración", title: "Múltiplos de Valoración de Negocios por Industria" },
        { tag: "Financiamiento", title: "Cómo Funciona el Financiamiento del Vendedor" },
        { tag: "Financiamiento", title: "Cómo Funcionan los Préstamos SBA 7(a) para Adquisiciones" },
        { tag: "Guía del Comprador", title: "Comprar un Negocio vs. Comenzar Uno Nuevo" },
        { tag: "Visa E-2", title: "Los Mejores Negocios para Inversionistas de Visa E-2" },
        { tag: "Guía del Comprador", title: "Cómo Analizar un Negocio Antes de Comprarlo" },
        { tag: "Guía del Comprador", title: "Errores Comunes de los Compradores Primerizos" },
        { tag: "Debida Diligencia", title: "La Lista de Verificación de Debida Diligencia que Usamos en Cada Trato" },
        { tag: "Guía de Industria", title: "Comprar un Restaurante en el Sur de Florida" },
        { tag: "Guía de Industria", title: "Comprar un Spa Médico: Qué Evaluar" },
        { tag: "Guía de Industria", title: "Comprar un Autolavado: Equipos y Capacidad" },
        { tag: "Guía de Industria", title: "Comprar una Empresa de Limpieza: Densidad de Rutas" },
        { tag: "Mercado", title: "Tendencias del Mercado de Negocios en Florida, 2026" },
      ],
    },
    about: {
      eyebrow: "Nosotros", title: "Doing2Gether: quince años cerrando transacciones en el sur de Florida, junto a nuestros clientes.",
      copy: "Doing2Gether es una correduría de negocios con licencia que atiende los condados de Miami-Dade, Broward y Palm Beach, con una práctica dedicada a asesorar a inversionistas de tratado E-2. El nombre es el método: hacemos el trabajo junto a usted, no a su alrededor.",
      cards: [
        { title: "Experiencia", copy: "286 transacciones cerradas desde 2011, en más de 30 industrias." },
        { title: "Mercados Atendidos", copy: "Condado de Miami-Dade, Condado de Broward y Condado de Palm Beach." },
        { title: "Industrias", copy: "Restaurantes, servicios para el hogar, salud y bienestar, comercio minorista y logística, entre otras." },
        { title: "Casos de Éxito", copy: "Vendedores recurrentes y compradores referidos conforman la mayoría de nuestros nuevos clientes." },
      ],
      networkEyebrow: "Red Profesional", networkTitle: "Referencias en las que confiamos.",
      networkItems: ["Abogados de Inmigración", "Contadores y Asesores Fiscales", "Prestamistas SBA", "Asesores de Bienes Raíces Comerciales", "Corredores de Seguros", "Socios Bancarios"],
      ctaTitle: "¿Quiere conversar antes de decidir?", ctaCopy: "Una breve llamada con un asesor, sin presión, sin obligación.", ctaButton: "Agendar una consulta",
    },
    contact: {
      eyebrow: "Contacto", title: "Agende una consulta.",
      copy: "Cada consulta se dirige a un asesor que trabaja de su lado de la mesa — comprador, vendedor o inversionista E-2. Espere una respuesta dentro de un día hábil.",
      advisorRole: "Asesor Principal, Doing2Gether",
      advisor2Role: "Asesora Asociada, Doing2Gether",
      counties: "Condado de Miami-Dade · Condado de Broward · Condado de Palm Beach",
      iAm: "Soy", roles: ["Comprador", "Vendedor", "Inversionista E-2"],
      fullName: "Nombre completo", email: "Correo electrónico", phone: "Teléfono", howHelp: "¿Cómo podemos ayudarle?",
      send: "Enviar solicitud", received: "Solicitud recibida.", receivedCopy: "Un asesor le dará seguimiento dentro de un día hábil.",
    },
    footer: {
      blurb: "Correduría de negocios y asesoría de fusiones y adquisiciones que atiende los condados de Miami-Dade, Broward y Palm Beach, con una práctica dedicada a adquisiciones de inversionistas de tratado E-2. Hacemos el trabajo junto a usted, desde la búsqueda o valoración hasta el cierre.",
      buyers: "Compradores", sellers: "Vendedores", resources: "Recursos", company: "Empresa",
      buyABusiness: "Comprar un Negocio", e2visa: "Centro de Visa E-2", intlBuyers: "Compradores Internacionales",
      sellABusiness: "Vender un Negocio", services: "Servicios", resourcesLink: "Recursos",
      aboutUs: "Nosotros", contact: "Contacto",
      copyright: "© 2026 Doing2Gether Advisory LLC. Corredor de negocios con licencia, Estado de Florida.",
      legal: "No somos un bufete de abogados y no brindamos asesoría legal o migratoria. La elegibilidad para la visa E-2 la determina exclusivamente el Servicio de Ciudadanía e Inmigración de EE. UU. y el Departamento de Estado de EE. UU.",
    },
  },
};


const NAVY = "#0E3B36";
const NAVY_LIGHT = "#12433D";
const PAPER = "#F6F3EC";
const PAPER_DIM = "#EFE7D8";
const BRASS = "#C1613F";
const BRASS_LIGHT = "#D2794F";
const INK = "#1E2B27";
const SLATE = "#5C6B67";
const MIST = "#93A19C";
const SAND = "#E4D9C5";
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

const LISTINGS = [
  {
    industry: "Home & Commercial Services",
    title: "Multi-Route Pest Control Company",
    location: "Broward County, FL",
    askingPrice: "$3,150,000",
    downPayment: "$630,000",
    sellerFinancing: "Yes, 15%",
    grossRevenue: "$2,400,000",
    sde: "$780,000",
    ebitda: "$710,000",
    years: 11,
    employees: 14,
    reason: "Retirement",
    rent: "$4,200/mo",
    leaseRemaining: "4 years",
    roi: "24.8%",
    payback: "4.0 yrs",
    cashOnCash: "22.1%",
    dscr: "1.6x",
    growth: "+9% YoY",
    scores: { profitability: 88, risk: 22, scalability: 76, ownerInvolvement: 30, visaFriendly: 95 },
    rating: 5,
    tag: "E-2 Eligible",
  },
  {
    industry: "Hospitality & Food Service",
    title: "Established Café & Catering Brand, 2 Units",
    location: "Palm Beach County, FL",
    askingPrice: "$1,890,000",
    downPayment: "$425,000",
    sellerFinancing: "Yes, 10%",
    grossRevenue: "$1,600,000",
    sde: "$410,000",
    ebitda: "$365,000",
    years: 7,
    employees: 22,
    reason: "Relocation",
    rent: "$6,800/mo (2 units)",
    leaseRemaining: "6 years",
    roi: "19.2%",
    payback: "4.6 yrs",
    cashOnCash: "17.5%",
    dscr: "1.3x",
    growth: "+5% YoY",
    scores: { profitability: 72, risk: 40, scalability: 68, ownerInvolvement: 55, visaFriendly: 90 },
    rating: 4,
    tag: "Owner Financing",
  },
  {
    industry: "Health & Wellness",
    title: "Med-Spa with Physician Oversight",
    location: "Miami-Dade County, FL",
    askingPrice: "$2,475,000",
    downPayment: "$495,000",
    sellerFinancing: "No",
    grossRevenue: "$1,900,000",
    sde: "$560,000",
    ebitda: "$520,000",
    years: 5,
    employees: 9,
    reason: "Owner pursuing new venture",
    rent: "$5,100/mo",
    leaseRemaining: "5 years",
    roi: "22.4%",
    payback: "4.2 yrs",
    cashOnCash: "20.9%",
    dscr: "1.7x",
    growth: "+14% YoY",
    scores: { profitability: 91, risk: 35, scalability: 82, ownerInvolvement: 40, visaFriendly: 85 },
    rating: 5,
    tag: "E-2 Eligible",
  },
  {
    industry: "Logistics & Distribution",
    title: "Regional Cold-Chain Distribution Co.",
    location: "Miami-Dade County, FL",
    askingPrice: "$5,600,000",
    downPayment: "$1,400,000",
    sellerFinancing: "No",
    grossRevenue: "$6,200,000",
    sde: "$1,150,000",
    ebitda: "$1,100,000",
    years: 16,
    employees: 38,
    reason: "Succession, no family successor",
    rent: "$11,500/mo",
    leaseRemaining: "8 years",
    roi: "18.6%",
    payback: "5.1 yrs",
    cashOnCash: "16.2%",
    dscr: "1.4x",
    growth: "+7% YoY",
    scores: { profitability: 80, risk: 28, scalability: 90, ownerInvolvement: 20, visaFriendly: 60 },
    rating: 4,
    tag: "New to Market",
  },
];

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
        <span className="font-mono2 text-[12px]" style={{ color: "#F6F3EC" }}>{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}

function PageHeader({ eyebrow, title, copy }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>{title}</h1>
      {copy && <p className="mt-4 leading-relaxed" style={{ color: SLATE }}>{copy}</p>}
    </div>
  );
}

function CardShell({ children, className = "" }) {
  return (
    <div
      className={`rounded-sm border p-7 bg-white transition-colors ${className}`}
      style={{ borderColor: "rgba(14,59,54,0.1)" }}
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
        <p className="mt-4 max-w-lg mx-auto" style={{ color: "#C3D0CB" }}>{copy}</p>
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
    <header className="sticky top-0 z-40 backdrop-blur border-b" style={{ background: "rgba(246,243,236,0.95)", borderColor: "rgba(14,59,54,0.1)" }}>
      <div style={{ background: NAVY, color: SAND }} className="text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-between font-mono2 tracking-wide">
          <span className="hidden sm:inline">{t.utility.line}</span>
          <div className="flex items-center gap-5 ml-auto">
            <a href="tel:+19548813999" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" /> 954.881.3999
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
        <div className="lg:hidden border-t px-6 py-5 flex flex-col gap-1 max-h-[75vh] overflow-y-auto" style={{ borderColor: "rgba(14,59,54,0.1)", background: PAPER }}>
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
  const LEDGER = LISTINGS.map((l) => ({ type: l.title, county: l.location.split(",")[0], multiple: "3.9x EBITDA", status: "CLOSED" }));
  return (
    <>
      <section style={{ background: NAVY, color: PAPER }} className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mt-5 max-w-xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-xl max-w-lg leading-relaxed" style={{ color: "#C3D0CB" }}>
              {t.hero.copy}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => onNavigate("buy")} className="inline-flex items-center gap-2 font-medium text-base px-6 py-3.5 rounded-sm transition-colors" style={{ background: BRASS, color: NAVY }}>
                {t.hero.browse} <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => onNavigate("resources")} className="inline-flex items-center gap-2 border text-base px-6 py-3.5 rounded-sm transition-colors" style={{ borderColor: "rgba(246,243,236,0.3)", color: PAPER }}>
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

          <div className="relative space-y-6">
            <PageArt variant="home" />
            <div className="border border-white/10 rounded-sm overflow-hidden" style={{ background: NAVY_LIGHT }}>
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <span className="font-mono2 text-[13px] tracking-[0.15em] uppercase" style={{ color: MIST }}>{t.hero.ledgerTitle}</span>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOOD_LIGHT }} />
              </div>
              <div className="h-[340px] overflow-hidden relative">
                <div className="ledger-track">
                  {[...LEDGER, ...LEDGER, ...LEDGER, ...LEDGER].map((row, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/5">
                      <div className="min-w-0">
                        <p className="text-base truncate" style={{ color: PAPER }}>{row.type}</p>
                        <p className="font-mono2 text-[13px] mt-0.5" style={{ color: MIST }}>{row.county}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono2 text-base" style={{ color: BRASS }}>{row.multiple}</p>
                        <p className="font-mono2 text-[12px] mt-0.5" style={{ color: GOOD_LIGHT }}>{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10" style={{ background: `linear-gradient(to bottom, ${NAVY_LIGHT}, transparent)` }} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10" style={{ background: `linear-gradient(to top, ${NAVY_LIGHT}, transparent)` }} />
              </div>
            </div>
            <p className="font-mono2 text-[13px] mt-3" style={{ color: MIST }}>{t.hero.ledgerNote}</p>
          </div>
        </div>
      </section>

      <section className="border-b bg-white" style={{ borderColor: "rgba(14,59,54,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl lg:text-5xl" style={{ color: NAVY }}>{s.value}</p>
              <p className="text-base mt-1.5" style={{ color: SLATE }}>{s.label}</p>
            </div>
          ))}
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28" style={{ borderTop: "1px solid rgba(14,59,54,0.1)" }}>
        <Eyebrow>{t.whyChoose.eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>{t.whyChoose.title}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <CardShell className="hover:border-[#C1613F]/60">
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
          <CardShell className="hover:border-[#C1613F]/60">
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
                    <li key={item} className="text-base" style={{ color: "#D7E0DB" }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Eyebrow>{t.testimonialsEyebrow}</Eyebrow>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {t.testimonials.map((item) => (
            <CardShell key={item.name} className="flex flex-col">
              <Quote className="w-5 h-5" style={{ color: BRASS }} strokeWidth={1.5} />
              <p className="leading-relaxed mt-4 flex-1" style={{ color: INK }}>{item.quote}</p>
              <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(14,59,54,0.1)" }}>
                <p className="text-base font-medium" style={{ color: NAVY }}>{item.name}</p>
                <p className="text-sm mt-0.5" style={{ color: "#8A948F" }}>{item.location}</p>
              </div>
            </CardShell>
          ))}
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
    <div className="border border-white/10 rounded-sm p-7 hover:border-[#C1613F]/50 transition-colors" style={{ background: NAVY_LIGHT }}>
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
            <p className="font-mono2 mt-1" style={{ color: "#D7E0DB" }}>{value}</p>
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-4 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <PageHeader
          eyebrow={t.buy.eyebrow}
          title={t.buy.title}
          copy={t.buy.copy}
        />
        <PageArt variant="buy" />
      </section>

      <section style={{ background: NAVY }} className="py-16 mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {LISTINGS.map((l) => <ListingCard key={l.title} l={l} />)}
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
            <p className="mt-4 max-w-xl" style={{ color: "#C3D0CB" }}>
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
      <section style={{ background: PAPER_DIM, borderColor: "rgba(14,59,54,0.1)" }} className="py-20 lg:py-28 border-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>{t.sell.processEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl lg:text-5xl mt-4" style={{ color: NAVY }}>{t.sell.processTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px mt-12 rounded-sm overflow-hidden" style={{ background: "rgba(14,59,54,0.1)" }}>
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
            <p className="mt-4 max-w-xl" style={{ color: "#C3D0CB" }}>
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
      <section style={{ background: PAPER_DIM, borderColor: "rgba(14,59,54,0.1)" }} className="py-20 lg:py-28 border-y">
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
                  {i < t.e2.roadmap.length - 1 && <span className="w-px h-8" style={{ background: "rgba(14,59,54,0.25)" }} />}
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
            <span key={i} className="text-base px-4 py-2 rounded-full border" style={{ borderColor: "rgba(14,59,54,0.15)", color: NAVY }}>{i}</span>
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
            <p className="mt-4 max-w-xl" style={{ color: "#C3D0CB" }}>
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
              <div key={c} className="flex items-center gap-2.5 text-base border rounded-sm px-4 py-3" style={{ borderColor: "rgba(14,59,54,0.12)", color: NAVY }}>
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-4 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} />
        <PageArt variant="services" />
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

      <section style={{ background: PAPER_DIM, borderColor: "rgba(14,59,54,0.1)" }} className="py-16 border-y">
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-4">
        <PageHeader
          eyebrow={r.eyebrow}
          title={r.title}
          copy={r.copy}
        />
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
              <input type="range" min="200000" max="10000000" step="50000" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full mt-3 accent-[#C1613F]" />
              <p className="font-mono2 text-base mt-1" style={{ color: SLATE }}>{fmt(revenue)}</p>
            </div>
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{r.cashFlowLabel}</label>
              <input type="range" min="50000" max="2000000" step="10000" value={cashFlow} onChange={(e) => setCashFlow(Number(e.target.value))} className="w-full mt-3 accent-[#C1613F]" />
              <p className="font-mono2 text-base mt-1" style={{ color: SLATE }}>{fmt(cashFlow)}</p>
            </div>
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{r.industryLabel}</label>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full mt-3 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(14,59,54,0.2)", color: NAVY }}>
                {Object.keys(INDUSTRY_MULTIPLES).map((i) => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-base font-medium" style={{ color: NAVY }}>{r.yearsLabel}</label>
                <input type="range" min="0" max="30" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full mt-3 accent-[#C1613F]" />
                <p className="font-mono2 text-base mt-1" style={{ color: SLATE }}>{years} {r.years}</p>
              </div>
              <div>
                <label className="text-base font-medium" style={{ color: NAVY }}>{r.growthLabel}</label>
                <input type="range" min="-10" max="30" value={growth} onChange={(e) => setGrowth(Number(e.target.value))} className="w-full mt-3 accent-[#C1613F]" />
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
      <section style={{ background: PAPER_DIM, borderColor: "rgba(14,59,54,0.1)" }} className="py-16 border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-2xl mb-8" style={{ color: NAVY }}>{r.knowledgeTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {r.articles.map((a) => (
              <button key={a.title} onClick={() => onNavigate("contact")} className="text-left">
                <CardShell className="hover:border-[#C1613F]/50 h-full">
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
            <p className="mt-4 max-w-xl" style={{ color: "#C3D0CB" }}>
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

      <section style={{ background: PAPER_DIM, borderColor: "rgba(14,59,54,0.1)" }} className="py-16 border-y">
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
        <div className="mt-6 flex items-center gap-3 p-4 rounded-sm border" style={{ borderColor: "rgba(14,59,54,0.12)", background: "white" }}>
          <span className="w-11 h-11 rounded-full flex items-center justify-center font-display text-base shrink-0" style={{ background: NAVY, color: BRASS }}>TE</span>
          <div>
            <p className="text-base font-medium" style={{ color: NAVY }}>Tomas Echeverria</p>
            <p className="text-sm" style={{ color: SLATE }}>{c.advisorRole}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 p-4 rounded-sm border" style={{ borderColor: "rgba(14,59,54,0.12)", background: "white" }}>
          <span className="w-11 h-11 rounded-full flex items-center justify-center font-display text-base shrink-0" style={{ background: NAVY, color: BRASS }}>MS</span>
          <div>
            <p className="text-base font-medium" style={{ color: NAVY }}>Maria Saad</p>
            <p className="text-sm" style={{ color: SLATE }}>{c.advisor2Role}</p>
          </div>
        </div>
        <div className="mt-8 space-y-4 text-base" style={{ color: NAVY }}>
          <p className="flex items-center gap-2.5"><Phone className="w-4 h-4" style={{ color: BRASS }} /> 954.881.3999</p>
          <p className="flex items-center gap-2.5"><Mail className="w-4 h-4" style={{ color: BRASS }} /> info@doing2gether.com</p>
          <p className="flex items-center gap-2.5"><Globe2 className="w-4 h-4" style={{ color: BRASS }} /> www.doing2gether.com</p>
          <p className="flex items-center gap-2.5"><MapPin className="w-4 h-4" style={{ color: BRASS }} /> {c.counties}</p>
        </div>
      </div>

      <div className="rounded-sm p-8 border" style={{ borderColor: "rgba(14,59,54,0.1)", background: "white" }}>
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
                      borderColor: roleIndex === i ? BRASS : "rgba(14,59,54,0.15)",
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
                <input required type="text" className="w-full mt-2 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(14,59,54,0.2)" }} />
              </div>
              <div>
                <label className="text-base font-medium" style={{ color: NAVY }}>{c.email}</label>
                <input required type="email" className="w-full mt-2 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(14,59,54,0.2)" }} />
              </div>
            </div>
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{c.phone}</label>
              <input type="tel" className="w-full mt-2 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(14,59,54,0.2)" }} />
            </div>
            <div>
              <label className="text-base font-medium" style={{ color: NAVY }}>{c.howHelp}</label>
              <textarea rows={4} className="w-full mt-2 border rounded-sm px-4 py-3 text-base" style={{ borderColor: "rgba(14,59,54,0.2)" }} />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 font-medium text-base px-6 py-3.5 rounded-sm transition-colors" style={{ background: NAVY, color: "white" }}>
              {c.send} <ArrowRight className="w-4 h-4" />
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

  const navigate = (key) => {
    setPage(key);
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
        input[type="range"] { height: 4px; border-radius: 999px; background: rgba(14,59,54,0.12); }
      `}</style>

      <Header page={page} onNavigate={navigate} />
      <main>
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
    </LangContext.Provider>
  );
}
