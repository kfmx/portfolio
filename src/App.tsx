import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HomePage from "./pages/Home";
import CarouselPage from "./pages/Carousel";
import ModeSelector from './components/ModeSelector';
import ThemeSelector from './components/ThemeSelector';

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <HashRouter>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened, desktop: !opened },
        }}
        padding="md">
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
          {/* <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/carousel">Carousel</Link>
          </div> */}
        </AppShell.Header>
        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
        <AppShell.Main>
          <Routes>
            <Route path='/' element={<CarouselPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/carousel' element={<CarouselPage/>}/>
          </Routes>
        </AppShell.Main>
      </AppShell>
    </HashRouter>
  )
}

export default App
