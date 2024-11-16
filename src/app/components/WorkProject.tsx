import React from "react";
import { ThreeDCard } from "./ThreeDCard";
import Title from "./Title";

interface WorkProjectData {
  title: string;
  heading: string;
  image: string;
  webView: string;
  technologyImage: string[];
  codeVeiw: boolean;
  repoUrl?: string; // Optional property for GitHub URL
}

export const WorkProject: React.FC = () => {
  const workProjectData: WorkProjectData[] = [
    {
      title: " Exchange betting platform",
      heading:
        "Designed an exchange betting platform that redefines the game – with a smooth, responsive interface for the ultimate betting experience.",
      image: "/betting-img.png",
      technologyImage: [
        "/technologyImages/mongodbImg.svg",
        "/technologyImages/reactjsImg.svg",
        "/technologyImages/javascriptImg.svg",
        "/technologyImages/nodejsImg.svg",
        "/technologyImages/tailwindcssImg.svg",
        "/technologyImages/material-uiImg.svg",
      ],
      webView: "https://ibookexch.com/",
      codeVeiw: false,
    },
    {
      title: "Construction Website",
      heading:
        "Built a feature-rich construction website focused on user-friendly design and seamless project interactions, perfect for showcasing services and connecting clients effortlessly.",
      image: `/construction1.png`,
      technologyImage: [
        "/technologyImages/reactjsImg.svg",
        "/technologyImages/javascriptImg.svg",

        "/technologyImages/tailwindcssImg.svg",
        "/technologyImages/material-uiImg.svg",
      ],
      webView: "https://constructionserverfrontend.kidogame.com/",
      codeVeiw: false,
    },
    {
      title: "Portfolio",
      heading:
        "Crafted a portfolio that's more than just pixels—it's a bold dive into my journey, skills, and ambition. Every scroll, every click? Purely intentional. Dive in and discover the passion.",
      image: "/portfolio.png",
      webView: "#",
      technologyImage: [
        "/technologyImages/nextImg.webp",
        "/technologyImages/aceternityImg.webp",
        "/technologyImages/typescriptImg.svg",

        "/technologyImages/tailwindcssImg.svg",
      ],
      codeVeiw: true,
      repoUrl: "https://github.com/shashvat53?tab=repositories",
    },
    {
      title: "Netflix-GPT",
      heading:
        "Created a Netflix-inspired app powered by GPT API—bringing personalized recommendations and content discovery to the next level!",
      image: "/one.png",
      webView: "https://github.com/shashvat53/netflix-GPT",
      technologyImage: [
        "/technologyImages/reactjsImg.svg",
        "/technologyImages/firebaseImg.svg",
        "/technologyImages/apiImg.svg",
        "/technologyImages/reduxImg.svg",

        "/technologyImages/tailwindcssImg.svg",
      ],
      codeVeiw: true,
      repoUrl: "https://github.com/shashvat53/netflix-GPT",
    },
    {
      title: "ECommerce Web",
      heading:
        "Launched an e-commerce website that combines sleek design with seamless shopping! It’s built for users to explore, engage, and enjoy a top-tier shopping experience.",
      image: "/ecommerce.png",
      webView: "https://shashvat53.github.io/ECommerce-web/",
      technologyImage: [
        "/technologyImages/htmlImg.svg",

        "/technologyImages/cssImg.svg",
        "/technologyImages/javascriptImg.svg",
      ],
      codeVeiw: true,
      repoUrl: "https://github.com/shashvat53/ECommerce-web?tab=readme-ov-file",
    },

    {
      title: "Food Ordering Web",
      heading:
        "Developed a food ordering website that delivers convenience and flavor right to users' screens! It's all about seamless browsing, ordering, and enjoying every bite.",
      image: "/foodordring.png",
      webView: "https://shashvat53.github.io/food-ordering-website/",
      technologyImage: [
        "/technologyImages/htmlImg.svg",

        "/technologyImages/cssImg.svg",
        "/technologyImages/javascriptImg.svg",
      ],
      codeVeiw: true,
      repoUrl:
        "https://github.com/shashvat53/food-ordering-website?tab=readme-ov-file",
    },
  ];
  return (
    <div className="    flex justify-center items-center w-full">
      <div>
        <div className=" ">
          <Title title="Recent Work Project" />
        </div>
        <div className="w-full grid grid-cols-1  md:grid-cols-2 justify-between md:gap-12 gap-6 ">
          {workProjectData.map((data, index) => (
            <ThreeDCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
