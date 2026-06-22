// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
          noExternal: ['@astrojs/prism']
        }
    },
    experimental: {
      fonts: [
          {
            provider: fontProviders.local(),
            name: "MeloDrama",
            cssVariable: "--font-melo",
            options: {
              variants: [
                {
                  src: ["./src/assets/fonts/woff/Melodrama-Variable.woff2"],
                  weight: "900",
                  style: "normal",
                }
              ]
            }
          },
          {
            provider: fontProviders.local(),
            name: "Anton",
            cssVariable: "--font-anton",
            options: {
              variants: [
                {
                  src: ["./src/assets/fonts/woff/Anton-Regular.woff2"],
                  weight: "900",
                  style: "normal",
                }
              ]
            }
          },
          {
            provider: fontProviders.local(),
            name: "Bebas Neue",
            cssVariable: "--font-bebas",
            options: {
              variants: [
                {
                  src: ["./src/assets/fonts/woff/BebasNeue-Regular.woff2"],
                  weight: "900",
                  style: "normal",
                }
              ]
            }
          },
          {
            provider: fontProviders.local(),
            name: "Fanwood",
            cssVariable: "--font-fanwood",
            options: {
              variants: [
                {
                  src: ["./src/assets/fonts/woff/fanwood-webfont.woff"],
                  weight: "900",
                  style: "normal",
                }
              ]
            }
          },
          {
            provider: fontProviders.local(),
            name: "League Spartan",
            cssVariable: "--font-spartan",
            options: {
              variants: [
                {
                  src: ["./src/assets/fonts/woff/LeagueSpartan-VF.woff2"],
                  weight: "900",
                  style: "normal",
                }
              ]
            }
          },
          {
            provider: fontProviders.local(),
            name: "New Title",
            cssVariable: "--font-newtitle",
            options: {
              variants: [
                {
                  src: ["./src/assets/fonts/woff/NewTitle-Variable.woff2"],
                  weight: "900",
                  style: "normal",
                }
              ]
            }
          },
          {
            provider: fontProviders.local(),
            name: "Satoshi",
            cssVariable: "--font-satoshi",
            options: {
              variants: [
                {
                  src: ["./src/assets/fonts/woff/Satoshi-Variable.woff2"],
                  weight: "900",
                  style: "normal",
                }
              ]
            }
          },
      ],
    },
    server: {
      host: true,
      allowedHosts: ['astro.ravijey.com','astro2.ravijey.com']
    }
});