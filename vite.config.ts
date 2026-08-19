import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const githubPagesSpaFallback = {
  name: "github-pages-spa-fallback",
  closeBundle() {
    copyFileSync("dist/index.html", "dist/404.html");
  },
};

export default defineConfig({
  base: "/Liberte-se/",
  plugins: [react(), tailwindcss(), tsconfigPaths(), githubPagesSpaFallback],
});
