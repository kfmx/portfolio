
export function getLocalStorageColorScheme(fallbackColor: string): string {
    const colorScheme = localStorage.getItem("color-scheme");
    return colorScheme ? JSON.parse(colorScheme) : fallbackColor;
}

export function getLocalStorageLocale(fallbackLocale: string): string {
    const locale = localStorage.getItem("locale");
    return locale ? JSON.parse(locale) : fallbackLocale;
}
