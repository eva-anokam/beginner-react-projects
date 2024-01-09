import { useState } from 'react'
// import viteLogo from '/vite.svg'
import SearchForRecipe from './SearchRecipe'
import RecipeList from './RecipeList';
import { useEffect } from 'react';

function App() {
  const [recipeInput, setRecipeInput] = useState("");
  const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState(null);
    function handleChange(event) {
      setRecipeInput(event.target.value);
    }
    const url = `Your API Key`;
    const options = {
      method: "GET",
      headers: { "X-Api-Key": "VboqswYW/dVs+RaVvcfH2Q==23qXUSjLA1mIsDNP" },
      contentType: "application/json",
    };
  function handleSubmit(event) {
    event.preventDefault()
    setSearchValue(recipeInput);
  }
  useEffect(() => {
      async function searchForRecipe() {
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setSearchResult(result);
          setRecipeInput("");
        } catch (error) {
          console.error(error);
        }
      }
    searchForRecipe()
    }, [searchValue])
  return (
    <div className='container flow-content'>
      <h1>Recipe Finder App</h1>
      <SearchForRecipe
       handleSubmit={handleSubmit}
        handleChange={handleChange}
        recipeInput={recipeInput}
      />
      {searchResult && <RecipeList searchResult={searchResult} searchValue={searchValue} />}
    </div>
  )
}

export default App
