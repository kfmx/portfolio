import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import styles from './Styles.module.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { AppShell, Burger, Button, Group, NavLink } from '@mantine/core';
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
        <Button variant="subtle" leftSection={<IconHome/>}><Link to="/#home">Home</Link></Button>
        <Button variant="subtle" leftSection={<IconHome/>}><Link to="/#carousel">Carousel</Link></Button>
        {navLinks.map(
          (navLink, i) => <NavLink
            key={i}
            href={"/portfolio#/" + navLink.pathname}
            label={navLink.label}
            leftSection={navLink.icon}
            style={pathname.includes(navLink.pathname) ? {borderColor: "var(--mantine-primary-color-7)"} : {}}
          />
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
