import RecipeItem from "./RecipeItem";
export default function ItemList({food,IsLoading}){
    return(<div>
          {IsLoading?<p>Loading...</p>:(food.extendedIngredients.map((item)=>
          <RecipeItem item={item}/>))}
    </div>);
}