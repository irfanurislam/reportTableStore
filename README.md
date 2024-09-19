# Store Report System

## Setup Instructions

### Backend
1. Clone the project.
2. Run `npm install` in the root directory.
3. Set up a MySQL database using the provided schema.
4. Start the server with `node index.js` or `npm start`.

### Frontend
1. Navigate to the `reportTableClient` folder Clone `https://github.com/irfanurislam/reportTableClient.git`.
2. Run `npm install`.
3. Start the React app with `npm run dev`.

## API Integration
The system fetches data from the API, stores it in the database, and generates a report on demand.

### Endpoints:
- **POST /generate-report**: Fetch data from the API and store it in the database.
- **GET /report**: Retrieve the report.

## Design Decisions
1. **Node.js + MySQL** for the backend for simplicity and easy integration with the API and database.
2. **React** + **Tailwind CSS** for a clean and responsive frontend.
