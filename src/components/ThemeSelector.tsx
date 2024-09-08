import { ActionIcon, Menu, MenuProps, useMantineTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconDiamond, IconDroplet, IconFlame, IconGhost2, IconLeaf, IconShieldHalfFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { getLocalStorageColorScheme } from "../helpers";

function getIconFromColorScheme(colorScheme: string): JSX.Element {

    switch (colorScheme) {
        case "fire":
            return <IconFlame/>;
        case "water":
            return <IconDroplet/>;
        case "grass":
            return <IconLeaf/>;
        case "ghost":
            return <IconGhost2/>;
        case "rock":
            return <IconDiamond/>;
        case "steel":
            return <IconShieldHalfFilled/>;
        default:
            return <></>;
    }
}

export default function ThemeSelector(props: Omit<MenuProps, "closeOnItemClick">) {
    const theme = useMantineTheme();
    const [colorScheme, setColorScheme] = useLocalStorage({
        key: "color-scheme",
        defaultValue: getLocalStorageColorScheme(theme.primaryColor)
      });
    const [icon, setIcon] = useState(getIconFromColorScheme(colorScheme))

    useEffect(() => {
        setIcon(getIconFromColorScheme(colorScheme));
    }, [colorScheme]);

    return (
        <Menu closeOnItemClick {...props}>
            <Menu.Target>
                <ActionIcon
                    variant='gradient'
                    gradient={{from: theme.colors[theme.primaryColor][3], to: theme.colors[theme.primaryColor][7]}}
                    title="Change color scheme"
                    size="lg"
                >
                    {icon}
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item onClick={() => setColorScheme("fire")} title="Fire">
                    <IconFlame color={theme.colors.fire[6]} style={{float: "right"}}/>
                </Menu.Item>
                <Menu.Item onClick={() => setColorScheme("water")} title="Water">
                    <IconDroplet color={theme.colors.water[6]} style={{float: "right"}}/>
                </Menu.Item>
                <Menu.Item onClick={() => setColorScheme("grass")} title="Grass">
                    <IconLeaf color={theme.colors.grass[6]} style={{float: "right"}}/>
                </Menu.Item>
                <Menu.Item onClick={() => setColorScheme("ghost")} title="Ghost">
                <IconGhost2 color={theme.colors.ghost[6]} style={{float: "right"}}/>
                </Menu.Item>
                <Menu.Item onClick={() => setColorScheme("rock")} title="Rock">
                    <IconDiamond color={theme.colors.rock[6]} style={{float: "right"}}/>
                </Menu.Item>
                <Menu.Item onClick={() => setColorScheme("steel")} title="Steel">
                    <IconShieldHalfFilled color={theme.colors.steel[6]} style={{float: "right"}}/>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}
