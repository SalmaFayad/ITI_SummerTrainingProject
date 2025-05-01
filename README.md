# ITI Summer Training Project 🎸

This is a simple music artists app built as part of my ITI Summer Training.

## 🔧 Tools & Technologies Used

- **React.js** – for building the UI.
- **React Router** – to handle page navigation.
- **Fetch API** – to retrieve data from the server.
- **JSON Server** – used as a mock backend.
- **CSS** – for styling and responsive layout.

## 📂 Project Structure

- `components/` – contains reusable React components like `Banner` and `ArtistsList`.
- `db.json` – mock database used by JSON Server.
- `home.js` – main component fetching and displaying artists.

## 🚀 How to Run

1. Clone the repo.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend:
   ```
   npm start
   ```
4. In a separate terminal, start the JSON server:
   ```
   npx json-server --watch db.json --port 3005
   ```
