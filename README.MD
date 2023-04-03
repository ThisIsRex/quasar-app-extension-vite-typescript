# Quasar App Extension Vite Typescript

An App Extension template for Quasar Framework with Vite, TypeScript, eslint and Prettier. Since Quasar CLI does not provide the ability to configure an App Extension project, additional functionality must be added manually. This template should make this task easier.

## Installation

1. Clone the repository
2. `yarn` or `npm i`
3. `cd ui`
4. `yarn build` or `npm run build`

Note: the `app-extension` package does not need any dependencies and does not support TypeScript. This is just an install script. If it's missing something, like prompts, just create an App Extension via the Quasar CLI and copy the contents of the generated `app-extension` folder.

## Testing components

1. `cd ui/debug`
2. `quasar dev`

Note: the `node_modules` directory must be in the `ui` directory only.
