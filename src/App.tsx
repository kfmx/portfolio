import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import styles from './Styles.module.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { AppShell, Burger, Button, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HomePage from "./pages/Home";
import CarouselPage from "./pages/Carousel";
import ModeSelector from './components/ModeSelector';
import ThemeSelector from './components/ThemeSelector';
import { IconBrowser, IconCode, IconDeviceGamepad2, IconHome, IconUserCircle } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const navLinks: {pathname: string, label: string, icon: JSX.Element}[] = [
  {pathname: "home", label: "Home", icon: <IconHome/>},
  {pathname: "gamedesign", label: "Game Design", icon: <IconDeviceGamepad2/>},
  {pathname: "projectleading", label: "Project Leading", icon: <IconUserCircle/>},
  {pathname: "webprogramming", label: "Web Programming", icon: <IconBrowser/>},
  {pathname: "gameprogramming", label: "Game Programming", icon: <IconCode/>}
]

function App() {
  const [opened, { toggle }] = useDisclosure();
  const { pathname } = useLocation();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
      className={styles.appShell}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            size="md"
            mr="auto"
            color="var(--mantine-primary-color-7)"
          />
          <ThemeSelector/>
          <ModeSelector/>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" className={styles.navbar}>
        {navLinks.map(
          (navLink, i) => (
            <Link key={i} to={navLink.pathname} style={pathname.includes(navLink.pathname) ? {borderColor: "var(--mantine-primary-color-9)"} : {}}>
              <Button fullWidth variant="subtle" leftSection={navLink.icon} justify="start">
                <Text c="var(--mantine-color-text)">
                  {navLink.label}
                </Text>
              </Button>
            </Link>
          )
        )}
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
          <Route path='/home' element={<CarouselPage/>}/>
          <Route path='/*' element={<HomePage/>}/>
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
