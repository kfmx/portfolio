import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';
  
type ExtendedCustomColors =
| 'fire'
| 'water'
| 'grass'
| 'ghost'
| 'rock'
| 'steel'
| DefaultMantineColor;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}