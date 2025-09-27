# Tech & Travel Blog

This project is a simple front-end application built with JavaScript (likely using React, based on the file structure) that demonstrates a blog or post listing interface with several interactive features.

## Features

### 1. Post Listing
- Displays a list of posts loaded from a data source (`src/data/posts.js`).
- Each post is shown using a `PostCard` component.

### 2. Search Functionality
- Users can search for posts using the `SearchBar` component.
- The search filters posts in real-time based on the entered query.

### 3. Category Filtering
- Posts can be filtered by category using the `CategoryFilter` component.
- Only posts matching the selected category are displayed.

### 4. Pagination
- The `Pagination` component allows users to navigate through multiple pages of posts.
- Only a subset of posts is shown per page for better usability.

### 5. Header
- The `Header` component provides a consistent title or navigation bar at the top of the application.

## Project Structure

```
index.html                # Main HTML file
src/
  App.js                  # Main application component
  main.js                 # Entry point for the app
  components/
    CategoryFilter.js     # Category filter UI
    Header.js             # App header
    Pagination.js         # Pagination controls
    PostCard.js           # Individual post display
    SearchBar.js          # Search input UI
  data/
    posts.js              # Static post data
```

## How to Run

1. Make sure you have Node.js and npm installed.
2. Install dependencies (if using React or a bundler):
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open `index.html` or the local server URL in your browser to view the app.

