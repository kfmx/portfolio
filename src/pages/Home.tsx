import styles from './../Styles.module.css';
import { Carousel } from "@mantine/carousel"
import { Button, Paper, Text, Title } from '@mantine/core';
import { Link } from "react-router-dom";
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

interface CardProps {
  image: string,
  title: string,
  titleDarkText: boolean,
  pathname: string
}

const carouselCards: CardProps[] = [
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    title: "Game Design",
    titleDarkText: true,
    pathname: "/gamedesign"
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    title: "Project Leading",
    titleDarkText: false,
    pathname: "/projectleading"
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
    title: "Web Programming",
    titleDarkText: true,
    pathname: "/webprogramming"
  },
  {
    image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
    title: "Game Programming",
    titleDarkText: false,
    pathname: "/gameprogramming"
  },
];

function Card({image, title, titleDarkText, pathname}: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={styles.card}
    >
      <Title className={styles.cardTitle} c={titleDarkText ? "var(--mantine-color-black)" : "var(--mantine-color-white)"} pos="absolute">
        {title}
      </Title>
      <Link className={styles.cardLink} to={pathname} tabIndex={-1}>
        <Button>
          Read more
        </Button>
      </Link>
    </Paper>
  );
}

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 7000 }));
  const slides = carouselCards.map(card => (
      <Carousel.Slide key={card.title}>
        <Card {...card} />
      </Carousel.Slide>
    ));
  
    return (
      <>
        <Text size="xl">
          Hello and welcome to my portfolio! I have worked professionally as both a programmer and project lead for 4+ years on a variety of projects, ranging from web development to game design. I have studied game design at a bachelors level, and am currently working on a solo game project. Please use the carousel below or the navigation menu in the header to read more about my work.
        </Text>
        <Text>
          Thank you very much for visiting! :)
        </Text>
        <Carousel
          slideGap={{ base: 'xl', sm: 2 }}
          loop
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          withIndicators
        >
          {slides}
        </Carousel>
      </>
    )
}
