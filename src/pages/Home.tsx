import styles from './../Styles.module.css';
import { Carousel } from "@mantine/carousel"
import { Button, Paper, Stack, Text, Title } from '@mantine/core';
import { Link } from "react-router-dom";
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { Trans } from '@lingui/macro';

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
        <Stack>
          <Text>
            <Trans>
              I am a web developer of 4 years with additional experience in game design, game programming, and project leading.
            </Trans>
          </Text>
          <Text>
            <Trans>
            My professional projects have ranged from creating software for companies in industries such as construction, hotel, and digital events, to smaller scale iOS & Android apps, to acting as a design consultant for board games, to managing customers, teams of programmers, and finances.
            </Trans>
          </Text>
          <Text>
            <Trans>
            In my free time I work on different game and programming projects - most recently my focus has been on bringing a large scale romhack to life.
            </Trans>
          </Text>
          <Text>
            <Trans>
              Currently I am looking for work.
            </Trans>
          </Text>
        </Stack>
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
