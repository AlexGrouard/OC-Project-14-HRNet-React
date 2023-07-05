import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
<<<<<<< HEAD
    experimentalStudio: true,
=======
>>>>>>> c21798d (cypress test)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
<<<<<<< HEAD

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
=======
>>>>>>> c21798d (cypress test)
});
