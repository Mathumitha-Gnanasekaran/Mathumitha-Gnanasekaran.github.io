import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  next,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  Asta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nest,
} from "../assets";

import { contact, github, linkedin } from "../assets/icons";

import python from "../assets/tech/python.png"
import booking from "../assets/booking.png"
import market from "../assets/marketplace.png"
import weather from "../assets/weather.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Business Analysis",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Next js",
    icon: next,
  },
  {
    name: "Nest js",
    icon: nest,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "ASTA",
    icon: Asta,
    iconBg: "#383E56",
    date: "July 2024 - December 2024",
    points: [
      "Successfully developed and integrated features, such as dynamic pricing toggles, advanced comparison tables, and animated UI elements, ensuring seamless user experiences.",
      "Designed and implemented APIs using Nest.js and Sequelize to efficiently handle database operations and enable feature-rich user interfaces in Next.js projects.",
      "Regularly collaborated with clients to understand project requirements and delivered tailored solutions that aligned with their visions.",
      "Enhanced application performance by optimizing database queries and streamlining frontend interactions, resulting in a 30% improvement in load times.",
      "Leveraged Figma designs to create pixel-perfect components, maintaining brand consistency and modern design principles.",
      "Successfully resolved complex bugs and addressed feedback swiftly, even under tight deadlines, ensuring timely project delivery.",
      "Worked closely with cross-functional teams, contributing to brainstorming sessions, knowledge sharing, and team meetings.",
      "Took full responsibility for key modules like feature comparison tables, pricing plans, and animated components, driving their development from ideation to deployment.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const socialLinks = [
  {
      name: 'Contact',
      iconUrl: contact,
      link: '/contact',
  },
  {
      name: 'GitHub',
      iconUrl: github,
      link: 'https://github.com/YourGitHubUsername',
  },
  {
      name: 'LinkedIn',
      iconUrl: linkedin,
      link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  }
];

const projects = [
  {
    name: "Hotel Booking",
    description:
      "Explore a versatile web app with User Authentication, Hotel Management, Image Uploads, Search & Filter, Online Payments, and Booking Management.",
    tags: [
      {
        name: "MERNStack",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/Mathumitha-Gnanasekaran/Booking_App.git",
  },
  {
    name: "Real Estate",
    description:
      "Elevate property management: create, edit, and delete listings, optimize user experience with image uploads, and implement advanced search features.",
    tags: [
      {
        name: "MERNStack",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: market,
    source_code_link: "https://github.com/Mathumitha-Gnanasekaran/Real_Estate.git",
  },
  {
    name: "Weather App",
    description:
      "Display weather info on website/app via OpenWeatherMap API. Includes temperature, condition, humidity, and wind speed. User can search city for data.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://event6.neocities.org/Weather/",
  },
];

export { services, technologies, experiences, testimonials, projects };
