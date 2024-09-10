import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeWrapper from './ThemeWrapper.tsx';
import { HashRouter } from 'react-router-dom';
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { messages as seMessages } from "./locales/se/messages";
import { getLocalStorageLocale } from './helpers.ts';

i18n.load({
  en: enMessages,
  se: seMessages,
});
i18n.activate(getLocalStorageLocale("en"));

createRoot(document.getElementById('root')!).render(
  <ThemeWrapper>
    <I18nProvider i18n={i18n}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nProvider>
  </ThemeWrapper>
)
