import { Carousel } from "@mantine/carousel"
import { Image, Text } from '@mantine/core';

const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
  ];

export default function CarouselPage() {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
          <Image src={url} />
        </Carousel.Slide>
      ));
    
      return (
        <>
            <Text size="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper luctus orci a pretium. Quisque quis posuere urna, at vulputate mauris. Aenean eu fermentum nisi, id molestie lacus. Fusce semper, massa consectetur consectetur faucibus, diam libero fringilla nibh, vulputate efficitur sapien metus a ipsum. Curabitur consequat, urna sed tristique euismod, erat magna rutrum tortor, eget rhoncus massa lacus sit amet purus. Pellentesque rutrum mattis eros vel facilisis. Donec consequat tortor dui, quis finibus metus dignissim vel. Nam nisi enim, facilisis nec eros ac, tempus porttitor turpis. Integer scelerisque elit ac massa cursus, quis semper lacus vehicula.
            </Text>
            <Carousel withIndicators withControls mt="auto" height={300} loop>{slides}</Carousel>
        </>
      )
}
