/* eslint-disable @next/next/no-img-element */
import { RxChevronRight } from "react-icons/rx";
import LinkButton from "./LinkButton";
import Dialog from "./Dialog";

export const Layout390 = (props) => {
  const { tagline, heading, description, cards } = {
    ...Layout390Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-8">
      <div className="container">
        <div className="mx-auto mb-12 w-full text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <Dialog/>
    </section>
  );
};

const Card = (card) => {
  return (
    <div className="grid auto-cols-fr grid-cols-1 border border-border-primary first-of-type:row-span-2 first-of-type:flex first-of-type:flex-col sm:grid-cols-2 lg:col-span-2 lg:first-of-type:col-span-1">
      <div className="block p-6 first-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8">
        <div>
          <p className="mb-2 font-semibold">{card.tagline}</p>
          <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {card.heading}
          </h2>
          <p>{card.description}</p>
        </div>
        <div className="mt-5 md:mt-6">
          <LinkButton
            buttonText={'Learn more'}
          />
        </div>
      </div>
      <div className="flex size-full flex-col items-center justify-center self-start lg:h-auto">
        <img src={card.image.src} alt={card.image.alt} />
      </div>
    </div>
  );
};

export const Layout390Defaults = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cards: [
    {
      tagline: "Tagline",
      image: {
        src: "/images/medical_01.png",
        alt: "Relume placeholder image 1",
      },
      heading: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: "/images/medical_building.png",
        alt: "Relume placeholder image 2",
      },
      heading: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: "/images/medical_06.png",
        alt: "Relume placeholder image 3",
      },
      heading: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
