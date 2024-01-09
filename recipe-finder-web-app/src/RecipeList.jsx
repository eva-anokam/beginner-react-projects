import { createApi } from "unsplash-js";
import { useEffect } from "react";
import { useState } from "react";
import ImageComponent from "./ImageComponent";
export default function RecipeList(props) {
     const api = createApi({
       accessKey: "Your API Key",
     });
     const [data, setPhotosResponse] = useState(null);

     useEffect(() => {
       api.search
         .getPhotos({ query: `${props.searchValue}`, orientation: "landscape" })
         .then((result) => {
           setPhotosResponse(result);
         })
         .catch(() => {
           console.log("Something went wrong!");
         });
     }, [props.searchResult]);
    let recipeElements
    if (props.searchResult === null) {
        
        recipeElements =  <div>Loading ...</div>;
    } else {
        recipeElements = props.searchResult.map((eachResult, index) => {
            const ingredients = eachResult.ingredients.split("|")
            const instructions = eachResult.instructions.split(".")
            const recipeImage = data.response.results[index]
            return (
              <div key={index} className="flow-content recipe-element">
                {recipeImage && <ImageComponent photo={recipeImage}/>}
                    <div className="recipe-text">
                        <h2>{eachResult.title}</h2>
                        <div className="recipe-flex">
                    <ol>
                        <p className="title">Ingredients</p>
                  {ingredients.map((eachItem, index) => (
                    <li key={index}>{eachItem}</li>
                  ))}
                </ol>
                    <div>
                        <p className="title">Instructions</p>
                        {instructions.map(((eachSentence, index) => <p key={index}>{eachSentence}</p>))}
                    </div>

                        </div>
                <p className="serving">{eachResult.servings}</p>
                        
                </div>
              </div>
            );
        })
    }
    return (
        <section>
            {recipeElements}
        </section>
    )
}