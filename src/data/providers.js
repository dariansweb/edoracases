const providers = [
  {
    id: 1,
    name: "Atlantis Aquatic Recovery",
    description:
      "Located deep beneath the ocean, Atlantis Aquatic Recovery provides comprehensive substance abuse and mental health services in an underwater setting. Led by Poseidon, Triton, and Amphitrite, this facility offers both outpatient and residential care with specialized aquatic therapy and rehabilitative housing support. With a focus on long-term substance abuse treatment and crisis intervention, Atlantis Aquatic Recovery is a sanctuary for those seeking healing in the tranquil depths of the Atlantic Ocean.",
    taxNumber: "TAX-332211400",
    shipTo: {
      address: "Palace of Poseidon, Atlantis",
      city: "Deep Sea Facility",
      state: "Atlantic",
      zip: "45213",
    },
    billTo: {
      address: "Deep Sea Vaults, Atlantis",
      city: "Deep Sea Facility",
      state: "Atlantic",
      zip: "98765",
    },
    coverage: {
      district: "Underwater Kingdom",
      region: "Atlantic Ocean",
    },
    maxCapacity: 1000,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Physical Therapy",
      "Addiction Recovery Intake",
      "Nutritional Counseling",
      "Outpatient Mental Health Support",
      "Family Therapy",
    ],
    residentialOnlyServices: [
      "Intensive Inpatient Rehab",
      "Aquatic Healing & Recovery",
      "Long-Term Substance Abuse Treatment",
      "24/7 Crisis Intervention",
      "Rehabilitative Housing Support",
    ],
    serviceTypes: [
      "Aquatic Therapy",
      "Substance Abuse Recovery",
      "Physical Rehabilitation",
      "Mental Health Counseling",
      "Nutritional Programs",
      "Family Counseling",
      "Crisis Intervention",
      "Housing Assistance",
    ],
    fundingSources: [
      {
        grantName: "Oceanic Recovery Act",
        yearlyAmount: 500000,
        servicesCovered: ["Aquatic Therapy", "Physical Rehabilitation"],
      },
      {
        grantName: "Substance Abuse Prevention Fund",
        yearlyAmount: 750000,
        servicesCovered: [
          "Substance Abuse Recovery",
          "Long-Term Substance Abuse Treatment",
        ],
      },
      {
        grantName: "Mental Health Wellness Initiative",
        yearlyAmount: 600000,
        servicesCovered: [
          "Mental Health Counseling",
          "24/7 Crisis Intervention",
        ],
      },
      {
        grantName: "Housing & Crisis Support",
        yearlyAmount: 400000,
        servicesCovered: [
          "Rehabilitative Housing Support",
          "Crisis Intervention",
        ],
      },
    ],
    totalYearlyFunding: 2250000,
    contactInfo: {
      webAddress: "www.atlantisaquaticrecovery.atl",
      phoneNumber: "1-888-SEA-HELP",
      contacts: {
        executiveDirector: {
          name: "Poseidon",
          email: "poseidon@atlantisaquaticrecovery.atl",
        },
        financeDirector: {
          name: "Triton",
          email: "triton@atlantisaquaticrecovery.atl",
        },
        programManager: {
          name: "Amphitrite",
          email: "amphitrite@atlantisaquaticrecovery.atl",
        },
      },
    },
  },
  {
    id: 2,
    name: "Tatooine Health Outreach",
    description:
      "Tatooine Health Outreach is a vital provider in the harsh Outer Rim deserts, offering both outpatient support and residential services to local communities. With leadership from Obi-Wan Kenobi, Beru Lars, and Luke Skywalker, the center specializes in substance abuse counseling, family therapy, and emergency mental health care. Its residential programs include juvenile detention support and crisis intervention, providing a lifeline for those in need across the unforgiving sands of Tatooine.",
    taxNumber: "TAX-113824572",
    shipTo: {
      address: "Mos Eisley Cantina, Tatooine",
      city: "Mos Eisley",
      state: "Outer Rim Territories",
      zip: "12345",
    },
    billTo: {
      address: "Lars Homestead, Dune Sea",
      city: "Outer Rim Territories",
      state: "Tatooine",
      zip: "67890",
    },
    coverage: {
      district: "Tatooine Desert",
      region: "Outer Rim",
    },
    maxCapacity: 300,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Therapy",
      "Medical Intake",
      "Substance Abuse Counseling",
      "Family Counseling",
      "Outpatient Mental Health Support",
    ],
    residentialOnlyServices: [
      "Juvenile Detention Support",
      "24/7 Emergency Mental Health",
      "Residential Addiction Therapy",
      "Inpatient Crisis Care",
    ],
    serviceTypes: [
      "Substance Abuse Treatment",
      "Mental Health Counseling",
      "Family Therapy",
      "Juvenile Detention Support",
      "Crisis Intervention",
      "Residential Addiction Support",
      "Outpatient Support",
    ],
    fundingSources: [
      {
        grantName: "Outer Rim Welfare Fund",
        yearlyAmount: 450000,
        servicesCovered: [
          "Substance Abuse Treatment",
          "Residential Addiction Support",
        ],
      },
      {
        grantName: "Galactic Crisis Relief Fund",
        yearlyAmount: 300000,
        servicesCovered: [
          "Crisis Intervention",
          "24/7 Emergency Mental Health",
        ],
      },
      {
        grantName: "Tatooine Youth Development Grant",
        yearlyAmount: 200000,
        servicesCovered: ["Juvenile Detention Support"],
      },
      {
        grantName: "Family & Health Aid Initiative",
        yearlyAmount: 250000,
        servicesCovered: ["Family Therapy", "Outpatient Support"],
      },
    ],
    totalYearlyFunding: 1200000,
    contactInfo: {
      webAddress: "www.tatooinehealthoutreach.or",
      phoneNumber: "1-800-SAND-HEAL",
      contacts: {
        executiveDirector: {
          name: "Obi-Wan Kenobi",
          email: "obiwan@tatooinehealthoutreach.or",
        },
        financeDirector: {
          name: "Beru Lars",
          email: "beru@tatooinehealthoutreach.or",
        },
        programManager: {
          name: "Luke Skywalker",
          email: "luke@tatooinehealthoutreach.or",
        },
      },
    },
  },
  {
    id: 3,
    name: "Asgardian Refuge Center",
    description:
      "The Asgardian Refuge Center offers vital legal and mental health services to asylum seekers across the Nine Realms. Under the guidance of Odin Allfather, Thor Odinson, and Sif, the center provides a safe space for those fleeing conflict and hardship. With a focus on legal aid and family counseling, it ensures that refugees and vulnerable individuals receive both the legal and mental health support they need to find peace and stability in the Golden Realm.",
    taxNumber: "TAX-447829011",
    shipTo: {
      address: "Odin's Palace, Asgard",
      city: "Golden Realm",
      state: "Asgard",
      zip: "88901",
    },
    billTo: {
      address: "Thor's Hammer Workshop, Asgard",
      city: "Golden Realm",
      state: "Asgard",
      zip: "11234",
    },
    coverage: {
      district: "Golden Realm",
      region: "Nine Realms",
    },
    maxCapacity: 150,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Therapy",
      "Case Review",
      "Legal Counseling",
      "Family Counseling",
      "Mental Health Support",
    ],
    serviceTypes: [
      "Legal Aid for Asylum Seekers",
      "Mental Health Services",
      "Family Therapy",
      "Legal Counseling",
    ],
    fundingSources: [
      {
        grantName: "Nine Realms Asylum Support",
        yearlyAmount: 350000,
        servicesCovered: ["Legal Aid for Asylum Seekers", "Legal Counseling"],
      },
      {
        grantName: "Mental Health Peace Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Mental Health Services", "Family Therapy"],
      },
    ],
    totalYearlyFunding: 650000,
    contactInfo: {
      webAddress: "www.asgardrefuge.nr",
      phoneNumber: "1-800-ASYLUM-HELP",
      contacts: {
        executiveDirector: {
          name: "Odin Allfather",
          email: "odin@asgardrefuge.nr",
        },
        financeDirector: {
          name: "Thor Odinson",
          email: "thor@asgardrefuge.nr",
        },
        programManager: {
          name: "Sif",
          email: "sif@asgardrefuge.nr",
        },
      },
    },
  },
  {
    id: 4,
    name: "Wakanda Wellness Initiative",
    description:
      "Wakanda Wellness Initiative is a state-of-the-art health center located in the vibrant Golden City. Led by Shuri, Okoye, and M'Baku, the initiative offers comprehensive medical and mental health services, ranging from outpatient rehabilitation to crisis housing support. Known for its cutting-edge rehabilitation programs and preventative medicine, the center also provides long-term care for substance abuse recovery. With funding from Wakanda's national health programs and the African Union, this wellness initiative stands as a beacon of health support in East Wakanda.",
    taxNumber: "TAX-987332100",
    shipTo: {
      address: "Birnin Zana, Wakanda",
      city: "Golden City",
      state: "Wakanda",
      zip: "X122",
    },
    billTo: {
      address: "Vibranium Vaults, Wakanda",
      city: "Golden City",
      state: "Wakanda",
      zip: "X123",
    },
    coverage: {
      district: "Vibranium Plains",
      region: "East Wakanda",
    },
    maxCapacity: 500,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Medical Intake",
      "Mental Health Evaluation",
      "Nutritional Counseling",
      "Outpatient Rehabilitation",
    ],
    residentialOnlyServices: [
      "Long-Term Care Rehabilitation",
      "Substance Abuse Residential Therapy",
      "Crisis Housing Support",
    ],
    serviceTypes: [
      "Rehabilitation Services",
      "Community Health Support",
      "Preventative Medicine",
      "Substance Abuse Therapy",
      "Mental Health Counseling",
      "Housing Assistance",
    ],
    fundingSources: [
      {
        grantName: "Wakanda National Health Fund",
        yearlyAmount: 800000,
        servicesCovered: ["Rehabilitation Services", "Preventative Medicine"],
      },
      {
        grantName: "African Union Crisis Housing Support",
        yearlyAmount: 600000,
        servicesCovered: ["Housing Assistance", "Crisis Housing Support"],
      },
      {
        grantName: "Mental Wellness Wakanda",
        yearlyAmount: 500000,
        servicesCovered: [
          "Mental Health Counseling",
          "Substance Abuse Therapy",
        ],
      },
    ],
    totalYearlyFunding: 1900000,
    contactInfo: {
      webAddress: "www.wakandawellness.wa",
      phoneNumber: "1-800-WAKANDA-CARE",
      contacts: {
        executiveDirector: {
          name: "Shuri",
          email: "shuri@wakandawellness.wa",
        },
        financeDirector: {
          name: "Okoye",
          email: "okoye@wakandawellness.wa",
        },
        programManager: {
          name: "M'Baku",
          email: "mbaku@wakandawellness.wa",
        },
      },
    },
  },
  {
    id: 5,
    name: "Endor Forest Care",
    description:
      "Endor Forest Care is a community-driven center nestled in the peaceful Ewok Village on the Forest Moon of Endor. Led by Chief Chirpa, Wicket W. Warrick, and Logray, the center offers family counseling, mental health support, and nutritional programs to the residents of Endor. With a strong focus on community support services, it ensures that local families receive holistic care, from mental health screenings to nutritional assistance. Endor Forest Care is funded through various community health and family aid initiatives, making it a cornerstone of well-being in the Endor System.",
    taxNumber: "TAX-765443210",
    shipTo: {
      address: "Ewok Village, Forest Moon of Endor",
      city: "Endor",
      state: "Endor System",
      zip: "10923",
    },
    billTo: {
      address: "Treehouse 7, Endor Forest",
      city: "Endor",
      state: "Endor System",
      zip: "21934",
    },
    coverage: {
      district: "Endor Woods",
      region: "Endor System",
    },
    maxCapacity: 200,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Therapy",
      "Family Counseling",
      "Health Screenings",
      "Nutritional Programs",
    ],
    serviceTypes: [
      "Family Counseling",
      "Outpatient Mental Health Support",
      "Nutritional Programs",
      "Community Support Services",
    ],
    fundingSources: [
      {
        grantName: "Endor Family & Health Fund",
        yearlyAmount: 400000,
        servicesCovered: [
          "Family Counseling",
          "Outpatient Mental Health Support",
        ],
      },
      {
        grantName: "Forest Moon Nutritional Support",
        yearlyAmount: 250000,
        servicesCovered: ["Nutritional Programs"],
      },
      {
        grantName: "Endor Community Services Grant",
        yearlyAmount: 150000,
        servicesCovered: ["Community Support Services"],
      },
    ],
    totalYearlyFunding: 800000,
    contactInfo: {
      webAddress: "www.endorforestcare.en",
      phoneNumber: "1-888-ENDOR-CARE",
      contacts: {
        executiveDirector: {
          name: "Chief Chirpa",
          email: "chirpa@endorforestcare.en",
        },
        financeDirector: {
          name: "Wicket W. Warrick",
          email: "wicket@endorforestcare.en",
        },
        programManager: {
          name: "Logray",
          email: "logray@endorforestcare.en",
        },
      },
    },
  },
  {
    id: 6,
    name: "Hoth Shelter & Recovery",
    description:
      "Hoth Shelter & Recovery is a vital facility located in the icy plains of Hoth, providing comprehensive care for those struggling with substance abuse and mental health challenges in extreme cold environments. Directed by Leia Organa, Han Solo, and Chewbacca, the center offers both residential detox support and outpatient rehabilitation, including cold climate survival therapy and crisis intervention. This shelter serves as a beacon of hope in the Frozen Wastelands, offering long-term recovery solutions to those in need across the Outer Rim Territories.",
    taxNumber: "TAX-558866221",
    shipTo: {
      address: "Echo Base, Icy Plains of Hoth",
      city: "Hoth",
      state: "Outer Rim Territories",
      zip: "77889",
    },
    billTo: {
      address: "Rebel Outpost, Frostbite Ridge",
      city: "Hoth",
      state: "Outer Rim Territories",
      zip: "11222",
    },
    coverage: {
      district: "Frozen Wastelands",
      region: "Outer Rim",
    },
    maxCapacity: 200,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Therapy Sessions",
      "Substance Abuse Intake",
      "Physical Rehabilitation",
      "Family Therapy",
      "Outpatient Support",
    ],
    residentialOnlyServices: [
      "Cold Environment Survival Therapy",
      "Long-Term Substance Recovery",
      "Inpatient Crisis Intervention",
      "24/7 Residential Detox Support",
    ],
    serviceTypes: [
      "Substance Abuse Recovery",
      "Physical Rehabilitation",
      "Family Therapy",
      "Crisis Intervention",
      "Residential Detox Support",
      "Cold Climate Therapy",
    ],
    fundingSources: [
      {
        grantName: "Frozen World Recovery Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Cold Climate Therapy", "Physical Rehabilitation"],
      },
      {
        grantName: "Galactic Detox Grant",
        yearlyAmount: 500000,
        servicesCovered: [
          "Substance Abuse Recovery",
          "Residential Detox Support",
        ],
      },
      {
        grantName: "Emergency Crisis Intervention Aid",
        yearlyAmount: 350000,
        servicesCovered: [
          "Crisis Intervention",
          "Inpatient Crisis Intervention",
        ],
      },
    ],
    totalYearlyFunding: 1450000,
    contactInfo: {
      webAddress: "www.hothshelter.org",
      phoneNumber: "1-888-HOTH-CARE",
      contacts: {
        executiveDirector: {
          name: "Leia Organa",
          email: "leia@hothshelter.org",
        },
        financeDirector: {
          name: "Han Solo",
          email: "han@hothshelter.org",
        },
        programManager: {
          name: "Chewbacca",
          email: "chewbacca@hothshelter.org",
        },
      },
    },
  },
  {
    id: 7,
    name: "Mordor Mental Wellness Center",
    description:
      "Mordor Mental Wellness Center is a crucial facility for those in the Land of Shadows seeking mental health and substance counseling. Led by Sauron, with financial oversight from the Mouth of Sauron and program management by Gorbag, the center specializes in anger management and addiction counseling. Despite its ominous location near Mount Doom, the center offers essential outpatient services and family therapy to help individuals regain control and stability in the darkest corners of Middle-Earth.",
    taxNumber: "TAX-665544998",
    shipTo: {
      address: "Mount Doom Ascent, Mordor",
      city: "Barad-dûr",
      state: "Mordor",
      zip: "99887",
    },
    billTo: {
      address: "Eye of Sauron Tower, Dark Land",
      city: "Barad-dûr",
      state: "Mordor",
      zip: "77665",
    },
    coverage: {
      district: "Land of Shadows",
      region: "Mordor",
    },
    maxCapacity: 150,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Anger Management Therapy",
      "Family Therapy",
      "Outpatient Substance Counseling",
      "Mental Health Screenings",
      "Addiction Counseling",
    ],
    serviceTypes: [
      "Anger Management Therapy",
      "Family Therapy",
      "Outpatient Substance Counseling",
      "Mental Health Screenings",
      "Addiction Counseling",
    ],
    fundingSources: [
      {
        grantName: "Middle-Earth Mental Health Fund",
        yearlyAmount: 450000,
        servicesCovered: [
          "Mental Health Screenings",
          "Anger Management Therapy",
        ],
      },
      {
        grantName: "Shadow Lands Substance Support",
        yearlyAmount: 300000,
        servicesCovered: [
          "Outpatient Substance Counseling",
          "Addiction Counseling",
        ],
      },
      {
        grantName: "Darkness Resilience Fund",
        yearlyAmount: 200000,
        servicesCovered: ["Family Therapy"],
      },
    ],
    totalYearlyFunding: 950000,
    contactInfo: {
      webAddress: "www.mordorwellness.me",
      phoneNumber: "1-888-MORDOR-CARE",
      contacts: {
        executiveDirector: {
          name: "Sauron",
          email: "sauron@mordorwellness.me",
        },
        financeDirector: {
          name: "The Mouth of Sauron",
          email: "mouth@mordorwellness.me",
        },
        programManager: {
          name: "Gorbag",
          email: "gorbag@mordorwellness.me",
        },
      },
    },
  },
  {
    id: 8,
    name: "Neverland Care & Rehab",
    description:
      "Neverland Care & Rehab provides a safe and nurturing environment for troubled youth in the enchanting world of Neverland. Under the guidance of Peter Pan, Captain Hook, and Tinker Bell, the center specializes in substance abuse counseling, mental health intake, and family therapy. With both outpatient and residential services, it offers rehabilitative housing and 24/7 crisis management for youth in need. Neverland Care & Rehab is a cornerstone for recovery in the magical regions of Pixie Hollow and Skull Rock.",
    taxNumber: "TAX-774455339",
    shipTo: {
      address: "Lost Boys Hideout, Neverland",
      city: "Pixie Hollow",
      state: "Neverland",
      zip: "33100",
    },
    billTo: {
      address: "Captain Hook's Ship, Jolly Roger",
      city: "Skull Rock",
      state: "Neverland",
      zip: "33101",
    },
    coverage: {
      district: "Enchanted Forest",
      region: "Neverland",
    },
    maxCapacity: 300,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Therapy for Troubled Youth",
      "Substance Abuse Counseling",
      "Family Counseling",
      "Health Screenings",
      "Mental Health Intake",
    ],
    residentialOnlyServices: [
      "Rehabilitative Housing for Youth",
      "Substance Detox & Rehabilitation",
      "24/7 Crisis Management",
      "Residential Group Therapy",
    ],
    serviceTypes: [
      "Substance Abuse Counseling",
      "Rehabilitative Housing for Youth",
      "Family Counseling",
      "Crisis Management",
      "Mental Health Intake",
      "Substance Detox & Rehabilitation",
    ],
    fundingSources: [
      {
        grantName: "Neverland Youth Recovery Fund",
        yearlyAmount: 700000,
        servicesCovered: [
          "Rehabilitative Housing for Youth",
          "Substance Detox & Rehabilitation",
        ],
      },
      {
        grantName: "Pixie Hollow Mental Health Support",
        yearlyAmount: 550000,
        servicesCovered: ["Mental Health Intake", "Crisis Management"],
      },
      {
        grantName: "Enchanted Family Aid Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Family Counseling"],
      },
    ],
    totalYearlyFunding: 1550000,
    contactInfo: {
      webAddress: "www.neverlandcare.nvr",
      phoneNumber: "1-888-LOST-HELP",
      contacts: {
        executiveDirector: {
          name: "Peter Pan",
          email: "peter@neverlandcare.nvr",
        },
        financeDirector: {
          name: "Captain Hook",
          email: "hook@neverlandcare.nvr",
        },
        programManager: {
          name: "Tinker Bell",
          email: "tinkerbell@neverlandcare.nvr",
        },
      },
    },
  },
  {
    id: 9,
    name: "Vulcan Serenity Clinic",
    description:
      "Vulcan Serenity Clinic offers a logical and calming approach to mental health care and rehabilitation, rooted in the principles of Vulcan culture. Led by T'Pau, Sarek, and Spock, the clinic provides a range of services, from outpatient cognitive therapy to residential mental health care. With a focus on meditative rehabilitation and crisis intervention, the clinic helps individuals achieve peace through logic and serenity. Supported by various Vulcan wellness funds, it serves as a critical resource for those in need of mental and emotional balance in the Southern Hemisphere of Vulcan.",
    taxNumber: "TAX-123456789",
    shipTo: {
      address: "Shi'Kahr Medical Center, Vulcan",
      city: "Shi'Kahr",
      state: "Vulcan",
      zip: "87654",
    },
    billTo: {
      address: "Surak Healing Hall, Forge Desert",
      city: "Vulcan",
      state: "Vulcan",
      zip: "87655",
    },
    coverage: {
      district: "Southern Hemisphere",
      region: "Vulcan",
    },
    maxCapacity: 350,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Mental Health Intake",
      "Family Therapy",
      "Substance Abuse Counseling",
      "Outpatient Cognitive Therapy",
    ],
    residentialOnlyServices: [
      "Meditative Rehabilitation",
      "24/7 Inpatient Mental Health Care",
      "Residential Cognitive Behavioral Therapy",
      "Crisis Intervention Services",
    ],
    serviceTypes: [
      "Mental Health Care",
      "Cognitive Therapy",
      "Substance Abuse Counseling",
      "Meditative Rehabilitation",
      "Crisis Intervention",
    ],
    fundingSources: [
      {
        grantName: "Logic & Wellness Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Mental Health Care", "Cognitive Therapy"],
      },
      {
        grantName: "Vulcan Peace Initiative",
        yearlyAmount: 500000,
        servicesCovered: ["Crisis Intervention", "Meditative Rehabilitation"],
      },
      {
        grantName: "Interplanetary Substance Abuse Fund",
        yearlyAmount: 400000,
        servicesCovered: ["Substance Abuse Counseling"],
      },
    ],
    totalYearlyFunding: 1500000,
    contactInfo: {
      webAddress: "www.vulcanserenityclinic.vlc",
      phoneNumber: "1-800-VULC-PEACE",
      contacts: {
        executiveDirector: {
          name: "T'Pau",
          email: "tpau@vulcanserenity.vlc",
        },
        financeDirector: {
          name: "Sarek",
          email: "sarek@vulcanserenity.vlc",
        },
        programManager: {
          name: "Spock",
          email: "spock@vulcanserenity.vlc",
        },
      },
    },
  },
  {
    id: 10,
    name: "Xandar Rehabilitation Hub",
    description:
      "Xandar Rehabilitation Hub provides vital trauma recovery and mental health services to the residents of the Andromeda Galaxy. With leadership from Irani Rael, Rhomann Dey, and Peter Quill, the facility offers both residential and outpatient care, specializing in trauma therapy, family counseling, and crisis intervention. Supported by the Xandar Nova Peace Fund and other galactic aid initiatives, the hub is a crucial center for long-term mental health support and substance abuse rehabilitation in the Nova District.",
    taxNumber: "TAX-987654321",
    shipTo: {
      address: "Nova Corps HQ, Xandar Prime",
      city: "Xandar",
      state: "Andromeda Galaxy",
      zip: "44567",
    },
    billTo: {
      address: "Worldmind Tower, Nova Plaza",
      city: "Xandar",
      state: "Andromeda Galaxy",
      zip: "44568",
    },
    coverage: {
      district: "Nova District",
      region: "Andromeda Galaxy",
    },
    maxCapacity: 400,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Trauma Therapy",
      "Substance Abuse Intake",
      "Outpatient Mental Health Care",
      "Family Counseling",
    ],
    residentialOnlyServices: [
      "Inpatient Trauma Rehabilitation",
      "24/7 Crisis Intervention",
      "Long-Term Mental Health Support",
      "Residential Family Therapy",
    ],
    serviceTypes: [
      "Trauma Therapy",
      "Mental Health Care",
      "Substance Abuse Intake",
      "Family Counseling",
      "Crisis Intervention",
    ],
    fundingSources: [
      {
        grantName: "Xandar Nova Peace Fund",
        yearlyAmount: 750000,
        servicesCovered: ["Trauma Therapy", "Crisis Intervention"],
      },
      {
        grantName: "Galactic Family Aid Grant",
        yearlyAmount: 600000,
        servicesCovered: [
          "Family Counseling",
          "Long-Term Mental Health Support",
        ],
      },
      {
        grantName: "Intergalactic Substance Abuse Fund",
        yearlyAmount: 500000,
        servicesCovered: [
          "Substance Abuse Intake",
          "Outpatient Mental Health Care",
        ],
      },
    ],
    totalYearlyFunding: 1850000,
    contactInfo: {
      webAddress: "www.xandarrehabhub.xdr",
      phoneNumber: "1-888-NOVA-CARE",
      contacts: {
        executiveDirector: {
          name: "Irani Rael",
          email: "irael@xandarrehabhub.xdr",
        },
        financeDirector: {
          name: "Rhomann Dey",
          email: "rdey@xandarrehabhub.xdr",
        },
        programManager: {
          name: "Peter Quill",
          email: "pquill@xandarrehabhub.xdr",
        },
      },
    },
  },
  {
    id: 11,
    name: "Dagobah Swamp Wellness Center",
    description:
      "Dagobah Swamp Wellness Center provides a serene yet transformative environment for individuals seeking mental health support and substance abuse counseling. Nestled in the Misty Swamps of Dagobah, the center is led by Yoda, with financial management from Luke Skywalker and program oversight from R2-D2. The facility offers unique therapies, including swamp meditation and long-term residential meditation, alongside crisis intervention and 24/7 rehabilitation housing. Supported by Outer Rim wellness funds, the center is a beacon of calm and recovery in the murky basins of Dagobah.",
    taxNumber: "TAX-112233445",
    shipTo: {
      address: "Yoda's Hut, Dagobah Swamp",
      city: "Dagobah",
      state: "Outer Rim Territories",
      zip: "56789",
    },
    billTo: {
      address: "Healing Pond, Murky Basin",
      city: "Dagobah",
      state: "Outer Rim Territories",
      zip: "56790",
    },
    coverage: {
      district: "Misty Swamps",
      region: "Outer Rim",
    },
    maxCapacity: 150,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Swamp Meditation Therapy",
      "Outpatient Mental Health Support",
      "Substance Abuse Counseling",
      "Family Therapy",
    ],
    residentialOnlyServices: [
      "Inpatient Swamp Detox",
      "Long-Term Residential Meditation",
      "Crisis Mental Health Support",
      "24/7 Rehabilitation Housing",
    ],
    serviceTypes: [
      "Mental Health Support",
      "Substance Abuse Counseling",
      "Swamp Meditation Therapy",
      "Rehabilitation Housing",
      "Crisis Intervention",
    ],
    fundingSources: [
      {
        grantName: "Outer Rim Mental Wellness Fund",
        yearlyAmount: 400000,
        servicesCovered: ["Mental Health Support", "Swamp Meditation Therapy"],
      },
      {
        grantName: "Dagobah Crisis Recovery Fund",
        yearlyAmount: 300000,
        servicesCovered: ["Crisis Intervention", "Inpatient Swamp Detox"],
      },
      {
        grantName: "Galactic Substance Recovery Initiative",
        yearlyAmount: 200000,
        servicesCovered: [
          "Substance Abuse Counseling",
          "Rehabilitation Housing",
        ],
      },
    ],
    totalYearlyFunding: 900000,
    contactInfo: {
      webAddress: "www.dagobahwellnesscenter.dgb",
      phoneNumber: "1-800-YODA-HELP",
      contacts: {
        executiveDirector: {
          name: "Yoda",
          email: "yoda@dagobahwellness.dgb",
        },
        financeDirector: {
          name: "Luke Skywalker",
          email: "lskywalker@dagobahwellness.dgb",
        },
        programManager: {
          name: "R2-D2",
          email: "r2d2@dagobahwellness.dgb",
        },
      },
    },
  },
  {
    id: 12,
    name: "Hogwarts Mental Health Clinic",
    description:
      "Hogwarts Mental Health Clinic offers specialized care for those impacted by magical trauma and emotional challenges in the wizarding world. Located within Hogwarts Castle and overseen by Albus Dumbledore, Severus Snape, and Hermione Granger, the clinic provides a range of services including crisis intervention, family counseling, and long-term mental health support. With both residential and outpatient services, the clinic ensures that students and residents alike have access to magical and non-magical therapies, all backed by the Wizarding Mental Health Fund and the Ministry of Magic's support.",
    taxNumber: "TAX-556677889",
    shipTo: {
      address: "Hogwarts Castle, Room of Requirement",
      city: "Hogsmeade",
      state: "Scotland",
      zip: "12345",
    },
    billTo: {
      address: "Professor Dumbledore's Office, Hogwarts",
      city: "Hogsmeade",
      state: "Scotland",
      zip: "12346",
    },
    coverage: {
      district: "Highlands Region",
      region: "Scotland",
    },
    maxCapacity: 200,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Magical Trauma Therapy",
      "Family Counseling",
      "Mental Health Intake",
      "Outpatient Substance Abuse Support",
    ],
    residentialOnlyServices: [
      "Wizarding World Crisis Intervention",
      "Inpatient Magical Detox",
      "Residential Mental Health Support",
      "Long-Term Wizarding Therapy",
    ],
    serviceTypes: [
      "Magical Trauma Therapy",
      "Substance Abuse Support",
      "Crisis Intervention",
      "Mental Health Support",
      "Family Counseling",
    ],
    fundingSources: [
      {
        grantName: "Wizarding Mental Health Fund",
        yearlyAmount: 700000,
        servicesCovered: ["Magical Trauma Therapy", "Mental Health Support"],
      },
      {
        grantName: "Hogwarts Crisis Aid Grant",
        yearlyAmount: 500000,
        servicesCovered: ["Crisis Intervention", "Inpatient Magical Detox"],
      },
      {
        grantName: "Ministry of Magic Substance Recovery Fund",
        yearlyAmount: 300000,
        servicesCovered: [
          "Substance Abuse Support",
          "Residential Mental Health Support",
        ],
      },
    ],
    totalYearlyFunding: 1500000,
    contactInfo: {
      webAddress: "www.hogwartsmentalhealth.hgw",
      phoneNumber: "1-888-WIZ-HELP",
      contacts: {
        executiveDirector: {
          name: "Albus Dumbledore",
          email: "adumbledore@hogwartsmentalhealth.hgw",
        },
        financeDirector: {
          name: "Severus Snape",
          email: "ssnape@hogwartsmentalhealth.hgw",
        },
        programManager: {
          name: "Hermione Granger",
          email: "hgranger@hogwartsmentalhealth.hgw",
        },
      },
    },
  },
  {
    id: 13,
    name: "Stark Tower Therapy Hub",
    description:
      "Stark Tower Therapy Hub is a state-of-the-art facility located in the heart of Manhattan, providing specialized counseling and mental health support to those dealing with PTSD, substance abuse, and anger management issues. Led by Pepper Potts, Happy Hogan, and James Rhodes, the hub offers outpatient services funded by the Stark Foundation and Avengers Initiative. While it does not offer residential care, it remains a critical resource for those seeking mental health evaluation and therapy in New York City.",
    taxNumber: "TAX-112244668",
    shipTo: {
      address: "Stark Tower, Manhattan",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    billTo: {
      address: "Avengers Headquarters, Upstate",
      city: "New York",
      state: "NY",
      zip: "10002",
    },
    coverage: {
      district: "Manhattan District",
      region: "New York",
    },
    maxCapacity: 500,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "PTSD Counseling",
      "Mental Health Evaluation",
      "Outpatient Substance Abuse Support",
      "Anger Management Therapy",
    ],
    residentialOnlyServices: [],
    serviceTypes: [
      "PTSD Counseling",
      "Mental Health Evaluation",
      "Outpatient Substance Abuse Support",
      "Anger Management Therapy",
    ],
    fundingSources: [
      {
        grantName: "Stark Foundation Wellness Grant",
        yearlyAmount: 1000000,
        servicesCovered: ["PTSD Counseling", "Mental Health Evaluation"],
      },
      {
        grantName: "Avengers Initiative Support Fund",
        yearlyAmount: 700000,
        servicesCovered: [
          "Outpatient Substance Abuse Support",
          "Anger Management Therapy",
        ],
      },
    ],
    totalYearlyFunding: 1700000,
    contactInfo: {
      webAddress: "www.starktherapyhub.com",
      phoneNumber: "1-888-STARK-HUB",
      contacts: {
        executiveDirector: {
          name: "Pepper Potts",
          email: "ppotts@starktherapy.com",
        },
        financeDirector: {
          name: "Happy Hogan",
          email: "hhogan@starktherapy.com",
        },
        programManager: {
          name: "James Rhodes",
          email: "jrhodes@starktherapy.com",
        },
      },
    },
  },
  {
    id: 14,
    name: "Naboo Serenity Center",
    description:
      "The Naboo Serenity Center, located in the beautiful Royal District of Theed, provides both residential and outpatient mental health services. Led by Padmé Amidala, Bail Organa, and Captain Panaka, the center specializes in cognitive therapy, family counseling, and crisis support. With serene residential housing and rehabilitative care, the center is funded by Naboo's wellness and royal aid initiatives, offering a tranquil retreat for those seeking mental health support in the Mid Rim.",
    taxNumber: "TAX-556644223",
    shipTo: {
      address: "Royal Palace, Theed",
      city: "Theed",
      state: "Naboo",
      zip: "44556",
    },
    billTo: {
      address: "Waterfall Retreat, Lake Country",
      city: "Naboo",
      state: "Naboo",
      zip: "44557",
    },
    coverage: {
      district: "Theed Royal District",
      region: "Mid Rim",
    },
    maxCapacity: 300,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Mental Health Screenings",
      "Outpatient Cognitive Therapy",
      "Family Counseling",
      "Health Screenings",
    ],
    residentialOnlyServices: [
      "Inpatient Crisis Support",
      "Residential Cognitive Therapy",
      "24/7 Rehabilitative Housing",
    ],
    serviceTypes: [
      "Mental Health Screenings",
      "Cognitive Therapy",
      "Family Counseling",
      "Inpatient Crisis Support",
      "Rehabilitative Housing",
    ],
    fundingSources: [
      {
        grantName: "Naboo Wellness Initiative",
        yearlyAmount: 500000,
        servicesCovered: ["Mental Health Screenings", "Cognitive Therapy"],
      },
      {
        grantName: "Royal Crisis Aid Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Inpatient Crisis Support", "Rehabilitative Housing"],
      },
      {
        grantName: "Mid Rim Family Aid Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Family Counseling"],
      },
    ],
    totalYearlyFunding: 1500000,
    contactInfo: {
      webAddress: "www.nabooserene.nab",
      phoneNumber: "1-800-NABOO-CALM",
      contacts: {
        executiveDirector: {
          name: "Padmé Amidala",
          email: "padme@naboopeace.nab",
        },
        financeDirector: {
          name: "Bail Organa",
          email: "borgana@naboopeace.nab",
        },
        programManager: {
          name: "Captain Panaka",
          email: "cpanaka@naboopeace.nab",
        },
      },
    },
  },
  {
    id: 15,
    name: "Rivendell Healing Sanctuary",
    description:
      "Rivendell Healing Sanctuary, nestled in the Elven Refuge of Middle-earth, provides a tranquil setting for long-term mental health care and rehabilitation. Under the leadership of Elrond, Glorfindel, and Arwen, the sanctuary offers a mix of outpatient and residential services, including elven meditation, cognitive therapy, and crisis intervention. With its serene environment and elven wisdom, Rivendell Healing Sanctuary is a haven for those seeking peace and recovery, supported by the Middle-earth Wellness Fund and other elven aid initiatives.",
    taxNumber: "TAX-998877665",
    shipTo: {
      address: "House of Elrond, Rivendell",
      city: "Rivendell",
      state: "Middle-earth",
      zip: "45678",
    },
    billTo: {
      address: "Healing Hall, Misty Mountains",
      city: "Rivendell",
      state: "Middle-earth",
      zip: "45679",
    },
    coverage: {
      district: "Elven Refuge",
      region: "Middle-earth",
    },
    maxCapacity: 250,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Elven Mental Health Counseling",
      "Outpatient Cognitive Therapy",
      "Family Counseling",
      "Substance Abuse Intake",
    ],
    residentialOnlyServices: [
      "Long-Term Elven Meditation",
      "Inpatient Crisis Care",
      "Residential Cognitive Therapy",
      "24/7 Rehabilitative Housing",
    ],
    serviceTypes: [
      "Mental Health Counseling",
      "Cognitive Therapy",
      "Family Counseling",
      "Substance Abuse Support",
      "Inpatient Crisis Care",
      "Rehabilitative Housing",
    ],
    fundingSources: [
      {
        grantName: "Middle-earth Wellness Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Mental Health Counseling", "Cognitive Therapy"],
      },
      {
        grantName: "Elven Crisis Support Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Inpatient Crisis Care", "Rehabilitative Housing"],
      },
      {
        grantName: "Rivendell Family Wellness Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Family Counseling"],
      },
    ],
    totalYearlyFunding: 1500000,
    contactInfo: {
      webAddress: "www.rivendellsanctuary.me",
      phoneNumber: "1-800-ELVEN-CARE",
      contacts: {
        executiveDirector: {
          name: "Elrond",
          email: "elrond@rivendellsanctuary.me",
        },
        financeDirector: {
          name: "Glorfindel",
          email: "glorfindel@rivendellsanctuary.me",
        },
        programManager: {
          name: "Arwen",
          email: "arwen@rivendellsanctuary.me",
        },
      },
    },
  },
  {
    id: 16,
    name: "Pandora Healing Haven",
    description:
      "Pandora Healing Haven, located in the heart of Na'vi territories, offers a unique blend of traditional healing and modern mental health therapies. Led by Jake Sully, Neytiri, and Mo'at, the center provides both residential and outpatient care, specializing in Na'vi healing practices, trauma recovery, and crisis intervention. Nestled near the Tree of Souls and Hallelujah Mountains, this sanctuary offers long-term support for mental health and substance abuse recovery, backed by the Pandora Wellness Fund and Alpha Centauri aid programs.",
    taxNumber: "TAX-665544332",
    shipTo: {
      address: "Tree of Souls, Pandora",
      city: "Pandora",
      state: "Alpha Centauri",
      zip: "78910",
    },
    billTo: {
      address: "Hallelujah Mountains, Na'vi Valley",
      city: "Pandora",
      state: "Alpha Centauri",
      zip: "78911",
    },
    coverage: {
      district: "Na'vi Territories",
      region: "Alpha Centauri",
    },
    maxCapacity: 350,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Mental Health Evaluations",
      "Family Counseling",
      "Outpatient Substance Abuse Therapy",
      "Health Screenings",
    ],
    residentialOnlyServices: [
      "Inpatient Crisis Intervention",
      "24/7 Rehabilitative Housing",
      "Long-Term Trauma Recovery",
      "Na'vi Healing Therapy",
    ],
    serviceTypes: [
      "Mental Health Evaluations",
      "Family Counseling",
      "Substance Abuse Therapy",
      "Crisis Intervention",
      "Rehabilitative Housing",
      "Na'vi Healing Therapy",
    ],
    fundingSources: [
      {
        grantName: "Pandora Wellness Fund",
        yearlyAmount: 700000,
        servicesCovered: ["Mental Health Evaluations", "Na'vi Healing Therapy"],
      },
      {
        grantName: "Alpha Centauri Crisis Aid",
        yearlyAmount: 500000,
        servicesCovered: ["Crisis Intervention", "Rehabilitative Housing"],
      },
      {
        grantName: "Na'vi Family Aid Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Family Counseling", "Substance Abuse Therapy"],
      },
    ],
    totalYearlyFunding: 1600000,
    contactInfo: {
      webAddress: "www.pandorahealing.ac",
      phoneNumber: "1-888-NAVI-HEAL",
      contacts: {
        executiveDirector: {
          name: "Jake Sully",
          email: "jsully@pandorahealing.ac",
        },
        financeDirector: {
          name: "Neytiri",
          email: "neytiri@pandorahealing.ac",
        },
        programManager: {
          name: "Mo'at",
          email: "moat@pandorahealing.ac",
        },
      },
    },
  },
  {
    id: 17,
    name: "X-Men Mutant Wellness Center",
    description:
      "The X-Men Mutant Wellness Center provides specialized care for mutants struggling with mental health, power control, and crisis recovery. Located at Xavier's School for Gifted Youngsters, the center is led by Charles Xavier, Hank McCoy, and Jean Grey, offering both residential and outpatient services. From PTSD counseling to rehabilitative housing, the center helps mutants regain control and balance in their lives. Supported by the Mutant Wellness Grant and Xavier Foundation Crisis Fund, it stands as a sanctuary for mutants in need of support and recovery.",
    taxNumber: "TAX-667788990",
    shipTo: {
      address: "Xavier's School for Gifted Youngsters",
      city: "Westchester",
      state: "NY",
      zip: "10005",
    },
    billTo: {
      address: "Mutant Support Wing, Cerebro Tower",
      city: "Westchester",
      state: "NY",
      zip: "10006",
    },
    coverage: {
      district: "Westchester District",
      region: "New York",
    },
    maxCapacity: 300,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Mutant Mental Health Therapy",
      "Family Counseling",
      "Outpatient Support for Mutant Abilities",
      "PTSD Counseling",
    ],
    residentialOnlyServices: [
      "Mutant Crisis Housing",
      "Inpatient Recovery for Power Control",
      "24/7 Rehabilitative Housing",
      "Specialized Therapy for Mutants",
    ],
    serviceTypes: [
      "Mental Health Therapy",
      "Family Counseling",
      "Outpatient Support",
      "Mutant Power Recovery",
      "Crisis Housing",
      "Rehabilitative Housing",
    ],
    fundingSources: [
      {
        grantName: "Mutant Wellness Grant",
        yearlyAmount: 800000,
        servicesCovered: ["Mental Health Therapy", "Mutant Power Recovery"],
      },
      {
        grantName: "Xavier Foundation Crisis Fund",
        yearlyAmount: 500000,
        servicesCovered: [
          "Crisis Housing",
          "Inpatient Recovery for Power Control",
        ],
      },
      {
        grantName: "Gifted Youth Support Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Family Counseling", "Outpatient Support"],
      },
    ],
    totalYearlyFunding: 1700000,
    contactInfo: {
      webAddress: "www.xmenwellness.org",
      phoneNumber: "1-888-XMEN-CARE",
      contacts: {
        executiveDirector: {
          name: "Charles Xavier",
          email: "cxavier@xmenwellness.org",
        },
        financeDirector: {
          name: "Hank McCoy",
          email: "hmccoy@xmenwellness.org",
        },
        programManager: {
          name: "Jean Grey",
          email: "jgrey@xmenwellness.org",
        },
      },
    },
  },
  {
    id: 18,
    name: "Krypton Recovery Center",
    description:
      "The Krypton Recovery Center, located near the legendary Fortress of Solitude, provides specialized mental health and trauma recovery services for Kryptonians. Led by Kal-El, Jor-El, and Lara Lor-Van, the center offers both residential and outpatient care, focusing on power control therapy, crisis intervention, and family counseling. Supported by the Kryptonian Wellness Fund and the House of El, this center serves as a critical resource for Kryptonians in need of rehabilitative housing and long-term support across the Kandor Region.",
    taxNumber: "TAX-112288334",
    shipTo: {
      address: "Fortress of Solitude",
      city: "Krypton",
      state: "Outer Space",
      zip: "12399",
    },
    billTo: {
      address: "House of El, Kandor City",
      city: "Krypton",
      state: "Outer Space",
      zip: "12400",
    },
    coverage: {
      district: "Kandor Region",
      region: "Krypton",
    },
    maxCapacity: 400,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Mental Health Evaluations",
      "Substance Abuse Counseling",
      "Family Counseling",
      "Health Screenings",
    ],
    residentialOnlyServices: [
      "Kryptonian Crisis Intervention",
      "Inpatient Rehabilitative Housing",
      "Trauma Recovery Support",
      "24/7 Power Control Therapy",
    ],
    serviceTypes: [
      "Mental Health Evaluations",
      "Substance Abuse Counseling",
      "Crisis Intervention",
      "Power Control Therapy",
      "Rehabilitative Housing",
      "Trauma Recovery",
    ],
    fundingSources: [
      {
        grantName: "Kryptonian Wellness Fund",
        yearlyAmount: 900000,
        servicesCovered: ["Mental Health Evaluations", "Power Control Therapy"],
      },
      {
        grantName: "Fortress of Solitude Recovery Grant",
        yearlyAmount: 600000,
        servicesCovered: ["Crisis Intervention", "Trauma Recovery"],
      },
      {
        grantName: "House of El Family Support",
        yearlyAmount: 500000,
        servicesCovered: ["Family Counseling", "Substance Abuse Counseling"],
      },
    ],
    totalYearlyFunding: 2000000,
    contactInfo: {
      webAddress: "www.kryptonrecovery.org",
      phoneNumber: "1-888-KRYPTON-HELP",
      contacts: {
        executiveDirector: {
          name: "Kal-El",
          email: "kalel@kryptonrecovery.org",
        },
        financeDirector: {
          name: "Jor-El",
          email: "jorel@kryptonrecovery.org",
        },
        programManager: {
          name: "Lara Lor-Van",
          email: "llorvan@kryptonrecovery.org",
        },
      },
    },
  },
  {
    id: 19,
    name: "Olympus Divine Healing",
    description:
      "Olympus Divine Healing, located atop Mount Olympus, offers a blend of divine and mortal care for those seeking mental health and substance abuse therapy. Overseen by Zeus, Hera, and Athena, the center provides both residential and outpatient services, including godly power control therapy and crisis support. With its divine intervention services and rehabilitative housing, Olympus Divine Healing serves as a sanctuary for both mortals and gods, funded by the Zeus Lightning Recovery Fund and Olympian Crisis Intervention Fund.",
    taxNumber: "TAX-334455667",
    shipTo: {
      address: "Mount Olympus, Summit of the Gods",
      city: "Olympus",
      state: "Greece",
      zip: "54321",
    },
    billTo: {
      address: "Zeus' Temple, Throne of Thunder",
      city: "Olympus",
      state: "Greece",
      zip: "54322",
    },
    coverage: {
      district: "Divine Council Region",
      region: "Mount Olympus",
    },
    maxCapacity: 350,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Mental Health Screenings",
      "Family Counseling",
      "Substance Abuse Therapy",
      "Outpatient Divine Healing",
    ],
    residentialOnlyServices: [
      "Inpatient Divine Intervention",
      "24/7 Olympian Crisis Support",
      "Rehabilitative Housing for Mortals",
      "Godly Power Control Therapy",
    ],
    serviceTypes: [
      "Mental Health Screenings",
      "Divine Healing",
      "Substance Abuse Therapy",
      "Family Counseling",
      "Crisis Support",
      "Rehabilitative Housing",
    ],
    fundingSources: [
      {
        grantName: "Zeus' Lightning Recovery Fund",
        yearlyAmount: 700000,
        servicesCovered: ["Mental Health Screenings", "Divine Healing"],
      },
      {
        grantName: "Olympian Crisis Intervention Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Crisis Support", "Godly Power Control Therapy"],
      },
      {
        grantName: "Hera's Family Aid Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Family Counseling", "Rehabilitative Housing"],
      },
    ],
    totalYearlyFunding: 1700000,
    contactInfo: {
      webAddress: "www.olympushealing.olp",
      phoneNumber: "1-800-ZEUS-CARE",
      contacts: {
        executiveDirector: {
          name: "Zeus",
          email: "zeus@olympushealing.olp",
        },
        financeDirector: {
          name: "Hera",
          email: "hera@olympushealing.olp",
        },
        programManager: {
          name: "Athena",
          email: "athena@olympushealing.olp",
        },
      },
    },
  },
  {
    id: 20,
    name: "Camelot Wellness Retreat",
    description:
      "Camelot Wellness Retreat offers a sanctuary for knights and warriors in need of mental health support and recovery. Situated in King Arthur's Castle, the center provides chivalric counseling, family therapy, and knightly mental health screenings. Led by King Arthur, Sir Lancelot, and Merlin, the retreat combines legendary power therapy with crisis intervention for warriors, offering both outpatient and residential services. Supported by the Arthurian Kingdom Wellness Fund and the Round Table Crisis Support, this retreat is a beacon of hope in the medieval realm.",
    taxNumber: "TAX-998822334",
    shipTo: {
      address: "King Arthur's Castle, Camelot",
      city: "Camelot",
      state: "Medieval England",
      zip: "11223",
    },
    billTo: {
      address: "Round Table Chamber, Camelot Keep",
      city: "Camelot",
      state: "Medieval England",
      zip: "11224",
    },
    coverage: {
      district: "Arthurian Kingdom",
      region: "Medieval England",
    },
    maxCapacity: 200,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Outpatient Chivalric Counseling",
      "Family Therapy",
      "Substance Abuse Support",
      "Knightly Mental Health Screenings",
    ],
    residentialOnlyServices: [
      "Inpatient Knight Recovery",
      "24/7 Crisis Intervention for Warriors",
      "Long-Term Rehabilitative Housing",
      "Legendary Power Therapy",
    ],
    serviceTypes: [
      "Chivalric Counseling",
      "Family Therapy",
      "Substance Abuse Support",
      "Knightly Mental Health",
      "Crisis Intervention for Warriors",
      "Rehabilitative Housing",
    ],
    fundingSources: [
      {
        grantName: "Arthurian Kingdom Wellness Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Chivalric Counseling", "Knightly Mental Health"],
      },
      {
        grantName: "Round Table Crisis Support",
        yearlyAmount: 400000,
        servicesCovered: [
          "Crisis Intervention for Warriors",
          "Legendary Power Therapy",
        ],
      },
      {
        grantName: "Lancelot Family Aid Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Family Therapy", "Rehabilitative Housing"],
      },
    ],
    totalYearlyFunding: 1200000,
    contactInfo: {
      webAddress: "www.camelotwellness.med",
      phoneNumber: "1-888-ARTHUR-CARE",
      contacts: {
        executiveDirector: {
          name: "King Arthur",
          email: "kingarthur@camelotwellness.med",
        },
        financeDirector: {
          name: "Sir Lancelot",
          email: "lancelot@camelotwellness.med",
        },
        programManager: {
          name: "Merlin",
          email: "merlin@camelotwellness.med",
        },
      },
    },
  },
  {
    id: 21,
    name: "Agrabah Palace Health Services",
    description:
      "Agrabah Palace Health Services, nestled within the grandeur of the Sultan's Palace, offers essential mental health and trauma recovery care for the people of Agrabah. Led by the Sultan, Jafar, and Princess Jasmine, the center provides both residential and outpatient services, specializing in crisis intervention, family therapy, and rehabilitative housing for desert dwellers. Supported by the Agrabah Royal Health Fund and Desert Recovery Initiative, this center is a key provider of health services across the Arabian Desert region.",
    taxNumber: "TAX-778899001",
    shipTo: {
      address: "Sultan's Palace, Agrabah",
      city: "Agrabah",
      state: "Arabian Desert",
      zip: "87654",
    },
    billTo: {
      address: "Royal Courtyard, Marketplace",
      city: "Agrabah",
      state: "Arabian Desert",
      zip: "87655",
    },
    coverage: {
      district: "Agrabah Region",
      region: "Arabian Desert",
    },
    maxCapacity: 300,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Royal Mental Health Counseling",
      "Family Therapy",
      "Outpatient Substance Abuse Support",
      "Health Screenings for the Needy",
    ],
    residentialOnlyServices: [
      "Inpatient Crisis Care",
      "Rehabilitative Housing for Desert Dwellers",
      "24/7 Royal Crisis Intervention",
      "Long-Term Trauma Recovery",
    ],
    serviceTypes: [
      "Mental Health Counseling",
      "Substance Abuse Support",
      "Crisis Intervention",
      "Family Therapy",
      "Rehabilitative Housing",
      "Trauma Recovery",
    ],
    fundingSources: [
      {
        grantName: "Agrabah Royal Health Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Mental Health Counseling", "Crisis Intervention"],
      },
      {
        grantName: "Desert Recovery Initiative",
        yearlyAmount: 500000,
        servicesCovered: ["Rehabilitative Housing", "Trauma Recovery"],
      },
      {
        grantName: "Sultan's Family Support Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Family Therapy", "Outpatient Support"],
      },
    ],
    totalYearlyFunding: 1500000,
    contactInfo: {
      webAddress: "www.agrabahhealth.arb",
      phoneNumber: "1-800-SULTAN-CARE",
      contacts: {
        executiveDirector: {
          name: "Sultan",
          email: "sultan@agrabahhealth.arb",
        },
        financeDirector: {
          name: "Jafar",
          email: "jafar@agrabahhealth.arb",
        },
        programManager: {
          name: "Princess Jasmine",
          email: "jasmine@agrabahhealth.arb",
        },
      },
    },
  },
  {
    id: 22,
    name: "Asgard Eternal Wellness",
    description:
      "Asgard Eternal Wellness, located in the sacred halls of Valhalla, offers divine mental health care and recovery services to gods and warriors across the Nine Realms. Under the leadership of Odin, Frigga, and Thor, the center provides both residential and outpatient services, focusing on power restoration therapy, trauma counseling, and rehabilitative housing. With support from the Asgardian Power Recovery Fund and Valhalla Crisis Recovery Grant, Asgard Eternal Wellness serves as a refuge for gods in need of healing and balance.",
    taxNumber: "TAX-223344556",
    shipTo: {
      address: "Valhalla Halls, Asgard",
      city: "Asgard",
      state: "Nine Realms",
      zip: "98765",
    },
    billTo: {
      address: "Odin's Throne Room, Palace of Valhalla",
      city: "Asgard",
      state: "Nine Realms",
      zip: "98766",
    },
    coverage: {
      district: "Valhalla Region",
      region: "Nine Realms",
    },
    maxCapacity: 400,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Godly Trauma Counseling",
      "Mental Health Screenings",
      "Outpatient Family Therapy",
      "Substance Abuse Support",
    ],
    residentialOnlyServices: [
      "Inpatient Crisis Recovery for Gods",
      "Long-Term Warrior Rehabilitative Housing",
      "24/7 Power Restoration Therapy",
      "Eternal Healing Interventions",
    ],
    serviceTypes: [
      "Trauma Counseling",
      "Mental Health Screenings",
      "Family Therapy",
      "Substance Abuse Support",
      "Rehabilitative Housing",
      "Power Restoration Therapy",
    ],
    fundingSources: [
      {
        grantName: "Asgardian Power Recovery Fund",
        yearlyAmount: 800000,
        servicesCovered: [
          "Power Restoration Therapy",
          "Mental Health Screenings",
        ],
      },
      {
        grantName: "Valhalla Crisis Recovery Grant",
        yearlyAmount: 700000,
        servicesCovered: [
          "Inpatient Crisis Recovery",
          "Rehabilitative Housing",
        ],
      },
      {
        grantName: "Odin's Eternal Aid Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Family Therapy", "Substance Abuse Support"],
      },
    ],
    totalYearlyFunding: 2000000,
    contactInfo: {
      webAddress: "www.asgardwellness.asg",
      phoneNumber: "1-888-ODIN-CARE",
      contacts: {
        executiveDirector: {
          name: "Odin",
          email: "odin@asgardwellness.asg",
        },
        financeDirector: {
          name: "Frigga",
          email: "frigga@asgardwellness.asg",
        },
        programManager: {
          name: "Thor",
          email: "thor@asgardwellness.asg",
        },
      },
    },
  },
  {
    id: 23,
    name: "Narnia Restoration Center",
    description:
      "The Narnia Restoration Center, located in the majestic Cair Paravel Castle, provides critical mental health and trauma recovery services for the diverse creatures and beings of Narnia. Under the leadership of Aslan, Edmund Pevensie, and Lucy Pevensie, the center offers both residential and outpatient care, including magical healing therapies, family counseling, and crisis intervention. Supported by Aslan's Wellness Fund and the Narnian Crisis Recovery Initiative, the center serves as a refuge for mythical beings in need of care and restoration in the Western Woods.",
    taxNumber: "TAX-445566778",
    shipTo: {
      address: "Cair Paravel Castle, Narnia",
      city: "Narnia",
      state: "Western Woods",
      zip: "44556",
    },
    billTo: {
      address: "Lantern Waste, Wood Between the Worlds",
      city: "Narnia",
      state: "Western Woods",
      zip: "44557",
    },
    coverage: {
      district: "Narnia Kingdom",
      region: "Western Woods",
    },
    maxCapacity: 250,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Mental Health Counseling for Creatures",
      "Outpatient Substance Abuse Therapy",
      "Family Therapy",
      "Trauma Recovery for Exiled Beings",
    ],
    residentialOnlyServices: [
      "Inpatient Crisis Care for Mythical Beings",
      "Long-Term Rehabilitative Housing",
      "24/7 Royal Crisis Intervention",
      "Magical Healing Therapies",
    ],
    serviceTypes: [
      "Mental Health Counseling",
      "Substance Abuse Therapy",
      "Trauma Recovery",
      "Crisis Intervention",
      "Rehabilitative Housing",
      "Magical Healing Therapies",
    ],
    fundingSources: [
      {
        grantName: "Aslan's Wellness Fund",
        yearlyAmount: 600000,
        servicesCovered: [
          "Mental Health Counseling",
          "Magical Healing Therapies",
        ],
      },
      {
        grantName: "Narnian Crisis Recovery Initiative",
        yearlyAmount: 500000,
        servicesCovered: ["Crisis Intervention", "Inpatient Crisis Care"],
      },
      {
        grantName: "Western Woods Family Aid Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Family Therapy", "Rehabilitative Housing"],
      },
    ],
    totalYearlyFunding: 1500000,
    contactInfo: {
      webAddress: "www.narniarestoration.nr",
      phoneNumber: "1-800-ASLAN-CARE",
      contacts: {
        executiveDirector: {
          name: "Aslan",
          email: "aslan@narniarestoration.nr",
        },
        financeDirector: {
          name: "Edmund Pevensie",
          email: "edmund@narniarestoration.nr",
        },
        programManager: {
          name: "Lucy Pevensie",
          email: "lucy@narniarestoration.nr",
        },
      },
    },
  },
  {
    id: 24,
    name: "Dimension X Recovery Facility",
    description:
      "The Dimension X Recovery Facility, located in the infamous Technodrome, provides advanced mental health and trauma recovery services for interdimensional beings. Overseen by Kraang Prime, Shredder, and Bebop, the facility offers both residential and outpatient care, including portal stabilization therapy and crisis recovery for those affected by dimensional shifts. Supported by Kraang's Mental Wellness Fund and the Dimension X Crisis Recovery Fund, this facility is a lifeline for beings from across the Multi-Dimensional Realms.",
    taxNumber: "TAX-998877554",
    shipTo: {
      address: "Technodrome, Dimension X",
      city: "Portal City",
      state: "Dimension X",
      zip: "55678",
    },
    billTo: {
      address: "Kraang's Headquarters, Dark Portal",
      city: "Portal City",
      state: "Dimension X",
      zip: "55679",
    },
    coverage: {
      district: "Outer Dimension X",
      region: "Multi-Dimensional Realms",
    },
    maxCapacity: 400,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Multi-Dimensional Mental Health Therapy",
      "Outpatient Substance Abuse Counseling",
      "Family Therapy for Interdimensional Beings",
      "Trauma Recovery and Stabilization",
    ],
    residentialOnlyServices: [
      "Inpatient Crisis Recovery for Interdimensional Beings",
      "Long-Term Rehabilitative Housing",
      "24/7 Portal Stabilization Therapy",
      "Kraang's Advanced Power Restoration",
    ],
    serviceTypes: [
      "Mental Health Therapy",
      "Substance Abuse Counseling",
      "Family Therapy",
      "Trauma Recovery",
      "Crisis Recovery",
      "Power Restoration",
    ],
    fundingSources: [
      {
        grantName: "Kraang's Mental Wellness Fund",
        yearlyAmount: 800000,
        servicesCovered: ["Mental Health Therapy", "Power Restoration"],
      },
      {
        grantName: "Dimension X Crisis Recovery Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Crisis Recovery", "Trauma Recovery"],
      },
      {
        grantName: "Interdimensional Family Aid",
        yearlyAmount: 500000,
        servicesCovered: ["Family Therapy", "Substance Abuse Counseling"],
      },
    ],
    totalYearlyFunding: 1900000,
    contactInfo: {
      webAddress: "www.dimensionxrecovery.dx",
      phoneNumber: "1-888-KRAANG-HELP",
      contacts: {
        executiveDirector: {
          name: "Kraang Prime",
          email: "kraangprime@dimensionxrecovery.dx",
        },
        financeDirector: {
          name: "Shredder",
          email: "shredder@dimensionxrecovery.dx",
        },
        programManager: {
          name: "Bebop",
          email: "bebop@dimensionxrecovery.dx",
        },
      },
    },
  },
  {
    id: 25,
    name: "Atlantica Counseling and Wellness",
    description:
      "Atlantica Counseling and Wellness, based in King Triton's Palace, provides specialized outpatient services for the underwater inhabitants of the Oceanic Realm. Led by King Triton, Sebastian, and Ariel, the center offers family therapy, mental health counseling, and substance abuse support, including home visit therapy sessions for underwater dwellers. With funding from Triton's Wellness Fund and the Oceanic Substance Recovery Grant, Atlantica Counseling and Wellness is a key resource for mental health and family support in the Underwater Kingdom.",
    taxNumber: "TAX-334477889",
    shipTo: {
      address: "King Triton's Palace, Atlantica",
      city: "Atlantica",
      state: "Underwater Kingdom",
      zip: "22100",
    },
    billTo: {
      address: "Coral Court, Pearl Reef",
      city: "Atlantica",
      state: "Underwater Kingdom",
      zip: "22101",
    },
    coverage: {
      district: "Oceanic Realm",
      region: "Underwater Kingdom",
    },
    maxCapacity: 150,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Outpatient Mental Health Counseling",
      "Family Therapy for Underwater Dwellers",
      "Scheduled Substance Abuse Support",
      "Home Visits for Therapy Sessions",
    ],
    residentialOnlyServices: [],
    serviceTypes: [
      "Mental Health Counseling",
      "Family Therapy",
      "Substance Abuse Support",
      "Home Visit Therapy",
    ],
    fundingSources: [
      {
        grantName: "Triton's Wellness Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Mental Health Counseling", "Family Therapy"],
      },
      {
        grantName: "Oceanic Substance Recovery Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Substance Abuse Support"],
      },
      {
        grantName: "Underwater Dwellers' Family Aid",
        yearlyAmount: 300000,
        servicesCovered: ["Home Visit Therapy"],
      },
    ],
    totalYearlyFunding: 1200000,
    contactInfo: {
      webAddress: "www.atlanticawellness.oce",
      phoneNumber: "1-888-TRITON-HELP",
      contacts: {
        executiveDirector: {
          name: "King Triton",
          email: "triton@atlanticawellness.oce",
        },
        financeDirector: {
          name: "Sebastian",
          email: "sebastian@atlanticawellness.oce",
        },
        programManager: {
          name: "Ariel",
          email: "ariel@atlanticawellness.oce",
        },
      },
    },
  },
  {
    id: 26,
    name: "Emerald City Family Support",
    description:
      "Emerald City Family Support, located in the heart of the Land of Oz, provides vital mental health and family therapy services to the Munchkinland region. Under the leadership of the Wizard of Oz, Glinda the Good Witch, and Scarecrow, the center offers outpatient counseling, substance abuse support, and home visit therapy. Supported by the Wizard's Mental Health Grant and Glinda's Family Aid Grant, Emerald City Family Support is a crucial provider of wellness services for the residents of Oz.",
    taxNumber: "TAX-778822113",
    shipTo: {
      address: "Wizard's Tower, Emerald City",
      city: "Emerald City",
      state: "Land of Oz",
      zip: "66778",
    },
    billTo: {
      address: "Glinda's Sanctuary, North Quadrant",
      city: "Emerald City",
      state: "Land of Oz",
      zip: "66779",
    },
    coverage: {
      district: "Munchkinland Region",
      region: "Land of Oz",
    },
    maxCapacity: 200,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Family Therapy Sessions",
      "Scheduled Mental Health Screenings",
      "Home Visit Counseling",
      "Substance Abuse Counseling for Munchkins",
    ],
    residentialOnlyServices: [],
    serviceTypes: [
      "Family Therapy",
      "Mental Health Screenings",
      "Home Visit Counseling",
      "Substance Abuse Counseling",
    ],
    fundingSources: [
      {
        grantName: "Wizard's Mental Health Grant",
        yearlyAmount: 600000,
        servicesCovered: ["Mental Health Screenings", "Family Therapy"],
      },
      {
        grantName: "Munchkinland Substance Recovery Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Substance Abuse Counseling"],
      },
      {
        grantName: "Glinda's Family Aid Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Home Visit Counseling"],
      },
    ],
    totalYearlyFunding: 1400000,
    contactInfo: {
      webAddress: "www.emeraldcitysupport.oz",
      phoneNumber: "1-800-WIZARD-HELP",
      contacts: {
        executiveDirector: {
          name: "Wizard of Oz",
          email: "wizard@emeraldcitysupport.oz",
        },
        financeDirector: {
          name: "Glinda the Good Witch",
          email: "glinda@emeraldcitysupport.oz",
        },
        programManager: {
          name: "Scarecrow",
          email: "scarecrow@emeraldcitysupport.oz",
        },
      },
    },
  },
  {
    id: 27,
    name: "Neverland Counseling & Therapy",
    description:
      "Neverland Counseling & Therapy provides essential mental health and family counseling services to the children and residents of Neverland. Led by Peter Pan, Captain Hook, and Tinker Bell, the center offers outpatient care, including home visits for troubled youth and substance abuse therapy. Supported by the Neverland Family Support Fund and Lost Boys Therapy Aid, this center focuses on helping lost children and families find healing in the Enchanted Forest.",
    taxNumber: "TAX-665577334",
    shipTo: {
      address: "Lost Boys' Hideout, Neverland Forest",
      city: "Neverland",
      state: "Fantasy Realm",
      zip: "99988",
    },
    billTo: {
      address: "Pirate Cove, Jolly Roger Dock",
      city: "Neverland",
      state: "Fantasy Realm",
      zip: "99989",
    },
    coverage: {
      district: "Enchanted Forest",
      region: "Neverland",
    },
    maxCapacity: 120,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Family Counseling for Lost Children",
      "Scheduled Mental Health Support",
      "Home Visits for Troubled Youth",
      "Outpatient Substance Abuse Therapy",
    ],
    residentialOnlyServices: [],
    serviceTypes: [
      "Family Counseling",
      "Mental Health Support",
      "Home Visit Therapy",
      "Substance Abuse Therapy",
    ],
    fundingSources: [
      {
        grantName: "Neverland Family Support Fund",
        yearlyAmount: 400000,
        servicesCovered: ["Family Counseling", "Mental Health Support"],
      },
      {
        grantName: "Enchanted Recovery Initiative",
        yearlyAmount: 350000,
        servicesCovered: ["Substance Abuse Therapy"],
      },
      {
        grantName: "Lost Boys Therapy Aid",
        yearlyAmount: 250000,
        servicesCovered: ["Home Visit Therapy"],
      },
    ],
    totalYearlyFunding: 1000000,
    contactInfo: {
      webAddress: "www.neverlandtherapy.nvr",
      phoneNumber: "1-800-NEVER-HELP",
      contacts: {
        executiveDirector: {
          name: "Peter Pan",
          email: "peter@neverlandtherapy.nvr",
        },
        financeDirector: {
          name: "Captain Hook",
          email: "hook@neverlandtherapy.nvr",
        },
        programManager: {
          name: "Tinker Bell",
          email: "tink@neverlandtherapy.nvr",
        },
      },
    },
  },
  {
    id: 28,
    name: "Wonderland Support Services",
    description:
      "Wonderland Support Services offers mental health and emotional support to the whimsical inhabitants of Wonderland. Led by the Queen of Hearts, Mad Hatter, and Cheshire Cat, the center provides outpatient therapy, family counseling, and home visits for emotional support. With funding from the Queen's Heart Fund and Mad Hatter's Emotional Wellness Grant, Wonderland Support Services is a key resource for mental health care in the Royal Gardens of Wonderland.",
    taxNumber: "TAX-556677221",
    shipTo: {
      address: "Queen's Castle, Wonderland",
      city: "Wonderland",
      state: "Dream Realm",
      zip: "44567",
    },
    billTo: {
      address: "Mad Hatter's Tea Garden, Wonderland",
      city: "Wonderland",
      state: "Dream Realm",
      zip: "44568",
    },
    coverage: {
      district: "Royal Gardens",
      region: "Wonderland",
    },
    maxCapacity: 180,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Scheduled Mental Health Checkups",
      "Outpatient Therapy for Wonderland Inhabitants",
      "Family Counseling",
      "Home Visits for Emotional Support",
    ],
    residentialOnlyServices: [],
    serviceTypes: [
      "Mental Health Checkups",
      "Outpatient Therapy",
      "Family Counseling",
      "Emotional Support Home Visits",
    ],
    fundingSources: [
      {
        grantName: "Queen's Heart Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Mental Health Checkups", "Family Counseling"],
      },
      {
        grantName: "Wonderland Therapy Support",
        yearlyAmount: 400000,
        servicesCovered: ["Outpatient Therapy"],
      },
      {
        grantName: "Mad Hatter's Emotional Wellness Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Emotional Support Home Visits"],
      },
    ],
    totalYearlyFunding: 1200000,
    contactInfo: {
      webAddress: "www.wonderlandsupport.wnd",
      phoneNumber: "1-888-QUEEN-HELP",
      contacts: {
        executiveDirector: {
          name: "Queen of Hearts",
          email: "queen@wonderlandsupport.wnd",
        },
        financeDirector: {
          name: "Mad Hatter",
          email: "hatter@wonderlandsupport.wnd",
        },
        programManager: {
          name: "Cheshire Cat",
          email: "cheshire@wonderlandsupport.wnd",
        },
      },
    },
  },
  {
    id: 31,
    name: "Starhaven Trauma & Recovery Center",
    description:
      "Starhaven Trauma & Recovery Center offers vital services for abuse victims and those in need of crisis support across the Outer Galaxy. Led by Nova Prime, Gamora, and Drax, the center provides both residential and outpatient care, focusing on trauma recovery, substance abuse detox, and long-term rehabilitation. Supported by the Starhaven Trauma Recovery Fund and the Outer Galaxy Family Support initiative, this facility is a lifeline for individuals seeking recovery and mental health support in the Starhaven Region.",
    taxNumber: "TAX-556677889",
    shipTo: {
      address: "Nebula Plaza, Starhaven",
      city: "Starhaven",
      state: "Outer Galaxy",
      zip: "98765",
    },
    billTo: {
      address: "Shooting Star Lane, Healing Quarters",
      city: "Starhaven",
      state: "Outer Galaxy",
      zip: "98766",
    },
    coverage: {
      district: "Starhaven Region",
      region: "Outer Galaxy",
    },
    maxCapacity: 400,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Outpatient Therapy for Abuse Victims",
      "Substance Abuse Counseling",
      "Family Counseling",
      "Scheduled Mental Health Support",
    ],
    residentialOnlyServices: [
      "Residential Trauma Recovery",
      "24/7 Substance Abuse Detox",
      "Long-Term Abuse Rehabilitation",
      "Inpatient Crisis Support",
    ],
    serviceTypes: [
      "Trauma Recovery",
      "Substance Abuse Detox",
      "Abuse Rehabilitation",
      "Crisis Support",
      "Mental Health Support",
      "Family Counseling",
    ],
    fundingSources: [
      {
        grantName: "Starhaven Trauma Recovery Fund",
        yearlyAmount: 900000,
        servicesCovered: ["Trauma Recovery", "Crisis Support"],
      },
      {
        grantName: "Substance Detox Initiative",
        yearlyAmount: 600000,
        servicesCovered: ["Substance Abuse Detox", "Abuse Rehabilitation"],
      },
      {
        grantName: "Outer Galaxy Family Support",
        yearlyAmount: 500000,
        servicesCovered: ["Family Counseling", "Mental Health Support"],
      },
    ],
    totalYearlyFunding: 2000000,
    contactInfo: {
      webAddress: "www.starhavenrecovery.og",
      phoneNumber: "1-888-STAR-CARE",
      contacts: {
        executiveDirector: {
          name: "Nova Prime",
          email: "novaprime@starhavenrecovery.og",
        },
        financeDirector: {
          name: "Gamora",
          email: "gamora@starhavenrecovery.og",
        },
        programManager: {
          name: "Drax",
          email: "drax@starhavenrecovery.og",
        },
      },
    },
  },
  {
    id: 32,
    name: "Helios Substance Abuse & Trauma Center",
    description:
      "Helios Substance Abuse & Trauma Center, situated in the bright city of Dawn, provides crucial services for trauma victims and those dealing with substance abuse across the Inner Solar System. Led by Helios Prime, Apollo, and Eos, the center offers both outpatient and residential care, including substance detox, mental health counseling, and crisis support for severe cases. Backed by the Helios Trauma Recovery Fund and the Inner Solar Substance Recovery Grant, this facility is a beacon of hope for individuals in need of long-term recovery and mental health support.",
    taxNumber: "TAX-112233445",
    shipTo: {
      address: "Helios Heights, Dawn City",
      city: "Helios",
      state: "Inner Solar System",
      zip: "12345",
    },
    billTo: {
      address: "Sunlight District, Healing Towers",
      city: "Helios",
      state: "Inner Solar System",
      zip: "12346",
    },
    coverage: {
      district: "Dawn City",
      region: "Inner Solar System",
    },
    maxCapacity: 350,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Outpatient Substance Abuse Therapy",
      "Family Therapy for Trauma Victims",
      "Mental Health Counseling",
      "Abuse Victim Support Sessions",
    ],
    residentialOnlyServices: [
      "24/7 Substance Abuse Detox",
      "Long-Term Trauma Recovery",
      "Inpatient Rehabilitation for Abuse Victims",
      "Crisis Support for Severe Cases",
    ],
    serviceTypes: [
      "Substance Abuse Detox",
      "Trauma Recovery",
      "Abuse Rehabilitation",
      "Crisis Support",
      "Mental Health Counseling",
      "Family Therapy",
    ],
    fundingSources: [
      {
        grantName: "Helios Trauma Recovery Fund",
        yearlyAmount: 800000,
        servicesCovered: ["Trauma Recovery", "Crisis Support"],
      },
      {
        grantName: "Inner Solar Substance Recovery Grant",
        yearlyAmount: 600000,
        servicesCovered: ["Substance Abuse Detox", "Abuse Rehabilitation"],
      },
      {
        grantName: "Helios Family Therapy Support",
        yearlyAmount: 400000,
        servicesCovered: ["Family Therapy", "Mental Health Counseling"],
      },
    ],
    totalYearlyFunding: 1800000,
    contactInfo: {
      webAddress: "www.heliosrecovery.is",
      phoneNumber: "1-888-HELIOS-CARE",
      contacts: {
        executiveDirector: {
          name: "Helios Prime",
          email: "heliosprime@heliosrecovery.is",
        },
        financeDirector: {
          name: "Apollo",
          email: "apollo@heliosrecovery.is",
        },
        programManager: {
          name: "Eos",
          email: "eos@heliosrecovery.is",
        },
      },
    },
  },
  {
    id: 33,
    name: "Aurora Trauma & Recovery Center",
    description:
      "Aurora Trauma & Recovery Center, located in the serene Skylands region, offers comprehensive trauma and recovery services to individuals in need of crisis intervention and long-term care. Led by Aurora Sky, Nimbus Cloud, and Zephyr Wind, the center provides both outpatient and residential services, including substance detox, abuse rehabilitation, and family counseling. Supported by the Skylands Trauma Recovery Fund and the Skyhaven Family Support Fund, this facility plays a pivotal role in helping individuals overcome trauma and rebuild their lives in the Skyhaven region.",
    taxNumber: "TAX-667788112",
    shipTo: {
      address: "Aurora Peak, Skylands",
      city: "Skyhaven",
      state: "Skylands",
      zip: "23456",
    },
    billTo: {
      address: "Cloud Heights, Healing Gardens",
      city: "Skyhaven",
      state: "Skylands",
      zip: "23457",
    },
    coverage: {
      district: "Skyhaven Region",
      region: "Skylands",
    },
    maxCapacity: 400,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Outpatient Trauma Therapy",
      "Substance Abuse Counseling",
      "Scheduled Family Counseling",
      "Mental Health Checkups",
    ],
    residentialOnlyServices: [
      "Inpatient Trauma Recovery",
      "24/7 Substance Detox",
      "Residential Abuse Rehabilitation",
      "Crisis Intervention for Abuse Victims",
    ],
    serviceTypes: [
      "Trauma Recovery",
      "Substance Detox",
      "Abuse Rehabilitation",
      "Crisis Intervention",
      "Mental Health Support",
      "Family Counseling",
    ],
    fundingSources: [
      {
        grantName: "Skylands Trauma Recovery Fund",
        yearlyAmount: 850000,
        servicesCovered: ["Trauma Recovery", "Crisis Intervention"],
      },
      {
        grantName: "Substance Detox Initiative",
        yearlyAmount: 600000,
        servicesCovered: ["Substance Detox", "Abuse Rehabilitation"],
      },
      {
        grantName: "Skyhaven Family Support Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Family Counseling", "Mental Health Support"],
      },
    ],
    totalYearlyFunding: 1950000,
    contactInfo: {
      webAddress: "www.auroratraumacenter.sl",
      phoneNumber: "1-888-SKY-CARE",
      contacts: {
        executiveDirector: {
          name: "Aurora Sky",
          email: "aurora@auroratraumacenter.sl",
        },
        financeDirector: {
          name: "Nimbus Cloud",
          email: "nimbus@auroratraumacenter.sl",
        },
        programManager: {
          name: "Zephyr Wind",
          email: "zephyr@auroratraumacenter.sl",
        },
      },
    },
  },
  {
    id: 34,
    name: "Everglade Trauma & Substance Recovery",
    description:
      "Everglade Trauma & Substance Recovery, nestled in the serene Enchanted Forest, offers comprehensive support to trauma survivors and those battling substance abuse. With a peaceful location in Everglade Valley, the center, led by Evangeline Moss, Willow Brook, and Briar Thorn, provides both outpatient and residential services, including detox, abuse recovery, and crisis support. Funded by the Everglade Trauma Recovery Grant and the Substance Recovery Initiative, this facility is dedicated to providing long-term rehabilitation and mental health care for individuals in need of healing in the tranquil Everglade region.",
    taxNumber: "TAX-998877221",
    shipTo: {
      address: "Healing Springs, Everglade Valley",
      city: "Everglade",
      state: "Enchanted Forest",
      zip: "33445",
    },
    billTo: {
      address: "Whispering Falls, Serenity Grove",
      city: "Everglade",
      state: "Enchanted Forest",
      zip: "33446",
    },
    coverage: {
      district: "Everglade Region",
      region: "Enchanted Forest",
    },
    maxCapacity: 300,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Outpatient Trauma Counseling",
      "Substance Abuse Support",
      "Family Therapy for Abuse Victims",
      "Mental Health Screenings",
    ],
    residentialOnlyServices: [
      "24/7 Substance Detox for Abuse Survivors",
      "Inpatient Abuse Recovery",
      "Long-Term Residential Rehabilitation",
      "Crisis Support for Trauma Victims",
    ],
    serviceTypes: [
      "Substance Detox",
      "Abuse Recovery",
      "Trauma Counseling",
      "Crisis Support",
      "Family Therapy",
      "Mental Health Screenings",
    ],
    fundingSources: [
      {
        grantName: "Everglade Trauma Recovery Grant",
        yearlyAmount: 700000,
        servicesCovered: ["Trauma Counseling", "Crisis Support"],
      },
      {
        grantName: "Substance Recovery Initiative",
        yearlyAmount: 500000,
        servicesCovered: ["Substance Detox", "Abuse Recovery"],
      },
      {
        grantName: "Enchanted Family Support Fund",
        yearlyAmount: 450000,
        servicesCovered: ["Family Therapy", "Mental Health Screenings"],
      },
    ],
    totalYearlyFunding: 1650000,
    contactInfo: {
      webAddress: "www.evergladerecovery.enf",
      phoneNumber: "1-800-GLADE-CARE",
      contacts: {
        executiveDirector: {
          name: "Evangeline Moss",
          email: "evangeline@evergladerecovery.enf",
        },
        financeDirector: {
          name: "Willow Brook",
          email: "willow@evergladerecovery.enf",
        },
        programManager: {
          name: "Briar Thorn",
          email: "briar@evergladerecovery.enf",
        },
      },
    },
  },
  {
    id: 35,
    name: "Kessel Detention & Reformation Facility",
    description:
      "Located on the remote planet of Kessel, this detention facility is renowned for its efforts in rehabilitating galactic offenders, especially those involved in spice-related crimes. Managed by Warden Jarek, finance director Galen Marek, and program manager Lando Calrissian, the facility offers both residential and appointment-only services, ranging from workforce readiness programs to substance detox for spice miners. Supported by the Galactic Justice Fund and the Outer Rim Crime Prevention Fund, Kessel Detention & Reformation Facility focuses on reformation, mental health support, and crisis intervention for intergalactic criminals.",
    taxNumber: "TAX-112233667",
    shipTo: {
      address: "Spice Mines, Kessel Planet",
      city: "Kessel",
      state: "Outer Rim",
      zip: "99887",
    },
    billTo: {
      address: "Reformation Headquarters, Kessel",
      city: "Kessel",
      state: "Outer Rim",
      zip: "99888",
    },
    coverage: {
      district: "Kessel Sector",
      region: "Outer Rim",
    },
    maxCapacity: 500,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Scheduled Parole Counseling",
      "Workforce Readiness Programs",
      "Mental Health Checkups for Galactic Offenders",
      "Substance Abuse Support for Spice Miners",
    ],
    residentialOnlyServices: [
      "Inmate Substance Detox",
      "24/7 Galactic Crime Reformation",
      "Long-Term Detention for Spice-Related Crimes",
      "Crisis Intervention for Intergalactic Offenders",
    ],
    serviceTypes: [
      "Crime Reformation",
      "Substance Detox",
      "Workforce Readiness",
      "Crisis Intervention",
      "Mental Health Counseling",
    ],
    fundingSources: [
      {
        grantName: "Galactic Justice Fund",
        yearlyAmount: 900000,
        servicesCovered: ["Crime Reformation", "Workforce Readiness"],
      },
      {
        grantName: "Kessel Detox Initiative",
        yearlyAmount: 700000,
        servicesCovered: ["Substance Detox", "Mental Health Counseling"],
      },
      {
        grantName: "Outer Rim Crime Prevention Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Crisis Intervention"],
      },
    ],
    totalYearlyFunding: 2200000,
    contactInfo: {
      webAddress: "www.kesseldetention.or",
      phoneNumber: "1-800-KES-REFORM",
      contacts: {
        executiveDirector: {
          name: "Warden Jarek",
          email: "warden@kesseldetention.or",
        },
        financeDirector: {
          name: "Galen Marek",
          email: "galen@kesseldetention.or",
        },
        programManager: {
          name: "Lando Calrissian",
          email: "lando@kesseldetention.or",
        },
      },
    },
  },
  {
    id: 36,
    name: "Phantom Zone Containment Facility",
    description:
      "The Phantom Zone Containment Facility is a high-security prison located in the Krypton Dimension, specifically designed for interdimensional criminals and those who have committed dimensional crimes. Overseen by General Zod, with Ursa managing finances and Non directing programs, the facility specializes in containment, energy drain control, and mental health therapy for its inmates. Supported by the Phantom Dimension Containment Fund and the Krypton Offender Reformation Fund, it offers both residential and appointment-based services, focusing on long-term confinement, energy control, and reformation programs for some of the galaxy's most notorious offenders.",
    taxNumber: "TAX-778899554",
    shipTo: {
      address: "Containment Zone, Phantom Realm",
      city: "Phantom Zone",
      state: "Krypton Dimension",
      zip: "44332",
    },
    billTo: {
      address: "Zod's Detention Command, Fortress",
      city: "Phantom Zone",
      state: "Krypton Dimension",
      zip: "44333",
    },
    coverage: {
      district: "Phantom Sector",
      region: "Krypton Dimension",
    },
    maxCapacity: 400,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Parole Review Sessions",
      "Scheduled Energy Drain Control Counseling",
      "Outpatient Reformation Programs",
      "Galactic Offender Mental Health Checkups",
    ],
    residentialOnlyServices: [
      "Long-Term Confinement for Dimensional Crimes",
      "24/7 Inmate Energy Drain Containment",
      "Inpatient Crisis Intervention for Dimensional Offenders",
      "Mental Health Therapy for Interdimensional Criminals",
    ],
    serviceTypes: [
      "Confinement for Dimensional Crimes",
      "Energy Drain Control",
      "Crisis Intervention",
      "Mental Health Therapy",
      "Parole Counseling",
    ],
    fundingSources: [
      {
        grantName: "Phantom Dimension Containment Fund",
        yearlyAmount: 850000,
        servicesCovered: ["Energy Drain Control", "Crisis Intervention"],
      },
      {
        grantName: "Krypton Offender Reformation Fund",
        yearlyAmount: 750000,
        servicesCovered: [
          "Confinement for Dimensional Crimes",
          "Parole Counseling",
        ],
      },
      {
        grantName: "Dimensional Crisis Aid",
        yearlyAmount: 600000,
        servicesCovered: ["Mental Health Therapy"],
      },
    ],
    totalYearlyFunding: 2200000,
    contactInfo: {
      webAddress: "www.phantomzoneprison.kp",
      phoneNumber: "1-888-PHANTOM-JUSTICE",
      contacts: {
        executiveDirector: {
          name: "General Zod",
          email: "zod@phantomzoneprison.kp",
        },
        financeDirector: {
          name: "Ursa",
          email: "ursa@phantomzoneprison.kp",
        },
        programManager: {
          name: "Non",
          email: "non@phantomzoneprison.kp",
        },
      },
    },
  },
  {
    id: 37,
    name: "Shadow Realm Detention Complex",
    description:
      "The Shadow Realm Detention Complex is a formidable facility located in the Netherworld, designed for the containment and rehabilitation of individuals convicted of dark energy crimes. Overseen by Lord Vortex, with Mistress Nyx handling finances and Raven Darkmoon managing rehabilitation programs, the complex focuses on energy control therapy and mental health treatment for shadow criminals. Backed by the Netherworld Energy Control Fund and the Shadow Realm Criminal Reform Fund, the facility offers both residential and outpatient services, including dark energy suppression, parole hearings, and crisis intervention for offenders from across dimensional realms.",
    taxNumber: "TAX-998877443",
    shipTo: {
      address: "Dark Citadel, Shadow Mountain",
      city: "Shadow Realm",
      state: "Netherworld",
      zip: "66677",
    },
    billTo: {
      address: "Dread Fortress, Obsidian Plains",
      city: "Shadow Realm",
      state: "Netherworld",
      zip: "66678",
    },
    coverage: {
      district: "Netherworld Region",
      region: "Shadow Realm",
    },
    maxCapacity: 450,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Parole Hearings for Shadow Criminals",
      "Scheduled Dark Energy Control Therapy",
      "Outpatient Reformation Programs for Minions",
      "Mental Health Checkups for Netherworld Offenders",
    ],
    residentialOnlyServices: [
      "Long-Term Detainment for Dark Energy Crimes",
      "24/7 Energy Suppression and Control",
      "Inpatient Rehabilitation for Shadow Minions",
      "Crisis Intervention for Dimensional Offenders",
    ],
    serviceTypes: [
      "Dark Energy Crime Detainment",
      "Energy Control Therapy",
      "Crisis Intervention",
      "Mental Health Therapy",
      "Parole Counseling",
    ],
    fundingSources: [
      {
        grantName: "Netherworld Energy Control Fund",
        yearlyAmount: 800000,
        servicesCovered: ["Energy Control Therapy", "Crisis Intervention"],
      },
      {
        grantName: "Shadow Realm Criminal Reform Fund",
        yearlyAmount: 700000,
        servicesCovered: ["Dark Energy Crime Detainment", "Parole Counseling"],
      },
      {
        grantName: "Dimensional Crisis Rehabilitation Fund",
        yearlyAmount: 600000,
        servicesCovered: ["Mental Health Therapy", "Inpatient Rehabilitation"],
      },
    ],
    totalYearlyFunding: 2100000,
    contactInfo: {
      webAddress: "www.shadowrealmprison.nw",
      phoneNumber: "1-888-SHADOW-JUSTICE",
      contacts: {
        executiveDirector: {
          name: "Lord Vortex",
          email: "vortex@shadowrealmprison.nw",
        },
        financeDirector: {
          name: "Mistress Nyx",
          email: "nyx@shadowrealmprison.nw",
        },
        programManager: {
          name: "Raven Darkmoon",
          email: "raven@shadowrealmprison.nw",
        },
      },
    },
  },
  {
    id: 38,
    name: "Pandora Exile Detention Facility",
    description:
      "Located in the breathtaking yet remote Floating Mountains of Pandora, the Pandora Exile Detention Facility is dedicated to reforming Na'vi exiles and individuals convicted of sky-related crimes. With Commander Tsahik at the helm, Colonel Quaritch overseeing finances, and Neytiri managing reformation programs, the facility provides both residential and outpatient services. It specializes in offender reformation, mental health support, and trauma counseling for high-risk detainees. Backed by the Pandora Sky Reformation Fund and the Alpha Centauri Mental Health Initiative, the center offers a path to rehabilitation and parole for its detainees, guiding them toward reintegration.",
    taxNumber: "TAX-334455667",
    shipTo: {
      address: "Exile's Ridge, Floating Mountains",
      city: "Pandora",
      state: "Alpha Centauri",
      zip: "44556",
    },
    billTo: {
      address: "Prison of the Sky, Ikran Nest",
      city: "Pandora",
      state: "Alpha Centauri",
      zip: "44557",
    },
    coverage: {
      district: "Floating Mountain Region",
      region: "Pandora",
    },
    maxCapacity: 350,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Parole Review for Sky Crimes",
      "Scheduled Mental Health Support for Exiled Na'vi",
      "Outpatient Rehabilitation for Offenders",
      "Counseling for Airborne Offense Reformation",
    ],
    residentialOnlyServices: [
      "24/7 Detainment for Sky Crimes",
      "Inpatient Recovery for Exiled Na'vi",
      "Long-Term Reformation for Airborne Offenders",
      "Trauma Counseling for High-Risk Detainees",
    ],
    serviceTypes: [
      "Sky Crime Detainment",
      "Offender Reformation",
      "Trauma Counseling",
      "Mental Health Support",
      "Parole Counseling",
    ],
    fundingSources: [
      {
        grantName: "Pandora Sky Reformation Fund",
        yearlyAmount: 750000,
        servicesCovered: ["Offender Reformation", "Sky Crime Detainment"],
      },
      {
        grantName: "Alpha Centauri Mental Health Initiative",
        yearlyAmount: 600000,
        servicesCovered: ["Mental Health Support", "Trauma Counseling"],
      },
      {
        grantName: "Exile Offender Rehabilitation Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Parole Counseling"],
      },
    ],
    totalYearlyFunding: 1850000,
    contactInfo: {
      webAddress: "www.pandoradetention.ac",
      phoneNumber: "1-800-PANDORA-JUSTICE",
      contacts: {
        executiveDirector: {
          name: "Commander Tsahik",
          email: "tsahik@pandoradetention.ac",
        },
        financeDirector: {
          name: "Colonel Quaritch",
          email: "quaritch@pandoradetention.ac",
        },
        programManager: {
          name: "Neytiri",
          email: "neytiri@pandoradetention.ac",
        },
      },
    },
  },
  {
    id: 39,
    name: "Valhalla Detention and Warrior Reformation",
    description:
      "Valhalla Detention and Warrior Reformation stands as a sanctuary of honor and justice for warriors who have faltered in their celestial duties. Located within the revered Halls of Valhalla, it offers specialized services aimed at rehabilitating those convicted of celestial crimes or suffering from battle fatigue. With Heimdall ensuring security and justice, Thor overseeing financial well-being, and Valkyrie leading reformation programs, this center offers long-term detention and crisis intervention for warriors. Backed by Odin's Celestial Wellness Grant and the Nine Realms Parole Initiative, it is dedicated to restoring honor and ensuring the mental well-being of inter-realm offenders.",
    taxNumber: "TAX-556677889",
    shipTo: {
      address: "Halls of Valhalla, Asgard",
      city: "Valhalla",
      state: "Nine Realms",
      zip: "66777",
    },
    billTo: {
      address: "Odin’s Palace, Bifrost Gate",
      city: "Valhalla",
      state: "Nine Realms",
      zip: "66778",
    },
    coverage: {
      district: "Valhalla Region",
      region: "Nine Realms",
    },
    maxCapacity: 500,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Warrior Mental Health Support",
      "Rehabilitation for Celestial Crimes",
      "Parole Hearings for Inter-Realm Offenders",
      "Scheduled Honor Restoration Counseling",
    ],
    residentialOnlyServices: [
      "Long-Term Detention for Warrior Misconduct",
      "24/7 Celestial Substance Detox",
      "Inpatient Crisis Intervention for Battle Fatigue",
      "Rehabilitation for Honor-Based Offenses",
    ],
    serviceTypes: [
      "Warrior Misconduct Detention",
      "Crisis Intervention",
      "Celestial Substance Detox",
      "Honor Restoration Counseling",
      "Mental Health Support",
    ],
    fundingSources: [
      {
        grantName: "Valhalla Warrior Reformation Fund",
        yearlyAmount: 900000,
        servicesCovered: ["Honor Restoration", "Misconduct Detention"],
      },
      {
        grantName: "Odin's Celestial Wellness Grant",
        yearlyAmount: 800000,
        servicesCovered: ["Crisis Intervention", "Substance Detox"],
      },
      {
        grantName: "Nine Realms Parole Initiative",
        yearlyAmount: 600000,
        servicesCovered: ["Parole Hearings", "Mental Health Support"],
      },
    ],
    totalYearlyFunding: 2300000,
    contactInfo: {
      webAddress: "www.valhalladetention.nr",
      phoneNumber: "1-888-VALHALLA-JUSTICE",
      contacts: {
        executiveDirector: {
          name: "Heimdall",
          email: "heimdall@valhalladetention.nr",
        },
        financeDirector: {
          name: "Thor",
          email: "thor@valhalladetention.nr",
        },
        programManager: {
          name: "Valkyrie",
          email: "valkyrie@valhalladetention.nr",
        },
      },
    },
  },
  {
    id: 40,
    name: "Tartarus Eternal Detainment Facility",
    description:
      "Tartarus Eternal Detainment Facility is the ultimate holding center for souls condemned to the underworld for major offenses. Located in the depths of the Underworld Abyss, this facility specializes in eternal detainment and rehabilitation of condemned souls, overseen by Hades himself. With Persephone managing financial resources and Cerberus ensuring order, the facility offers round-the-clock crisis support, mental health counseling, and trauma recovery for its inmates. Supported by the Underworld Detainment Fund and the River Styx Mental Wellness Fund, Tartarus provides both temporary and eternal reformation for the souls it houses.",
    taxNumber: "TAX-112244556",
    shipTo: {
      address: "Underworld Abyss, Gates of Tartarus",
      city: "Tartarus",
      state: "Underworld",
      zip: "88776",
    },
    billTo: {
      address: "Hades' Palace, River Styx",
      city: "Tartarus",
      state: "Underworld",
      zip: "88777",
    },
    coverage: {
      district: "Tartarus Region",
      region: "Underworld",
    },
    maxCapacity: 600,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Scheduled Parole Review for Eternal Offenders",
      "Mental Health Support for Condemned Souls",
      "Outpatient Therapy for Minor Underworld Crimes",
      "Crisis Counseling for Abyssal Offenders",
    ],
    residentialOnlyServices: [
      "Eternal Detainment for Major Underworld Offenses",
      "24/7 Rehabilitation for Condemned Souls",
      "Inpatient Crisis Support for Abyssal Prisoners",
      "Long-Term Trauma Recovery for Interdimensional Offenders",
    ],
    serviceTypes: [
      "Eternal Detainment",
      "Crisis Support",
      "Trauma Recovery",
      "Mental Health Counseling",
      "Parole Review",
    ],
    fundingSources: [
      {
        grantName: "Underworld Detainment Fund",
        yearlyAmount: 1000000,
        servicesCovered: ["Eternal Detainment", "Trauma Recovery"],
      },
      {
        grantName: "River Styx Mental Wellness Fund",
        yearlyAmount: 750000,
        servicesCovered: ["Crisis Support", "Mental Health Counseling"],
      },
      {
        grantName: "Hades' Parole Initiative",
        yearlyAmount: 600000,
        servicesCovered: ["Parole Review"],
      },
    ],
    totalYearlyFunding: 2350000,
    contactInfo: {
      webAddress: "www.tartarusdetainment.uw",
      phoneNumber: "1-888-HADES-CARE",
      contacts: {
        executiveDirector: {
          name: "Hades",
          email: "hades@tartarusdetainment.uw",
        },
        financeDirector: {
          name: "Persephone",
          email: "persephone@tartarusdetainment.uw",
        },
        programManager: {
          name: "Cerberus",
          email: "cerberus@tartarusdetainment.uw",
        },
      },
    },
  },
  {
    id: 41,
    name: "Neverland Juvenile Reformation Center",
    description:
      "The Neverland Juvenile Reformation Center is dedicated to helping enchanted youth reform their mischievous ways and control their magical abilities. Located deep in the Neverland Forest, this center offers a comprehensive rehabilitation program, from youth detainment for minor magical crimes to long-term behavioral therapy. With Peter Pan at the helm, alongside financial oversight by Captain Hook and program management by Wendy Darling, the center provides 24/7 inpatient care, magical control counseling, and crisis intervention. Families are also supported through the Lost Boys Family Support Grant, ensuring that every youth has the chance for a brighter, more responsible future.",
    taxNumber: "TAX-445566778",
    shipTo: {
      address: "Pixie Hollow, Neverland Forest",
      city: "Neverland",
      state: "Fantasy Realm",
      zip: "12345",
    },
    billTo: {
      address: "Lost Boys' Hideout, Enchanted Woods",
      city: "Neverland",
      state: "Fantasy Realm",
      zip: "12346",
    },
    coverage: {
      district: "Neverland Forest Region",
      region: "Fantasy Realm",
    },
    maxCapacity: 150,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Youth Parole Counseling for Mischief Crimes",
      "Scheduled Behavioral Therapy for Magic Misuse",
      "Outpatient Education for Enchanted Youth",
      "Family Support Sessions for Reformed Youth",
    ],
    residentialOnlyServices: [
      "24/7 Inpatient Behavioral Rehabilitation",
      "Long-Term Residential Care for Mischievous Youth",
      "Inpatient Magical Control Counseling",
      "Crisis Intervention for Youth with Magic Misuse",
    ],
    serviceTypes: [
      "Youth Detainment for Mischief Crimes",
      "Behavioral Rehabilitation",
      "Magical Control Counseling",
      "Crisis Intervention",
      "Family Support",
    ],
    fundingSources: [
      {
        grantName: "Neverland Youth Reformation Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Behavioral Rehabilitation", "Youth Detainment"],
      },
      {
        grantName: "Enchanted Magic Control Initiative",
        yearlyAmount: 400000,
        servicesCovered: ["Magical Control Counseling", "Crisis Intervention"],
      },
      {
        grantName: "Lost Boys Family Support Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Family Support"],
      },
    ],
    totalYearlyFunding: 1200000,
    contactInfo: {
      webAddress: "www.neverlandjuvenile.nvr",
      phoneNumber: "1-888-NEVER-JUV",
      contacts: {
        executiveDirector: {
          name: "Peter Pan",
          email: "peter@neverlandjuvenile.nvr",
        },
        financeDirector: {
          name: "Captain Hook",
          email: "hook@neverlandjuvenile.nvr",
        },
        programManager: {
          name: "Wendy Darling",
          email: "wendy@neverlandjuvenile.nvr",
        },
      },
    },
  },
  {
    id: 42,
    name: "Camelot Youth Reformation Academy",
    description:
      "The Camelot Youth Reformation Academy serves as a beacon of discipline and honor for troubled youth in the Medieval Realm. Nestled within the grand walls of Camelot, this academy provides structured reformation for young knights and magical offenders. King Arthur leads the charge, with Merlin offering financial guidance and Guinevere overseeing daily operations. The academy offers inpatient honor rehabilitation, magical offense reformation, and 24/7 crisis support for young knights, ensuring that even the most troubled youth have a path back to valor and responsibility.",
    taxNumber: "TAX-556677889",
    shipTo: {
      address: "Castle Courtyard, Camelot",
      city: "Camelot",
      state: "Medieval Realm",
      zip: "44567",
    },
    billTo: {
      address: "Knight’s Wing, Round Table Tower",
      city: "Camelot",
      state: "Medieval Realm",
      zip: "44568",
    },
    coverage: {
      district: "Camelot Kingdom",
      region: "Medieval Realm",
    },
    maxCapacity: 180,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Scheduled Honor Training for Young Knights",
      "Outpatient Swordplay and Discipline Classes",
      "Parole Counseling for Magical Misconduct",
      "Family Reformation Sessions",
    ],
    residentialOnlyServices: [
      "Inpatient Honor Rehabilitation for Troubled Youth",
      "24/7 Crisis Support for Young Knights",
      "Residential Magical Offense Reformation",
      "Long-Term Care for Medieval Youth Offenders",
    ],
    serviceTypes: [
      "Honor Rehabilitation",
      "Magical Offense Reformation",
      "Crisis Support for Youth",
      "Parole Counseling",
      "Family Reformation",
    ],
    fundingSources: [
      {
        grantName: "Camelot Honor Fund",
        yearlyAmount: 550000,
        servicesCovered: [
          "Honor Rehabilitation",
          "Magical Offense Reformation",
        ],
      },
      {
        grantName: "Round Table Youth Support Grant",
        yearlyAmount: 450000,
        servicesCovered: ["Crisis Support", "Parole Counseling"],
      },
      {
        grantName: "Knights' Family Aid Fund",
        yearlyAmount: 350000,
        servicesCovered: ["Family Reformation"],
      },
    ],
    totalYearlyFunding: 1350000,
    contactInfo: {
      webAddress: "www.camelotyouthreform.med",
      phoneNumber: "1-800-CAMELOT-JUV",
      contacts: {
        executiveDirector: {
          name: "King Arthur",
          email: "arthur@camelotyouthreform.med",
        },
        financeDirector: {
          name: "Merlin",
          email: "merlin@camelotyouthreform.med",
        },
        programManager: {
          name: "Guinevere",
          email: "guinevere@camelotyouthreform.med",
        },
      },
    },
  },
  {
    id: 43,
    name: "Atlantis Youth Rehabilitation Academy",
    description:
      "The Atlantis Youth Rehabilitation Academy is a state-of-the-art facility located in the ocean's depths, designed to provide comprehensive care and reformation for young merfolk and magical offenders in the Underwater Realm. With King Triton overseeing operations, the academy focuses on behavioral therapy, emotional control, and magical discipline. Both inpatient and outpatient services aim to reintegrate aquatic youth into society, guiding them through crisis intervention and family support. The academy's serene underwater setting offers a tranquil environment for healing and growth under the watchful leadership of Ariel and Sebastian.",
    taxNumber: "TAX-667788990",
    shipTo: {
      address: "Ocean Depths Facility, Triton’s Trench",
      city: "Atlantis",
      state: "Underwater Realm",
      zip: "88990",
    },
    billTo: {
      address: "Pearl Palace, Coral Garden",
      city: "Atlantis",
      state: "Underwater Realm",
      zip: "88991",
    },
    coverage: {
      district: "Deep Sea Region",
      region: "Underwater Realm",
    },
    maxCapacity: 140,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Outpatient Magical Discipline Counseling",
      "Scheduled Mermaid and Merman Conduct Classes",
      "Behavioral Therapy for Aquatic Youth",
      "Family Reintegration Support",
    ],
    residentialOnlyServices: [
      "24/7 Underwater Crisis Intervention",
      "Inpatient Rehabilitation for Aquatic Misconduct",
      "Long-Term Reformation for Magical Offenders",
      "Residential Emotional Control Therapy",
    ],
    serviceTypes: [
      "Aquatic Misconduct Detainment",
      "Magical Discipline Counseling",
      "Emotional Control Therapy",
      "Crisis Intervention",
      "Family Reintegration",
    ],
    fundingSources: [
      {
        grantName: "Triton’s Deep Sea Reformation Fund",
        yearlyAmount: 550000,
        servicesCovered: [
          "Aquatic Misconduct Detainment",
          "Emotional Control Therapy",
        ],
      },
      {
        grantName: "Coral Garden Behavioral Support Fund",
        yearlyAmount: 400000,
        servicesCovered: [
          "Magical Discipline Counseling",
          "Crisis Intervention",
        ],
      },
      {
        grantName: "Merfolk Family Reintegration Grant",
        yearlyAmount: 350000,
        servicesCovered: ["Family Reintegration"],
      },
    ],
    totalYearlyFunding: 1300000,
    contactInfo: {
      webAddress: "www.atlantisyouthacademy.ur",
      phoneNumber: "1-888-ATLANTIS-JUV",
      contacts: {
        executiveDirector: {
          name: "King Triton",
          email: "triton@atlantisyouthacademy.ur",
        },
        financeDirector: {
          name: "Ariel",
          email: "ariel@atlantisyouthacademy.ur",
        },
        programManager: {
          name: "Sebastian",
          email: "sebastian@atlantisyouthacademy.ur",
        },
      },
    },
  },
  {
    id: 44,
    name: "Emerald City Juvenile Reformation Center",
    description:
      "Emerald City Juvenile Reformation Center is a specialized facility in the heart of the Land of Oz, dedicated to reforming troubled youth with magical tendencies. Known for its structured therapy and counseling programs, the center focuses on guiding enchanted youth through the challenges of wizardry control and behavioral adjustment. Led by the Wizard of Oz, the center offers both inpatient and outpatient services, emphasizing rehabilitation for magical misuse and wand offenses. With Glinda and Dorothy overseeing family reformation sessions, the center provides comprehensive support for troubled Munchkins and other enchanted youth in need of crisis intervention.",
    taxNumber: "TAX-334455667",
    shipTo: {
      address: "Yellow Brick Road, Emerald City",
      city: "Emerald City",
      state: "Land of Oz",
      zip: "77654",
    },
    billTo: {
      address: "Wizard’s Tower, Royal District",
      city: "Emerald City",
      state: "Land of Oz",
      zip: "77655",
    },
    coverage: {
      district: "Emerald City Region",
      region: "Land of Oz",
    },
    maxCapacity: 160,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Scheduled Wizardry Control Therapy",
      "Outpatient Behavior Adjustment Classes",
      "Mental Health Counseling for Enchanted Youth",
      "Family Reformation Sessions for Troubled Munchkins",
    ],
    residentialOnlyServices: [
      "24/7 Detention for Magical Misuse",
      "Inpatient Therapy for Wayward Youth",
      "Long-Term Rehabilitation for Wand Offenses",
      "Crisis Support for Enchanted Youth",
    ],
    serviceTypes: [
      "Magical Misuse Detainment",
      "Wizardry Control Therapy",
      "Mental Health Counseling",
      "Rehabilitation for Wand Offenses",
      "Crisis Support",
    ],
    fundingSources: [
      {
        grantName: "Emerald City Youth Reformation Fund",
        yearlyAmount: 600000,
        servicesCovered: [
          "Magical Misuse Detainment",
          "Wizardry Control Therapy",
        ],
      },
      {
        grantName: "Wizard’s Mental Health Initiative",
        yearlyAmount: 450000,
        servicesCovered: ["Mental Health Counseling", "Crisis Support"],
      },
      {
        grantName: "Land of Oz Family Reformation Grant",
        yearlyAmount: 400000,
        servicesCovered: ["Family Reformation Sessions"],
      },
    ],
    totalYearlyFunding: 1450000,
    contactInfo: {
      webAddress: "www.emeraldcityjuv.lz",
      phoneNumber: "1-800-OZ-YOUTH",
      contacts: {
        executiveDirector: {
          name: "Wizard of Oz",
          email: "wizard@emeraldcityjuv.lz",
        },
        financeDirector: {
          name: "Glinda the Good Witch",
          email: "glinda@emeraldcityjuv.lz",
        },
        programManager: {
          name: "Dorothy Gale",
          email: "dorothy@emeraldcityjuv.lz",
        },
      },
    },
  },
  {
    id: 45,
    name: "Enchanted Forest Youth Detention",
    description:
      "Enchanted Forest Youth Detention is a mystical facility located deep within the Wicked Woods, designed to reform young offenders entangled in curses and magical misbehavior. Known for its comprehensive rehabilitation programs, the center specializes in curse control therapy and behavioral counseling for mischief makers. Under the direction of Maleficent, with guidance from the Evil Queen and Rumpelstiltskin, the facility provides both inpatient and outpatient services, focusing on crisis intervention and long-term reformation for youth sorcerers. Family counseling is also a key component, aiding in the reintegration of reformed youths back into their enchanted communities.",
    taxNumber: "TAX-998877665",
    shipTo: {
      address: "Wicked Woods, Enchanted Forest",
      city: "Mystic Grove",
      state: "Fantasy Realm",
      zip: "55433",
    },
    billTo: {
      address: "Old Oak Keep, Enchanted Thicket",
      city: "Mystic Grove",
      state: "Fantasy Realm",
      zip: "55434",
    },
    coverage: {
      district: "Enchanted Forest",
      region: "Fantasy Realm",
    },
    maxCapacity: 140,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Magical Behavior Counseling",
      "Outpatient Curse Control Therapy",
      "Behavioral Therapy for Mischief Makers",
      "Family Counseling for Reformed Youth",
    ],
    residentialOnlyServices: [
      "24/7 Detention for Cursed Offenders",
      "Inpatient Rehabilitation for Youth Sorcerers",
      "Long-Term Misconduct Reformation",
      "Crisis Intervention for Magical Misuse",
    ],
    serviceTypes: [
      "Cursed Offender Detention",
      "Curse Control Therapy",
      "Behavioral Therapy",
      "Crisis Intervention",
      "Family Counseling",
    ],
    fundingSources: [
      {
        grantName: "Wicked Woods Youth Rehabilitation Fund",
        yearlyAmount: 500000,
        servicesCovered: ["Cursed Offender Detention", "Curse Control Therapy"],
      },
      {
        grantName: "Mystic Grove Behavioral Support Initiative",
        yearlyAmount: 450000,
        servicesCovered: ["Behavioral Therapy", "Crisis Intervention"],
      },
      {
        grantName: "Enchanted Forest Family Support Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Family Counseling"],
      },
    ],
    totalYearlyFunding: 1250000,
    contactInfo: {
      webAddress: "www.enchantedyouthdetention.fr",
      phoneNumber: "1-888-ENCHANT-JUV",
      contacts: {
        executiveDirector: {
          name: "Maleficent",
          email: "maleficent@enchantedyouthdetention.fr",
        },
        financeDirector: {
          name: "Evil Queen",
          email: "queen@enchantedyouthdetention.fr",
        },
        programManager: {
          name: "Rumpelstiltskin",
          email: "rumpel@enchantedyouthdetention.fr",
        },
      },
    },
  },
  {
    id: 46,
    name: "Cloud Kingdom Juvenile Detention Center",
    description:
      "Cloud Kingdom Juvenile Detention Center is a state-of-the-art facility located in the ethereal Nimbus City, specializing in the rehabilitation of young offenders involved in aerial misconduct and weather manipulation. With a focus on wind control therapy and crisis intervention, this center provides a safe haven for troubled sky youth. Under the leadership of Zephyr, along with support from Cirrus and Nimbus, the center aims to guide young flyers back to responsible behavior through outpatient classes and family counseling. Inpatient programs are also available for long-term rehabilitation, ensuring that each individual receives the support needed to soar high once more.",
    taxNumber: "TAX-334466778",
    shipTo: {
      address: "Skyward Citadel, Cloud Kingdom",
      city: "Nimbus City",
      state: "Sky Realm",
      zip: "66789",
    },
    billTo: {
      address: "Zephyr Hall, Windy Heights",
      city: "Nimbus City",
      state: "Sky Realm",
      zip: "66790",
    },
    coverage: {
      district: "Nimbus District",
      region: "Sky Realm",
    },
    maxCapacity: 120,
    hasResidentialServices: true,
    appointmentOnlyServices: [
      "Scheduled Wind Control Therapy for Young Flyers",
      "Outpatient Cloud Shaping and Conduct Classes",
      "Family Counseling for Airborne Offenders",
      "Mental Health Support for Troubled Sky Youth",
    ],
    residentialOnlyServices: [
      "24/7 Detention for Aerial Misconduct",
      "Inpatient Therapy for Wind Offense Reformation",
      "Long-Term Rehabilitation for Weather Manipulation",
      "Crisis Intervention for Skyborn Mischief",
    ],
    serviceTypes: [
      "Aerial Misconduct Detention",
      "Wind Control Therapy",
      "Rehabilitation for Weather Manipulation",
      "Crisis Intervention",
      "Family Counseling",
    ],
    fundingSources: [
      {
        grantName: "Cloud Kingdom Sky Youth Fund",
        yearlyAmount: 600000,
        servicesCovered: [
          "Wind Control Therapy",
          "Aerial Misconduct Detention",
        ],
      },
      {
        grantName: "Nimbus City Weather Reformation Fund",
        yearlyAmount: 500000,
        servicesCovered: [
          "Rehabilitation for Weather Manipulation",
          "Crisis Intervention",
        ],
      },
      {
        grantName: "Sky Realm Family Support Grant",
        yearlyAmount: 350000,
        servicesCovered: ["Family Counseling"],
      },
    ],
    totalYearlyFunding: 1450000,
    contactInfo: {
      webAddress: "www.cloudkingdomdetention.sk",
      phoneNumber: "1-800-CLOUD-JUV",
      contacts: {
        executiveDirector: {
          name: "Zephyr",
          email: "zephyr@cloudkingdomdetention.sk",
        },
        financeDirector: {
          name: "Cirrus",
          email: "cirrus@cloudkingdomdetention.sk",
        },
        programManager: {
          name: "Nimbus",
          email: "nimbus@cloudkingdomdetention.sk",
        },
      },
    },
  },
  {
    id: 49,
    name: "Zanarkand Mind and Spirit Clinic",
    description:
      "Zanarkand Mind and Spirit Clinic is a serene facility nestled in the enchanting Dreamworld, dedicated to the mental and emotional well-being of its clients. Led by Yuna, with the guidance of Auron and Tidus, the clinic offers specialized outpatient dream therapy and counseling for etheric beings. The center focuses on mindfulness and emotional rebalance, providing a safe space for dreamwalkers to heal and reconnect with their inner selves. Through family healing sessions and personalized mental health support, Zanarkand aims to restore harmony and promote positive emotional health in a tranquil, dreamlike environment.",
    taxNumber: "TAX-667788334",
    shipTo: {
      address: "Crystal Spire, Zanarkand",
      city: "Zanarkand",
      state: "Dreamworld",
      zip: "99887",
    },
    billTo: {
      address: "Fayth Hall, Inner Sanctum",
      city: "Zanarkand",
      state: "Dreamworld",
      zip: "99888",
    },
    coverage: {
      district: "Ethereal Zone",
      region: "Dreamworld",
    },
    maxCapacity: 120,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Outpatient Dream Therapy for Mind and Spirit",
      "Mental Health Counseling for Etheric Beings",
      "Mindfulness and Emotional Rebalance Sessions",
      "Scheduled Family Healing for Dreamwalkers",
    ],
    residentialOnlyServices: [],
    serviceTypes: [
      "Dream Therapy",
      "Mental Health Counseling",
      "Emotional Rebalance",
      "Family Healing",
    ],
    fundingSources: [
      {
        grantName: "Zanarkand Dream Recovery Fund",
        yearlyAmount: 450000,
        servicesCovered: ["Dream Therapy", "Mental Health Counseling"],
      },
      {
        grantName: "Etheric Wellness Initiative",
        yearlyAmount: 350000,
        servicesCovered: ["Emotional Rebalance", "Family Healing"],
      },
      {
        grantName: "Dreamworld Mental Support Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Mind and Spirit Therapy"],
      },
    ],
    totalYearlyFunding: 1100000,
    contactInfo: {
      webAddress: "www.zanarkandclinic.dw",
      phoneNumber: "1-800-DREAM-CARE",
      contacts: {
        executiveDirector: {
          name: "Yuna",
          email: "yuna@zanarkandclinic.dw",
        },
        financeDirector: {
          name: "Auron",
          email: "auron@zanarkandclinic.dw",
        },
        programManager: {
          name: "Tidus",
          email: "tidus@zanarkandclinic.dw",
        },
      },
    },
  },
  {
    id: 50,
    name: "Tatooine Oasis Therapy Center",
    description:
      "Tatooine Oasis Therapy Center is a tranquil refuge in the harsh landscape of the Dune Sea, designed to promote mental well-being and emotional recovery for the desert's inhabitants. Under the leadership of Obi-Wan Kenobi, with support from Beru Lars and Luke Skywalker, the center provides specialized outpatient desert meditation therapy and mental health services tailored for desert dwellers. The facility offers emotional recovery counseling for drifters and family therapy aimed at fostering unity within desert colonies. With a commitment to healing in a serene oasis setting, Tatooine Oasis stands as a beacon of hope and support in the Outer Rim.",
    taxNumber: "TAX-998877554",
    shipTo: {
      address: "Dune Sea Outpost, Tatooine",
      city: "Mos Eisley",
      state: "Outer Rim Territories",
      zip: "11223",
    },
    billTo: {
      address: "Moisture Farm, Lars Homestead",
      city: "Mos Eisley",
      state: "Outer Rim Territories",
      zip: "11224",
    },
    coverage: {
      district: "Dune Sea Region",
      region: "Outer Rim Territories",
    },
    maxCapacity: 100,
    hasResidentialServices: false,
    appointmentOnlyServices: [
      "Outpatient Desert Meditation Therapy",
      "Mental Health Services for Desert Dwellers",
      "Emotional Recovery Counseling for Drifters",
      "Family Therapy for Desert Colonies",
    ],
    residentialOnlyServices: [],
    serviceTypes: [
      "Desert Meditation Therapy",
      "Mental Health Services",
      "Emotional Recovery Counseling",
      "Family Therapy",
    ],
    fundingSources: [
      {
        grantName: "Tatooine Mental Wellness Fund",
        yearlyAmount: 400000,
        servicesCovered: [
          "Desert Meditation Therapy",
          "Emotional Recovery Counseling",
        ],
      },
      {
        grantName: "Outer Rim Health Support Grant",
        yearlyAmount: 300000,
        servicesCovered: ["Mental Health Services", "Family Therapy"],
      },
      {
        grantName: "Dune Sea Emotional Aid Fund",
        yearlyAmount: 200000,
        servicesCovered: ["Emotional Recovery"],
      },
    ],
    totalYearlyFunding: 900000,
    contactInfo: {
      webAddress: "www.tatooinetherapy.or",
      phoneNumber: "1-888-OASIS-CARE",
      contacts: {
        executiveDirector: {
          name: "Obi-Wan Kenobi",
          email: "obiwan@tatooinetherapy.or",
        },
        financeDirector: {
          name: "Beru Lars",
          email: "beru@tatooinetherapy.or",
        },
        programManager: {
          name: "Luke Skywalker",
          email: "luke@tatooinetherapy.or",
        },
      },
    },
  },
];

export default providers;
