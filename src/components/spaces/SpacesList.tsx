import React from "react";
import { SpaceItem } from "./SpaceItem";

const spacesData = [
  {
    title: "Hot",
    highlight: "Desks",
    description: "Flexible, drop in workspaces within a vibrant community environment. Ideal for freelancers, remote workers, and those who thrive on spontaneity.",
    imageSrc: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
    imageAlt: "Hot Desks Workspace",
    includes: [
      "Access to open areas",
      "High speed internet",
      "Pantry access",
      "Phone booths",
      "Community events & networking"
    ],
    bestFor: [
      "Freelancers",
      "Individual Professionals",
      "Remote Employees"
    ],
    reverse: false
  },
  {
    title: "Private",
    highlight: "Offices",
    description: "Your own secure, lockable office, personalized to reflect your company culture. Perfect for focused work and team privacy.",
    imageSrc: "/image (1).png",
    imageAlt: "Private Offices Workspace",
    includes: [
      "Fully furnished private space",
      "Premium seating",
      "Meeting Room Credits",
      "24/7 Access",
      "IT Support"
    ],
    bestFor: [
      "Small to medium size teams",
      "Startups",
      "Growing offices"
    ],
    reverse: true
  },
  {
    title: "Enterprise",
    highlight: "Floor",
    description: "A custom designed floor that functions as your own corporate hub. Complete with private meeting rooms, executive suites, and custom branding.",
    imageSrc: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80",
    imageAlt: "Enterprise Floor Workspace",
    includes: [
      "Private access & facilities",
      "Custom branding & design",
      "Dedicated IT & Security",
      "Multiple private suites & cabins"
    ],
    bestFor: [
      "Large teams (50+ employees)",
      "MNCs"
    ],
    pricing: "Custom quote based on requirements & team size.",
    reverse: false
  },
  {
    title: "Conference",
    highlight: "Rooms",
    description: "State of the art meeting spaces designed for high impact presentations, pitches, and collaborative team sessions.",
    imageSrc: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&q=80",
    imageAlt: "Conference Rooms Workspace",
    includes: [
      "Audio visual equipment",
      "High speed Wi Fi access",
      "Whiteboards and markers",
      "Refreshments & catering on request",
      "Flexible booking on demand"
    ],
    bestFor: [
      "Board meetings",
      "Client presentations",
      "Team brainstorming sessions"
    ],
    reverse: true
  }
];

export function SpacesList() {
  return (
    <section className="w-full bg-white py-10">
      <div className="flex flex-col space-y-10 md:space-y-0">
        {spacesData.map((space, index) => (
          <SpaceItem key={index} {...space} theme={index % 2 === 0 ? "white" : "light"} />
        ))}
      </div>
    </section>
  );
}
