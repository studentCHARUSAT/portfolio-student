# Student Portfolio - React

A student portfolio website developed using React and Vite as part of Web Sem 5 practical work.

---

## Practical 1 - React and Component Architecture

The portfolio was created using reusable React functional components.

### Components

- Header
- About
- Skills
- Projects
- NavBar
- Footer

### Concepts Used

- React
- Vite
- JSX
- Functional Components
- Props
- Component Reusability
- Array Rendering using map()

---

## Practical 2 - State Management and Routing

The portfolio was extended with React Router and state management.

### Routes

- `/` - Home page
- `/projects` - Projects page
- `/contact` - Contact page
- `*` - 404 Not Found page

### React Concepts Used

- BrowserRouter
- Routes and Route
- Link
- useState
- Controlled Form Input
- State-based UI updates
- Dark/Light Mode

### Contact Form

The Contact page contains a controlled input using `useState`.

The entered message is displayed in real time and a live character count is shown.

A help section can also be shown or hidden using state.

### Dark/Light Mode

A dark/light mode toggle was implemented using `useState`.

---

## Practical 3 - API Integration and Data Rendering

The Projects page was integrated with the GitHub REST API to fetch and display repository data dynamically.

### API Used

GitHub REST API:

`https://api.github.com/users/studentCHARUSAT/repos`

### Features

- Fetches repositories using the Fetch API
- Uses `useEffect()` to trigger the API request
- Uses `useState()` for repository data, loading, and error states
- Displays a loading spinner while data is being fetched
- Displays an error message when the API request fails
- Includes a Retry button
- Displays repository name and GitHub URL
- Displays repository star count
- Includes a search input to filter repositories by name

### API Components

- `Projects.jsx` - Handles API fetching and state
- `Spinner.jsx` - Displays the loading state
- `ErrorMessage.jsx` - Displays errors and retry option
- `RepoList.jsx` - Displays repository data

---

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- Fetch API
- HTML
- CSS
- Git
- GitHub

---

## How to Run

### 1. Clone the repository

```bash
git clone <your-github-repository-url>