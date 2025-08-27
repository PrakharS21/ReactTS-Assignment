import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
// import browser from "@vitest/browser";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    setupFiles: [".storybook/vitest.setup.ts"], 
    projects: [
      {
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
          // browser(),
        ],
      },
    ],
  },
});
