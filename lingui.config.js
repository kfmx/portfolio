/** @type {import('@lingui/conf').LinguiConfig} */
const config = {
    locales: ["en", "se"],
    catalogs: [
      {
        path: "<rootDir>/src/locales/{locale}/messages",
        include: ["src"],
      },
    ],
    compileNamespace: "es",
  };
  
  export default config;