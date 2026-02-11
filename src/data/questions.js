export const SampleQuestions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A database management system",
      "A JavaScript library for building user interfaces",
      "A backend framework",
      "A CSS framework",
    ],
    correctAnswer: 1,
    explanation:
      "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications.",
  },
  {
    id: 2,
    question: "What is JSX?",
    options: [
      "A new programming language",
      "JavaScript XML - a syntax extension for JavaScript",
      "A database query language",
      "A CSS preprocessor",
    ],
    correctAnswer: 1,
    explanation:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
  },
  {
    id: 3,
    question: "What is a React component?",
    options: [
      "A CSS style sheet",
      "A reusable piece of UI that can have its own logic and appearance",
      "A database table",
      "A backend API endpoint",
    ],
    correctAnswer: 1,
    explanation:
      "A React component is a reusable, self-contained piece of UI that encapsulates its own structure, behavior, and appearance.",
  },
  {
    id: 4,
    question: "What hook is used to manage state in functional components?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    correctAnswer: 2,
    explanation:
      "useState is the primary hook for managing local state in functional components.",
  },
  {
    id: 5,
    question: "What is the virtual DOM?",
    options: [
      "A real DOM element",
      "A lightweight copy of the actual DOM in memory",
      "A database object",
      "A CSS rendering engine",
    ],
    correctAnswer: 1,
    explanation:
      "The virtual DOM is a lightweight JavaScript representation of the actual DOM that React uses for efficient updates.",
  },
  {
    id: 6,
    question:
      "What is the correct way to pass data from parent to child component?",
    options: [
      "Using state",
      "Using props",
      "Using context only",
      "Using Redux only",
    ],
    correctAnswer: 1,
    explanation:
      "Props (properties) are the standard way to pass data from parent to child components in React.",
  },
  {
    id: 7,
    question: "What does useEffect hook do?",
    options: [
      "Manages component styling",
      "Performs side effects in functional components",
      "Creates new components",
      "Validates form inputs",
    ],
    correctAnswer: 1,
    explanation:
      "useEffect is used to perform side effects like data fetching, subscriptions, or DOM manipulation in functional components.",
  },
  {
    id: 8,
    question: "What is the purpose of the key prop in React lists?",
    options: [
      "To style list items",
      "To help React identify which items have changed",
      "To sort the list",
      "To filter the list",
    ],
    correctAnswer: 1,
    explanation:
      "The key prop helps React identify which items in a list have changed, been added, or been removed, enabling efficient updates.",
  },
  {
    id: 9,
    question: "What is the correct syntax for a functional component?",
    options: [
      "class MyComponent {}",
      "function MyComponent() { return <div></div>; }",
      "const MyComponent = []",
      "interface MyComponent {}",
    ],
    correctAnswer: 1,
    explanation:
      "Functional components are JavaScript functions that return JSX elements.",
  },
  {
    id: 10,
    question: "What is React Router used for?",
    options: [
      "State management",
      "Routing and navigation in React applications",
      "API calls",
      "Styling components",
    ],
    correctAnswer: 1,
    explanation:
      "React Router is a library that enables navigation and routing in single-page React applications.",
  },
  {
    id: 11,
    question: "What is the purpose of useCallback hook?",
    options: [
      "To fetch data",
      "To memoize callback functions",
      "To manage state",
      "To create contexts",
    ],
    correctAnswer: 1,
    explanation:
      "useCallback memoizes callback functions to prevent unnecessary re-renders of child components.",
  },
  {
    id: 12,
    question:
      "What is the correct way to update state based on previous state?",
    options: [
      "setState(newValue)",
      "setState(prevState => newValue)",
      "setState(prevState => prevState + 1)",
      "Both B and C are correct",
    ],
    correctAnswer: 3,
    explanation:
      "When state updates depend on the previous state, you should use the functional form: setState(prev => newValue).",
  },
  {
    id: 13,
    question: "What is a controlled component?",
    options: [
      "A component with no state",
      "A component where form data is handled by React state",
      "A component that can't be modified",
      "A component with only props",
    ],
    correctAnswer: 1,
    explanation:
      "A controlled component is one where form data is managed by React's state rather than the DOM.",
  },
  {
    id: 14,
    question: "What is the purpose of useMemo hook?",
    options: [
      "To create contexts",
      "To memoize expensive calculations",
      "To manage effects",
      "To create refs",
    ],
    correctAnswer: 1,
    explanation:
      "useMemo memoizes the result of a computation, preventing expensive recalculations on every render.",
  },
  {
    id: 15,
    question: "What is the purpose of the useRef hook?",
    options: [
      "To create references to DOM elements or mutable values",
      "To manage global state",
      "To fetch data",
      "To create contexts",
    ],
    correctAnswer: 0,
    explanation:
      "useRef creates a mutable reference that persists across renders, often used for accessing DOM elements or storing values.",
  },
  {
    id: 16,
    question:
      "What is the correct way to conditionally render content in React?",
    options: [
      "Using if statements",
      "Using ternary operator",
      "Using logical && operator",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "React supports multiple ways to conditionally render content including if statements, ternary operators, and logical && operators.",
  },
  {
    id: 17,
    question: "What is the purpose of React.memo?",
    options: [
      "To add animations",
      "To memoize functional components",
      "To create contexts",
      "To manage state",
    ],
    correctAnswer: 1,
    explanation:
      "React.memo is a higher-order component that memoizes a functional component, preventing unnecessary re-renders.",
  },
  {
    id: 18,
    question: "What is the purpose of the useContext hook?",
    options: [
      "To create new contexts",
      "To access context values without prop drilling",
      "To manage local state",
      "To fetch data",
    ],
    correctAnswer: 1,
    explanation:
      "useContext allows you to access context values without having to pass props through every level of the component tree.",
  },
  {
    id: 19,
    question: "What is the correct way to handle events in React?",
    options: [
      "Using addEventListener",
      "Using onClick={handler} syntax",
      "Using event attributes",
      "Using document.querySelector",
    ],
    correctAnswer: 1,
    explanation:
      "React uses camelCase event names and passes event handlers as functions, like onClick={handleClick}.",
  },
  {
    id: 20,
    question: "What is the purpose of React.Fragment?",
    options: [
      "To create new components",
      "To wrap multiple elements without adding extra DOM nodes",
      "To style components",
      "To fetch data",
    ],
    correctAnswer: 1,
    explanation:
      "React.Fragment allows you to group multiple elements without creating an additional DOM element.",
  },
];
