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









# DevStack

## Project Overview

DevStack is a React + Vite web application for exploring technology options and building a personalized development stack. The app presents a collection of technologies in cards, allows users to add items to a selected stack, and displays the current stack in a sidebar with notifications for each action.

## Features

- Responsive landing page with a hero section and navigation bar
- Technology cards with name, description, category, difficulty, rating, and badge
- Add-to-stack interaction for each technology
- Duplicate prevention when choosing technologies
- Sidebar showing the current stack selection
- Remove individual items or clear the entire stack
- Toast notifications for add, duplicate, remove, and clear actions
- Data loading from a local JSON file

## Technologies Used

- React 19
- Vite 8
- Tailwind CSS 4
- DaisyUI
- react-toastify
- Oxlint


## Installation

1. Open a terminal in the project root.
2. Install dependencies:

```bash
npm install
```

## How to Run Locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite in the terminal, typically a URL such as:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```
Starts the Vite dev server for local development.

```bash
npm run build
```
Builds the production bundle for the app.

```bash
npm run lint
```
Runs the project linter using Oxlint.

```bash
npm run preview
```
Serves the production build locally for preview.

## Usage

1. Open the app in the browser.
2. Browse the technology cards under the main technologies section.
3. Click "Add to Stack" on the technologies you want to include.
4. Review your selected technologies in the right-side "Your Stack" panel.
5. Remove individual items with the close button or clear the entire selection with "Remove All".
6. Toast notifications appear when technologies are added, skipped as duplicates, or removed.

## Important Implementation Details

- The app state is managed in `src/App.jsx`.
- `src/components/stack/useFetchData.js` fetches the technology data from `/data.json` on mount.
- The `data` result includes technology metadata such as `id`, `name`, `category`, `description`, `icon`, `rating`, `difficulty`, and `badge`.
- Selected technologies are stored in the `selectedStack` state and are checked to prevent duplicates.
- `react-toastify` is used to surface success, warning, and information notifications.
- Styling is configured through Tailwind CSS, and DaisyUI is enabled in `src/index.css`.
- Vite is configured with the React and Tailwind Vite plugins in `vite.config.js`.

## Future Improvements

Potential future improvements for this project include:

- Adding search and filtering by category or difficulty
- Persisting the selected stack across page reloads
- Adding comparison or stack summaries
- Expanding the data model with additional project metadata
- Improving the mobile navigation and responsive interactions

## Answering Question

1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension that allows you to write HTML directly inside JavaScript files.

It makes writing UI components intuitive and simple by keeping rendering logic and visual markup together in one readable place.

2. What is the difference between props and state?

Props: Read only data passed down from a parent component to a child component. The child cannot modify its own props.

State: Mutable data managed internally within a component that changes over time (usually via user interactions). When state updates, the component re-renders.

3. What does the useState hook do, and where did you use it in this project?

It creates and manages local state variables in functional components.

In App.jsx to manage the array of selected technologies (selectedStack), and inside useFetchData.js to store fetched tech items, loading statuses, and errors.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

It performs side effects in components, such as data fetching, subscriptions, or manually manipulating the DOM after rendering.

To fetch the technology dataset from /public/data.json asynchronously when the application first mounts in the browser.

5. Why does every item in a .map() list need a unique key prop?

React uses the key prop to identify which items have changed, been added, or been removed. Unique keys help React update and re-render only the modified list items efficiently rather than rebuilding the whole list.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition — if true, show one thing; if false, show something else.

Example in DevStack: In `YourStack.jsx`, when `isSelected` array is empty, it shows an empty message. When technologies are added, it shows the selected cards with a "Remove All" button:

```tsx
{isSelected.length === 0 ? (
    <p className="text-gray-400">No technologies selected yet.</p>
) : (
    isSelected.map((card) => (
        <div key={card.id}>
            {card.name}
        </div>
    ))
)}
```
7. How do you pass data from a parent to a child, and how does a child send something back?**

Data is passed from parent to child via **props**. To send data back, the parent passes a **callback function** as a prop, and the child calls that function when needed.

Example in DevStack: `App.jsx` passes `selectedStack` and `handleAddToStack` as props to the card components. When a user clicks "Add to Stack", the child calls `handleAddToStack(tech)` which updates the state in the parent.