# Dawaya Frontend

Dawaya Frontend is a Next.js-based web application for [brief description of what Dawaya does].

## Getting Started

### Prerequisites

-   Node.js (v14 or later)
-   npm or yarn

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/dawaya-frontend.git
    cd dawaya-frontend
    ```

2. Install dependencies:

    ```
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

-   `dev`: Run the development server
-   `build`: Build the production application
-   `start`: Start the production server
-   `lint`: Run ESLint
-   `lint:fix`: Run ESLint and fix issues
-   `lint:check`: Check for linting issues without fixing
-   `format`: Format code using Prettier
-   `type-check`: Run TypeScript compiler check

## Contributing

We welcome contributions to Dawaya Frontend! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes using conventional commit messages
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Please format your commit messages accordingly:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Pre-commit Hooks

This project uses Husky to run pre-commit hooks. Before committing, Husky will run:

-   ESLint
-   Prettier
-   TypeScript type checking

To ensure Husky is properly set up, run:

```
npm run prepare
# or
yarn prepare
```

This will install Husky and set up the git hooks.

## Built With

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)

## Documentation

For detailed information about the frontend architecture, components, and development guidelines, please refer to our [Frontend Documentation](https://github.com/DAWAYA-ORG/Dawaya-Technical-Docs/tree/main/Docs/Frontend_Documentation).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/DAWAYA-ORG/Dawaya-Technical-Docs/blob/main/LICENSE) file in our Technical Docs repository for details.
