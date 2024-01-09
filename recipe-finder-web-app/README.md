# Recipe Finder App

This is a simple recipe finder app built with React using Vite. It allows users to input a meal name and find recipes using the API Ninjas and Unsplash APIs.

## Features

- Users can input a meal name to find recipes.
- Uses the API Ninjas for recipe data and Unsplash API for images.
- The app currently has some limitations, such as accepting search terms without spaces.
- The images would match the main meal item but not the particular recipe
- Requires API keys for API Ninjas and Unsplash.

## Usage

1. **Get API Keys**:
   - Obtain an API key for [API Ninjas](https://apilist.fun/api/the-recipe-db) and replace the placeholder in `app.jsx`.
   - Obtain an API key for [Unsplash](https://unsplash.com/developers) and replace the placeholder in `RecipeList.jsx`.

2. **Installation**:
   - Clone this repository.
   - Install dependencies using `npm install`.

3. **Running the App**:
   - Start the development server with `npm run dev`.
   - Access the app via `http://localhost:3000` in your browser.

## Limitations

- Search terms should not contain spaces due to current limitations.
- Further improvements can be made for better input handling and user experience.

## Contributors

- Eva Anokam
