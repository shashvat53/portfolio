import React from "react";
import Title from "./Title";
import { ExpertiesCard } from "./ExpertiesCard";
import { IconType } from "react-icons";
import { FaComputer } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

interface ExpertiesData {
  icon: IconType;
  title: string;
  heading: string;
  b1: string;
  b2: string;
  b3: string;
  b4: string;
  p: string;
}

const Experties: React.FC = () => {
  const expertiesData: ExpertiesData[] = [
    {
      icon: FaComputer,
      title: "Software Development",
      heading: "Mastering Software Development with Versatile Expertise",
      b1: "Full-stack development proficiency",
      b2: "Frontend and backend integration",
      b3: "API and database handling",
      b4: "Modern UI/UX design skills",
      p: "With expertise across development layers, I craft efficient, scalable, and user-focused applications.",
    },
    {
      icon: FaReact,
      title: "Frontend Development",
      heading: "Excelling in Frontend Development with Precision Skills",
      b1: "Responsive UI design",
      b2: "Component-based architecture",
      b3: "State management expertise",
      b4: "Interactive user experiences",
      p: "I create intuitive, visually appealing interfaces that prioritize usability and seamless functionality.",
    },
    {
      icon: FaNodeJs,
      title: "Backend Development",
      heading: "Building Robust Backend Systems with Advanced Skills",
      b1: "API development and integration",
      b2: "Database design and management",
      b3: "Server-side logic implementation",
      b4: "Scalable system architecture",
      p: "I design and optimize backend systems to ensure high performance, security, and reliability.",
    },
  ];
  return (
    <div className="  flex justify-center items-center w-full">
      <div>
        <Title title="My Experties" />

        <div className=" flex md:flex-row flex-col justify-between   md:gap-12 gap-6">
          {expertiesData.map((data) => (
            <ExpertiesCard data={data} />
          ))}
          {/* <ExpertiesCard />
          <ExpertiesCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Experties;
