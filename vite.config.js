import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "tailwindcss";
import sassDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sassDts(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        product_a: "http://localhost:3001/assets/remoteEntry.js",
        host: "http://localhost:3000/assets/remoteEntry.js",
        // product_a: "https://vite-remote.vercel.app/assets/remoteEntry.js",
        // host: "https://vite-host.vercel.app/assets/remoteEntry.js",
      },
      exposes: {
        "./AuthContext": "./src/contexts/AuthContext.tsx",
        "./AuthContextProvider": "./src/contexts/AuthContextProvider.tsx",
        "./useAuth": "./src/hooks/useAuth.tsx",
        "./UserAuth": "./src/contexts/UserAuth.tsx",
        "./Title": "./src/components/Title.tsx",
        "./useUserKeycloack": "./src/hooks/useUserKeycloack.tsx",
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
        },
        "react-dom": {
          eager: true,
          singleton: true,
        },
        "react-router-dom": {
          eager: true,
          singleton: true,
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
