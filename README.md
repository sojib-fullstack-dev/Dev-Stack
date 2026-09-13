# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.









1.JSX stands for JavaScript XML. It is a syntax extension for JavaScript created by the developers.React uses JSX to unify user interface markup with component logic.

2.props are passed down from a parent component to configure a child, while state is managed internally by a component to handle its own changing data.

3.The useState hook is a built-in React function that allows you to add and manage local state within a functional component.

4.The useEffect hook is a built-in React function that lets you synchronize your component with external systems by handling side effects.

5..map() list requires a unique key prop so that the underlying reconciliation engine can track the permanent identity of each DOM element across renders.

6.Conditional rendering is a programming method that shows different user interface (UI) parts based on specific rules or states.

7.Data flows from a parent to a child component using props or inputs and a child sends data back to a parent by invoking a callback function passed down from that parent.