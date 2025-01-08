import { useEffect, useState } from "react";
import styles from './fooddetail.module.css'
import ItemList from './ItemList'
export default function FoodDetail({FoodId}){
    const[food,setFood]=useState({});
    const[IsLoading,setIsloading]=useState(true);
    const URL=`https://api.spoonacular.com/recipes/${FoodId}/information`;
    const API_KEY="dc92d6f9f9ab4e7a9b085dbeac596fe7";
    useEffect(()=>{
        async function fetchRecipe(){
            const res= await fetch(`${URL}?apiKey=${API_KEY}`);
            const data= await res.json();
            console.log(data);
            setFood(data);
            setIsloading(false);
        }
        fetchRecipe();
    },[FoodId])
    return(<div>
        <div className={styles.recipecart}>
            <h1 className={styles.recipeHeading}>{food.title}</h1>
            <img className={styles.recipeImg}src={food.image}></img> 
      <div className={styles.recipeDetails}>
     <span>⌚<strong>{food.readyInMinutes}Minutes</strong></span>
     <span>👪<strong>serves{food.servings}</strong></span>
     <span><strong>{food.vegetarian?"🥕vegetarian":"non-vegetarian🍗"}</strong></span>
     <span><strong>{food.vegan?"vegan":""}</strong></span>
     </div> 
     <div>
     $<span><strong>{food.pricePerServing/100}Per serving</strong></span>
     </div>
          <h2>Ingredients</h2>
          <ItemList food={food} IsLoading={IsLoading}/>
           <h2>instructions</h2>
        <div>
        <div className={styles.recipeInstruction}>
        <ol>
        {IsLoading?<p>Data is loading...</p>:
        (food.analyzedInstructions[0].steps.map((step)=><li>{step.step}</li>))}
        </ol>
        </div>
     </div>
     </div>
    </div>);
}