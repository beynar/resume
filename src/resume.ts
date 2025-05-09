export const resume = {
  awards: [
    {
      title: "SvelteHack 2025",
      date: "2025",
      awarder: "Svelte Society",
      summary: "For the project SyncroState"
    }
  ],
  basics: {
    name: "Arnaud DERBEY",
    label: "Fullstack TypeScript Engineer - MCP Servers - Cloudflare - Open Source - AI - Developer Tools",
    email: "arnaud@derbey.dev",

    phone: "+33635293436",
    picture: "https://pbs.twimg.com/profile_images/1474427185528246288/xHTgts7t_400x400.jpg",
    summary:
      "Full stack engineer with deep expertise in Model-Calling Protocol (MCP) servers and developer tooling. Open source publisher. Founder of MCPlug, a security-first MCP infrastructure on Cloudflare's network. Specialized in TypeScript, edge computing, and AI applications.",
    location: {
      address: "46 rue jean de Bernardy",
      city: "Marseille",
      region: "Provence-Alpes-Côte d'Azur",
      postalCode: "open to work and move anywhere in the world.",
      countryCode: "FR"
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "arnaudderbey",
        url: "https://linkedin.com/in/arnaudderbey"
      },
      {
        network: "GitHub",
        username: "beynar",
        url: "https://github.com/beynar"
      },
      {
        network: "X",
        username: "beynar",
        url: "https://x.com/_beynar"
      }
    ]
  },
  work: [
    {
      name: "MCPlug.ai",
      position: "Co-creator",
      startDate: "2025",
      endDate: "present",
      summary: "Open registry for hosting and distributing MCP servers",
      highlights: [
        "Created a typesafe MCP SDK in a TRPC-like style matching MCP spec",
        "Implemented OAuth with Cloudflare OAuth library",
        "Developed comprehensive security features protecting against tool poisoning, credential theft, and rug pull vulnerabilities",
        "Built CLI tools and Vite plugin to simplify development and deployment experience",
        "Established an infrastructure on Cloudflare for platform to serve MCP servers",
        "Wrote comprehensive documentation and guides to help developers get started",
        "Ingest analytics and metrics from MCP servers to enhance observability"
      ]
    },
    {
      name: "E-table",
      position: "Technical Co-founder",
      startDate: "2024",
      summary: "Reservation management platform for restaurants. Alternative to ZenChef.",
      highlights: [
        "Managing a web team (2) and a mobile team (2)",
        "AI integration to handle user requests",
        "Development of a telephonic agent for appointment booking hosted on Cloudflare Durable Objects"
      ]
    },
    {
      name: "Revoltrain",
      position: "CTO",
      startDate: "2023",
      endDate: "2024",
      summary: "Online training startup (video editing, copywriting, virtual assistant).",
      highlights: ["Built an LMS from scratch for over 2,000 students, initially on Podia", "Currently closing down"]
    },
    {
      name: "Freelance (Super malter)",
      position: "Fullstack Developer",
      startDate: "2020",
      endDate: "2023",
      summary: "Various fullstack experiences with Next.js, Svelte, native and headless Shopify.",
      highlights: [
        "Lead developer for Paris Opera NFT platform (GraphQL server deployment, design system creation)",
        "Led a team of 4 developers to create various e-commerce sites (La belle boule, Moonbikes, Fer à cheval)"
      ]
    },
    {
      name: "Thesis",
      position: "Technical Co-founder",
      location: "Aix en Provence",
      startDate: "2018",
      endDate: "2020",
      summary: "Platform designed to help students organize and format their research. Now discontinued."
    },
    {
      name: "Peers",
      position: "Technical Co-founder",
      url: "https://peers.press/",
      location: "Aix en Provence",
      startDate: "2018",
      endDate: "2021",
      summary: "Open platform for scientific publications.",
      highlights: [
        "Project funded with over 300K by Aix Marseille University",
        "Collaboration with researchers from Chicago, New York, and McGill",
        "Now transferred to Mohammed VI Polytechnic University in Morocco"
      ]
    }
  ],
  education: [
    {
      institution: "University of Aix-Marseille",
      area: "Private Law and Criminal Sciences",
      studyType: "PhD",
      startDate: "2016-01-01",
      endDate: "2020-01-01",
      summary: "The social functions of pre-trial detention. Under the supervision of Sacha RAOULT. Abandoned"
    },
    {
      institution: "University of Aix-Marseille",
      area: "Penal Law and Prison Administration",
      studyType: "Master's Degree",
      startDate: "2013-01-01",
      endDate: "2015-01-01"
    }
  ],
  skills: [
    {
      name: "Frontend",
      keywords: ["TypeScript", "Svelte", "NextJS", "React", "TailwindCSS"]
    },
    {
      name: "Backend",
      keywords: [
        "Prisma",
        "Postgres",
        "Cloudflare workers",
        "Cloudflare Durable Objects",
        "Node.js",
        "GraphQL",
        "AI",
        "MCP servers",
        "SQL",
        "NoSQL",
        "RAG"
      ]
    },

    {
      name: "Other",
      keywords: ["realtime sync", "YJS", "Shopify"]
    },
    {
      name: "Team work and management",
      keywords: [
        "Team leadership",
        "Project management",
        "Cross-functional collaboration",
        "Technical mentoring",
        "Documentation"
      ]
    }
  ],
  projects: [
    {
      name: "MCPlug.ai",
      description: "Open registry for hosting and distributing MCP servers to any AI client MCP host",
      url: "https://mcplug.ai",
      startDate: "2025",
      highlights: [
        "@mcplug/sdk: typesafe MCP SDK in a TRPC-like style matching MCP spec",
        "@mcplug/cli: CLI tool to simplify development and deployment experience",
        "@mcplug/client: client library to interact with MCP servers using stdio protocol",
        "@cmplug/vite: Vite plugin to simplify development and deployment experience"
      ]
    },
    {
      name: "SyncroState",
      description:
        "Open-source library facilitating the creation of collaborative experiences in Svelte projects (a JavaScript framework).",
      url: "https://github.com/beynar/syncrostate",
      startDate: "2024-02-10",
      highlights: [
        "Winner of SvelteHack 2025",
        "Brings Svelte 5 reactivity to multiplayer applications built on top of Yjs CRDT technology",
        "Provides type-safe real-time collaboration with fine-grained reactivity",
        "Works with Liveblocks, PartyKit, or any Yjs provider"
      ],
      type: "open-source",
      entity: "Personal"
    },
    {
      name: "kit-query-params",
      description: "Easy way to read and write from query parameters in SvelteKit and Svelte 5.",
      url: "https://github.com/beynar/kit-query-params",
      startDate: "2023-01-01",
      highlights: [
        "Automatic URL synchronization with application state",
        "Supports primitive types, arrays, and nested objects with type safety",
        "Works like normal Svelte 5 state with reactive, mutable properties",
        "Customizable debounce for URL updates optimization"
      ],
      type: "open-source",
      entity: "Personal"
    },
    {
      name: "svelte-rpc",
      description: "End-to-end type safety for SvelteKit APIs.",
      url: "https://github.com/beynar/svelte-rpc",
      startDate: "2023-01-01",
      highlights: [
        "Lightweight alternative to tRPC with familiar procedure definition syntax",
        "Handles file uploads and cookies methods inside procedures",
        "Type-safe streamed responses for AI model integration",
        "Client and server are both under 2kb gzipped"
      ],
      type: "open-source",
      entity: "Personal"
    },
    {
      name: "edytor",
      description: "Collaborative, performant and extensible general purpose rich text editor.",
      url: "https://github.com/beynar/edytor",
      startDate: "2023-01-01",
      highlights: [
        "Built with Svelte and Y.js for real-time collaboration",
        "Aims to be the premier rich text editor for Svelte, like Slate.js is for React",
        "Highly customizable with a powerful API for building collaborative editors"
      ],
      type: "open-source",
      entity: "Personal"
    },
    {
      name: "svelte-headless-notion",
      description: "Headless Notion page rendering engine.",
      url: "https://github.com/beynar/svelte-headless-notion",
      startDate: "2023-01-01",
      highlights: [
        "Lightweight, fully typed Notion page renderer for Svelte with no runtime dependencies",
        "Simply fetch a page and render it with customizable components",
        "Includes documentation as a Notion page rendered with the library itself"
      ],
      type: "open-source",
      entity: "Personal"
    },
    {
      name: "flarepc",
      description: "End-to-end type safety for Cloudflare Workers.",
      url: "https://github.com/beynar/flarepc",
      startDate: "2023-01-01",
      highlights: [
        "Framework for building typesafe RPC workers and durable objects on Cloudflare",
        "Features typesafe websocket connections, standardized schema validation",
        "Supports rate limiting, file uploads, streamed responses",
        "Includes typesafe scheduled tasks and queue workers"
      ],
      type: "open-source",
      entity: "Personal"
    }
  ],
  publications: [
    {
      name: "Is confession necessary to be released from pre-trial detention?",
      publisher: "ORDCS",
      releaseDate: "2018-10-01",
      url: "https://ordcs.mmsh.univ-aix.fr/publications/Documents/Rapp_recherche_12.pdf"
    },
    {
      name: "Class justice, new punitiveness, and the false mystery of prison inflation",
      publisher: "Revue de Science Criminelle et de Droit Penal",
      releaseDate: "2018-01-02",
      url: "https://droit.cairn.info/revue-de-science-criminelle-et-de-droit-penal-compare-2018-1-page-255?lang=fr"
    }
  ],
  languages: [
    {
      language: "French",
      fluency: "Native"
    },
    {
      language: "English",
      fluency: "Professional"
    }
  ],
  interests: [
    {
      name: "AI RAG and agents",
      keywords: []
    },
    {
      name: "Weightlifting",
      keywords: []
    }
  ],
  meta: {
    version: "v1.0.0",
    lastModified: new Date().toISOString(),
    theme: "elegant"
  }
} satisfies ResumeSchema;
