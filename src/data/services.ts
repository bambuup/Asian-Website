export interface PricingInfo {
  setupFee?: string;
  monthlyRetainer?: string;
  perDeliverable?: string;
  note?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  pricing?: {
    type?: string;
    fee?: string;
    deliverables?: string;
    note?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  direction: 'vn-to-au' | 'au-to-vn';
  items: ServiceItem[];
  pricing?: PricingInfo;
}

export const services: Service[] = [
  {
    id: 'vn-market-research',
    title: 'Market Research & Entry Strategy',
    direction: 'vn-to-au',
    description: 'Comprehensive market research and entry strategy consulting for Vietnamese businesses.',
    items: [
      {
        id: 'market-research',
        title: 'Market Research',
        description: 'Market research (desk research + 1-2 expert interview for Industry trends, customer insights, competitive analysis, etc.)'
      },
      {
        id: 'entry-strategy',
        title: 'Entry Strategy Consulting',
        description: 'Entry strategy consulting (Entry models, Go-to-market plan)'
      }
    ]
  },
  {
    id: 'vn-business-matching',
    title: 'Ad-hoc Business Matching',
    direction: 'vn-to-au',
    description: 'On-demand business connection services.',
    items: [
      {
        id: 'business-connections',
        title: 'Business Connections',
        description: 'On-demand connection with specific businesses or organizations based on client request'
      }
    ]
  },
  {
    id: 'vn-marketing-materials',
    title: 'Sales & MKT Materials Development',
    direction: 'vn-to-au',
    description: 'Development of marketing and sales materials.',
    items: [
      {
        id: 'materials-dev',
        title: 'Marketing Materials',
        description: 'MKT/ Sales kit/ Pitch deck development'
      }
    ]
  },
  {
    id: 'vn-company-setup',
    title: 'Company Set-up Support',
    direction: 'vn-to-au',
    description: 'Complete assistance with company establishment.',
    items: [
      {
        id: 'legal-setup',
        title: 'Company Setup',
        description: 'Support with legal entity registration, tax setup, local director, office space'
      }
    ]
  },
  {
    id: 'vn-business-development',
    title: 'Business & Partnership Development Service/ Commercial Representative Service',
    direction: 'vn-to-au',
    description: 'Comprehensive business development and partnership services.',
    items: [
      {
        id: 'partner-identification',
        title: 'Partner Identification',
        description: 'Identifying potential partners'
      },
      {
        id: 'screening',
        title: 'Screening & Due Diligence',
        description: 'Screening & due diligence'
      },
      {
        id: 'meeting-arrangement',
        title: 'Meeting Arrangement',
        description: 'Meeting arrangement (Online/onsite in Australia & New Zealand)'
      },
      {
        id: 'negotiation',
        title: 'Negotiation Support',
        description: 'Preliminary negotiation support'
      }
    ]
  },
  {
    id: 'vn-business-advisory',
    title: 'Business Advisory',
    direction: 'vn-to-au',
    description: 'End-to-end business advisory services.',
    items: [
      {
        id: 'advisory',
        title: 'Business Advisory',
        description: 'End-to-End business advisory (Business structure, operation, finance, R&D, marketing, etc.)'
      }
    ]
  },
  {
    id: 'vn-investor-sourcing',
    title: 'Investor Sourcing & Fundraising Support',
    direction: 'vn-to-au',
    description: 'Comprehensive investment and fundraising services.',
    items: [
      {
        id: 'sell-side',
        title: 'Sell-side services',
        description: `- Identify potential investors
- Coordinate fundraising
- Pitch preparation support
- Term sheet support`
      },
      {
        id: 'buy-side',
        title: 'Buy-side services',
        description: 'Investment sourcing, initial screening, support with negotiation'
      }
    ]
  },
  {
    id: 'vn-trade-mission',
    title: 'Trade Mission',
    direction: 'vn-to-au',
    description: 'Trade mission organization and support.',
    items: [
      {
        id: 'trade-mission',
        title: 'Trade Mission',
        description: 'Organizing Trade Missions (e.g., Trade Mission to Australia)'
      }
    ]
  },
  // Australia to Vietnam Services
  {
    id: 'au-market-research',
    title: 'Market Research & Entry Strategy',
    direction: 'au-to-vn',
    description: 'Market research and entry strategy consulting for Australian businesses.',
    items: [
      {
        id: 'au-market-research',
        title: 'Market Research',
        description: 'Market research (industry trends, customer insights, competitive analysis, etc.)'
      },
      {
        id: 'au-entry-strategy',
        title: 'Entry Strategy Consulting',
        description: 'Entry strategy consulting (entry models, Go-to-market plan)'
      }
    ]
  },
  {
    id: 'au-trade-representation',
    title: 'Trade Representation & Sales Development',
    direction: 'au-to-vn',
    description: 'Professional representation and sales development services.',
    items: [
      {
        id: 'trade-fairs',
        title: 'Trade Fair Representation',
        description: 'Representation at Trade Fairs & Networking Events'
      },
      {
        id: 'profile-localization',
        title: 'Profile Localization',
        description: 'Profile localization in Vietnam'
      }
    ]
  },
  {
    id: 'au-company-setup',
    title: 'Company Set-up Support',
    direction: 'au-to-vn',
    description: 'Complete assistance with company establishment.',
    items: [
      {
        id: 'au-legal-setup',
        title: 'Company Setup',
        description: 'Support with legal entity registration, tax setup, local director, office space'
      }
    ]
  },
  {
    id: 'au-business-matching',
    title: 'Business Matching & Partnership Development',
    direction: 'au-to-vn',
    description: 'Comprehensive business matching and partnership services.',
    items: [
      {
        id: 'au-partner-identification',
        title: 'Partner Identification',
        description: 'Identifying potential partners'
      },
      {
        id: 'au-screening',
        title: 'Screening & Due Diligence',
        description: 'Screening & due diligence'
      },
      {
        id: 'au-meeting-arrangement',
        title: 'Meeting Arrangement',
        description: 'Meeting arrangement (online/onsite)'
      },
      {
        id: 'au-negotiation',
        title: 'Negotiation Support',
        description: 'Preliminary negotiation support'
      }
    ]
  },
  {
    id: 'au-business-advisory',
    title: 'Business Advisory',
    direction: 'au-to-vn',
    description: 'End-to-end business advisory services.',
    items: [
      {
        id: 'au-advisory',
        title: 'Business Advisory',
        description: 'End-to-end business advisory (Business structure, operation, finance, R&D, marketing, legal, etc.)'
      }
    ]
  },
  {
    id: 'au-investor-sourcing',
    title: 'Investor Sourcing & Fundraising Support',
    direction: 'au-to-vn',
    description: 'Comprehensive investment and fundraising services.',
    items: [
      {
        id: 'au-sell-side',
        title: 'Sell-side services',
        description: `- Identify potential investors
- Coordinate fundraising
- Pitch preparation support
- Term sheet support`
      },
      {
        id: 'au-buy-side',
        title: 'Buy-side services',
        description: 'Investment sourcing, initial screening, support with negotiation'
      }
    ]
  },
  {
    id: 'au-trade-mission',
    title: 'Trade Mission',
    direction: 'au-to-vn',
    description: 'Trade mission organization and support.',
    items: [
      {
        id: 'au-trade-mission',
        title: 'Trade Mission',
        description: 'Organizing Trade Missions to Vietnam'
      }
    ]
  }
];