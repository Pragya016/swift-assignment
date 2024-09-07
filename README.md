Project: Comments Dashboard
This application is a comments dashboard built using React and TypeScript. It fetches data from a dummy API, displays it in a paginated data grid, and allows for searching, sorting, and filtering.

Features

Profile Screen: Displays user data from the dummy API.
Comments Dashboard:
Displays comments in a paginated data grid (implemented with custom logic).
Allows partial search by name, email, and phone.
Implements sorting by Post ID, Name, and Email with single-column sorting, cycling between ascending, descending, and no sort order.
Persists search, sort, page, and page size filters across page refreshes.
Technical Specifications

Framework: React
Language: TypeScript
UI Library: [Choose a library, e.g., Material UI, Ant Design, Chakra UI]
Cross-Browser Compatibility: Edge, Firefox, Chrome
Getting Started

Clone the Repository:

Bash
git clone <your-repository-url>
Use code with caution.

Install Dependencies:

Bash
cd comments-dashboard
npm install
Use code with caution.

Start the Development Server:

Bash
npm start
Use code with caution.

The application will be accessible at http://localhost:3000.

Structure

comments-dashboard/
├── src/
│   ├── components/
│   │   ├── CommentGrid.tsx
│   │   ├── Pagination.tsx
│   │   ├── Profile.tsx
│   │   ├── SearchBar.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── services/
│   │   └── api.ts
│   ├── styles/
│   │   └── global.css
│   └── ...
├── public/
│   └── index.html
├── package.json
├── tsconfig.json
└── ...
API Usage

The application interacts with a dummy API to fetch user and comment data. Please ensure that the API endpoints and data structure match the expected format.

Contributing

Contributions are welcome! Please follow the standard GitHub workflow for creating pull requests.

License