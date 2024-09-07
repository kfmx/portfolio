
import { createTheme, MantineProvider } from '@mantine/core';
import styles from './Element.module.css';
import { StrictMode, useEffect, useState } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { getLocalStorageColorScheme } from './helpers';

const defaultTheme = createTheme({
  colors: {
    fire: [
      "#ffeaea",
      "#fed4d4",
      "#f6a5a6",
      "#ef7575",
      "#e94c4c",
      "#e63132",
      "#e52324",
      "#cc1618",
      "#b60d14",
      "#a0000e"
    ],
    water: [
      "#e4f5ff",
      "#cfe5ff",
      "#a0c8fb",
      "#6daaf5",
      "#4490f1",
      "#287fef",
      "#1477ef",
      "#0066d5",
      "#005ac0",
      "#004eaa"
    ],
    grass: [
      "#eefceb",
      "#def5d9",
      "#bdebb2",
      "#98df87",
      "#78d562",
      "#65cf4c",
      "#5acc3f",
      "#4ab531",
      "#3fa129",
      "#308b1d"
    ],
    ghost: [
      "#f8f2f8",
      "#ebe2eb",
      "#d5c2d5",
      "#c1a0c1",
      "#b083af",
      "#a571a4",
      "#a166a0",
      "#8c568c",
      "#7d4c7c",
      "#6e406e"
    ],
    rock: [
      "#fbf4ee",
      "#f2e6dd",
      "#e7cab5",
      "#dcad89",
      "#d49364",
      "#cf834c",
      "#cd7b40",
      "#b56931",
      "#a25d2a",
      "#8d4f20"
    ],
    steel: [
      "#e4faff",
      "#d7edf4",
      "#b7d7e2",
      "#92c0d0",
      "#74adc1",
      "#5fa1b8",
      "#529bb4",
      "#40869f",
      "#32788f",
      "#1a697f"
    ]
  },
  components: {
    ActionIcon: {
      classNames: {
        root: styles.actionIcon
      }
    },
    Burger: {
      classNames: {
        root: styles.burger
      }
    },
    Menu: {
      classNames: {
        item: styles.menuItem
      }
    },
  },
  primaryColor: "fire"
});

export default function ThemeWrapper({children}: {children: React.ReactNode}) {
  const [colorScheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: getLocalStorageColorScheme(defaultTheme.primaryColor!)
  });
  const [theme, setTheme] = useState({...defaultTheme, primaryColor: colorScheme});

  useEffect(() => {
    setTheme(theme => ({...theme, primaryColor: colorScheme}));
  }, [colorScheme]);

  return (
      <MantineProvider theme={theme} defaultColorScheme="dark" withGlobalClasses withCssVariables>
        <StrictMode>
          {children}
        </StrictMode>
      </MantineProvider>
  )
}
