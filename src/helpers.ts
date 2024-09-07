
export function getLocalStorageColorScheme(fallbackColor: string): string {
    const colorScheme = localStorage.getItem("color-scheme");
    return colorScheme ? JSON.parse(colorScheme) : fallbackColor;
  }
