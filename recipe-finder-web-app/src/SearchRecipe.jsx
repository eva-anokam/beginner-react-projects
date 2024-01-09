import { useEffect } from "react"
import { useState } from "react"

export default function SearchForRecipe(props) {
    return (
        <form action=""
            onSubmit={(event) => props.handleSubmit(event)}>
        <label htmlFor="recipe-search"></label>
        <input
          type="text"
          id="recipe-search"
          onChange={props.handleChange}
                value={props.recipeInput}
                placeholder="Enter a meal name"
        />
        <button>Search</button>
      </form>
    );
}