import { ActionIcon, ActionIconProps, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';


export default function ModeSelector(props: Omit<ActionIconProps, "variant" | "onClick" | "title" | "size">) {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant='gradient'
            gradient={{from: theme.colors[theme.primaryColor][3], to: theme.colors[theme.primaryColor][7]}}
            onClick={() => toggleColorScheme()}
            title={dark ? "Toggle light mode" : "Toggle dark mode"}
            size="lg"
            {...props}
        >
        {dark ? <IconSun/> : <IconMoon/>}
      </ActionIcon>
    )
}
