import CDON from "../assets/images/CDON.png";
import plugandtrade from "../assets/images/plugandtrade.png";

import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    tailwindcss,
    threads,
    dotnet,
    java,
    springboot,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: dotnet,
        name: ".Net",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Backend Intern",
        company_name: "CDON",
        icon: CDON,
        iconBg: "#accbe1",
        date: "Jan 2024 - May 2024",
        points: [
            "Worked as a Backend Developer during an internship, focusing on C# programming. Utilized Azure Functions, Azure Portal, and APIs to build and maintain scalable backend solutions. Gained hands-on expertise in cloud services and serverless computing. Enhanced ability to design and implement backend systems. Increased understanding of cloud architecture and API integration. Developed skills necessary for creating high-performance applications. Contributed to the creation of seamless, scalable backend services supporting complex web applications. Demonstrated technical skills and commitment to innovation in software development"
        ],
    },
    {
        title: "Backend Intern",
        company_name: "PlugAndTrade",
        icon: plugandtrade,
        iconBg: "#fbc3bc",
        date: "Apr 2024 - May 2024",
        points: [
            "Got the chance to have 3 weeks of my internship at PlugAndTrade were i developed advanced LINQ queries for data management and optimization in .NET environments. Got experienced in implementing and maintaining Elasticsearchsolutions, as well as containerizing applications with Docker for improved deployment and scalability.",
        ],
    },
    {
        title: "CustomerService Agent",
        company_name: "CDON",
        icon: CDON,
        iconBg: "#b7e4c7",
        date: "Jun 2018 - Dec 2024",
        points: [
            "Worked as a Customer Service Representative, developing strong communication and problem-solving skills. Interacted with customers through email, phone, and live chat. Enriched software development career by fostering a user-centric approach. Enhanced ability to create intuitive interfaces and anticipate user needs. Background in customer service ensures software developed is functional and responsive to user feedback"
        ],
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
        link: 'https://github.com/AnderssonP',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/pontus-andersson-273615204/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'LINQ AND ELASTICSEARCH',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Payment API',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Quiz game',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
];