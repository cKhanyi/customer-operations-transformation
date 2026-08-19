/* =============================================================
   ROLE ALIGNMENT + EVIDENCE DATA
   -------------------------------------------------------------
   One evidence library.
   Multiple role lenses.
   ============================================================= */


/* =============================================================
   REUSABLE EVIDENCE LIBRARY
   ============================================================= */

window.PORTFOLIO_EVIDENCE = {

  "integration-architecture": {

    title:
      "Universal Loan + Flowgear",

    category:
      "Integration Architecture",

    provenance:
      "Applied / Platform Learning",

    description:
      "An iPaaS architecture extension exploring API boundaries, orchestration, transformation, routing, exception handling and systems-of-record responsibilities.",

    tags: [
      "Flowgear",
      "REST APIs",
      "OpenAPI",
      "JSON",
      "Orchestration",
      "Exceptions"
    ],

    href:
      "customer-onboarding/flowgear-integration-extension.html",

    cta:
      "Explore integration architecture"

  },


  "domain-architecture": {

    title:
      "Universal Loan Domain Architecture",

    category:
      "Domain Architecture",

    provenance:
      "Architecture Evidence",

    description:
      "A domain-level view of the capabilities, operational responsibilities, services and supporting systems required across the Universal Loan onboarding landscape.",

    tags: [
      "Domains",
      "Capabilities",
      "Systems",
      "Responsibilities",
      "Banking"
    ],

    href:
      "customer-onboarding/4.%20Domain%20Architecture%20Diagram%20.pdf",

    cta:
      "View domain architecture"

  },


  "solution-design": {

    title:
      "Universal Loan Onboarding Solution Design",

    category:
      "Solution Architecture",

    provenance:
      "Architecture Evidence",

    description:
      "A solution-level view translating onboarding capability into systems, services, workflows and implementation responsibilities.",

    tags: [
      "Solution Design",
      "Systems",
      "Services",
      "Workflow",
      "Implementation"
    ],

    href:
      "customer-onboarding/5.%20Onboarding%20Solution%20Design%20.PNG",

    cta:
      "View solution design"

  },


  "process-architecture": {

    title:
      "Universal Loan Onboarding Flow",

    category:
      "Process Architecture",

    provenance:
      "Architecture Evidence",

    description:
      "Process modelling showing how onboarding work, decisions and operational progression move across the lending journey.",

    tags: [
      "Process",
      "Workflow",
      "Decisions",
      "Operations"
    ],

    href:
      "customer-onboarding/6.%20Universal%20Loan%20onboarding%20Flow%20Chart.pdf",

    cta:
      "View process architecture"

  },


  "universal-loan": {

    title:
      "Universal Loan",

    category:
      "Customer & Solution Architecture",

    provenance:
      "Portfolio Case",

    description:
      "A banking onboarding case connecting product guidance, eligibility, KYC/FICA, documentation, credit, fulfilment and servicing readiness.",

    tags: [
      "Banking",
      "Onboarding",
      "Capability Mapping",
      "Service Design",
      "Architecture"
    ],

    href:
      "customer-onboarding/index.html",

    cta:
      "Explore Universal Loan"

  },


  "architecture-overview": {

    title:
      "Customer Onboarding Architecture Overview",

    category:
      "Architecture Overview",

    provenance:
      "Portfolio Case",

    description:
      "An executive view of the customer, operational and technology architecture supporting onboarding.",

    tags: [
      "Overview",
      "Customer",
      "Operations",
      "Technology"
    ],

    href:
      "customer-onboarding/overview.html",

    cta:
      "View architecture overview"

  },


  "engineering-foundation": {

    title:
      "Software Engineering Foundation",

    category:
      "Technical Foundation",

    provenance:
      "Formal Education + Applied Experience",

    description:
      "A Bachelor of Computing foundation supporting technical reasoning across software development, object-oriented design, databases, APIs, systems analysis and implementation feasibility.",

    tags: [
      "Java",
      "C#",
      ".NET",
      "SQL",
      "OOP",
      "Databases",
      "APIs"
    ],

    href:
      "#technical",

    cta:
      "Explore technical foundation"

  },


  "salesforce-transformation": {

    title:
      "Salesforce Banking Transformation",

    category:
      "Platform & Operations",

    provenance:
      "Production Experience",

    description:
      "Enterprise banking work across lead management, case management, onboarding, servicing, relationship banking and operational workflow design.",

    tags: [
      "Salesforce",
      "Financial Services Cloud",
      "Case Management",
      "Banking",
      "Workflow"
    ],

    href:
      "#case-studies",

    cta:
      "Explore platform experience"

  }

};



/* =============================================================
   ROLE CONFIGURATIONS
   ============================================================= */

window.ROLE_ALIGNMENTS = {

  "chosen-senior-solutions-architect": {

    company:
      "Chosen",

    role:
      "Senior Solutions Architect",

    specialism:
      "Integration & Automation Centre of Excellence",

    location:
      "South Africa",

    type:
      "Solution Architecture · Integration · Automation",


    positioning:
      "A role-alignment view showing how my software-engineering foundation, banking transformation experience, solution analysis, customer discovery, domain modelling and integration architecture thinking transfer into a senior solutions architecture environment.",


    /* ---------------------------------------------------------
       Homepage tailoring
       --------------------------------------------------------- */

    homepageContext: {

      eyebrow:
        "Portfolio tailored for Senior Solutions Architecture",

      title:
        "Business problems translated into architecture, integration and implementation direction.",

      summary:
        "For this role, the strongest evidence sits across solution discovery, domain architecture, integration design, systems thinking, technical foundations and regulated banking transformation."

    },


    priorityEvidence: [

      "integration-architecture",

      "domain-architecture",

      "solution-design",

      "engineering-foundation",

      "salesforce-transformation",

      "process-architecture"

    ],


    featuredEvidence: {

      label:
        "Universal Loan + Flowgear",

      href:
        "customer-onboarding/flowgear-integration-extension.html"

    },


    scoreHeadline:
      "Strong transferable architecture fit with a platform-specific ramp.",


    scoreSummary:
      "The strongest alignment is in discovery, solution shaping, modelling, business-to-technology translation, regulated financial services and architecture thinking. The clearest ramp is direct production experience on Flowgear.",


    requirements: [

      {

        requirement:
          "Customer discovery & requirements workshops",

        status:
          "strong",

        summary:
          "Experience translating ambiguous banking problems into structured requirements, solution artefacts and multidisciplinary alignment.",

        evidence: [
          "Requirements gathering",
          "Stakeholder workshops",
          "Architecture alignment",
          "Problem framing",
          "Business-to-technology translation"
        ],

        evidenceIds: [
          "universal-loan",
          "architecture-overview"
        ]

      },


      {

        requirement:
          "Solution architecture",

        status:
          "transferable",

        summary:
          "Work across capability, process, object, service, system and solution boundaries provides direct evidence of solution-architecture thinking.",

        evidence: [
          "Domain architecture",
          "Solution design",
          "System responsibility analysis",
          "Architecture decisions",
          "Implementation boundaries"
        ],

        evidenceIds: [
          "domain-architecture",
          "solution-design",
          "universal-loan"
        ]

      },


      {

        requirement:
          "Integration architecture & iPaaS",

        status:
          "transferable",

        summary:
          "Existing API, systems and service-analysis foundations have been applied to a Flowgear iPaaS architecture covering orchestration, transformation, routing and recovery.",

        evidence: [
          "REST API boundaries",
          "Canonical data contracts",
          "Service orchestration",
          "Exception architecture",
          "Reusable service patterns"
        ],

        evidenceIds: [
          "integration-architecture"
        ]

      },


      {

        requirement:
          "Process & data modelling",

        status:
          "strong",

        summary:
          "Process, information and object modelling are established parts of how complex operational problems are decomposed before solutioning.",

        evidence: [
          "Process modelling",
          "Object modelling",
          "Information relationships",
          "Operational states",
          "Exception pathways"
        ],

        evidenceIds: [
          "process-architecture",
          "integration-architecture"
        ]

      },


      {

        requirement:
          "Technical fluency",

        status:
          "strong",

        summary:
          "Architecture thinking is supported by a formal software-engineering foundation rather than design experience alone.",

        evidence: [
          "Bachelor of Computing — Software Engineering",
          "Java",
          "C# / .NET",
          "SQL",
          "REST APIs",
          "Object-oriented design",
          "Database design"
        ],

        evidenceIds: [
          "engineering-foundation"
        ]

      },


      {

        requirement:
          "Automation & workflow optimisation",

        status:
          "strong",

        summary:
          "A recurring part of the work is turning fragmented operating processes into structured, traceable digital workflows.",

        evidence: [
          "Case management",
          "Workflow redesign",
          "Operational routing",
          "Approval logic",
          "Escalations",
          "Automation opportunities"
        ],

        evidenceIds: [
          "salesforce-transformation",
          "process-architecture"
        ]

      },


      {

        requirement:
          "Executive communication & solution shaping",

        status:
          "strong",

        summary:
          "Experience communicating customer, business, architecture and implementation implications across multidisciplinary stakeholder groups.",

        evidence: [
          "Architecture alignment",
          "Stakeholder facilitation",
          "Solution recommendations",
          "Prototype storytelling",
          "Decision artefacts"
        ],

        evidenceIds: [
          "architecture-overview",
          "universal-loan"
        ]

      },


      {

        requirement:
          "Flowgear production experience",

        status:
          "developing",

        summary:
          "The clearest gap. The Flowgear case is intentionally presented as applied platform learning rather than production implementation experience.",

        evidence: [
          "Applied Flowgear study",
          "Conceptual target architecture",
          "POC definition",
          "Existing API and engineering foundations"
        ],

        evidenceIds: [
          "integration-architecture"
        ]

      }

    ],


    method: [

      {
        title:
          "Discover",

        text:
          "Customer problem, business outcome, systems, constraints and operating context."
      },

      {
        title:
          "Model",

        text:
          "Capabilities, actors, processes, information objects and dependencies."
      },

      {
        title:
          "Architect",

        text:
          "Solution boundaries, services, integration responsibilities and trade-offs."
      },

      {
        title:
          "Prove",

        text:
          "Prototype or POC the highest-risk assumptions before scaling."
      },

      {
        title:
          "Deliver",

        text:
          "Translate architecture into requirements, contracts, workflows and decisions."
      },

      {
        title:
          "Measure",

        text:
          "Customer value, operational effort, reuse, risk and technology outcomes."
      }

    ],


    bridge: {

      copy:
        "I did not arrive at solution architecture through infrastructure alone. My path moved through software engineering, business analysis, customer experience, platform transformation and operational solution design.",

      path: [
        "Software Engineering",
        "Business Analysis",
        "Salesforce & Platform Transformation",
        "Experience / Service Design",
        "Customer & Operational Architecture",
        "Solution & Integration Architecture"
      ],

      advantageTitle:
        "The bridge is the differentiator.",

      advantageCopy:
        "I can interrogate customer value, operating reality and technical feasibility in the same solution conversation rather than treating them as separate disciplines."

    },


    gaps: [

      {

        title:
          "Flowgear depth",

        text:
          "Ramp from applied platform learning into production configuration, deployment, monitoring and operational support."

      },


      {

        title:
          "Formal architect tenure",

        text:
          "Responsibilities increasingly overlap solution architecture, while historical job titles have not followed a conventional architect progression."

      },


      {

        title:
          "CoE-scale governance",

        text:
          "Continue developing explicit architecture pattern ownership, technical standards and governance across multiple solutions."

      }

    ],


    valueTitle:
      "What I would bring into an Integration & Automation CoE.",


    value: [

      {

        title:
          "Discovery before technology",

        text:
          "Strong problem framing before platform selection or implementation."

      },


      {

        title:
          "Architecture across layers",

        text:
          "Capability, process, people, information, services, systems and integration considered together."

      },


      {

        title:
          "Customer + commercial thinking",

        text:
          "Architecture decisions tied to customer value, operational efficiency, reuse and sustainable change."

      },


      {

        title:
          "Technical-business translation",

        text:
          "Ability to work meaningfully across product, operations, design, engineering and architecture."

      },


      {

        title:
          "POC mindset",

        text:
          "Comfort using prototypes and focused technical experiments to reduce uncertainty."

      },


      {

        title:
          "Regulated banking context",

        text:
          "Experience designing within complex financial-services operating and governance environments."

      }

    ],


    closing: {

      title:
        "I bridge the distance between a business problem and an implementable technical solution.",

      copy:
        "The opportunity is to apply the combination of engineering, customer, operational and solution thinking more explicitly within an architecture mandate."

    }

  }

};
