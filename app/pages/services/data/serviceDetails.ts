export type ServiceTreatment = {
  name: string;
  description: string;
  price: string;
};

export type ServiceOverviewItem = {
  name: string;
  description: string;
  price: string;
};

export type ServiceOverview = {
  heading: string;
  description: string;
  image: string;
  imageClass: string;
  items: ServiceOverviewItem[];
};

export type ServiceHero = {
  titleLines: string[];
  description: string;
  image: string;
  imageClass: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  description: string;
  hero?: ServiceHero;
  image: string;
  imageClass: string;
  recommendationImage: string;
  recommendationImageClass: string;
  treatments: ServiceTreatment[];
  overview: ServiceOverview;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "routine-checkups-cleanings",
    title: "Routine Check-Ups & Cleanings",
    description:
      "Our routine check-ups include a thorough examination to catch any issues early, while gentle cleanings remove plaque and buildup.",
    hero: {
      titleLines: ["Routine Check-Ups", "& Cleanings"],
      description:
        "Our routine check-ups include a thorough examination to catch any issues early, while gentle cleanings remove plaque and buildup.",
      image: "/images/png/home-service-1.jpg",
      imageClass: "object-cover object-[50%_67%]",
    },
    image: "/images/png/home-service-1.jpg",
    imageClass: "object-cover object-center",
    recommendationImage: "/images/png/service-overview-routine.jpg",
    recommendationImageClass: "object-cover object-center",
    treatments: [
      {
        name: "Dental Examination",
        description: "Includes visual inspection and consultation by a dentist.",
        price: "$50",
      },
      {
        name: "Scaling & Polishing",
        description: "Standard cleaning for plaque/tartar removal.",
        price: "$75",
      },
      {
        name: "Dental X-Rays",
        description:
          "Provide a detailed view beneath the surface of your teeth and gums.",
        price: "$25",
      },
      {
        name: "Gum Health Check",
        description:
          "May be part of a comprehensive dental exam or periodontal visit.",
        price: "$50",
      },
    ],
    overview: {
      heading: "What is Routine Check-Ups & Cleanings",
      description:
        "They include a thorough exam to catch any issues early and professional cleaning to remove buildup that brushing alone cannot handle.",
      image: "/images/png/service-overview-routine.jpg",
      imageClass: "object-cover object-[50%_56%]",
      items: [
        {
          name: "Dental Examination",
          description:
            "A dental examination allows the dentist to assess the health of your teeth, gums, and mouth. It helps detect early signs of cavities, infections, or bite issues before they become serious.",
          price: "$50",
        },
        {
          name: "Scaling & Polishing",
          description:
            "Scaling removes plaque and hardened tartar from areas brushing cannot reach. Polishing smooths the tooth surface, helping prevent future buildup and leaving teeth clean.",
          price: "$75",
        },
        {
          name: "Dental X-Rays",
          description:
            "Dental X-rays show areas not visible during a regular exam, such as between teeth and beneath the gums. They help identify hidden issues like decay, bone loss, or infections early.",
          price: "$25",
        },
        {
          name: "Gum Health Check",
          description:
            "A gum health check evaluates the condition of your gums and supporting bone. It helps detect early signs of gum disease, allowing timely treatment to prevent further damage.",
          price: "$50",
        },
      ],
    },
  },
  {
    slug: "whitening-aesthetic-services",
    title: "Whitening & Aesthetic Services",
    description:
      "Whitening and aesthetic treatments are designed to enhance the appearance of your smile by reducing stains, discoloration, and minor imperfections.",
    hero: {
      titleLines: ["Whitening &", "Aesthetic Services"],
      description:
        "Whitening and aesthetic treatments are designed to enhance the appearance of your smile by reducing stains, discoloration, and minor imperfections.",
      image: "/images/png/home-service-2.jpg",
      imageClass: "object-cover object-[50%_45%]",
    },
    image: "/images/png/home-service-2.jpg",
    imageClass: "object-cover object-center",
    recommendationImage: "/images/png/home-service-2.jpg",
    recommendationImageClass: "object-cover object-[50%_42%]",
    treatments: [
      {
        name: "Teeth Whitening",
        description:
          "Professional treatment to remove deep stains and brighten your smile in a single visit.",
        price: "$300",
      },
      {
        name: "Porcelain Veneers",
        description:
          "Thin shells bonded to the front of teeth to enhance shape, color, and alignment for a perfect smile.",
        price: "$500",
      },
      {
        name: "Gum Contouring",
        description:
          "A cosmetic procedure to reshape the gum line, creating a more balanced and symmetrical look.",
        price: "$100",
      },
    ],
    overview: {
      heading: "What is Whitening & Aesthetic Services",
      description:
        "They enhance the appearance of your smile by reducing discoloration and improving overall tooth aesthetics safely.",
      image: "/images/png/service-overview-whitening.jpg",
      imageClass: "object-cover object-center",
      items: [
        {
          name: "Teeth Whitening",
          description:
            "This treatment safely brightens your teeth by reducing stains caused by food, drinks, and aging. It helps restore a fresher, more radiant smile with noticeable results in a short time.",
          price: "$300",
        },
        {
          name: "Porcelain Veneers",
          description:
            "Thin, custom-made shells are placed over the front of teeth to improve shape, color, and alignment. They create a natural-looking, long-lasting enhancement for a more confident smile",
          price: "$500",
        },
        {
          name: "Gum Contouring",
          description:
            "This procedure reshapes the gum line to improve balance between teeth and gums. It helps create a more even, symmetrical smile while enhancing overall aesthetics.",
          price: "$100",
        },
      ],
    },
  },
  {
    slug: "fillings-crowns-restorations",
    title: "Fillings, Crowns & Restorations",
    description:
      "Restorative treatments repair teeth damaged by decay or injury, restoring their strength, function, and natural appearance.",
    hero: {
      titleLines: ["Fillings, Crowns &", "Restorations"],
      description:
        "Restorative treatments repair teeth damaged by decay or injury, restoring their strength, function, and natural appearance.",
      image: "/images/png/home-service-3.jpg",
      imageClass: "object-cover object-[50%_56%]",
    },
    image: "/images/png/home-service-3.jpg",
    imageClass: "object-cover object-center",
    recommendationImage: "/images/png/home-service-3.jpg",
    recommendationImageClass: "object-cover object-[50%_45%]",
    treatments: [
      {
        name: "Dental Fillings - Composite filling",
        description: "Includes visual inspection and consultation by a dentist.",
        price: "$100",
      },
      {
        name: "Dental Fillings - Amalgam filling",
        description: "Standard cleaning for plaque/tartar removal.",
        price: "$75",
      },
      {
        name: "Dental Crowns",
        description:
          "Provide a detailed view beneath the surface of your teeth and gums.",
        price: "$800",
      },
      {
        name: "Tooth Bonding",
        description:
          "May be part of a comprehensive dental exam or periodontal visit.",
        price: "$50",
      },
    ],
    overview: {
      heading: "What is Fillings, Crowns & Restorations",
      description:
        "They repair damaged teeth and restore strength, function, and a natural-looking appearance.",
      image: "/images/png/service-overview-fillings.jpg",
      imageClass: "scale-[1.5] object-cover object-[44%_50%]",
      items: [
        {
          name: "Dental Fillings - Composite filling",
          description:
            "Composite fillings are tooth-colored and designed to blend seamlessly with your natural teeth. They repair cavities and minor damage while preserving both strength and appearance.",
          price: "$100",
        },
        {
          name: "Dental Fillings - Amalgam filling",
          description:
            "Amalgam fillings are made from durable metal materials and are ideal for restoring back teeth that handle heavy chewing pressure. They offer long-lasting protection against further decay.",
          price: "$75",
        },
        {
          name: "Dental Crowns",
          description:
            "Dental crowns cover and protect weakened or damaged teeth, restoring their shape, size, and function. They are custom-made to match your natural teeth for a strong and natural-looking result",
          price: "$500",
        },
        {
          name: "Tooth Bonding",
          description:
            "Tooth bonding uses a tooth-colored resin to repair chips, gaps, or minor discoloration. It is a quick and effective way to improve the appearance of your smile with minimal preparation.",
          price: "$50",
        },
      ],
    },
  },
  {
    slug: "braces-clear-aligners",
    title: "Braces & Clear Aligners",
    description:
      "These treatments help straighten teeth and improve bite alignment. They support better oral health and a more confident smile.",
    hero: {
      titleLines: ["Braces &", "Clear Aligners"],
      description:
        "These treatments help straighten teeth and improve bite alignment. They support better oral health and a more confident smile",
      image: "/images/png/home-service-4.jpg",
      imageClass: "scale-[1.2] object-cover object-[44%_50%]",
    },
    image: "/images/png/home-service-4.jpg",
    imageClass: "object-cover object-[78%_50%]",
    recommendationImage: "/images/png/home-service-4.jpg",
    recommendationImageClass: "object-cover object-[55%_43%]",
    treatments: [
      {
        name: "Metal Braces",
        description:
          "Traditional braces using metal brackets and wires to gradually straighten teeth.",
        price: "$2000",
      },
      {
        name: "Ceramic Braces",
        description:
          "Similar to metal braces but with tooth-colored or clear brackets.",
        price: "$3000",
      },
      {
        name: "Lingual Braces",
        description: "Placed on the inside (tongue side) of the teeth.",
        price: "$5000",
      },
      {
        name: "Clear Aligners (e.g., Invisalign)",
        description:
          "Removable, nearly invisible trays custom-made to shift teeth over time.",
        price: "$1,800",
      },
    ],
    overview: {
      heading: "What is Braces & Clear Aligners",
      description:
        "They gradually correct alignment and bite issues to improve both oral function and smile confidence",
      image: "/images/png/service-overview-braces.jpg",
      imageClass: "object-cover object-center",
      items: [
        {
          name: "Metal Braces",
          description:
            "Metal braces use durable brackets and wires to gradually move teeth into proper alignment. They are a reliable and effective option for correcting complex orthodontic issues.",
          price: "$2000",
        },
        {
          name: "Ceramic Braces",
          description:
            "Ceramic braces work like traditional braces but use clear or tooth-colored brackets for a more discreet look. They provide effective alignment while being less noticeable.",
          price: "$3000",
        },
        {
          name: "Lingual Braces",
          description:
            "Lingual braces are placed on the inner side of the teeth, making them nearly invisible from the front. They offer advanced orthodontic correction without affecting your outward appearance.",
          price: "$5000",
        },
        {
          name: "Clear Aligners (e.g., Invisalign)",
          description:
            "Clear aligners are removable, transparent trays that gradually straighten teeth over time. They offer a comfortable and discreet alternative to traditional braces while fitting easily into daily life.",
          price: "$1,800",
        },
      ],
    },
  },
];
