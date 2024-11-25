import { defineConfig, loadEnv } from "vite";
import plugins from "./plugins";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: plugins(mode),
    server: {
      port: 3000, // To run the app on port 3000
      open: true, // If we want to open the app once its started
    },
    build: {
      rollupOptions: {
        external: [
          "redux-thunk",
          "use-sync-external-store",
          "use-sync-external-store/shim",
          "use-sync-external-store/shim/with-selector",
        ],
      },
    },
    // Defining variables at global level
    define: {
      "process.env": {
        ENV_VARIABLE: env.VARIABLE,
      },
      global: {},
      anotherVariable: {},
    },
  };
});
