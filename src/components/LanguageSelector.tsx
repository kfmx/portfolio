import { ActionIcon, Box, Menu, MenuProps, useMantineTheme, } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect} from "react";
import { i18n } from "@lingui/core";
import { getLocalStorageLocale } from "../helpers";
import GBFlagSvg from "./../gb.svg"
import SEFlagSvg from "./../se.svg"

function getFlagSvgFromLocale(locale: string) {
    switch(locale) {
        default:
        case "en":
            return GBFlagSvg
        case "se":
            return SEFlagSvg
    }
}

export default function LanguageSelector(props: Omit<MenuProps, "closeOnItemClick">) {
    const theme = useMantineTheme();
    const [locale, setLocale] = useLocalStorage({
        key: "locale",
        defaultValue: getLocalStorageLocale("en")
      });

    useEffect(() => {
        i18n.activate(locale);
    }, [locale]);

    return (
        <Menu closeOnItemClick {...props}>
            <Menu.Target>
                <ActionIcon
                    variant='gradient'
                    gradient={{from: theme.colors[theme.primaryColor][3], to: theme.colors[theme.primaryColor][7]}}
                    title="Change language"
                    size="lg"
                >
                    <Box style={{backgroundImage: `url("${getFlagSvgFromLocale(locale)}")`, borderRadius: "var(--ai-radius, var(--mantine-radius-default))"}} w="2rem" h="2rem"/>
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item onClick={() => setLocale("en")} title="English">
                    <Box style={{backgroundImage: `url("${GBFlagSvg}")`, borderRadius: "var(--ai-radius, var(--mantine-radius-default))"}} w="2rem" h="2rem"/>
                </Menu.Item>
                <Menu.Item onClick={() => setLocale("se")} title="Swedish">
                    <Box style={{backgroundImage: `url("${SEFlagSvg}")`, borderRadius: "var(--ai-radius, var(--mantine-radius-default))"}} w="2rem" h="2rem"/>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}