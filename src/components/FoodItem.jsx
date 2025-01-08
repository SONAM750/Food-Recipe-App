import styles from './fooditem.module.css'
export default function FoodItem({foodData,setfoodid}){
    return(
    <div >
        
         {
         foodData.map((food)=>
          <div className={styles.itemdiv} key={food.id}>
             <div className={styles.itemContainer}>
             <p className={styles.itemName}>{food.title}</p>
             </div>
             
             {<img  className={styles.image} src={food.image} alt=""/>}
           <div className={styles.btncontainer}> 
             <button onClick={()=>{console.log(food.id);
             setfoodid(food.id);

             }}
             className={styles.btn}>View Recipe</button></div>
        </div>)
             }
           
    </div>);
}